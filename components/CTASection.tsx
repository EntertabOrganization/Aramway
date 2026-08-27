import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { site } from "@/lib/site";

export default function CTASection({
  title = "Ready to Expand Your Business?",
  description = "Take the first step toward international growth. Contact us today to discuss how we can help you achieve your expansion goals.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-20">
      <div className="container-max">
        <AnimateIn>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center sm:px-16">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--color-primary)" }}
            />
            <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">{description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <a href={`mailto:${site.email}`} className="btn-outline border-white/20 bg-transparent text-white hover:border-primary">
                {site.email}
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
