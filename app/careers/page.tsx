import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import CTASection from "@/components/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Aramway Group team bridging the U.S. and MENA markets.",
};

const cultureValues = [
  { title: "Work That Matters", description: "Every engagement helps a real business cross a border and grow." },
  { title: "Global by Design", description: "Our teams span Virginia and Riyadh, with a genuinely cross-cultural way of working." },
  { title: "Room to Grow", description: "Small teams and real client exposure mean fast learning curves." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career at the crossroads of two markets"
        description="We're always looking for people who understand both the U.S. and MENA business worlds — and want to help others navigate between them."
        pattern
      />

      <section className="py-16">
        <div className="container-max grid gap-6 sm:grid-cols-3">
          {cultureValues.map((value, i) => (
            <AnimateIn key={value.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-white p-7">
                <h3 className="font-heading text-lg font-bold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="container-max text-center">
          <AnimateIn className="mx-auto max-w-xl">
            <span className="section-eyebrow">Open Roles</span>
            <h2 className="mt-5 font-heading text-4xl font-extrabold capitalize text-ink sm:text-5xl">
              No open positions right now
            </h2>
            <p className="mt-4 text-base text-muted">
              We don&apos;t have any open roles posted at the moment, but we&apos;re always happy to hear
              from talented people who want to work across the U.S. and MENA markets. Send us your
              resume and tell us what you&apos;re looking for.
            </p>
            <a href={`mailto:${site.email}?subject=Career%20Inquiry`} className="btn-primary mt-7 inline-flex">
              Send Your Resume
            </a>
          </AnimateIn>
        </div>
      </section>

      <CTASection
        title="Don't See the Right Role?"
        description="We're growing fast across both markets. Reach out and let's talk about where you'd fit."
      />
    </>
  );
}
