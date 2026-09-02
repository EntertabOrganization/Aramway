import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import ProgramCard from "@/components/ProgramCard";
import CTASection from "@/components/CTASection";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Programs",
  description: "Structured market-entry programs for the U.S., Saudi Arabia, the GCC, and beyond.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Structured paths to market entry"
        description="Each program combines strategy, compliance, and warm introductions into a single guided pathway."
        pattern
      />
      <section className="pb-20">
        <div className="container-max grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, i) => (
            <AnimateIn key={program.slug} delay={i * 0.08}>
              <ProgramCard program={program} />
            </AnimateIn>
          ))}
        </div>
      </section>
      <CTASection
        title="Ready to Join a Program?"
        description="Applications are reviewed within 48 hours. Start your expansion journey today."
      />
    </>
  );
}
