import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import Counter from "@/components/Counter";
import ServiceCard from "@/components/ServiceCard";
import ProgramCard from "@/components/ProgramCard";
import ContactForm from "@/components/ContactForm";
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-24 sm:pb-32 sm:pt-32">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "linear-gradient(180deg, #f4e9d680 0%, #f4e9d600 40%)",
          }}
        />
        <div
          className="absolute inset-0 -z-10 opacity-70"
          style={{
            backgroundImage: "url('/images/hero-overlay-pattern.svg')",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url('/images/hero-bg.webp')",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "min(720px, 70%) auto",
          }}
        />
        <div className="container-max text-center">
          <AnimateIn>
            <span className="section-eyebrow">Global Business Solutions</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="mx-auto mt-6 max-w-4xl font-heading text-4xl font-extrabold capitalize leading-tight text-ink sm:text-6xl">
              Bridging <span style={{ color: "var(--color-accent-light)" }}>US &amp; MENA Markets</span>
              <br />
              For Global Growth
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
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
            <div className="chevron-wobble mt-16 flex justify-center text-primary/50">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Who We Are - Stats + Gateway */}
      <section id="who" className="py-16 sm:py-20">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <h2 className="font-heading text-3xl font-extrabold capitalize text-ink sm:text-4xl">
                WHO <span className="gradient-text">WE</span> ARE
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="mt-5 text-base text-muted sm:text-lg">
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
            <AnimateIn>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <Image src="/images/who-we-are.webp" alt="Aramway team" fill className="object-cover" />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
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
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-ink sm:text-4xl">
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
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <span className="section-eyebrow">Market Entry Expertise</span>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-5 font-heading text-3xl font-extrabold text-ink sm:text-4xl">
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
              <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
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
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-primary"
                    style={{ backgroundColor: "rgba(225,191,139,0.2)" }}
                  >
                    {i + 1}
                  </div>
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
        <div className="container-max text-center">
          <AnimateIn>
            <span className="section-eyebrow">Aramway Network</span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-ink sm:text-4xl">
              Partners in Growth
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Our network of specialized companies delivers solutions for every business need,
              bridging markets and creating opportunities between the US and MENA.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="mt-12 grid grid-cols-2 items-center gap-8 sm:grid-cols-4 lg:grid-cols-7">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="relative flex h-16 items-center justify-center transition-transform duration-300 hover:scale-90"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={110}
                    height={60}
                    className="max-h-14 w-auto object-contain"
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
              <div className="container-max px-6 sm:px-16">
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur"
                  style={{ boxShadow: "inset 1px 1px 5px rgba(255,255,255,0.35), 0 0 8px rgba(255,255,255,0.08)" }}
                >
                  Solutions that Drive Growth
                </span>
                <h2 className="mx-auto mt-5 max-w-2xl font-heading text-3xl font-extrabold text-white sm:text-4xl">
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

      {/* Contact */}
      <section className="py-16 sm:py-20">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <span className="section-eyebrow">Get in Touch</span>
              <h2 className="mt-5 font-heading text-3xl font-extrabold text-ink sm:text-4xl">
                Ready to Expand Your Business?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Take the first step toward international growth. Contact us today to discuss how
                we can help you achieve your expansion goals.
              </p>
            </AnimateIn>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <AnimateIn>
              <div className="rounded-2xl border border-border bg-white p-7 shadow-sm sm:p-8">
                <h3 className="font-heading text-xl font-bold text-ink">Send Us a Message</h3>
                <div className="mt-5">
                  <ContactForm />
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1} className="flex flex-col gap-4">
              <h3 className="font-heading text-xl font-bold text-ink">Get in Touch</h3>
              {[
                { label: "Email", value: site.email, href: `mailto:${site.email}` },
                { label: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
                { label: "Offices", value: site.offices, href: undefined },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-6 transition-colors hover:bg-cream-soft"
                  style={{ backgroundColor: "#f9fbfb" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block text-base font-semibold text-ink hover:text-primary">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base font-semibold text-ink">{item.value}</p>
                  )}
                </div>
              ))}

              <div className="gradient-gold relative mt-2 overflow-hidden rounded-2xl px-7 py-8">
                <h4 className="font-heading text-lg font-bold text-white">Apply to Our Programs</h4>
                <p className="mt-2 max-w-sm text-sm text-white/85">
                  Join our market entry program. Submit your application for review within 48
                  hours.
                </p>
                <Link
                  href="/programs"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-white/70 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View Our Programs
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
