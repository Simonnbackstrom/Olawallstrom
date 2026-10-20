import Link from "next/link";
import Image from "next/image";

const SITE_LINKS = [
  { href: "/om-ola", label: "Om Ola" },
  { href: "/vip-coaching", label: "VIP-coaching" },
  { href: "/agarklivet", label: "Ägarklivet" },
  { href: "/webinar", label: "Webinar" },
  { href: "/resultat", label: "Resultat" },
  { href: "/inspiration", label: "Inspiration" },
];

const EMAIL = "ola@olawallstrom.com";
const BOOKING_URL = "https://calendly.com/olawallstrom/30min";

const linkClass = "inline-block py-1.5 hover:text-[color:var(--glod)] transition-colors";
const headingClass =
  "font-[family-name:var(--font-text)] font-bold text-[color:var(--marin)] mb-5 text-[0.78rem] tracking-[0.18em] uppercase";

const rowClass =
  "flex items-center justify-center gap-2.5 px-5 py-3.5 text-center text-[0.98rem] font-semibold text-[color:var(--marin)] transition-colors hover:bg-papper";

function Brand({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/brand/logo-horizontal.png"
        alt="Ola Wallström"
        width={1287}
        height={234}
        quality={90}
        className="h-9 w-auto mb-6 mx-auto md:mx-0"
      />
      <p className="text-[0.95rem] leading-relaxed text-ink-soft max-w-sm mx-auto md:mx-0">
        Autentisk affärsutveckling. Äkta, rakt och med riktning framåt, för dig som vill
        äga din tid och ditt företag.
      </p>
      <div className="flex justify-center md:justify-start gap-3 mt-7">
        <a
          href="https://www.instagram.com/ola.wallstrom/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="h-11 w-11 inline-flex items-center justify-center rounded-full text-white shadow-[0_6px_16px_-8px_rgba(214,41,118,0.7)] transition-[translate,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-8px_rgba(214,41,118,0.75)]"
          style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
          </svg>
        </a>
        <a
          href="https://se.linkedin.com/in/olawallstrom"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="h-11 w-11 inline-flex items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-[0_6px_16px_-8px_rgba(10,102,194,0.7)] transition-[translate,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-8px_rgba(10,102,194,0.75)]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5z" />
            <path d="M.5 8h4V24h-4z" />
            <path d="M8 8h3.8v2.2h.1c.5-1 1.9-2.4 4.1-2.4 4.4 0 5.2 2.9 5.2 6.7V24h-4v-8.4c0-2-.1-4.5-2.8-4.5s-3.2 2.1-3.2 4.3V24H8z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="sec-sand pt-16 md:pt-20 pb-10 mt-auto border-t border-[color:var(--border-soft)]">
      <div className="container-site">
        {/* Phones: brand, then contact and site links as two short lists. */}
        <div className="md:hidden">
          <Brand className="text-center" />

          <div className="mt-10 space-y-7">
            <section>
              <h4 className={`${headingClass} !mb-3 text-center`}>Kontakt</h4>
              <ul className="overflow-hidden rounded-2xl bg-white divide-y divide-[color:var(--marin)]/[0.08] shadow-[0_14px_36px_-30px_rgba(23,59,96,0.4)]">
                <li>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={rowClass}>
                    <span className="inline-flex items-center gap-2.5 text-[color:var(--glod)]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
                        <path d="M3.5 10h17M8 3v4M16 3v4" />
                      </svg>
                      Boka ett samtal
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className={rowClass}>
                    <span className="inline-flex min-w-0 items-center gap-2.5">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="shrink-0 text-[color:var(--glod)]">
                        <rect x="3" y="5" width="18" height="14" rx="2.5" />
                        <path d="M3.5 6.5 12 13l8.5-6.5" />
                      </svg>
                      <span className="truncate">{EMAIL}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <Link href="/kontakt" className={rowClass}>
                    <span className="inline-flex items-center gap-2.5">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-[color:var(--glod)]">
                        <path d="M21 12a8.5 8.5 0 0 1-12.3 7.6L3 21l1.5-5.4A8.5 8.5 0 1 1 21 12z" />
                      </svg>
                      Kontaktformulär
                    </span>
                  </Link>
                </li>
              </ul>
            </section>

            <nav aria-label="Sidfot">
              <h4 className={`${headingClass} !mb-3 text-center`}>Sajten</h4>
              <ul className="overflow-hidden rounded-2xl bg-white divide-y divide-[color:var(--marin)]/[0.08] shadow-[0_14px_36px_-30px_rgba(23,59,96,0.4)]">
                {SITE_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={rowClass}>
                      {l.label}
                      </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Desktop: four columns. */}
        <div className="hidden md:grid md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-12">
          <Brand />

          <div>
            <h4 className={headingClass}>Sajten</h4>
            <ul className="space-y-1 text-[0.95rem] text-ink-soft">
              {SITE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={headingClass}>Kontakt</h4>
            <ul className="space-y-1 text-[0.95rem] text-ink-soft">
              <li><a href={`mailto:${EMAIL}`} className={linkClass}>{EMAIL}</a></li>
              <li><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>Boka ett samtal</a></li>
              <li><Link href="/kontakt" className={linkClass}>Kontaktformulär</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={headingClass}>Juridiskt</h4>
            <ul className="space-y-1 text-[0.95rem] text-ink-soft">
              <li><Link href="/integritetspolicy" className={linkClass}>Integritetspolicy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-[color:var(--marin)]/15 flex flex-col md:flex-row justify-between gap-2 md:gap-3 text-center md:text-left text-[0.8rem] text-muted">
          <p>© 2026 Ola Wallström, Perspektivo i Sverige AB</p>
          <p className="md:hidden">
            <Link href="/integritetspolicy" className="inline-block py-2.5 underline underline-offset-4 hover:text-[color:var(--glod)]">
              Integritetspolicy
            </Link>
          </p>
          <p className="hidden md:block font-[family-name:var(--font-heading)] text-[color:var(--marin)]/70">Autentisk affärsutveckling</p>
        </div>
      </div>
    </footer>
  );
}
