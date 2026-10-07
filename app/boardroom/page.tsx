import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BoardroomWheel from "@/components/BoardroomWheel";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Boardroom 2027 — Ett år. Fyra teman.",
  description:
    "Tolv månader för dig som VD eller ägare. Fyra teman, 19 Boardroom sessions, 4 kvartalsavstamp, 4 workshopdagar och personligt stöd hela vägen. 195 000 kr · max 15 deltagare.",
  alternates: { canonical: "/boardroom" },
};

const THEMES = [
  {
    q: "Q1 · jan–mar",
    title: "Mental klarhet",
    body: "Riktning, fokus, prioriteringar och kontroll över tid och energi.",
    bg: "bg-[#1C2944]",
    text: "text-white",
    accent: "text-white/60",
  },
  {
    q: "Q2 · apr–jun",
    title: "Stjärnledarskap",
    body: "Få människor att ta ansvar, tänka själva och fungera bättre tillsammans.",
    bg: "bg-[#2E6BB8]",
    text: "text-white",
    accent: "text-white/70",
  },
  {
    q: "Q3 · jul–sep",
    title: "Autentisk affärsutveckling",
    body: "Utveckla affären utifrån egna styrkor, kundvärde och tydlig riktning.",
    bg: "bg-[#E8500A]",
    text: "text-white",
    accent: "text-white/75",
  },
  {
    q: "Q4 · okt–dec",
    title: "Smart säljstrategi",
    body: "Ett sälj som är tydligt, hållbart och mindre personberoende.",
    bg: "bg-[#FFC9A6]",
    text: "text-[#0B0E14]",
    accent: "text-[#0B0E14]/60",
  },
];

const LOOP_STEPS = [
  { n: "01", title: "Frågebatteri", body: "Reflektion inför kvartalets tema." },
  { n: "02", title: "Kvartalsavstamp", body: "Två timmars digital fördjupning." },
  { n: "03", title: "Workshopdag", body: "Heldag tillsammans på temat." },
  { n: "04", title: "Boardroom sessions", body: "4–5 digitala träffar à ca 1 tim." },
];

const JOURNEY = [
  {
    tag: "START",
    title: "Personlig startworkshop",
    meta: "4 tim i Stockholm",
    body: "Riktning, viktigaste förflyttningar och en personlig plan.",
    bg: "bg-white",
    text: "text-[#0B0E14]",
    accent: "text-[#E8500A]",
    ring: "ring-[#E2DDD8]",
  },
  {
    tag: "Q1 · JAN–MAR",
    title: "Mental klarhet",
    meta: "Avstamp 12 jan · WS 21 jan · 5 sessions",
    body: "Riktning, fokus och kontroll över tid och energi.",
    bg: "bg-[#1C2944]",
    text: "text-white",
    accent: "text-white/60",
    ring: "ring-white/10",
  },
  {
    tag: "Q2 · APR–JUN",
    title: "Stjärnledarskap",
    meta: "Avstamp 6 apr · WS 15 apr · 5 sessions",
    body: "Få människor att ta ansvar och fungera tillsammans.",
    bg: "bg-[#2E6BB8]",
    text: "text-white",
    accent: "text-white/70",
    ring: "ring-white/10",
  },
  {
    tag: "Q3 · JUL–SEP",
    title: "Autentisk affärsutveckling",
    meta: "Avstamp 29 jun · WS 7 okt · 4 sessions",
    body: "Utveckla affären utifrån egna styrkor och kundvärde.",
    bg: "bg-[#E8500A]",
    text: "text-white",
    accent: "text-white/75",
    ring: "ring-white/10",
  },
  {
    tag: "Q4 · OKT–DEC",
    title: "Smart säljstrategi",
    meta: "Avstamp 28 sep · WS 8 okt · 5 sessions",
    body: "Ett sälj som är tydligt, hållbart och mindre personberoende.",
    bg: "bg-[#FFC9A6]",
    text: "text-[#0B0E14]",
    accent: "text-[#0B0E14]/60",
    ring: "ring-[#E8500A]/20",
  },
];

const INCLUDED = [
  "19 Boardroom sessions à ca 1 timme — digitala träffar",
  "4 kvartalsavstamp — frågebatteri + 2 h digital fördjupning",
  "4 workshopdagar — 21 jan · 15 apr · 7–8 okt",
  "Personlig startworkshop — 4 tim i Stockholm",
  "3 personliga coachingsamtal à 45 min — bara du och Ola",
  "Signal-kanal med Ola och de andra ägarna — året runt",
  "Ett litet rum av erfarna ägare — max 15 deltagare",
];

export default function BoardroomPage() {
  return (
    <>
      <PageHero
        eyebrow="Program 2027"
        title={
          <>
            Boardroom 2027.<br />
            <em className="not-italic text-[#E8500A]">Ett år. Fyra teman.</em>
          </>
        }
        intro="Tolv månader för dig som VD eller ägare — i ett litet rum av erfarna ägare, med personligt stöd hela vägen. Fyra teman, en gemensam rytm och en handfast kundresa från start till Q4."
      />

      <BoardroomWheel />

      {/* THEMES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <div className="max-w-2xl mb-14">
            <p className="reveal eyebrow mb-4">Fyra teman</p>
            <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(28px,4vw,46px)] leading-[1.1] text-[#0B0E14]">
              Ett år tillsammans — fyra riktningar att växa i.
            </h2>
          </div>
          <div className="grid gap-5 md:gap-6 sm:grid-cols-2">
            {THEMES.map((t, i) => (
              <article
                key={t.title}
                className={`reveal reveal-d${(i % 4) + 1} rounded-3xl p-8 md:p-10 ${t.bg} ${t.text} transition-transform hover:-translate-y-1`}
              >
                <div className={`text-[11px] font-bold tracking-[0.2em] uppercase mb-5 ${t.accent}`}>
                  {t.q}
                </div>
                <h3 className="font-[family-name:var(--font-manrope)] font-extrabold text-[26px] md:text-[30px] leading-tight">
                  {t.title}
                </h3>
                <p className={`mt-4 text-[15.5px] leading-relaxed ${t.accent}`}>{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUARTER LOOP */}
      <section className="py-20 md:py-28 bg-[#F7F4F0]">
        <div className="container-site">
          <div className="max-w-2xl mb-14">
            <p className="reveal eyebrow mb-4">Kvartalsloopen</p>
            <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(28px,4vw,46px)] leading-[1.1] text-[#0B0E14]">
              Samma rytm — fyra varv per år.
            </h2>
            <p className="reveal reveal-d2 mt-5 text-[16.5px] text-[#0B0E14]/70 leading-relaxed max-w-xl">
              Varje tema får 90 dagar — fyra steg som bygger på varandra. Du vet alltid var i resan du är.
            </p>
          </div>

          <div className="relative grid gap-5 md:gap-6 md:grid-cols-4">
            {LOOP_STEPS.map((s, i) => (
              <article
                key={s.n}
                className={`reveal reveal-d${(i % 4) + 1} relative rounded-2xl bg-white ring-1 ring-[#E2DDD8] p-7`}
              >
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8500A] mb-3">
                  Steg {s.n}
                </div>
                <h3 className="font-[family-name:var(--font-manrope)] font-extrabold text-[20px] leading-tight text-[#0B0E14]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] text-[#0B0E14]/70 leading-relaxed">{s.body}</p>
                {i < LOOP_STEPS.length - 1 && (
                  <svg
                    aria-hidden
                    className="hidden md:block absolute top-1/2 -right-3.5 -translate-y-1/2 text-[#E8500A]"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                )}
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-[12.5px] font-semibold">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white ring-1 ring-[#E2DDD8] text-[#0B0E14]/70">
              Ett tema · 90 dagar
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1C2944] text-white">Q1 Mental klarhet</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2E6BB8] text-white">Q2 Stjärnledarskap</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E8500A] text-white">Q3 Autentisk affärsutveckling</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFC9A6] text-[#0B0E14]">Q4 Smart säljstrategi</span>
          </div>
        </div>
      </section>

      {/* CUSTOMER JOURNEY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <div className="max-w-2xl mb-14">
            <p className="reveal eyebrow mb-4">Kundresan</p>
            <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(28px,4vw,46px)] leading-[1.1] text-[#0B0E14]">
              Din resa i Boardroom.
            </h2>
            <p className="reveal reveal-d2 mt-5 text-[16.5px] text-[#0B0E14]/70 leading-relaxed max-w-xl">
              Tolv månader — från en personlig start till fyra teman tillsammans med andra erfarna ägare.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-5 md:gap-3">
            {JOURNEY.map((j, i) => (
              <article
                key={j.tag}
                className={`reveal reveal-d${(i % 5) + 1} rounded-2xl p-6 ${j.bg} ${j.text} ring-1 ${j.ring} flex flex-col`}
              >
                <div className={`text-[10.5px] font-bold tracking-[0.18em] uppercase mb-3 ${j.accent}`}>
                  {j.tag}
                </div>
                <h3 className="font-[family-name:var(--font-manrope)] font-extrabold text-[18px] md:text-[19px] leading-tight">
                  {j.title}
                </h3>
                <p className={`mt-3 text-[13.5px] leading-relaxed ${j.accent}`}>{j.body}</p>
                <div className={`mt-auto pt-4 text-[12px] font-semibold ${j.accent}`}>{j.meta}</div>
              </article>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-[#E2DDD8]">
            <p className="eyebrow mb-5">Löpande under hela året</p>
            <ul className="grid gap-3 md:grid-cols-3">
              {[
                "3 personliga coachingsamtal à 45 min — bara du och Ola",
                "Signal-kanal med Ola och de andra ägarna — stöd mellan träffarna",
                "19 Boardroom sessions à ca 1 tim — frågor, utmaningar och beslut",
              ].map((row) => (
                <li
                  key={row}
                  className="flex gap-3 items-start rounded-xl bg-[#F7F4F0] px-5 py-4 text-[14.5px] text-[#0B0E14]/85"
                >
                  <span className="shrink-0 mt-0.5 h-5 w-5 inline-flex items-center justify-center rounded-full bg-[#E8500A]/15 text-[#E8500A]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {row}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* INCLUDED + PRICE */}
      <section className="py-20 md:py-28 bg-[#0B0E14] text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(232,80,10,0.18) 0%, transparent 55%), radial-gradient(circle at 85% 80%, rgba(46,107,184,0.14) 0%, transparent 55%)",
          }}
        />
        <div className="container-site relative">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
            <div>
              <p className="reveal eyebrow mb-4">Det här ingår</p>
              <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(28px,4vw,46px)] leading-[1.1]">
                Hela året — i ett paket.
              </h2>
              <ul className="reveal reveal-d2 mt-8 space-y-3">
                {INCLUDED.map((row) => (
                  <li key={row} className="flex gap-3 items-start text-[15.5px] text-white/90">
                    <span className="shrink-0 mt-0.5 h-6 w-6 inline-flex items-center justify-center rounded-full bg-[#E8500A]/25 text-[#E8500A]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {row}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal reveal-d3 rounded-3xl bg-white text-[#0B0E14] p-8 md:p-10 ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8500A] mb-3">
                Boardroom 2027
              </div>
              <h3 className="font-[family-name:var(--font-manrope)] font-extrabold text-[26px] md:text-[30px] leading-tight text-[#0B0E14]">
                195 000 kr
              </h3>
              <p className="mt-2 text-[14px] text-[#6B7280]">
                12 månader · max 15 deltagare · exkl. moms
              </p>
              <div className="mt-6 pt-6 border-t border-[#E2DDD8] flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-[#0B0E14]/75">
                {["Litet rum", "Personligt stöd", "Erfarna ägare"].map((m) => (
                  <span key={m} className="inline-flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8500A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {m}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="https://calendly.com/olawallstrom/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center"
                >
                  Boka strategisamtal
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </a>
                <Link href="/strategisession" className="btn-ghost justify-center">
                  Läs mer om strategisamtalet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="py-20 md:py-24 bg-[#F7F4F0]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <p className="reveal eyebrow mb-4 justify-center">För vem</p>
            <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(26px,3.6vw,40px)] leading-tight text-[#0B0E14]">
              För dig som VD eller ägare som vill växa tillsammans med andra erfarna ägare.
            </h2>
            <p className="reveal reveal-d2 mt-5 text-[16.5px] text-[#0B0E14]/70 leading-relaxed">
              Du leder ett bolag i spannet 10–50 Mkr, är redo att ändra på dig själv — inte bara teamet —
              och vill ha ett litet rum där du både får hjälp och bidrar med din egen erfarenhet.
            </p>
            <div className="reveal reveal-d3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://calendly.com/olawallstrom/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Boka strategisamtal
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </a>
              <Link href="/om-ola" className="btn-ghost">
                Mer om Ola
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand tone="dark" />
    </>
  );
}
