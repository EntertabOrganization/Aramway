import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import CTASection from "@/components/CTASection";
import { site, coreValues, industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ARAMWAY GROUP is a global trade and consultancy firm headquartered in the Washington, DC Metropolitan Area since 2014, bridging the U.S. and GCC markets.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Aramway"
        title={
          <>
            ARAMWAY GROUP is a <span className="gold-text">Global Trade and Consultancy Firm</span>
          </>
        }
        description="We have offices and teams all around the world."
      />

      <section className="py-16">
        <div className="container-max grid gap-12 lg:grid-cols-2">
          <AnimateIn>
            <span className="section-eyebrow">Our Story</span>
            <h2 id="story" className="mt-5 scroll-mt-28 font-heading text-3xl font-extrabold leading-tight text-ink">
              Since {site.founded}, building bridges between two markets
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              ARAMWAY GROUP is a global trade and consultancy firm headquartered in the Washington,
              DC Metropolitan Area since {site.founded}. With deep-rooted expertise in both the
              U.S. and GCC markets, we support companies to navigate complex regulatory landscapes,
              bridge cultural differences, and unlock opportunities through trusted local networks
              and tailored market-entry strategies.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <span className="section-eyebrow">Our Mission</span>
            <h2 id="mission" className="mt-5 scroll-mt-28 font-heading text-3xl font-extrabold leading-tight text-ink">
              Helping ambitious companies reach their full potential
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              ARAMWAY GROUP supports individuals and entrepreneurs, from startups to enterprises, to
              reach their full potential. Our expert team ensures clients achieve growth, profit,
              and competitive advantage — providing tailored solutions, leveraging local expertise
              and resources to support successful market entry and expansion between the U.S. and
              GCC by building sustainable partnerships and offering strategic insights.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="container-max">
          <AnimateIn className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">What Drives Us</span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-ink">Our Core Values</h2>
          </AnimateIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => (
              <AnimateIn key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-white p-6">
                  <h3 className="font-heading text-lg font-bold text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <AnimateIn className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Where We Work</span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-ink">Industries of Focus</h2>
          </AnimateIn>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((industry, i) => (
              <AnimateIn key={industry} delay={i * 0.04}>
                <span className="inline-flex items-center rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-ink">
                  {industry}
                </span>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
