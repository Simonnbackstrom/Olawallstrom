import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tack för dina svar",
  description: "Tack för att du fyllde i uppvärmningsformuläret inför webinaret.",
  alternates: { canonical: "/webinar/tack" },
  robots: { index: false, follow: false },
};

export default function WebinarTackPage() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 sec-marin overflow-hidden min-h-[70vh] flex items-center">
      <div
        aria-hidden
        className="absolute -top-32 right-[-10%] w-[640px] h-[640px] rounded-full pointer-events-none opacity-60"
        style={{ background: "radial-gradient(circle, rgba(242,106,46,0.22) 0%, transparent 65%)" }}
      />

      <div className="container-site relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal mx-auto mb-8 h-16 w-16 rounded-full bg-[color:var(--glod)]/20 inline-flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--glod)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 className="reveal reveal-d1 !text-white">Tack för dina svar!</h1>

          <p className="reveal reveal-d2 mt-6 text-[1.1rem] md:text-[1.2rem] leading-relaxed text-[color:var(--papper)]/85 max-w-xl mx-auto">
            Vi ses live på webinaret. Glöm inte att boka in tiden i din kalender om du inte redan har gjort det.
          </p>

          <p className="reveal reveal-d3 mt-10 font-[family-name:var(--font-heading)] italic text-[color:var(--papper)]/70">
            / Ola Wallström
          </p>

          <div className="reveal reveal-d4 mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-[color:var(--papper)]/80 hover:text-[color:var(--glod)] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="11 6 5 12 11 18" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Till startsidan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
