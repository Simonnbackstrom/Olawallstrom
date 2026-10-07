"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/om-ola", label: "Om Ola" },
  { href: "/metod", label: "Metoden" },
  { href: "/boardroom", label: "Boardroom" },
  { href: "/strategisession", label: "Strategisession" },
  { href: "/resultat", label: "Resultat" },
  { href: "/nyhetsbrev", label: "Nyhetsbrev" },
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
          ? "bg-white/95 backdrop-blur-md border-b border-[#E2DDD8]"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Ola Wallström startsida">
          <Image src="/logo.png" alt="" width={44} height={44} className="h-8 w-auto md:h-10" priority />
          <span className="font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[15px] md:text-base text-[#0B0E14]">
            Ola Wallström
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Huvudmeny">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-[#E8500A]" : "text-[#0B0E14]/80 hover:text-[#E8500A]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/strategisession" className="btn-primary !py-2.5 !px-5 text-[13px]">
            Boka strategisamtal
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Öppna meny"
          className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-[#E2DDD8] text-[#0B0E14]"
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
        <div className="lg:hidden border-t border-[#E2DDD8] bg-white">
          <nav className="container-site py-6 flex flex-col gap-2" aria-label="Mobilmeny">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-lg font-semibold ${
                    active ? "text-[#E8500A]" : "text-[#0B0E14]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/strategisession" onClick={() => setOpen(false)} className="btn-primary mt-4 justify-center">
              Boka strategisamtal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
