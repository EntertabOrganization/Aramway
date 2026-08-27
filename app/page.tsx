import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import Counter from "@/components/Counter";
import ServiceCard from "@/components/ServiceCard";
import ProgramCard from "@/components/ProgramCard";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import { stats, benefits, partners, site } from "@/lib/site";
import { services } from "@/lib/services";
import { programs } from "@/lib/programs";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pb-20 pt-24 sm:pb-28 sm:pt-32"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(244,233,214,0.6) 0%, rgba(244,233,214,0) 55%)",
        }}
      >
        <div className="container-max text-center">
          <AnimateIn>
            <span className="section-eyebrow">Global Trade &amp; Consultancy Firm</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="mx-auto mt-6 max-w-4xl font-heading text-4xl font-extrabold leading-tight text-ink sm:text-6xl">
              Bridging <span className="gold-text">US &amp; MENA Markets</span>
              <br />
              For Global Growth
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
              Empowering talented entrepreneurs and enterprises with strategic market-entry,
              legal, financial, and business support solutions across the U.S. and MENA regions.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Start Your Journey
              </Link>
              <Link href="/services" className="btn-outline">
                Explore Our Services
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Who We Are - Stats */}
      <section id="who" className="py-16">
        <div className="container-max">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 0.08}>
                <div className="flex flex-col items-center rounded-2xl border border-border bg-white p-6 text-center shadow-sm">
                  <Image src={stat.icon} alt="" width={40} height={40} className="mb-3" />
                  <p className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                    <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} duration={stat.duration} />
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="why" className="py-16">
        <div className="container-max grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image src="/images/who-we-are.webp" alt="Aramway team" fill className="object-cover" />
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <span className="section-eyebrow">Who We Are</span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              Your Gateway to <span className="gold-text">International Success</span>
            </h2>
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
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <span className="section-eyebrow">What We Do</span>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-5 font-heading text-3xl font-extrabold text-ink sm:text-4xl">
                Services to elevate your business
              </h2>
            </AnimateIn>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <AnimateIn key={service.slug} delay={(i % 3) * 0.08}>
                <ServiceCard service={service} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <AnimateIn>
              <span className="section-eyebrow">Programs</span>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="mt-5 font-heading text-3xl font-extrabold text-ink sm:text-4xl">
                Our Programs
              </h2>
            </AnimateIn>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, i) => (
              <AnimateIn key={program.slug} delay={i * 0.08}>
                <ProgramCard program={program} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-16">
        <div className="container-max grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn>
            <span className="section-eyebrow">Partnership</span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              Connecting Entrepreneurs to <span className="gold-text">Opportunity</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We connect entrepreneurs and enterprises with resources, market intelligence, and
              partnerships that turn ambition into sustainable, cross-border growth.
            </p>
            <ul className="mt-7 space-y-4">
              {benefits.slice(0, 3).map((b) => (
                <li key={b.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{b.title}</p>
                    <p className="text-sm text-muted">{b.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <ul className="space-y-4">
              {benefits.slice(3).map((b) => (
                <li key={b.title} className="flex gap-3 rounded-xl border border-border bg-white p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{b.title}</p>
                    <p className="text-sm text-muted">{b.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>

      {/* Network */}
      <section className="py-16" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="container-max text-center">
          <AnimateIn>
            <span className="section-eyebrow">Our Ecosystem</span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-ink sm:text-4xl">
              Partners in Growth
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="mt-12 grid grid-cols-2 items-center gap-8 sm:grid-cols-4 lg:grid-cols-7">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="relative flex h-16 items-center justify-center opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0"
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

      {/* Contact */}
      <section className="py-20">
        <div className="container-max grid gap-12 lg:grid-cols-2">
          <AnimateIn>
            <span className="section-eyebrow">Get in Touch</span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold text-ink sm:text-4xl">
              Ready to Expand Your Market?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as
              possible.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <p className="flex items-center gap-3 text-ink">
                <span className="font-semibold">Email:</span>
                <a href={`mailto:${site.email}`} className="text-primary hover:underline">
                  {site.email}
                </a>
              </p>
              <p className="flex items-center gap-3 text-ink">
                <span className="font-semibold">Phone:</span>
                <a href={`tel:${site.phoneHref}`} className="text-primary hover:underline">
                  {site.phone}
                </a>
              </p>
              <p className="flex items-center gap-3 text-ink">
                <span className="font-semibold">Offices:</span> {site.offices}
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-ink">Send Us a Message</h3>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
