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
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(false);
    setDesktopMenu(null);
    setMobileSection(null);
  }, [pathname]);

  const openMega = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDesktopMenu(label);
  };

  const closeMegaDelayed = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDesktopMenu(null), 150);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-transparent">
      <div className="container-max flex h-20 items-center justify-between gap-4 sm:h-24">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image src="/images/logo.svg" alt="Aramway" width={48} height={48} priority className="h-10 w-10 sm:h-12 sm:w-12" />
        </Link>

        <nav
          className="hidden items-center rounded-full border border-white/40 bg-white/60 p-1.5 shadow-[0_4px_4px_rgba(0,0,0,0.01),0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-md lg:flex"
        >
          {mainNav.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const mega = MEGA_MENUS[item.label];

            if (!mega) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                    active ? "bg-white text-ink shadow-sm" : "text-muted hover:bg-white/60 hover:text-ink"
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
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                    active || isOpen ? "bg-white text-ink shadow-sm" : "text-muted hover:bg-white/60 hover:text-ink"
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

        <div className="hidden shrink-0 lg:block">
          <Link href="/contact" className="btn-primary">
            Contact Us
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
                      className="rounded-full px-4 py-3 text-sm font-medium text-ink hover:bg-white/60"
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
                      className="flex w-full items-center justify-between rounded-full px-4 py-3 text-sm font-medium text-ink hover:bg-white/60"
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
              <Link href="/contact" className="btn-primary mt-2 justify-center">
                Contact Us
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
