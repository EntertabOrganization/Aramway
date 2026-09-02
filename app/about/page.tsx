import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import ValueBadge from "@/components/ValueBadge";
import ContactSection from "@/components/ContactSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ARAMWAY GROUP is a global trade and consultancy firm headquartered in the Washington, DC Metropolitan Area since 2014, bridging the U.S. and GCC markets.",
};

const coreValues = ["Professionalism", "Innovation", "Diversity", "Collaboration"];

const industries = [
  { name: "Technology", icon: "/images/industries/technology.svg" },
  { name: "Education", icon: "/images/industries/education.svg" },
  { name: "Financial Services", icon: "/images/industries/financial-services.svg" },
  { name: "Hospitality Management", icon: "/images/industries/hospitality-management.svg" },
  { name: "Real Estate & Property Management", icon: "/images/industries/real-estate.svg" },
  { name: "Healthcare", icon: "/images/industries/healthcare.svg" },
  { name: "Logistic Services", icon: "/images/industries/logistic-services.svg" },
  { name: "Media", icon: "/images/industries/media.svg" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            ARAMWAY GROUP is a <span className="gold-text">Global Trade</span> and Consultancy Firm
          </>
        }
        description="We have offices and teams all around the world."
        pattern
      />

      <section id="mission" className="scroll-mt-28 py-16">
        <div className="container-max">
          <div className="grid gap-8 lg:grid-cols-2">
            <AnimateIn>
              <h2 className="font-heading text-4xl font-extrabold capitalize leading-tight text-ink sm:text-5xl">
                Our Mission: Support more talents and entrepreneurs
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-base leading-relaxed text-muted">
                ARAMWAY GROUP is a global trade and consultancy firm headquartered in the Washington,
                DC Metropolitan Area since {site.founded}. With deep-rooted expertise in both the
                U.S. and GCC markets, we support companies to navigate complex regulatory
                landscapes, bridge cultural differences, and unlock opportunities through trusted
                local networks and tailored market-entry strategies.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                ARAMWAY GROUP supports individuals and entrepreneurs from startups to enterprises to
                reach their full potential. Our expert team ensures clients achieve growth, profit,
                and competitive advantage.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section id="story" className="scroll-mt-28 py-16" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="container-max flex flex-col items-center gap-10 lg:flex-row lg:items-start">
          <AnimateIn className="lg:w-[40%]">
            <Image
              src="/images/about-mission.webp"
              alt="Aramway team"
              width={800}
              height={845}
              className="h-auto w-full rounded-3xl"
            />
          </AnimateIn>
          <AnimateIn delay={0.1} className="lg:w-[60%]">
            <span className="section-eyebrow">Our Story</span>
            <h2 className="mt-5 font-heading text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
              Real-world impact: How businesses leverage Aramway&apos;s expertise.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We are dedicated to providing our clients with tailored solutions, leveraging local
              expertise and resources to support successful market entry and expansion between the
              U.S. and GCC by building sustainable partnerships and offering strategic insights.
            </p>
            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4">
              {coreValues.map((value, i) => (
                <ValueBadge key={value} label={value} delay={i * 0.1} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <span className="section-eyebrow">Industry Expertise</span>
              <h2 className="mt-5 font-heading text-4xl font-extrabold capitalize text-ink sm:text-5xl">
                Industries of Interests
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                We bring specialized market entry expertise and cross-border business solutions to
                partners across diverse industries, enabling seamless expansion between US and MENA
                markets.
              </p>
            </AnimateIn>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry, i) => (
              <AnimateIn key={industry.name} delay={i * 0.05}>
                <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-cream-deep bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-primary hover:shadow-[0_0_5px_rgba(204,145,56,0.57)]">
                  <Image src={industry.icon} alt="" width={80} height={80} />
                  <p className="text-base font-medium text-ink">{industry.name}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
