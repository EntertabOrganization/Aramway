import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import Newsletter from "@/components/Newsletter";
import { LinkedInIcon, InstagramIcon, FacebookIcon, XIcon } from "@/components/icons/SocialIcons";

const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedInIcon },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { label: "Twitter", href: site.social.twitter, Icon: XIcon },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border text-ink">
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "linear-gradient(180deg, #FFFFFF 56%, #F4E9D666 100%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/images/footer-bg-shape.svg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      <div className="container-max py-16">
        <Newsletter variant="light" />

        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Image
              src="/images/logo-footer.png"
              alt="Aramway"
              width={140}
              height={115}
              className="h-[92px] w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-muted">
              Offers strategic support for U.S. and GCC market expansion.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-opacity hover:opacity-80"
                  style={{ backgroundColor: "var(--color-gold-light)" }}
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-ink">About</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li><Link href="/#who" className="hover:text-primary">Who We Are</Link></li>
              <li><Link href="/#why" className="hover:text-primary">WHO, HOW, and WHY</Link></li>
              <li><Link href="/about#mission" className="hover:text-primary">Mission Statement</Link></li>
              <li><Link href="/about#story" className="hover:text-primary">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-ink">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
              <li><Link href="/blogs" className="hover:text-primary">Blogs</Link></li>
              <li><Link href="/news-insights" className="hover:text-primary">News &amp; Insights</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-ink">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-primary">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs sm:flex-row" style={{ color: "#6B5C4F" }}>
          <p>Copyright © {new Date().getFullYear()} ARAMWAY. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link href="/terms" className="hover:text-primary">Terms of Use</Link>
            <span className="opacity-40">|</span>
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <span className="opacity-40">|</span>
            <span>
              Developed and Designed by{" "}
              <a
                href="https://entertab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
                style={{ color: "#daa24a" }}
              >
                EnterTab
              </a>
            </span>
          </div>
        </div>
      </div>

      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-8 right-8 z-40 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:-translate-y-1"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </a>
    </footer>
  );
}
