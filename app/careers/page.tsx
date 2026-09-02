import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import CareerApplicationForm from "@/components/CareerApplicationForm";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Aramway Group team bridging the U.S. and MENA markets.",
};

const benefits = [
  {
    title: "International Exposure",
    description: "Work on projects spanning US and MENA markets, gaining valuable cross-cultural experience.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
  },
  {
    title: "Career Growth",
    description: "Continuous learning opportunities and clear paths for professional development.",
    icon: (
      <>
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <path d="M17 6h6v6" />
      </>
    ),
  },
  {
    title: "Collaborative Culture",
    description: "Join a diverse team of professionals committed to excellence and innovation.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Careers"
        title="Join Our Growing Team"
        description="Thank you for your interest in working with us. Please fill out the form and send your application. We will get back to you!"
        pattern
      />

      <section className="pb-16">
        <div className="container-max grid gap-6 sm:grid-cols-3">
          {benefits.map((benefit, i) => (
            <AnimateIn key={benefit.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-cream-deep bg-white p-7">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(225,191,139,0.2)" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {benefit.icon}
                  </svg>
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-ink">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="pb-20" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="container-max py-16">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl font-extrabold text-ink sm:text-4xl">Career Application Form</h2>
          </AnimateIn>
          <AnimateIn delay={0.1} className="mx-auto mt-10 max-w-2xl">
            <CareerApplicationForm />
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
