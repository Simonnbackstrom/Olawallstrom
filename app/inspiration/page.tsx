import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InspirationSignupForm from "@/components/InspirationSignupForm";
import MiniCtaBand from "@/components/MiniCtaBand";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://olawallstrom.com";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Inspiration", item: `${SITE_URL}/inspiration` },
  ],
};

export const metadata: Metadata = {
  title: "Inspirationsbrev: tankar för bolagsägare",
  description:
    "Inspirationsbrev från Ola Wallström. Korta, konkreta tankar om ledarskap, tillväxt och frihet, för dig som äger ett bolag mellan 10 och 50 Mkr. Gratis.",
  alternates: { canonical: "/inspiration" },
  openGraph: {
    title: "Inspirationsbrev: tankar för bolagsägare",
    description:
      "Korta, konkreta tankar om ledarskap, tillväxt och frihet, direkt till din inkorg.",
    url: "https://olawallstrom.com/inspiration",
    type: "website",
  },
};

const SAMPLE_LETTERS = [
  {
    nr: "Nr 47",
    topic: "Ledarskap",
    title: "Varför kunderna inte är ditt egentliga problem",
    teaser:
      "Nästan varje gång en bolagsägare säger att det är kunderna som bromsar visar det sig vara något annat. Här är det jag letar efter först.",
  },
  {
    nr: "Nr 46",
    topic: "Tid",
    title: "Fyra timmar i veckan som bygger ett självgående bolag",
    teaser:
      "Ett konkret block i kalendern som flyttar mer än något annat du gör. Jag beskriver exakt hur mina klienter använder det.",
  },
  {
    nr: "Nr 45",
    topic: "Delegering",
    title: "Delegeringens dolda kostnad, och varför den är värd den",
    teaser:
      "Första året efter att du släpper taget om något blir det ofta sämre. Det är inte ett misslyckande. Det är priset.",
  },
  {
    nr: "Nr 44",
    topic: "Beslut",
    title: "När kalendern blir din strategi",
    teaser:
      "Du kan läsa ditt teams prioriteringar i deras kalender. Du kan läsa dina egna också. Ofta säger den något annat än du vill höra.",
  },
];

const PODCASTS = [
  {
    show: "The Badass Entrepreneur",
    episode: "Nr 51: Känslor och tankar har ett bäst före-datum",
    teaser:
      "Om varför de egna tankarna nästan alltid är det som bromsar, och hur man släpper taget.",
    href: "https://poddtoppen.se/podcast/1729799920/the-badass-entrepreneur/51-kanslor-och-tankar-har-ett-bast-fore-datum-med-ola-wallstrom",
  },
  {
    show: "Human Change med Daniel Magnusson",
    episode: "Nr 17: Målgurun som tänkte om",
    teaser:
      "25 år som 'målgurun', och den vändning som fick mig att skrota halva ramverket.",
    href: "https://poddtoppen.se/podcast/1519865250/human-change-med-daniel-magnusson/17-malgurun-som-tankte-om-ola-wallstrom",
  },
  {
    show: "Moneyfestation (Spender Academy)",
    episode: "Pengar växer faktiskt på träd",
    teaser:
      "En rakt-på-sak-diskussion om pengar, värde och vad som faktiskt skapar frihet.",
    href: "https://poddtoppen.se/podcast/1698912851/moneyfestation/pengar-vaxer-faktiskt-pa-trad-ola-wallstrom",
  },
];

const TOPICS = [
  { title: "Ledarskap", body: "Att leda dig själv först, och bygga ett team som tar ansvar." },
  { title: "Tillväxt", body: "Det som faktiskt flyttar ett bolag från 10 till 50 Mkr." },
  { title: "Frihet", body: "Att äga din tid, så att bolaget kan växa utan dig i allt." },
  { title: "Lönsamhet", body: "Marginalen sitter i vad du säger ja och nej till." },
];

const PROMISES = [
  "Ett kort brev i veckan",
  "Verkliga exempel från klienter, anonymiserade",
  "Enkla verktyg du kan använda direkt",
  "Först med inbjudningar till webinar och frukostmöten",
  "Avprenumerera med ett klick",
];

const NEXT_STEPS = [
  {
    href: "/boardroom",
    name: "Boardroom 2027",
    title: "Ett år med 14 andra ägare",
    body: "Ett år tillsammans med andra bolagsägare. Max 15 platser.",
  },
  {
    href: "/metod",
    name: "VIP-coaching",
    title: "Bara du och jag",
    body: "Djuparbete en och en med mig. Ett fåtal platser 2027.",
  },
  {
    href: "/webinar",
    name: "Gratis webinar",
    title: "60 minuter om de fyra principerna",
    body: "Live på Zoom i november, med öppen frågestund.",
  },
];

export default function InspirationPage() {
  return (
    <>
      <JsonLd id="inspiration-schema" data={breadcrumbSchema} />
      <PageHero
        align="center"
        plain
        title={
          <>
            En tanke i veckan. <em>Noll fluff.</em>
          </>
        }
        intro="Ett kort brev i veckan med tankar om ledarskap, tillväxt och frihet. Det går till fler än 2 300 bolagsägare."
      />

      <section className="pb-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="reveal max-w-xl mx-auto rounded-3xl bg-white px-7 py-9 md:px-10 md:py-10 shadow-[0_24px_60px_-38px_rgba(23,59,96,0.45)]">
            <h2 className="text-center mb-2" style={{ fontSize: "clamp(1.5rem, 2.4vw, 1.8rem)" }}>
              Få nästa brev i din inkorg
            </h2>
            <p className="text-center text-[0.98rem] text-ink-soft mb-7">Gratis. Sluta när du vill.</p>
            <InspirationSignupForm />
          </div>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="reveal">Så här ser breven ut.</h2>
            <p className="reveal reveal-d1 mt-6 text-[1.05rem] text-ink-soft leading-relaxed">
              En tanke, ett exempel och ibland en övning.
            </p>
          </div>

          <ul className="grid gap-5 md:grid-cols-2 max-w-4xl mx-auto">
            {SAMPLE_LETTERS.map((letter, i) => (
              <li
                key={letter.nr}
                className={`reveal reveal-d${(i % 4) + 1} rounded-2xl bg-white px-7 py-9 text-center shadow-[0_18px_40px_-32px_rgba(23,59,96,0.35)]`}
              >
                <p className="text-[0.88rem] text-muted">
                  <span className="font-semibold text-[color:var(--glod)]">{letter.nr}</span> · {letter.topic}
                </p>
                <h3 className="mt-3 mb-3 leading-tight" style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.3rem)" }}>
                  {letter.title}
                </h3>
                <p className="text-[0.98rem] text-ink-soft leading-relaxed max-w-sm mx-auto">{letter.teaser}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-himmel">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="reveal">Hellre lyssna?</h2>
            <p className="reveal reveal-d1 mt-6 text-[1.05rem] text-ink-soft leading-relaxed">
              Jag gästar poddar ibland. Här är några av de senaste.
            </p>
          </div>

          <ul className="grid gap-5 md:grid-cols-3 max-w-5xl mx-auto">
            {PODCASTS.map((p, i) => (
              <li key={p.show} className={`reveal reveal-d${(i % 3) + 1} flex`}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center w-full rounded-2xl bg-white px-7 py-9 text-center shadow-[0_18px_40px_-32px_rgba(23,59,96,0.35)] transition-shadow hover:shadow-[0_24px_50px_-28px_rgba(23,59,96,0.45)]"
                >
                  <span className="h-11 w-11 inline-flex items-center justify-center rounded-full bg-[color:var(--glod)] text-white transition-transform group-hover:scale-105">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <p className="mt-5 text-[0.88rem] text-muted">{p.show}</p>
                  <h3 className="mt-2 mb-3 leading-tight" style={{ fontSize: "1.15rem" }}>{p.episode}</h3>
                  <p className="text-[0.95rem] text-ink-soft leading-relaxed mb-6">{p.teaser}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-[0.92rem] font-semibold text-[color:var(--marin)] group-hover:text-[color:var(--glod)] transition-colors">
                    Lyssna på avsnittet
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="reveal reveal-d4 mt-10 text-center text-[0.98rem] text-ink-soft">
            Vill du se mer?{" "}
            <a
              href="https://www.youtube.com/@Ola11mars"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[color:var(--marin)] underline decoration-[color:var(--glod)] decoration-2 underline-offset-4 hover:text-[color:var(--glod)] transition-colors"
            >
              Följ mig på YouTube
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="reveal relative rounded-3xl overflow-hidden aspect-[4/5] bg-sand max-w-[480px] w-full mx-auto">
              <Image
                src="/images/ola-fatolj.jpg"
                alt="Ola Wallström sitter i en fåtölj"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="reveal">Det här får du varje vecka.</h2>
              <p className="reveal reveal-d1 mt-6 text-[1.05rem] text-ink-soft leading-relaxed max-w-lg mx-auto">
                Varje brev kommer ur ett verkligt samtal med en bolagsägare den veckan.
              </p>
              <ul className="reveal reveal-d2 mt-9 mx-auto w-fit flex flex-col gap-3 text-left">
                {PROMISES.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[1rem] text-ink leading-relaxed">
                    <span className="mt-[0.2rem] shrink-0 h-5 w-5 inline-flex items-center justify-center rounded-full bg-glod-dim text-[color:var(--glod)]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative aspect-[4/3] md:aspect-[21/9] max-h-[520px] w-full">
          <Image
            src="/images/ola-biljard-stot.jpg"
            alt="Ola Wallström vid biljardbordet"
            fill
            sizes="100vw"
            className="object-cover object-[50%_45%]"
          />
          <div aria-hidden className="absolute inset-0 bg-[color:var(--marin)]/65" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container-site text-center">
              <h2
                className="max-w-2xl mx-auto font-[family-name:var(--font-lora)] font-semibold leading-tight"
                style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)", color: "var(--papper)" }}
              >
                Det bästa draget är det du inte behövde göra.
              </h2>
              <p className="mt-5 text-[1rem] text-[color:var(--papper)]/80 font-[family-name:var(--font-lora)] italic">
                En återkommande tanke i breven
              </p>
            </div>
          </div>
        </div>
      </section>

      <MiniCtaBand
        headline="Vill du inte vänta till nästa brev?"
        subline="30 minuter direkt med mig. Kostnadsfritt och utan säljtryck."
        ctaLabel="Boka 30 min med mig"
        tone="marin"
        centered
      />

      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="reveal">Det här skriver jag om.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {TOPICS.map((t, i) => (
              <article
                key={t.title}
                className={`reveal reveal-d${(i % 4) + 1} rounded-2xl bg-white px-6 py-8 text-center shadow-[0_18px_40px_-32px_rgba(23,59,96,0.35)]`}
              >
                <h3 className="mb-3" style={{ fontSize: "1.25rem" }}>{t.title}</h3>
                <p className="text-[0.96rem] text-ink-soft leading-relaxed">{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-marin">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
            <div className="reveal order-2 lg:order-1 text-center">
              <h2>
                Boken: <em>Autentisk affärsutveckling</em>
              </h2>
              <p className="mt-6 text-[1.05rem] text-[color:var(--papper)]/80 leading-relaxed max-w-md mx-auto">
                Jag skriver på en bok om de fyra principerna och misstagen jag själv har gjort i åtta
                bolag. Som prenumerant får du läsa utvalda kapitel först.
              </p>
            </div>
            <div className="reveal reveal-d1 order-1 lg:order-2">
              <div className="relative mx-auto max-w-[300px]">
                <div className="rounded-2xl bg-gradient-to-br from-[color:var(--glod)] to-[color:var(--glod-dark)] aspect-[3/4] shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 p-9 flex flex-col justify-between text-white text-center">
                    <div>
                      <div className="text-[0.7rem] uppercase tracking-[0.3em] opacity-80 mb-4">
                        Av Ola Wallström
                      </div>
                      <div className="font-[family-name:var(--font-lora)] font-semibold text-[1.9rem] leading-[1.05]">
                        Autentisk<br />affärsutveckling
                      </div>
                    </div>
                    <div>
                      <div className="font-[family-name:var(--font-lora)] italic text-[0.95rem] opacity-95 leading-snug">
                        Fyra principer som bygger självgående bolag.
                      </div>
                      <div className="mt-6 text-[0.7rem] uppercase tracking-wider opacity-75">
                        Kommer 2026
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="max-w-5xl mx-auto">
            <h2 className="reveal text-center mb-12">Vill du gå djupare?</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {NEXT_STEPS.map((n, i) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`reveal reveal-d${i + 1} group flex flex-col items-center rounded-2xl bg-white px-7 py-9 text-center shadow-[0_18px_40px_-32px_rgba(23,59,96,0.35)] transition-shadow hover:shadow-[0_24px_50px_-28px_rgba(23,59,96,0.45)]`}
                >
                  <p className="text-[0.88rem] font-semibold text-[color:var(--glod)]">{n.name}</p>
                  <h3 className="mt-2 mb-3 leading-tight" style={{ fontSize: "1.2rem" }}>{n.title}</h3>
                  <p className="text-[0.95rem] text-ink-soft leading-relaxed mb-6">{n.body}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-[0.92rem] font-semibold text-[color:var(--marin)] group-hover:text-[color:var(--glod)] transition-colors">
                    Läs mer
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="transition-transform group-hover:translate-x-1">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="13 6 19 12 13 18" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        tone="olabla"
        plain
        heading="Hellre direkt till saken?"
        intro="Boka ett kostnadsfritt samtal på 30 minuter med mig. Inget säljtryck."
      />
    </>
  );
}
