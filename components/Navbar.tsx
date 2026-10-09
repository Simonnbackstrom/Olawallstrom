"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/om-ola", label: "Om Ola" },
  { href: "/metod", label: "VIP-coaching" },
  { href: "/boardroom", label: "Boardroom" },
  { href: "/strategisession", label: "Strategisession" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-papper/95 backdrop-blur-md border-b border-[color:var(--border-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center" aria-label="Ola Wallström startsida">
          <Image
            src="/brand/logo-horizontal.png"
            alt="Ola Wallström"
            width={1289}
            height={236}
            priority
            className="h-7 md:h-8 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Huvudmeny">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  active
                    ? "text-[color:var(--glod)]"
                    : "text-[color:var(--marin)] hover:text-[color:var(--glod)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <a
            href="https://calendly.com/olawallstrom/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2.5 !px-5 text-[13px]"
          >
            Boka strategisamtal
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-[color:var(--marin)]/20 text-[color:var(--marin)]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[color:var(--marin)] text-[color:var(--papper)] overflow-y-auto">
          <nav className="container-site py-10 flex flex-col gap-1" aria-label="Mobilmeny">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`py-4 text-2xl font-[family-name:var(--font-lora)] font-semibold border-b border-white/10 ${
                    active ? "text-[color:var(--glod)]" : "text-[color:var(--papper)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://calendly.com/olawallstrom/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-8 justify-center"
            >
              Boka strategisamtal
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
