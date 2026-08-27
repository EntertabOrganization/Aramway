import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Aramway Group's full range of cross-border business services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Services to elevate your business"
        description="From market entry to financial management, our services are built to move your cross-border expansion forward."
      />
      <section className="pb-20">
        <div className="container-max grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimateIn key={service.slug} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} />
            </AnimateIn>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
