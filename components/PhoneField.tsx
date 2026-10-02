"use client";

import { useRef, useState } from "react";
import {
  PhoneInput,
  getActiveFormattingMask,
  guessCountryByPartialPhoneNumber,
  type ParsedCountry,
  type PhoneInputRefType,
} from "react-international-phone";
import "react-international-phone/style.css";

/** Keystrokes the library formats itself; anything else (autofill, paste, drop) is normalized here first. */
function isTypedInput(inputType: string | undefined) {
  return (
    inputType === "insertText" ||
    inputType === "insertCompositionText" ||
    !!inputType?.startsWith("delete") ||
    !!inputType?.startsWith("history")
  );
}

/**
 * Turns an autofilled/pasted number into E.164 for the selected country, so the flag and
 * format stay put. Handles "+1 555…", "001 555…", "1555…", "0501…" (trunk prefix) and plain
 * national digits. Only a number that explicitly carries a different country code switches
 * the country, since forcing it onto the selected one would corrupt it.
 */
function normalizeExternalValue(raw: string, country: ParsedCountry): { phone: string; iso2: string } {
  const trimmed = raw.trim();
  let digits = trimmed.replace(/\D/g, "");
  const international = trimmed.startsWith("+") || trimmed.startsWith("00");
  if (trimmed.startsWith("00")) digits = digits.slice(2);

  if (international) {
    if (!digits.startsWith(country.dialCode)) {
      const guessed = guessCountryByPartialPhoneNumber({ phone: `+${digits}` }).country;
      if (guessed) return { phone: `+${digits}`, iso2: guessed.iso2 };
    }
    return { phone: `+${digits}`, iso2: country.iso2 };
  }

  const maskLength = (phone: string) =>
    (getActiveFormattingMask({ phone, country }).match(/\./g) ?? []).length;
  if (digits.length > maskLength(`+${country.dialCode}${digits}`)) {
    const withoutDialCode = digits.slice(country.dialCode.length);
    if (digits.startsWith(country.dialCode) && withoutDialCode.length <= maskLength(`+${digits}`)) {
      digits = withoutDialCode;
    } else if (digits.startsWith("0")) {
      digits = digits.slice(1);
    }
  }
  return { phone: `+${country.dialCode}${digits}`, iso2: country.iso2 };
}

export default function PhoneField({
  name = "phone",
  label = "Phone Number",
  required = true,
  defaultValue = "",
}: {
  name?: string;
  label?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  const [value, setValue] = useState(defaultValue);
  const [display, setDisplay] = useState({ dialCode: "", inputValue: "" });
  const phoneRef = useRef<PhoneInputRefType>(null);

  function handleChangeCapture(e: React.FormEvent<HTMLDivElement>) {
    const target = e.target as HTMLInputElement;
    const inputType = (e.nativeEvent as InputEvent).inputType;
    const current = phoneRef.current?.state.country;
    if (target.tagName !== "INPUT" || !current || isTypedInput(inputType)) return;

    // Keep the library's own parser (which would re-guess the country) out of it.
    e.stopPropagation();
    const { phone, iso2 } = normalizeExternalValue(target.value, current);
    if (iso2 !== current.iso2) phoneRef.current?.setCountry(iso2);
    setValue(phone);
  }

  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {required && "*"}
      </label>
      <div onChangeCapture={handleChangeCapture}>
        <PhoneInput
          ref={phoneRef}
          defaultCountry="us"
          value={value}
          onChange={(phone, meta) => {
            setValue(phone);
            setDisplay({ dialCode: meta.country.dialCode, inputValue: meta.inputValue });
          }}
          // Only the flag is shown — the dial code is hidden, and typed digits are always read as a
          // national number — so the flag only changes when the user picks another country.
          disableDialCodeAndPrefix
          disableCountryGuess
          required={required}
          inputProps={{ autoComplete: "tel" }}
          className="!flex w-full"
          style={{ width: "100%" }}
          inputClassName="!h-auto !w-full !rounded-r-lg !border !border-l-0 !border-border !bg-white !px-4 !py-3 !text-sm !text-ink !outline-none focus:!border-primary"
          countrySelectorStyleProps={{
            buttonClassName:
              "!h-auto !rounded-l-lg !border !border-r-0 !border-border !bg-white !px-3 !py-3",
          }}
        />
      </div>
      {/* The visible input only holds the national number; submit it with its country code. */}
      <input
        type="hidden"
        name={name}
        value={display.inputValue ? `+${display.dialCode} ${display.inputValue}` : ""}
      />
    </div>
  );
}
