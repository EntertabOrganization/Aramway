"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Marks that this visitor has actually subscribed — not just seen the popup.
// Only a successful subscribe should ever write this key; merely opening or
// dismissing the popup must not, or it stops reappearing for people who
// never converted.
const STORAGE_KEY = "aramway_newsletter_subscribed";

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    function handleOutsideClick(e: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

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
      localStorage.setItem(STORAGE_KEY, "1");
      form.reset();
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 px-4"
        >
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-md rounded-2xl p-8 shadow-2xl"
            style={{ backgroundColor: "#f4e9d6" }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white shadow-md transition-transform hover:scale-105"
              style={{ borderColor: "var(--color-primary)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink)" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {status === "success" ? (
              <div className="py-4 text-center">
                <h3 className="font-heading text-2xl font-bold text-ink">Thanks for subscribing!</h3>
                <p className="mt-2 text-sm text-muted">
                  We&apos;ve got your email — watch your inbox for updates from ARAMWAY.
                </p>
              </div>
            ) : (
              <>
                <h3 className="pr-8 text-center font-heading text-2xl font-bold text-ink">
                  Stay updated with ARAMWAY GROUP
                </h3>
                <p className="mt-3 text-center text-sm text-muted">
                  Get market insights, expansion strategies, and program updates delivered to your
                  inbox.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                  <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-60">
                    {status === "submitting" ? "..." : "Subscribe"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
