import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <span className="section-eyebrow">404</span>
      <h1 className="mt-5 font-heading text-4xl font-extrabold capitalize text-ink sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </section>
  );
}
