import Link from "next/link";
import { site } from "@/lib/data";

const productLinks = [
  { label: "The sprint", href: "/sprint" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

const companyLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-14 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div>
            <div className="text-[15px] font-semibold tracking-tight">{site.name}</div>
            <div className="mt-1 text-sm text-white/40">{site.tagline}</div>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/30 md:flex-row">
          <p>© 2026 {site.legalName}. All rights reserved.</p>
          <p>Made with intent.</p>
        </div>
      </div>
    </footer>
  );
}
