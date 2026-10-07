import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B0E14] text-white/80 pt-20 pb-10 mt-auto">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.png" alt="" width={48} height={48} className="h-10 w-auto brightness-200" />
              <span className="font-[family-name:var(--font-manrope)] font-extrabold text-white text-lg">
                Ola Wallström
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/70 max-w-sm">
              Serieentreprenör och mentor. Jag hjälper bolagsägare att gå från 10 till 50 Mkr —
              utan att offra livet runt omkring.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/ola.wallstrom/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/15 hover:border-[#E8500A] hover:text-[#E8500A] transition-colors"
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
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/15 hover:border-[#E8500A] hover:text-[#E8500A] transition-colors"
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
            <h4 className="font-[family-name:var(--font-manrope)] font-bold text-white mb-5 text-sm tracking-wide uppercase">
              Sajten
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/om-ola" className="hover:text-[#E8500A] transition-colors">Om Ola</Link></li>
              <li><Link href="/metod" className="hover:text-[#E8500A] transition-colors">Metoden</Link></li>
              <li><Link href="/resultat" className="hover:text-[#E8500A] transition-colors">Resultat</Link></li>
              <li><Link href="/nyhetsbrev" className="hover:text-[#E8500A] transition-colors">Nyhetsbrev</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-manrope)] font-bold text-white mb-5 text-sm tracking-wide uppercase">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:ola@olawallstrom.com" className="hover:text-[#E8500A] transition-colors">ola@olawallstrom.com</a></li>
              <li><a href="https://calendly.com/olawallstrom/30min" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8500A] transition-colors">Boka strategisamtal</a></li>
              <li><Link href="/kontakt" className="hover:text-[#E8500A] transition-colors">Kontaktformulär</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-manrope)] font-bold text-white mb-5 text-sm tracking-wide uppercase">
              Juridiskt
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/integritetspolicy" className="hover:text-[#E8500A] transition-colors">Integritetspolicy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Ola Wallström / Perspektivo i Sverige AB</p>
          <p>Serieentreprenör · Mentor · Bolagsutveckling 10–50 Mkr</p>
        </div>
      </div>
    </footer>
  );
}
