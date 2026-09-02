import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimateIn from "@/components/AnimateIn";
import ProgramTimeline from "@/components/ProgramTimeline";
import ContactSection from "@/components/ContactSection";
import { programs, getProgramBySlug } from "@/lib/programs";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: program.title,
    description: program.shortDescription,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const relatedPrograms = programs.filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <>
      <section className="pb-4 pt-28 sm:pt-32">
        <div className="container-max">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 12H7M7 12l4-4M7 12l4 4" />
            </svg>
            Back to Programs
          </Link>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-max">
          <AnimateIn>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl sm:aspect-[21/9]">
              <Image src={program.heroImage ?? program.image} alt={program.title} fill className="object-cover" priority />
            </div>
            <h1 className="mt-8 max-w-3xl font-heading text-3xl font-extrabold capitalize leading-tight text-ink sm:text-4xl">
              {program.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">{program.intro}</p>
          </AnimateIn>

          <AnimateIn delay={0.1} className="mb-12 mt-16">
            <h2 className="font-heading text-3xl font-extrabold text-ink sm:text-4xl">Program Services Include</h2>
          </AnimateIn>

          {program.timeline ? (
            <ProgramTimeline phases={program.timeline} />
          ) : (
            <ul className="max-w-2xl space-y-4">
              {program.benefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-ink">{item}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Apply to This Program
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-max">
          <AnimateIn className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-extrabold text-ink sm:text-4xl">Our Programs</h2>
            <p className="mt-4 text-base text-muted">Explore other programs that complement your growth strategy</p>
          </AnimateIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPrograms.map((p, i) => (
              <AnimateIn key={p.slug} delay={i * 0.08}>
                <Link
                  href={`/programs/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-deep bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-lg font-bold text-ink">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.shortDescription}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      learn more
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/programs" className="btn-primary">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {program.faqs && (
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
              {program.faqs.map((faq, i) => (
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
      )}

      <ContactSection title={program.ctaTitle} />
    </>
  );
}
