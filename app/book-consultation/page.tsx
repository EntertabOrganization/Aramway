import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import ConsultationBooking from "@/components/ConsultationBooking";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Book Your Consultation",
  description: "Schedule a one-on-one consultation with the Aramway team to discuss your U.S. or MENA market expansion.",
};

const expectations = [
  { label: "Format", value: "30-minute video call" },
  { label: "Who You'll Meet", value: "A member of our advisory team" },
  { label: "What's Next", value: "Confirmation email with your meeting link" },
];

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Started"
        title="Book Your Consultation"
        description="Pick a date and time that works for you, and our team will be in touch to confirm your session."
        pattern
      />

      <section className="pb-20">
        <div className="container-max grid gap-12 lg:grid-cols-5">
          <AnimateIn className="lg:col-span-2">
            <div className="space-y-6">
              {expectations.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted">{item.label}</p>
                  <p className="mt-1 text-lg font-semibold text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1} className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-ink">Schedule Your Session</h2>
              <div className="mt-6">
                <ConsultationBooking />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
