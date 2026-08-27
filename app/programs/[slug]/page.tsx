import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import CTASection from "@/components/CTASection";
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

  return (
    <>
      <PageHero eyebrow="Program" title={program.title} description={program.heroSubheading} />

      <section className="py-16">
        <div className="container-max grid items-start gap-12 lg:grid-cols-2">
          <AnimateIn>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image src={program.image} alt={program.title} fill className="object-cover" />
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="text-base leading-relaxed text-muted">{program.intro}</p>
            <h2 className="mt-8 font-heading text-2xl font-bold text-ink">Program Benefits</h2>
            <ul className="mt-6 space-y-4">
              {program.benefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-ink">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary mt-8">
              Apply to This Program
            </Link>
          </AnimateIn>
        </div>
      </section>

      <CTASection
        title="Apply to Our Programs"
        description="Applications are reviewed within 48 hours by our program team."
      />
    </>
  );
}
