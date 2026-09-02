import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import Counter from "@/components/Counter";
import ServiceCard from "@/components/ServiceCard";
import ProgramCard from "@/components/ProgramCard";
import ContactSection from "@/components/ContactSection";
import { FlatIcon, WHY_ICONS } from "@/components/icons/FlatIcon";
import { stats, benefits, partners, site } from "@/lib/site";
import { services } from "@/lib/services";
import { programs } from "@/lib/programs";

const whyCards = [
  {
    title: "Global Market Access",
    description:
      "Strategic market entry solutions connecting businesses between US and MENA regions with comprehensive market analysis and planning.",
  },
  {
    title: "How We Help",
    description:
      "We connect you with strategic commercial and investment opportunities, develop tailored market entry strategies, and provide local expertise to navigate new markets with confidence.",
  },
  {
    title: "Why It Matters",
    description:
      "Market entry is complex. We reduce challenges, ensure direct communication with key stakeholders, and provide the resources needed to establish a strong, lasting presence.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Aramway" },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-font relative overflow-hidden pb-24 pt-24 sm:pb-32 sm:pt-32">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "linear-gradient(180deg, #f4e9d680 0%, #f4e9d600 40%)",
          }}
        />
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage: "url('/images/hero-overlay-pattern.svg')",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div
          className="absolute inset-0 -z-10 opacity-15"
          style={{
            backgroundImage: "url('/images/hero-bg.webp')",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "min(720px, 70%) auto",
          }}
        />
        <div className="container-max text-center">
          <AnimateIn>
            <span className="section-eyebrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M7.5 5.25L7.11311 6.29554C6.6058 7.6665 6.35215 8.352 5.85209 8.8521C5.35202 9.35213 4.66653 9.60577 3.29554 10.1131L2.25 10.5L3.29554 10.8869C4.66653 11.3942 5.35202 11.6479 5.85209 12.1479C6.35215 12.648 6.6058 13.3335 7.11311 14.7044L7.5 15.75L7.88685 14.7044C8.39423 13.3335 8.64787 12.648 9.1479 12.1479C9.648 11.6479 10.3335 11.3942 11.7044 10.8869L12.75 10.5L11.7044 10.1131C10.3335 9.60577 9.648 9.35213 9.1479 8.8521C8.64787 8.352 8.39423 7.6665 7.88685 6.29554L7.5 5.25Z"
                  fill="url(#paint0_linear_eyebrow)"
                  stroke="#CC9138"
                  strokeWidth="0.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 2.25L13.3342 2.69809C13.1168 3.28565 13.0081 3.57944 12.7937 3.79375C12.5795 4.00806 12.2857 4.11677 11.6981 4.33419L11.25 4.5L11.6981 4.66581C12.2857 4.88323 12.5795 4.99194 12.7937 5.20625C13.0081 5.42056 13.1168 5.71435 13.3342 6.30191L13.5 6.75L13.6658 6.30191C13.8832 5.71435 13.9919 5.42056 14.2063 5.20624C14.4205 4.99194 14.7143 4.88323 15.3019 4.66581L15.75 4.5L15.3019 4.33419C14.7143 4.11677 14.4205 4.00806 14.2063 3.79375C13.9919 3.57944 13.8832 3.28565 13.6658 2.69809L13.5 2.25Z"
                  fill="url(#paint1_linear_eyebrow)"
                  stroke="#CC9138"
                  strokeWidth="0.2"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="paint0_linear_eyebrow" x1="2.27365" y1="5.25" x2="13.3967" y2="5.95777" gradientUnits="userSpaceOnUse">
                    <stop offset="0.277841" stopColor="#CC9138" />
                    <stop offset="0.768087" stopColor="#E1BF8B" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_eyebrow" x1="11.2601" y1="2.25" x2="16.0272" y2="2.55333" gradientUnits="userSpaceOnUse">
                    <stop offset="0.277841" stopColor="#CC9138" />
                    <stop offset="0.768087" stopColor="#E1BF8B" />
                  </linearGradient>
                </defs>
              </svg>
              Global Business Solutions
            </span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="mx-auto mt-6 max-w-4xl font-heading text-4xl font-extrabold capitalize leading-tight text-ink sm:text-6xl">
              Bridging <span style={{ color: "var(--color-accent-light)" }}>US &amp; MENA Markets</span>
              <br />
              For Global Growth
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-xl">
              Empowering talented entrepreneurs and enterprises with strategic connections,
              investment opportunities, and market expansion solutions across continents.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Start Your Journey
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3 font-semibold text-ink shadow-[0_0_10px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-0.5"
              >
                Explore Our Services
              </Link>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="chevron-wobble mt-16 flex justify-center">
              <a
                href="#who"
                aria-label="Scroll to Who We Are"
                className="wobble-icon inline-flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="40" viewBox="0 0 24 40" fill="none">
                  <mask id="path-1-inside-scroll" fill="white">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12V28C24 34.6274 18.6274 40 12 40C5.37258 40 0 34.6274 0 28V12Z" />
                  </mask>
                  <path
                    d="M24 12H22V28H24H26V12H24ZM0 28H2V12H0H-2V28H0ZM12 40V38C6.47715 38 2 33.5228 2 28H0H-2C-2 35.732 4.26801 42 12 42V40ZM24 28H22C22 33.5228 17.5228 38 12 38V40V42C19.732 42 26 35.732 26 28H24ZM12 0V2C17.5228 2 22 6.47715 22 12H24H26C26 4.26801 19.732 -2 12 -2V0ZM12 0V-2C4.26801 -2 -2 4.26801 -2 12H0H2C2 6.47715 6.47715 2 12 2V0Z"
                    fill="#CC9138"
                    fillOpacity="0.5"
                    mask="url(#path-1-inside-scroll)"
                  />
                  <path
                    d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12V16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16V12Z"
                    fill="#CC9138"
                    fillOpacity="0.5"
                  />
                </svg>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Who We Are - Stats + Gateway */}
      <section id="who" className="py-16 sm:py-20">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <h2 className="font-heading text-4xl font-extrabold capitalize text-ink sm:text-5xl">
                WHO <span className="gradient-text">WE</span> ARE
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="mt-5 text-base text-muted sm:text-xl">
                A trusted partner for entrepreneurs and businesses navigating the complexities of
                US and MENA market expansion.
              </p>
            </AnimateIn>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 0.08}>
                <div className="flex flex-col items-center rounded-2xl border border-cream-soft bg-white p-6 text-center shadow-sm">
                  <Image src={stat.icon} alt="" width={64} height={64} className="mb-3" />
                  <p className="font-heading text-3xl font-extrabold capitalize text-ink sm:text-4xl">
                    <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} duration={stat.duration} />
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted sm:text-sm">{stat.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
            <AnimateIn className="lg:order-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <Image src="/images/who-we-are.webp" alt="Aramway team" fill className="object-cover" />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1} className="lg:order-1">
              <h3 className="font-heading text-2xl font-semibold capitalize leading-tight text-ink sm:text-3xl">
                Your Gateway to <span className="gold-text">International Success</span>
              </h3>
              <p className="mt-5 text-base leading-relaxed text-muted">
                ARAMWAY GROUP is a premier facilitator of cross-border business expansion,
                headquartered in the Washington, DC Metropolitan Area since {site.founded}. With
                deep-rooted expertise in both the U.S. and GCC markets, we help companies navigate
                complex regulatory landscapes, bridge cultural differences, and unlock opportunities
                through trusted local networks and tailored market-entry strategies.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary">
                  Learn About Us
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="container-max grid gap-10 lg:grid-cols-2">
          <AnimateIn className="lg:sticky lg:top-28 lg:self-start">
            <span className="section-eyebrow">Solutions that Drive Growth</span>
            <h2 className="mt-5 font-heading text-4xl font-extrabold capitalize text-ink sm:text-5xl">
              Services to elevate your business
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Comprehensive solutions designed to bridge markets and accelerate your global
              expansion.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary">
                View All Services
              </Link>
            </div>
          </AnimateIn>
          <div className="no-scrollbar flex flex-col gap-4 lg:max-h-[600px] lg:overflow-y-auto lg:pr-1">
            {services.map((service, i) => (
              <AnimateIn key={service.slug} delay={(i % 4) * 0.06}>
                <ServiceCard service={service} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 sm:py-20">
        <div className="container-max">
          <div className="max-w-2xl">
            <AnimateIn>
              <span className="section-eyebrow">Market Entry Expertise</span>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-5 font-heading text-4xl font-extrabold capitalize text-ink sm:text-5xl">
                Our Programs
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <p className="mt-5 text-base text-muted">
                We offer market entry strategies tailored to your goals across the U.S. and MENA
                regions.
              </p>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.2}>
            <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
              {programs.map((program) => (
                <div
                  key={program.slug}
                  className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc(33.333%-16px)]"
                >
                  <ProgramCard program={program} />
                </div>
              ))}
            </div>
          </AnimateIn>
          <div className="mt-8 text-center">
            <Link href="/programs" className="btn-primary">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Why / Partnership */}
      <section id="why" className="py-16 sm:py-20" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <span className="section-eyebrow">Building Partnerships</span>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-5 font-heading text-4xl font-extrabold capitalize leading-tight text-ink sm:text-5xl">
                Connecting Entrepreneurs to Global Opportunities
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <p className="mt-5 text-base leading-relaxed text-muted">
                We connect entrepreneurs and enterprises with resources, market intelligence, and
                partnerships to succeed in US and MENA markets.
              </p>
            </AnimateIn>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {whyCards.map((card, i) => (
              <AnimateIn key={card.title} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <FlatIcon paths={WHY_ICONS[card.title]} size={72} strokeWidth={3} />
                  <p className="mt-5 font-heading text-lg font-bold text-ink">{card.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Network */}
      <section className="py-16 sm:py-20">
        <div className="container-max">
          <AnimateIn>
            <span className="section-eyebrow">Aramway Network</span>
            <h2 className="mt-5 font-heading text-4xl font-extrabold capitalize text-ink sm:text-5xl">
              Partners in Growth
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Our network of specialized companies delivers solutions for every business need,
              bridging markets and creating opportunities between the US and MENA.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="mt-12 grid grid-cols-2 items-center gap-8 sm:grid-cols-4 lg:grid-cols-7">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="relative flex h-24 items-center justify-center transition-transform duration-300 hover:scale-90"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={90}
                    className="max-h-24 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="container-max">
          <AnimateIn>
            <div className="gradient-gold relative overflow-hidden rounded-3xl pt-16 pb-0 text-center sm:pt-24">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: "url('/images/footer-bg-shape.svg')",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              />
              <div className="container-max relative px-6 sm:px-16">
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur"
                  style={{ boxShadow: "inset 1px 1px 5px rgba(255,255,255,0.35), 0 0 8px rgba(255,255,255,0.08)" }}
                >
                  Solutions that Drive Growth
                </span>
                <h2 className="mx-auto mt-5 max-w-2xl font-heading text-4xl font-extrabold capitalize text-white sm:text-5xl">
                  Ready to Expand Your Market?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/85">
                  Join successful entrepreneurs who&apos;ve transformed their businesses by
                  bridging US and MENA markets. Let&apos;s turn your global ambitions into reality,
                  no boundaries, just opportunities.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3 font-semibold text-ink shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5"
                  >
                    Schedule Consultations
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/70 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    View Our Services
                  </Link>
                </div>
              </div>

              <div className="relative mt-12 overflow-hidden border-t border-white/40 bg-black/15 py-4">
                <div className="no-scrollbar flex w-max gap-10 marquee-track">
                  {[...benefits, ...benefits].map((b, i) => (
                    <span
                      key={`${b.title}-${i}`}
                      className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-white/90"
                    >
                      {b.title}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
