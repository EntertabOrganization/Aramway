import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import ServiceIcon from "@/components/icons/ServiceIcon";
import { services, getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} description={service.heroSubheading} />

      <section className="py-16">
        <div className="container-max grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AnimateIn>
              <p className="text-base leading-relaxed text-muted">{service.intro}</p>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <h2 className="mt-10 font-heading text-2xl font-bold text-ink">What We Deliver</h2>
              <ul className="mt-6 space-y-4">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <h2 className="mt-12 font-heading text-2xl font-bold text-ink">Frequently Asked Questions</h2>
              <div className="mt-6 space-y-4">
                {service.faqs.map((faq) => (
                  <details key={faq.question} className="group rounded-xl border border-border bg-white p-5">
                    <summary className="cursor-pointer list-none font-semibold text-ink marker:content-none">
                      <span className="flex items-center justify-between gap-4">
                        {faq.question}
                        <span className="text-primary transition-transform group-open:rotate-45">+</span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.1}>
            <div className="sticky top-28 rounded-2xl border border-border bg-cream-soft p-7">
              <ServiceIcon slug={service.slug} size={56} />
              <h3 className="mt-5 font-heading text-lg font-bold text-ink">Interested in this service?</h3>
              <p className="mt-2 text-sm text-muted">
                Tell us about your goals and we&apos;ll get back to you within one business day.
              </p>
              <Link href="/contact" className="btn-primary mt-6 w-full">
                Contact Our Team
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="container-max">
          <AnimateIn>
            <h2 className="font-heading text-2xl font-bold text-ink">Related Services</h2>
          </AnimateIn>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s, i) => (
              <AnimateIn key={s.slug} delay={i * 0.08}>
                <ServiceCard service={s} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
