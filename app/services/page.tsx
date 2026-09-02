import type { Metadata } from "next";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import Counter from "@/components/Counter";
import ServiceCard from "@/components/ServiceCard";
import HeroPhotoCard from "@/components/HeroPhotoCard";
import ContactSection from "@/components/ContactSection";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Aramway Group's full range of cross-border business services.",
};

const faqs = [
  {
    question: "How do I know which service is right for my business?",
    answer:
      "We recommend starting with a consultation where we assess your specific business goals, target markets, and current challenges. Based on this discussion, we'll recommend a tailored service package that best supports your expansion objectives.",
  },
  {
    question: "Do you offer customized service packages?",
    answer:
      "Absolutely. While we offer individual services, most clients benefit from customized packages that combine multiple services. We design these packages based on your unique business needs, timeline, and market entry strategy.",
  },
  {
    question: "What regions do you cover in the US and MENA markets?",
    answer:
      "In the US, we operate nationwide with particular strength in major business hubs. In MENA, we focus on GCC countries including UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman, with capabilities to support expansion across the broader MENA region.",
  },
  {
    question: "How long does a typical engagement last?",
    answer:
      "Engagement duration varies based on service scope and business objectives. Market entry projects typically span 6-12 months, while ongoing services like financial management or corporate communication can continue as long as needed. We offer both project based and retainer arrangements.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with companies of all sizes, from startups to established enterprises, across various industries. Our clients include GCC based companies entering the US market and American businesses expanding into MENA markets.",
  },
  {
    question: "Can you help with both market entry and ongoing operations?",
    answer:
      "Yes. Our services cover the full spectrum from initial market assessment and entry strategy through ongoing operational support including legal compliance, financial management, and business development.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage: "url('/images/hero-overlay-pattern.svg')",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
        <div className="container-max text-center">
          <AnimateIn>
            <span className="section-eyebrow">Our Services</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-extrabold capitalize leading-tight text-ink sm:text-5xl">
              Strategic Services to <span className="gold-text">Elevate</span>
              <br />
              Your Global Business
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted sm:text-xl">
              From market entry to full operational support, we provide end to end solutions that
              bridge US and MENA markets with expertise, precision, and local insight.
            </p>
          </AnimateIn>
        </div>

        <div className="container-max mt-14 grid gap-6 lg:grid-cols-10">
          {/* Photo card */}
          <AnimateIn delay={0.15} className="lg:col-span-4">
            <HeroPhotoCard
              image="/images/services-hero.webp"
              caption="We support businesses in navigating complex regulatory environments"
            />
          </AnimateIn>

          {/* Stat + Worldwide presence */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <AnimateIn delay={0.2}>
              <div className="rounded-3xl border border-cream-deep bg-white p-6">
                <div className="flex items-start justify-between">
                  <div className="gradient-gold flex h-11 w-11 items-center justify-center rounded-xl">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 6l-9.5 9.5-5-5L1 18" />
                      <path d="M17 6h6v6" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-cream-soft px-3 py-1 text-xs font-semibold text-primary">+142%</span>
                </div>
                <p className="mt-4 flex flex-wrap items-baseline gap-x-1.5">
                  <span className="font-heading text-2xl font-extrabold text-ink">
                    <Counter value={250} prefix="$" suffix="M+" duration={2.2} />
                  </span>
                  <span className="text-sm text-muted">Investment Deployed</span>
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Improve each phase of the business journey.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.25} className="flex-1">
              <div className="gradient-gold relative flex h-full flex-col overflow-hidden rounded-3xl p-6 text-white">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  Worldwide Presence
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold leading-tight">
                  Cross Continental Excellence
                </h3>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="font-heading text-lg font-bold">US</p>
                    <p className="mt-0.5 text-xs text-white/80">Direct Market Access</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <p className="font-heading text-lg font-bold">MENA</p>
                    <p className="mt-0.5 text-xs text-white/80">Local Expertise</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Cross Borders with Confidence */}
          <AnimateIn delay={0.3} className="lg:col-span-3">
            <div className="flex h-full flex-col rounded-3xl border border-cream-deep bg-white p-6">
              <h3 className="font-heading text-2xl font-extrabold capitalize leading-tight text-ink">
                Cross Borders With <br />
                Confidence
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                We support businesses in navigating complex regulatory environments, identifying the
                right partners, and executing market entry strategies tailored to each region&apos;s
                unique landscape.
              </p>
              <div className="mt-6">
                <Image src="/images/services-avatar-row.png" alt="+500" width={140} height={28} className="h-[28px] w-[140px]" />
              </div>
              <span className="mt-4 inline-flex w-fit items-center rounded-full bg-cream-soft px-4 py-2 text-sm font-bold text-primary">
                Thousands Trust Aramway Group®
              </span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Complete Service Portfolio */}
      <section className="py-16 sm:py-20">
        <div className="container-max">
          <AnimateIn className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-4xl font-extrabold capitalize text-ink sm:text-5xl">
              Complete Service Portfolio
            </h2>
          </AnimateIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <AnimateIn key={service.slug} delay={(i % 3) * 0.08}>
                <ServiceCard service={service} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <span className="section-eyebrow">Common Questions</span>
              <h2 className="mt-5 font-heading text-4xl font-extrabold capitalize text-ink sm:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Explore our comprehensive range of services designed to support your international
                expansion journey from strategy to execution.
              </p>
            </AnimateIn>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {faqs.map((faq, i) => (
              <AnimateIn key={faq.question} delay={(i % 2) * 0.08}>
                <details className="group h-full rounded-xl border border-border bg-white p-5">
                  <summary className="cursor-pointer list-none font-semibold text-ink marker:content-none">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="shrink-0 text-primary transition-transform group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
                </details>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
