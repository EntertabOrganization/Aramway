import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Aramway Group to discuss your U.S. or MENA market expansion.",
};

const contactDetails = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
  { label: "Offices", value: site.offices },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      <section className="pb-20">
        <div className="container-max grid gap-12 lg:grid-cols-5">
          <AnimateIn className="lg:col-span-2">
            <div className="space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="rounded-2xl border border-border bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted">{detail.label}</p>
                  {detail.href ? (
                    <a href={detail.href} className="mt-1 block text-lg font-semibold text-ink hover:text-primary">
                      {detail.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg font-semibold text-ink">{detail.value}</p>
                  )}
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1} className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-ink">Send Us a Message</h2>
              <div className="mt-6">
                <ContactForm full />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-max">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
