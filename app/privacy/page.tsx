import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Aramway Group website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="pb-20">
        <div className="container-max prose prose-neutral max-w-3xl text-sm leading-relaxed text-muted">
          <p>
            {site.name} respects your privacy. This policy explains what information we collect
            through this website, how we use it, and the choices you have.
          </p>
          <h2 className="mt-8 font-heading text-xl font-bold text-ink">Information We Collect</h2>
          <p>
            We collect information you provide directly, such as your name, email, phone number,
            and message content when you submit a contact form or subscribe to our newsletter.
          </p>
          <h2 className="mt-8 font-heading text-xl font-bold text-ink">How We Use Information</h2>
          <p>
            We use the information you provide to respond to inquiries, deliver requested services,
            and, where you&apos;ve opted in, send marketing communications about our programs and
            insights. You can unsubscribe from marketing emails at any time.
          </p>
          <h2 className="mt-8 font-heading text-xl font-bold text-ink">Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share information with trusted service
            providers who help us operate this website and deliver our services, under
            confidentiality obligations.
          </p>
          <h2 className="mt-8 font-heading text-xl font-bold text-ink">Your Choices</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information at
            any time by contacting us.
          </p>
          <h2 className="mt-8 font-heading text-xl font-bold text-ink">Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${site.email}`} className="text-primary">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
