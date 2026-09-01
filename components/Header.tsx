"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { mainNav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "backdrop-blur bg-white/70" : "bg-transparent"
      }`}
    >
      <div className="container-max flex h-20 items-center justify-between gap-4 sm:h-24">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image src="/images/logo.svg" alt="Aramway" width={48} height={48} priority className="h-10 w-10 sm:h-12 sm:w-12" />
          <span className="font-heading text-lg font-extrabold tracking-tight text-ink">
            ARAMWAY
          </span>
        </Link>

        <nav
          className="hidden items-center rounded-full border border-white/40 bg-white/60 p-1.5 shadow-[0_4px_4px_rgba(0,0,0,0.01),0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-md lg:flex"
        >
          {mainNav.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
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
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-3 text-sm font-medium text-ink hover:bg-white/60"
                >
                  {item.label}
                </Link>
              ))}
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
