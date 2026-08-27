import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { programs } from "@/lib/programs";
import Newsletter from "@/components/Newsletter";

const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Instagram", href: site.social.instagram },
  { label: "Facebook", href: site.social.facebook },
  { label: "Twitter", href: site.social.twitter },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-white">
      <div className="container-max py-16">
        <Newsletter variant="dark" />

        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <Image src="/images/logo-footer.png" alt="Aramway" width={40} height={40} />
              <span className="font-heading text-lg font-extrabold">ARAMWAY</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/60">{site.description}</p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs text-white/70 transition-colors hover:border-primary hover:text-primary"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white/80">About</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><Link href="/#who" className="hover:text-primary">Who We Are</Link></li>
              <li><Link href="/#why" className="hover:text-primary">WHO, HOW, and WHY</Link></li>
              <li><Link href="/about#mission" className="hover:text-primary">Mission Statement</Link></li>
              <li><Link href="/about#story" className="hover:text-primary">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white/80">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
              <li><Link href="/blogs" className="hover:text-primary">Blogs</Link></li>
              <li><Link href="/news-insights" className="hover:text-primary">News &amp; Insights</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white/80">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-primary">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/80">Programs</h3>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/60">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link href={`/programs/${p.slug}`} className="hover:text-primary">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>Copyright © {new Date().getFullYear()} ARAMWAY. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-primary">Terms of Use</Link>
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
