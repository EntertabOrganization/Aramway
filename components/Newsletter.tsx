"use client";

import { useState } from "react";

export default function Newsletter({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const dark = variant === "dark";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } finally {
      setStatus("success");
      form.reset();
    }
  }

  return (
    <div
      className={`flex flex-col items-center gap-5 rounded-2xl px-6 py-10 text-center sm:px-12 ${
        dark ? "bg-white/5 border border-white/10" : "bg-cream-soft border border-cream-deep"
      }`}
    >
      <h3 className={`font-heading text-2xl font-bold ${dark ? "text-white" : "text-ink"}`}>
        Stay Updated with Aramway
      </h3>
      <p className={`max-w-md text-sm ${dark ? "text-white/60" : "text-muted"}`}>
        Get market insights, expansion strategies, and program updates delivered to your inbox.
      </p>
      {status === "success" ? (
        <p className="text-sm font-semibold text-primary">
          Thanks for subscribing — check your inbox soon!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <input
            required
            type="email"
            name="email"
            placeholder="you@company.com"
            className={`w-full flex-1 rounded-lg border px-4 py-3 text-sm outline-none ${
              dark
                ? "border-white/15 bg-white/10 text-white placeholder-white/40 focus:border-primary"
                : "border-border bg-white focus:border-primary"
            }`}
          />
          <button type="submit" disabled={status === "submitting"} className="btn-primary shrink-0">
            {status === "submitting" ? "..." : "Subscribe"}
          </button>
        </form>
      )}
      <label className={`flex max-w-md items-start gap-2 text-xs ${dark ? "text-white/40" : "text-muted"}`}>
        <input type="checkbox" required className="mt-0.5" />
        <span>
          I agree to receive marketing communications from Aramway and accept the{" "}
          <a href="/privacy" className="underline hover:text-primary">
            Privacy Policy
          </a>
          .
        </span>
      </label>
    </div>
  );
}
