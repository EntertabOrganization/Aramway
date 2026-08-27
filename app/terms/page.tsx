import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Aramway Group website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <section className="pb-20">
        <div className="container-max prose prose-neutral max-w-3xl text-sm leading-relaxed text-muted">
          <p>
            These Terms of Use govern your access to and use of the {site.name} website. By
            accessing this site, you agree to be bound by these terms.
          </p>
          <h2 className="mt-8 font-heading text-xl font-bold text-ink">Use of Content</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the
            property of {site.name} or its licensors and is protected by applicable intellectual
            property laws. You may not reproduce, distribute, or create derivative works without
            our prior written consent.
          </p>
          <h2 className="mt-8 font-heading text-xl font-bold text-ink">No Professional Advice</h2>
          <p>
            Content on this site is provided for general informational purposes only and does not
            constitute legal, financial, or business advice. You should consult qualified
            professionals before making decisions based on this content.
          </p>
          <h2 className="mt-8 font-heading text-xl font-bold text-ink">Limitation of Liability</h2>
          <p>
            {site.name} shall not be liable for any indirect, incidental, or consequential damages
            arising from your use of this website.
          </p>
          <h2 className="mt-8 font-heading text-xl font-bold text-ink">Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
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
