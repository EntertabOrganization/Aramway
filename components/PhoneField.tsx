"use client";

import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

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

  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {required && "*"}
      </label>
      <PhoneInput
        defaultCountry="us"
        value={value}
        onChange={setValue}
        name={name}
        required={required}
        className="!flex w-full"
        style={{ width: "100%" }}
        inputClassName="!h-auto !w-full !rounded-r-lg !border !border-l-0 !border-border !bg-white !px-4 !py-3 !text-sm !text-ink !outline-none focus:!border-primary"
        countrySelectorStyleProps={{
          buttonClassName:
            "!h-auto !rounded-l-lg !border !border-r-0 !border-border !bg-white !px-3 !py-3",
        }}
      />
    </div>
  );
}
