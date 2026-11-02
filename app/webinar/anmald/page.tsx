import type { Metadata } from "next";
import Link from "next/link";
import { googleCalendarUrl, outlookCalendarUrl, sessionForId } from "@/lib/webinar";

export const metadata: Metadata = {
  title: "Tack. Du är anmäld",
  description: "Tack för din anmälan till Ola Wallströms webinar. Bekräftelsen ligger i din inkorg och Zoom-länken skickas före webinaret.",
  alternates: { canonical: "/webinar/anmald" },
  robots: { index: false, follow: false },
};

/* searchParams is read directly, so skip prerendering for this route. */
export const instant = false;

export default async function WebinarAnmaldPage({
  searchParams,
}: {
  searchParams: Promise<{ datum?: string }>;
}) {
  const { datum } = await searchParams;
  const session = sessionForId(datum);

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
            {session.label} kl. {session.timeLabel}. Bekräftelsen ligger i din mejl, och
            Zoom-länken får du före webinaret. Hittar du inget mejl, titta i skräpposten.
          </p>

          <div className="reveal reveal-d3 mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={googleCalendarUrl(session.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center"
            >
              Lägg till i Google Kalender
            </a>
            <a
              href={outlookCalendarUrl(session.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark-ghost justify-center"
            >
              Lägg till i Outlook
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
