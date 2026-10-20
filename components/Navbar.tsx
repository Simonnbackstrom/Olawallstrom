"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/om-ola", label: "Om Ola" },
  { href: "/agarklivet", label: "Ägarklivet" },
  { href: "/vip-coaching", label: "VIP-coaching" },
  { href: "/strategisession", label: "Strategisession" },
  { href: "/kontakt", label: "Kontakt" },
];

/* Shown only in the mobile menu, so every page is reachable from a phone. */
const MORE_LINKS = [
  { href: "/resultat", label: "Resultat" },
  { href: "/webinar", label: "Webinar" },
  { href: "/inspiration", label: "Inspiration" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // Close the menu whenever the page changes (also via the browser's back button).
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const ctaLabel = "Boka ett samtal";
  // Strategisession has the calendar on the page itself.
  const onStrategy = pathname === "/strategisession";
  const ctaProps = onStrategy
    ? { href: "#boka" }
    : { href: "https://calendly.com/olawallstrom/30min", target: "_blank", rel: "noopener noreferrer" };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the menu is open: lock page scroll, close on Escape, and close if the screen grows to desktop.
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      html.style.overflow = "";
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          open
            ? "bg-papper border-b border-[color:var(--border-soft)]"
            : scrolled
              ? "bg-papper/95 backdrop-blur-md border-b border-[color:var(--border-soft)]"
              : "bg-transparent"
        }`}
      >
        <div className="container-site flex items-center justify-between h-16 md:h-20">
          <Link href="/" onClick={close} className="flex items-center" aria-label="Ola Wallström startsida">
            <Image
              src="/brand/logo-horizontal.png"
              alt="Ola Wallström"
              width={1289}
              height={236}
              priority
              quality={90}
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
                  aria-current={active ? "page" : undefined}
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
            <a {...ctaProps} className="btn-primary !py-2.5 !px-5 text-[13px]">
              {ctaLabel}
            </a>
          </div>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobilmeny"
            aria-label={open ? "Stäng meny" : "Öppna meny"}
            className={`lg:hidden h-11 w-11 inline-flex items-center justify-center rounded-full border transition-colors ${
              open
                ? "border-[color:var(--marin)] bg-[color:var(--marin)] text-[color:var(--papper)]"
                : "border-[color:var(--marin)]/20 text-[color:var(--marin)]"
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
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
      </header>

      {/* Mobile menu: outside the header so it always fills the screen below it. */}
      {open && (
        <div
          id="mobilmeny"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Meny"
          className="mobile-menu lg:hidden fixed inset-x-0 top-16 md:top-20 bottom-0 z-40 overflow-y-auto overscroll-contain bg-[color:var(--marin)] text-[color:var(--papper)]"
        >
          <div className="container-site flex min-h-full flex-col pt-6 pb-10">
            <nav aria-label="Mobilmeny" className="flex flex-col">
              {NAV_LINKS.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    style={{ animationDelay: `${60 + i * 40}ms` }}
                    className={`mobile-menu-item flex items-center justify-between py-4 border-b border-white/10 font-[family-name:var(--font-heading)] font-semibold text-[1.6rem] leading-tight ${
                      active ? "text-[color:var(--glod)]" : "text-[color:var(--papper)]"
                    }`}
                  >
                    {link.label}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="opacity-40">
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </Link>
                );
              })}
            </nav>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-1">
              {MORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`inline-block py-2 text-[1.02rem] font-semibold ${
                      pathname === link.href ? "text-[color:var(--glod)]" : "text-[color:var(--papper)]/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10">
              <a {...ctaProps} onClick={close} className="btn-primary w-full justify-center !py-4">
                {ctaLabel}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </a>
              <p className="mt-5 text-center text-[0.95rem] text-[color:var(--papper)]/70">
                30 minuter, kostnadsfritt. Eller mejla{" "}
                <a href="mailto:ola@olawallstrom.com" className="font-semibold text-[color:var(--papper)] underline underline-offset-4">
                  ola@olawallstrom.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
