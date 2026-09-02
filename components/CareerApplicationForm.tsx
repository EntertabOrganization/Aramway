"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

function UploadField({
  name,
  label,
  fileName,
  onChange,
}: {
  name: string;
  label: string;
  fileName: string | null;
  onChange: (file: File | null) => void;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-ink">{label} *</label>
      <label className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-white px-4 py-6 text-sm text-muted transition-colors hover:border-primary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <path d="M17 8l-5-5-5 5" />
          <path d="M12 3v12" />
        </svg>
        {fileName ?? "Click here to upload"}
        <input
          type="file"
          name={name}
          required
          className="hidden"
          onChange={(e) => onChange(e.target.files?.[0] ?? null)}
        />
      </label>
    </div>
  );
}

export default function CareerApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [notRobot, setNotRobot] = useState(false);
  const [resumeName, setResumeName] = useState<string | null>(null);
  const [coverLetterName, setCoverLetterName] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!notRobot) {
      setError("Please confirm you're not a robot.");
      return;
    }
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/careers", { method: "POST", body: data });
      if (!res.ok) throw new Error("Failed to submit application");
      setStatus("success");
      form.reset();
      setResumeName(null);
      setCoverLetterName(null);
      setNotRobot(false);
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-cream-soft p-10 text-center">
        <p className="text-lg font-semibold text-ink">Thank you for applying!</p>
        <p className="mt-2 text-sm text-muted">
          We&apos;ve received your application and will be in touch if there&apos;s a fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-white p-7 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink">First Name *</label>
          <input
            required
            name="firstName"
            type="text"
            placeholder="E.g. John"
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink">Last Name *</label>
          <input
            required
            name="lastName"
            type="text"
            placeholder="E.g. Doe"
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink">Email *</label>
          <input
            required
            name="email"
            type="email"
            placeholder="E.g. john@doe.com"
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink">Phone Number *</label>
          <input
            required
            name="phone"
            type="tel"
            placeholder="E.g. +1 300 400 5000"
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-semibold text-ink">Address *</label>
        <input
          required
          name="address"
          type="text"
          placeholder="E.g. 42 Wallaby Way"
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
        />
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-semibold text-ink">City *</label>
        <input
          required
          name="city"
          type="text"
          placeholder="E.g. Sydney"
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
        />
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-semibold text-ink">Country *</label>
        <select
          required
          name="country"
          defaultValue=""
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
        >
          <option value="" disabled>
            Select country
          </option>
          <option>United States</option>
          <option>Saudi Arabia</option>
          <option>United Arab Emirates</option>
          <option>Qatar</option>
          <option>Kuwait</option>
          <option>Bahrain</option>
          <option>Oman</option>
          <option>Other</option>
        </select>
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-semibold text-ink">Expected Monthly Salary *</label>
        <input
          required
          name="expectedSalary"
          type="text"
          placeholder="e.g., $3000 - 6000"
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
        />
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-semibold text-ink">What Position are you applying for? *</label>
        <input
          required
          name="position"
          type="text"
          placeholder="Enter position here"
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
        />
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-semibold text-ink">Available Start Date *</label>
        <input
          required
          name="startDate"
          type="date"
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
        />
      </div>

      <div className="mt-5">
        <UploadField name="resume" label="Resume" fileName={resumeName} onChange={(f) => setResumeName(f?.name ?? null)} />
      </div>

      <div className="mt-5">
        <UploadField
          name="coverLetter"
          label="Cover Letter"
          fileName={coverLetterName}
          onChange={(f) => setCoverLetterName(f?.name ?? null)}
        />
      </div>

      <label className="mt-6 flex items-center gap-2 text-sm text-ink">
        <input
          type="checkbox"
          checked={notRobot}
          onChange={(e) => setNotRobot(e.target.checked)}
          className="h-4 w-4 rounded border-border"
        />
        I&apos;m not a robot
      </label>

      {(status === "error" || error) && <p className="mt-3 text-sm text-red-600">{error}</p>}

      <button type="submit" disabled={status === "submitting"} className="btn-primary mt-6 w-full disabled:opacity-60">
        {status === "submitting" ? "Uploading..." : "Upload Application"}
      </button>
    </form>
  );
}
