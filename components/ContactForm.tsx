"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import { programs } from "@/lib/programs";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({ full = false }: { full?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send message");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-cream-soft p-8 text-center">
        <p className="text-lg font-semibold text-ink">Thank you for reaching out!</p>
        <p className="mt-2 text-sm text-muted">
          We&apos;ve received your message and will respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink">Full Name *</label>
          <input
            required
            name="name"
            type="text"
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink">Email Address *</label>
          <input
            required
            name="email"
            type="email"
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      {full && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">Phone Number *</label>
              <input
                required
                name="phone"
                type="tel"
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="+1 (000) 000-0000"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">Service Type</label>
              <select
                name="service"
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink">Program Type</label>
            <select
              name="program"
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            >
              <option value="">Select a program</option>
              {programs.map((p) => (
                <option key={p.slug} value={p.title}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-ink">Message</label>
        <textarea
          name="message"
          rows={5}
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          placeholder="Tell us about your business and expansion goals..."
        />
      </div>

      <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />

      {status === "error" && <p className="text-sm text-red-600">{error}</p>}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-60">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
