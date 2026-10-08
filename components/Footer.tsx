import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="sec-sand pt-20 pb-10 mt-auto border-t border-[color:var(--border-soft)]">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/logo-horizontal.png"
              alt="Ola Wallström"
              width={1287}
              height={234}
              className="h-9 w-auto mb-6"
            />
            <p className="text-[0.95rem] leading-relaxed text-ink-soft max-w-sm">
              Autentisk affärsutveckling. Äkta, rakt och med riktning framåt — för dig som vill
              äga din tid och ditt företag.
            </p>
            <div className="flex gap-3 mt-7">
              <a
                href="https://www.instagram.com/ola.wallstrom/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-[color:var(--marin)]/20 text-[color:var(--marin)] hover:border-[color:var(--glod)] hover:text-[color:var(--glod)] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-[color:var(--marin)]/20 text-[color:var(--marin)] hover:border-[color:var(--glod)] hover:text-[color:var(--glod)] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5z" />
                  <path d="M.5 8h4V24h-4z" />
                  <path d="M8 8h3.8v2.2h.1c.5-1 1.9-2.4 4.1-2.4 4.4 0 5.2 2.9 5.2 6.7V24h-4v-8.4c0-2-.1-4.5-2.8-4.5s-3.2 2.1-3.2 4.3V24H8z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-raleway)] font-bold text-[color:var(--marin)] mb-5 text-[0.78rem] tracking-[0.18em] uppercase">
              Sajten
            </h4>
            <ul className="space-y-3 text-[0.95rem] text-ink-soft">
              <li><Link href="/om-ola" className="hover:text-[color:var(--glod)] transition-colors">Om Ola</Link></li>
              <li><Link href="/metod" className="hover:text-[color:var(--glod)] transition-colors">Metoden</Link></li>
              <li><Link href="/boardroom" className="hover:text-[color:var(--glod)] transition-colors">Boardroom</Link></li>
              <li><Link href="/resultat" className="hover:text-[color:var(--glod)] transition-colors">Resultat</Link></li>
              <li><Link href="/nyhetsbrev" className="hover:text-[color:var(--glod)] transition-colors">Nyhetsbrev</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-raleway)] font-bold text-[color:var(--marin)] mb-5 text-[0.78rem] tracking-[0.18em] uppercase">
              Kontakt
            </h4>
            <ul className="space-y-3 text-[0.95rem] text-ink-soft">
              <li><a href="mailto:ola@olawallstrom.com" className="hover:text-[color:var(--glod)] transition-colors">ola@olawallstrom.com</a></li>
              <li><Link href="/strategisession" className="hover:text-[color:var(--glod)] transition-colors">Boka strategisamtal</Link></li>
              <li><Link href="/kontakt" className="hover:text-[color:var(--glod)] transition-colors">Kontaktformulär</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-raleway)] font-bold text-[color:var(--marin)] mb-5 text-[0.78rem] tracking-[0.18em] uppercase">
              Juridiskt
            </h4>
            <ul className="space-y-3 text-[0.95rem] text-ink-soft">
              <li><Link href="/integritetspolicy" className="hover:text-[color:var(--glod)] transition-colors">Integritetspolicy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[color:var(--marin)]/15 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted">
          <p>© 2026 Ola Wallström · Perspektivo i Sverige AB</p>
          <p className="italic font-[family-name:var(--font-lora)] text-[color:var(--marin)]/70">Autentisk affärsutveckling</p>
        </div>
      </div>
    </footer>
  );
}
