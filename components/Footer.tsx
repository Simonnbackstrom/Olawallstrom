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
              Autentisk affärsutveckling. Äkta, rakt och med riktning framåt, för dig som vill
              äga din tid och ditt företag.
            </p>
            <div className="flex gap-3 mt-7">
              <a
                href="https://www.instagram.com/ola.wallstrom/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full text-white shadow-[0_6px_16px_-8px_rgba(214,41,118,0.7)] transition-[translate,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-8px_rgba(214,41,118,0.75)]"
                style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-[0_6px_16px_-8px_rgba(10,102,194,0.7)] transition-[translate,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-8px_rgba(10,102,194,0.75)]"
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
              <li><Link href="/metod" className="hover:text-[color:var(--glod)] transition-colors">VIP-coaching</Link></li>
              <li><Link href="/boardroom" className="hover:text-[color:var(--glod)] transition-colors">Boardroom</Link></li>
              <li><Link href="/webinar" className="hover:text-[color:var(--glod)] transition-colors">Webinar</Link></li>
              <li><Link href="/resultat" className="hover:text-[color:var(--glod)] transition-colors">Resultat</Link></li>
              <li><Link href="/inspiration" className="hover:text-[color:var(--glod)] transition-colors">Inspirationsbrev</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-raleway)] font-bold text-[color:var(--marin)] mb-5 text-[0.78rem] tracking-[0.18em] uppercase">
              Kontakt
            </h4>
            <ul className="space-y-3 text-[0.95rem] text-ink-soft">
              <li><a href="mailto:ola@olawallstrom.com" className="hover:text-[color:var(--glod)] transition-colors">ola@olawallstrom.com</a></li>
              <li><a href="https://calendly.com/olawallstrom/30min" target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--glod)] transition-colors">Boka strategisamtal</a></li>
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
          <p>© 2026 Ola Wallström, Perspektivo i Sverige AB</p>
          <p className="italic font-[family-name:var(--font-lora)] text-[color:var(--marin)]/70">Autentisk affärsutveckling</p>
        </div>
      </div>
    </footer>
  );
}
