import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import ContactForm from "@/components/ContactForm";
import { FlatIcon, CONTACT_ICONS } from "@/components/icons/FlatIcon";
import { site } from "@/lib/site";

export default function ContactSection({
  eyebrow = "Get in Touch",
  title = "Ready to Expand Your Business?",
  description = "Take the first step toward international growth. Contact us today to discuss how we can help you achieve your expansion goals.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  const contactDetails = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
    { label: "Offices", value: site.offices, href: undefined },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <AnimateIn>
            <span className="section-eyebrow">{eyebrow}</span>
            <h2 className="mt-5 font-heading text-4xl font-extrabold capitalize text-ink sm:text-5xl">{title}</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">{description}</p>
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
            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl p-6 transition-colors hover:bg-cream-soft"
                style={{ backgroundColor: "#f9fbfb" }}
              >
                <FlatIcon
                  paths={CONTACT_ICONS[item.label].paths}
                  size={CONTACT_ICONS[item.label].size}
                  viewBoxSize={CONTACT_ICONS[item.label].viewBoxSize}
                  strokeWidth={CONTACT_ICONS[item.label].strokeWidth}
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block text-base font-semibold text-ink hover:text-primary">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base font-semibold text-ink">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="gradient-gold relative mt-2 overflow-hidden rounded-2xl px-7 py-8">
              <h4 className="font-heading text-lg font-bold text-white">Apply to Our Programs</h4>
              <p className="mt-2 max-w-sm text-sm text-white/85">
                Join our market entry program. Submit your application for review within 48 hours.
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
  );
}
