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
    bg: "bg-[color:var(--marin)]",
    text: "text-[color:var(--papper)]",
    accent: "text-[color:var(--papper)]/65",
  },
  {
    q: "Q2 · apr–jun",
    title: "Stjärnledarskap",
    body: "Få människor att ta ansvar, tänka själva och fungera bättre tillsammans.",
    bg: "bg-[color:var(--olabla)]",
    text: "text-[color:var(--papper)]",
    accent: "text-[color:var(--papper)]/75",
  },
  {
    q: "Q3 · jul–sep",
    title: "Autentisk affärsutveckling",
    body: "Utveckla affären utifrån egna styrkor, kundvärde och tydlig riktning.",
    bg: "bg-[color:var(--glod)]",
    text: "text-white",
    accent: "text-white/80",
  },
  {
    q: "Q4 · okt–dec",
    title: "Smart säljstrategi",
    body: "Ett sälj som är tydligt, hållbart och mindre personberoende.",
    bg: "bg-[color:var(--sand)]",
    text: "text-[color:var(--marin)]",
    accent: "text-[color:var(--marin)]/70",
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
    text: "text-[color:var(--marin)]",
    accent: "text-ink-soft",
    border: "border border-[color:var(--border-soft)]",
  },
  {
    tag: "Q1 · JAN–MAR",
    title: "Mental klarhet",
    meta: "Avstamp 12 jan · WS 21 jan · 5 sessions",
    body: "Riktning, fokus och kontroll över tid och energi.",
    bg: "bg-[color:var(--marin)]",
    text: "text-[color:var(--papper)]",
    accent: "text-[color:var(--papper)]/65",
    border: "",
  },
  {
    tag: "Q2 · APR–JUN",
    title: "Stjärnledarskap",
    meta: "Avstamp 6 apr · WS 15 apr · 5 sessions",
    body: "Få människor att ta ansvar och fungera tillsammans.",
    bg: "bg-[color:var(--olabla)]",
    text: "text-[color:var(--papper)]",
    accent: "text-[color:var(--papper)]/75",
    border: "",
  },
  {
    tag: "Q3 · JUL–SEP",
    title: "Autentisk affärsutveckling",
    meta: "Avstamp 29 jun · WS 7 okt · 4 sessions",
    body: "Utveckla affären utifrån egna styrkor och kundvärde.",
    bg: "bg-[color:var(--glod)]",
    text: "text-white",
    accent: "text-white/80",
    border: "",
  },
  {
    tag: "Q4 · OKT–DEC",
    title: "Smart säljstrategi",
    meta: "Avstamp 28 sep · WS 8 okt · 5 sessions",
    body: "Ett sälj som är tydligt, hållbart och mindre personberoende.",
    bg: "bg-[color:var(--sand)]",
    text: "text-[color:var(--marin)]",
    accent: "text-[color:var(--marin)]/70",
    border: "border border-[color:var(--glod)]/20",
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
            <em>Ett år. Fyra teman.</em>
          </>
        }
        intro="Tolv månader för dig som VD eller ägare — i ett litet rum av erfarna ägare, med personligt stöd hela vägen. Fyra teman, en gemensam rytm och en handfast kundresa från start till Q4."
      />

      <BoardroomWheel />

      {/* THEMES */}
      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="max-w-2xl mb-14 md:mb-16">
            <p className="reveal eyebrow mb-5">Fyra teman</p>
            <h2 className="reveal reveal-d1">Ett år tillsammans — fyra riktningar att växa i.</h2>
          </div>
          <div className="grid gap-5 md:gap-6 sm:grid-cols-2">
            {THEMES.map((t, i) => (
              <article
                key={t.title}
                className={`reveal reveal-d${(i % 4) + 1} rounded-3xl p-8 md:p-10 ${t.bg} ${t.text} transition-transform hover:-translate-y-1`}
              >
                <div className={`text-[0.72rem] font-bold tracking-[0.22em] uppercase mb-5 ${t.accent}`}>
                  {t.q}
                </div>
                <h3 className={`font-[family-name:var(--font-lora)] font-semibold text-[1.5rem] md:text-[1.8rem] leading-tight ${t.text}`}>
                  {t.title}
                </h3>
                <p className={`mt-4 text-[1rem] leading-relaxed ${t.accent}`}>{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUARTER LOOP */}
      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-2xl mb-14 md:mb-16">
            <p className="reveal eyebrow mb-5">Kvartalsloopen</p>
            <h2 className="reveal reveal-d1">Samma rytm — fyra varv per år.</h2>
            <p className="reveal reveal-d2 mt-6 text-[1.02rem] text-ink-soft leading-relaxed max-w-xl">
              Varje tema får 90 dagar — fyra steg som bygger på varandra. Du vet alltid var i resan du är.
            </p>
          </div>

          <div className="relative grid gap-5 md:gap-6 md:grid-cols-4">
            {LOOP_STEPS.map((s, i) => (
              <article
                key={s.n}
                className={`reveal reveal-d${(i % 4) + 1} relative rounded-2xl bg-white border border-[color:var(--border-soft)] p-7`}
              >
                <div className="eyebrow-upper mb-4">Steg {s.n}</div>
                <h3 className="text-[1.15rem] leading-tight mt-2">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] text-ink-soft leading-relaxed">{s.body}</p>
                {i < LOOP_STEPS.length - 1 && (
                  <svg
                    aria-hidden
                    className="hidden md:block absolute top-1/2 -right-3.5 -translate-y-1/2 text-[color:var(--glod)]"
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

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-[0.78rem] font-semibold">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[color:var(--border-soft)] text-ink-soft">
              Ett tema · 90 dagar
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[color:var(--marin)] text-[color:var(--papper)]">Q1 Mental klarhet</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[color:var(--olabla)] text-[color:var(--papper)]">Q2 Stjärnledarskap</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[color:var(--glod)] text-white">Q3 Autentisk affärsutveckling</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[color:var(--sand)] text-[color:var(--marin)] border border-[color:var(--glod)]/30">Q4 Smart säljstrategi</span>
          </div>
        </div>
      </section>

      {/* CUSTOMER JOURNEY */}
      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="max-w-2xl mb-14 md:mb-16">
            <p className="reveal eyebrow mb-5">Kundresan</p>
            <h2 className="reveal reveal-d1">Din resa i Boardroom.</h2>
            <p className="reveal reveal-d2 mt-6 text-[1.02rem] text-ink-soft leading-relaxed max-w-xl">
              Tolv månader — från en personlig start till fyra teman tillsammans med andra erfarna ägare.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-5 md:gap-3">
            {JOURNEY.map((j, i) => (
              <article
                key={j.tag}
                className={`reveal reveal-d${(i % 5) + 1} rounded-2xl p-6 ${j.bg} ${j.text} ${j.border} flex flex-col`}
              >
                <div className={`text-[0.68rem] font-bold tracking-[0.18em] uppercase mb-3 ${j.accent}`}>
                  {j.tag}
                </div>
                <h3 className={`font-[family-name:var(--font-lora)] font-semibold text-[1.1rem] md:text-[1.15rem] leading-tight ${j.text}`}>
                  {j.title}
                </h3>
                <p className={`mt-3 text-[0.9rem] leading-relaxed ${j.accent}`}>{j.body}</p>
                <div className={`mt-auto pt-4 text-[0.78rem] font-semibold ${j.accent}`}>{j.meta}</div>
              </article>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-[color:var(--border-soft)]">
            <p className="eyebrow mb-5">Löpande under hela året</p>
            <ul className="grid gap-3 md:grid-cols-3">
              {[
                "3 personliga coachingsamtal à 45 min — bara du och Ola",
                "Signal-kanal med Ola och de andra ägarna — stöd mellan träffarna",
                "19 Boardroom sessions à ca 1 tim — frågor, utmaningar och beslut",
              ].map((row) => (
                <li
                  key={row}
                  className="flex gap-3 items-start rounded-xl bg-sand px-6 py-5 text-[0.95rem] text-ink"
                >
                  <span className="shrink-0 mt-0.5 h-5 w-5 inline-flex items-center justify-center rounded-full bg-[color:var(--glod-dim)] text-[color:var(--glod)]">
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
      <section className="py-[var(--section-y)] sec-marin relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(242,106,46,0.2) 0%, transparent 55%), radial-gradient(circle at 85% 80%, rgba(42,98,160,0.18) 0%, transparent 55%)",
          }}
        />
        <div className="container-site relative">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
            <div>
              <p className="reveal eyebrow mb-5">Det här ingår</p>
              <h2 className="reveal reveal-d1">Hela året — i ett paket.</h2>
              <ul className="reveal reveal-d2 mt-10 space-y-3">
                {INCLUDED.map((row) => (
                  <li key={row} className="flex gap-3 items-start text-[1rem] text-[color:var(--papper)]/90">
                    <span className="shrink-0 mt-0.5 h-6 w-6 inline-flex items-center justify-center rounded-full bg-[color:var(--glod)]/25 text-[color:var(--glod)]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {row}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal reveal-d3 rounded-3xl bg-papper text-ink p-8 md:p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
              <p className="eyebrow-upper mb-4">Boardroom 2027</p>
              <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[2.2rem] md:text-[2.5rem] leading-tight text-[color:var(--marin)]">
                195 000 kr
              </h3>
              <p className="mt-2 text-[0.9rem] text-muted">
                12 månader · max 15 deltagare · exkl. moms
              </p>
              <div className="mt-6 pt-6 border-t border-[color:var(--border-soft)] flex flex-wrap gap-x-5 gap-y-2 text-[0.85rem] text-ink-soft">
                {["Litet rum", "Personligt stöd", "Erfarna ägare"].map((m) => (
                  <span key={m} className="inline-flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--glod)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {m}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <Link href="/strategisession" className="btn-primary justify-center">
                  Boka strategisamtal
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </Link>
                <Link href="/kontakt" className="btn-ghost justify-center">
                  Skicka ett meddelande
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <p className="reveal eyebrow mb-5 justify-center">För vem</p>
            <h2 className="reveal reveal-d1">
              För dig som VD eller ägare som vill växa tillsammans med andra erfarna ägare.
            </h2>
            <p className="reveal reveal-d2 mt-6 text-[1.02rem] text-ink-soft leading-relaxed">
              Du leder ett bolag i spannet 10–50 Mkr, är redo att ändra på dig själv — inte bara teamet —
              och vill ha ett litet rum där du både får hjälp och bidrar med din egen erfarenhet.
            </p>
            <div className="reveal reveal-d3 mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/strategisession" className="btn-primary">
                Boka strategisamtal
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </Link>
              <Link href="/om-ola" className="btn-ghost">
                Mer om Ola
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand tone="marin" />
    </>
  );
}
