import type { Metadata } from "next";
import Link from "next/link";
const LINKEDIN_URL = "https://se.linkedin.com/in/olawallstrom";

export const metadata: Metadata = {
  title: "Tack. Du är anmäld",
  description: "Tack för din anmälan till Ola Wallströms webinar. Bekräftelsen med Zoom-länken ligger i din inkorg.",
  alternates: { canonical: "/webinar/anmald" },
  robots: { index: false, follow: false },
};

/* One shared thank-you page for all three sessions (no date shown), so it works as a single conversion URL. */
export default function WebinarAnmaldPage() {
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

          <h1 className="reveal reveal-d1 !text-white">Tack. Du är anmäld.</h1>

          <p className="reveal reveal-d2 mt-6 text-[1.1rem] md:text-[1.2rem] leading-relaxed text-[color:var(--papper)]/85 max-w-xl mx-auto">
            Bekräftelsen med Zoom-länken ligger i din mejl. Hittar du inget mejl, titta i
            skräpposten.
          </p>

          <div className="reveal reveal-d3 mt-10 flex justify-center">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
              Connecta på LinkedIn
            </a>
          </div>

          <p className="reveal reveal-d4 mt-12 font-[family-name:var(--font-heading)] italic text-[color:var(--papper)]/70">
            / Ola Wallström
          </p>

          <div className="reveal reveal-d5 mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-[color:var(--papper)]/75 underline underline-offset-4 hover:text-[color:var(--glod)] transition-colors"
            >
              Till startsidan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
