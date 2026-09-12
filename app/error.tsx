"use client";

import { useEffect } from "react";

export default function Error({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <span className="section-eyebrow">Error</span>
      <h1 className="mt-5 font-heading text-4xl font-extrabold text-ink sm:text-5xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-base text-muted">
        We couldn&apos;t load this page right now. Please try again in a moment.
      </p>
      <button type="button" onClick={() => retry()} className="btn-primary mt-8">
        Try Again
      </button>
    </section>
  );
}
