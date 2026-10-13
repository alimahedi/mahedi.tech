"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  // Transparent with white text only over the home page's black hero; frosted white elsewhere.
  const overHero = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        overHero ? "border-b border-transparent" : "border-b border-black/5 bg-white/70 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className={`text-[15px] font-semibold tracking-tight transition-colors ${
            overHero ? "text-white" : "text-foreground"
          }`}
        >
          mahedi.tech
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors ${
                  active
                    ? "font-medium text-foreground"
                    : overHero
                      ? "text-white/60 hover:text-white"
                      : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-transform hover:scale-[1.04] active:scale-95 ${
              overHero ? "bg-white text-black" : "bg-foreground text-background"
            }`}
          >
            Book a call
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className={`p-2 md:hidden ${overHero ? "text-white" : "text-foreground"}`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <div className="border-t border-black/5 bg-white/95 px-6 py-6 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-base ${pathname === link.href ? "font-medium text-foreground" : "text-foreground/80"}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 w-full rounded-full bg-foreground py-3 text-center text-sm font-medium text-background"
              >
                Book a call
              </Link>
            </div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
