"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { mainNav } from "@/lib/site";
import { services } from "@/lib/services";
import { programs } from "@/lib/programs";

const MEGA_MENUS: Record<string, { basePath: string; items: { slug: string; title: string; shortDescription: string; icon?: string }[] }> = {
  Services: { basePath: "/services", items: services },
  Programs: { basePath: "/programs", items: programs },
};

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(false);
    setDesktopMenu(null);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMega = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDesktopMenu(label);
  };

  const closeMegaDelayed = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDesktopMenu(null), 150);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container-max flex h-20 items-center justify-between gap-4 sm:h-24">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image src="/images/logo.svg" alt="ARAMWAY" width={48} height={48} priority className="h-10 w-10 sm:h-12 sm:w-12" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const mega = MEGA_MENUS[item.label];

            if (!mega) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                    active
                      ? "text-primary after:w-full"
                      : "text-ink after:w-0 hover:text-primary hover:after:w-full"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            const isOpen = desktopMenu === item.label;

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => openMega(item.label)}
                onMouseLeave={closeMegaDelayed}
              >
                <Link
                  href={item.href}
                  className={`relative inline-flex items-center gap-1.5 text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                    active || isOpen
                      ? "text-primary after:w-full"
                      : "text-ink after:w-0 hover:text-primary hover:after:w-full"
                  }`}
                >
                  {item.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </Link>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full z-50 mt-3 min-w-[260px] -translate-x-1/2 rounded-xl border border-cream-deep bg-white py-2 shadow-xl"
                    >
                      {mega.items.map((entry) => (
                        <Link
                          key={entry.slug}
                          href={`${mega.basePath}/${entry.slug}`}
                          className="block px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-cream-soft hover:text-primary"
                        >
                          {entry.title}
                        </Link>
                      ))}
                      <div className="mt-1 border-t border-border pt-1">
                        <Link
                          href={mega.basePath}
                          className="block px-5 py-2.5 text-sm font-semibold text-primary hover:text-primary-dark"
                        >
                          View All {item.label} →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <div className="hidden lg:block">
            <Link href="/book-consultation" className="btn-primary">
              Book a Consultation
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border lg:hidden"
            style={{ backgroundImage: "linear-gradient(180deg, rgba(244,233,214,0.95) 0%, #ffffff 70%)" }}
          >
            <div className="container-max flex flex-col gap-1 py-4">
              {mainNav.map((item) => {
                const mega = MEGA_MENUS[item.label];

                if (!mega) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-4 py-3 text-sm font-medium text-ink hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  );
                }

                const expanded = mobileSection === item.label;

                return (
                  <div key={item.href}>
                    <button
                      type="button"
                      onClick={() => setMobileSection(expanded ? null : item.label)}
                      className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-ink hover:text-primary"
                    >
                      {item.label}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {expanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-4"
                        >
                          {mega.items.map((entry) => (
                            <Link
                              key={entry.slug}
                              href={`${mega.basePath}/${entry.slug}`}
                              className="block rounded-lg px-4 py-2 text-sm text-muted hover:text-ink"
                            >
                              {entry.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <Link href="/book-consultation" className="btn-primary mt-2 justify-center">
                Book a Consultation
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
