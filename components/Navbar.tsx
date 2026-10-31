"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type NavItem =
  | { type: "link"; href: string; label: string }
  | { type: "menu"; label: string; href?: never; children: { href: string; label: string; description?: string }[] };

const NAV_LINKS: NavItem[] = [
  { type: "link", href: "/om-ola", label: "Om Ola" },
  {
    type: "menu",
    label: "Erbjudanden",
    children: [
      { href: "/agarklivet", label: "Ägarklivet", description: "Ett år tillsammans med andra erfarna ägare." },
      { href: "/vip-coaching", label: "VIP-coaching", description: "Direkt med dig som ägare, eller era delägare." },
    ],
  },
  { type: "link", href: "/inspiration", label: "Inspiration" },
  { type: "link", href: "/strategisession", label: "Strategisession" },
  { type: "link", href: "/kontakt", label: "Kontakta mig" },
];

/* Shown only in the mobile menu, so every page is reachable from a phone. */
const MORE_LINKS = [
  { href: "/resultat", label: "Resultat" },
  { href: "/webinar", label: "Webinar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  // Close the menu whenever the page changes (also via the browser's back button).
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
    setOpenMenu(null);
  }
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Strategisession has the calendar on the page itself.
  const onStrategy = pathname === "/strategisession";
  // Webinar is a focused landing page — CTA points to the signup form on the same page.
  const onWebinar = pathname === "/webinar";
  const ctaLabel = onWebinar ? "Anmäl till kostnadsfritt webinar" : "Boka ett strategisamtal";
  const ctaMobileLabel = onWebinar ? "Anmäl kostnadsfritt" : "Boka strategisamtal";
  const ctaProps = onWebinar
    ? { href: "#anmal" }
    : onStrategy
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

  // Close the desktop dropdown on outside click or Escape.
  useEffect(() => {
    if (!openMenu) return;
    const onDown = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

  const close = () => {
    setOpen(false);
    setOpenMenu(null);
  };

  const isMenuActive = (item: NavItem) => {
    if (item.type === "link") return pathname === item.href;
    return item.children.some((c) => pathname === c.href);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-shadow duration-300 bg-[color:var(--sand)] border-b border-[color:var(--border-soft)] ${
          scrolled ? "shadow-[0_4px_18px_-14px_rgba(23,59,96,0.3)]" : ""
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

          <nav className={`${onWebinar ? "hidden" : "hidden lg:flex"} items-center gap-9`} aria-label="Huvudmeny" ref={dropdownRef}>
            {NAV_LINKS.map((item) => {
              const active = isMenuActive(item);
              if (item.type === "link") {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-[15px] font-semibold transition-colors ${
                      active
                        ? "text-[color:var(--glod)]"
                        : "text-[color:var(--marin)] hover:text-[color:var(--glod)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }
              const isOpen = openMenu === item.label;
              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenMenu(isOpen ? null : item.label)}
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    className={`inline-flex items-center gap-1 text-[15px] font-semibold transition-colors ${
                      active
                        ? "text-[color:var(--glod)]"
                        : "text-[color:var(--marin)] hover:text-[color:var(--glod)]"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div
                      role="menu"
                      className="absolute left-1/2 top-full mt-3 -translate-x-1/2 w-[320px] rounded-2xl bg-white border border-[color:var(--border-soft)] shadow-[0_24px_60px_-24px_rgba(23,59,96,0.35)] p-2"
                    >
                      {item.children.map((child) => {
                        const childActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            onClick={close}
                            className={`block rounded-xl px-4 py-3 transition-colors ${
                              childActive
                                ? "bg-[color:var(--glod)]/10 text-[color:var(--glod)]"
                                : "hover:bg-sand text-[color:var(--marin)]"
                            }`}
                          >
                            <div className="font-semibold text-[0.98rem]">{child.label}</div>
                            {child.description && (
                              <div className="mt-0.5 text-[0.82rem] text-ink-soft leading-snug">
                                {child.description}
                              </div>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <a {...ctaProps} className="btn-primary !py-2.5 !px-5 text-[13px]">
              {ctaLabel}
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <a {...ctaProps} className="btn-primary !py-2 !px-4 !text-[13px]">
              {ctaMobileLabel}
            </a>

          {!onWebinar && (
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobilmeny"
              aria-label={open ? "Stäng meny" : "Öppna meny"}
              className={`h-11 w-11 inline-flex items-center justify-center rounded-full border transition-colors ${
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
          )}
          </div>
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
              {NAV_LINKS.flatMap((item, i): React.ReactNode[] => {
                if (item.type === "link") {
                  const active = pathname === item.href;
                  return [
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      style={{ animationDelay: `${60 + i * 40}ms` }}
                      className={`mobile-menu-item flex items-center justify-between py-4 border-b border-white/10 font-[family-name:var(--font-heading)] font-semibold text-[1.6rem] leading-tight ${
                        active ? "text-[color:var(--glod)]" : "text-[color:var(--papper)]"
                      }`}
                    >
                      {item.label}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="opacity-40">
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </Link>,
                  ];
                }
                return [
                  <div
                    key={item.label}
                    style={{ animationDelay: `${60 + i * 40}ms` }}
                    className="mobile-menu-item py-4 border-b border-white/10"
                  >
                    <div className="font-[family-name:var(--font-heading)] font-semibold text-[1.6rem] leading-tight text-[color:var(--papper)]/80">
                      {item.label}
                    </div>
                    <ul className="mt-3 flex flex-col gap-2 pl-1">
                      {item.children.map((c) => {
                        const childActive = pathname === c.href;
                        return (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              onClick={close}
                              aria-current={childActive ? "page" : undefined}
                              className={`inline-block py-2 text-[1.1rem] font-semibold ${
                                childActive ? "text-[color:var(--glod)]" : "text-[color:var(--papper)]"
                              }`}
                            >
                              {c.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>,
                ];
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
