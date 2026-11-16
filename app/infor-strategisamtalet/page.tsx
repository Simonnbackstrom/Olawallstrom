import type { Metadata } from "next";
import Image from "next/image";
import StrategyPrepForm from "@/components/StrategyPrepForm";
import BookingTracker from "@/components/BookingTracker";
import PrepVideo from "@/components/PrepVideo";
import { PREP_VIDEO_SRC } from "@/lib/strategyPrep";

export const metadata: Metadata = {
  title: "Inför mötet",
  description: "Se filmen och gör en kort självskattning inför ditt strategisamtal med Ola Wallström.",
  alternates: { canonical: "/infor-strategisamtalet" },
  // Only for people who booked a call (link from the confirmation email / after booking).
  robots: { index: false, follow: false },
};

type Search = Record<string, string | string[] | undefined>;
const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

export default async function InforStrategisamtaletPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  // ?name=…&email=… from the confirmation email (Calendly's own names work too).
  const q = await searchParams;
  const name = first(q.name) || first(q.invitee_full_name);
  const email = first(q.email) || first(q.invitee_email);
  const firstName = name.trim().split(/\s+/)[0]?.slice(0, 40) ?? "";
  // Set only when Calendly redirects here right after a booking (not from the email link).
  const bookingId = (first(q.invitee_uuid) || first(q.event_start_time)).slice(0, 100);

  return (
    <>
      <BookingTracker bookingId={bookingId} firstName={firstName} email={email.trim().slice(0, 254)} />
      <section className="relative bg-papper overflow-hidden pt-8 pb-16 md:pt-10 md:pb-24">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(60% 45% at 50% 65%, rgba(242,106,46,0.10) 0%, transparent 70%)" }}
        />

        <div className="container-site relative">
          <Image
            src="/brand/logo-horizontal.png"
            alt="Ola Wallström"
            width={1289}
            height={236}
            priority
            className="mx-auto h-7 w-auto"
          />

          <div className="mt-12 md:mt-16 max-w-2xl mx-auto text-center">
            <p className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-[color:var(--marin)]/75">
              <span className="h-5 w-5 rounded-full bg-[color:var(--glod)] inline-flex items-center justify-center">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              {firstName ? `${firstName}, ditt möte är bokat` : "Ditt möte är bokat"}
            </p>
            <h1 className="mt-5 text-balance text-[color:var(--marin)]" style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", lineHeight: 1.04, letterSpacing: "-0.01em" }}>
              Inför mötet
            </h1>
            <p className="mt-5 text-[1.05rem] md:text-[1.15rem] leading-relaxed text-ink-soft text-pretty max-w-lg mx-auto">
              Se filmen och gör en kort självskattning innan vi ses. Då kan vi lägga våra 30
              minuter på det som spelar roll för dig.
            </p>
          </div>

          <div className="mt-10 md:mt-12 max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-[22px] md:rounded-[28px] overflow-hidden ring-1 ring-[color:var(--marin)]/10 shadow-[0_40px_90px_-40px_rgba(23,59,96,0.55)] bg-[#0f2742]">
              <PrepVideo src={PREP_VIDEO_SRC} />
            </div>

            <div className="mt-9 text-center">
              <a href="#svar" className="btn-primary justify-center w-full sm:w-auto">
                Till självskattningen
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </a>
              <p className="mt-4 text-[0.85rem] text-ink-soft">
                Film ca 6 min · 8 påståenden · ditt hjul direkt
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="svar" className="sec-sand py-14 md:py-20 scroll-mt-4">
        <div className="container-site">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <p className="eyebrow-upper text-[color:var(--glod)]">Tillväxthjulet</p>
              <h2 className="mt-3 text-balance">Självskattning</h2>
              <p className="mt-4 text-ink-soft leading-relaxed text-pretty">
                Ge varje påstående 0, 1 eller 2. Två påståenden per eker.
              </p>
              <p className="mt-4 inline-flex flex-wrap justify-center gap-x-4 gap-y-1 rounded-full bg-white/70 px-5 py-2 text-[0.88rem] text-[color:var(--marin)]">
                <span><strong>0</strong> stämmer inte</span>
                <span><strong>1</strong> stämmer delvis</span>
                <span><strong>2</strong> stämmer helt</span>
              </p>
            </div>

            <StrategyPrepForm initialName={name.slice(0, 200)} initialEmail={email.slice(0, 254)} />

          </div>
        </div>
      </section>
    </>
  );
}
