import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import NewsletterForm from "@/components/NewsletterForm";
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
  {
    title: "Ledarskap",
    body: "Att leda sig själv först. Hur du bygger team som tar ansvar som delägare.",
  },
  {
    title: "Tillväxt",
    body: "Vad som faktiskt flyttar ett bolag från 10 till 50 Mkr, och vad som bara ser ut att göra det.",
  },
  {
    title: "Frihet",
    body: "Att äga sin tid. Hur bolaget kan växa utan att du behöver vara i allt.",
  },
  {
    title: "Lönsamhet",
    body: "Marginalen är inte en Excel-fråga. Den sitter i vad du säger ja och nej till.",
  },
];

const PROMISES = [
  "Ett brev i veckan, aldrig längre än du läser på kaffet.",
  "Konkreta exempel från verkliga klientcase (anonymiserade).",
  "Enkla verktyg du kan använda direkt i din vardag.",
  "Först med inbjudningar till webinar och frukostmöten.",
  "Avprenumerera med ett klick, när som helst.",
];

export default function InspirationPage() {
  return (
    <>
      <JsonLd id="inspiration-schema" data={breadcrumbSchema} />
      <PageHero
        eyebrow="Inspirationsbrev"
        title={
          <>
            En tanke i veckan. <em>Noll fluff.</em>
          </>
        }
        intro="Inspirationsbrevet går ut varje vecka till 2 300+ bolagsägare. Korta, konkreta tankar om ledarskap, tillväxt och frihet, skrivna av mig, med utgångspunkt i det jag faktiskt sett fungera hos klienter."
      />

      <section className="py-16 md:py-20 sec-papper border-b border-[color:var(--border-soft)]">
        <div className="container-site">
          <div className="max-w-xl mx-auto rounded-3xl bg-sand border border-[color:var(--border-soft)] p-6 md:p-8">
            <p className="eyebrow mb-3 text-center">Prenumerera</p>
            <h2 className="text-center text-[1.5rem] md:text-[1.75rem] leading-tight mb-5">
              Få nästa inspirationsbrev
            </h2>
            <NewsletterForm />
          </div>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="reveal eyebrow mb-4">Senaste breven</p>
            <h2 className="reveal reveal-d1">
              Smakprov från de senaste veckorna.
            </h2>
            <p className="reveal reveal-d2 mt-6 text-[1.05rem] text-ink-soft leading-relaxed">
              Så här ser det ut i inkorgen. Inget långrandigt. En tanke, ett exempel, kanske en övning.
            </p>
          </div>

          <ul className="grid gap-5 md:grid-cols-2 max-w-4xl mx-auto">
            {SAMPLE_LETTERS.map((letter, i) => (
              <li
                key={letter.nr}
                className={`reveal reveal-d${(i % 4) + 1} rounded-2xl bg-white border border-[color:var(--border-soft)] p-7`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[0.78rem] font-semibold tracking-wide uppercase text-[color:var(--glod)]">
                    {letter.nr}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-[color:var(--marin)]/30" />
                  <span className="text-[0.78rem] tracking-wide uppercase text-muted">
                    {letter.topic}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[1.2rem] md:text-[1.3rem] leading-tight text-[color:var(--marin)] mb-3">
                  {letter.title}
                </h3>
                <p className="text-[0.98rem] text-ink-soft leading-relaxed">
                  {letter.teaser}
                </p>
              </li>
            ))}
          </ul>

          <p className="reveal reveal-d4 mt-10 text-center text-[0.95rem] text-ink-soft">
            Prenumerera så landar nästa brev automatiskt i din inkorg.
          </p>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-himmel">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="reveal eyebrow mb-4">I poddar</p>
            <h2 className="reveal reveal-d1">Hör mig på andras bord.</h2>
            <p className="reveal reveal-d2 mt-6 text-[1.05rem] text-ink-soft leading-relaxed">
              Jag gästar poddar då och då. Här är några av de senaste, perfekt om du
              vill ha samma tankar som i inspirationsbrevet, fast i öronen på promenaden.
            </p>
          </div>

          <ul className="grid gap-5 md:grid-cols-3 max-w-5xl mx-auto">
            {PODCASTS.map((p, i) => (
              <li
                key={p.show}
                className={`reveal reveal-d${(i % 3) + 1} flex`}
              >
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col w-full rounded-2xl bg-white border border-[color:var(--border-soft)] p-7 hover:border-[color:var(--glod)] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="shrink-0 h-8 w-8 inline-flex items-center justify-center rounded-full bg-[color:var(--glod-dim)] text-[color:var(--glod)]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    <span className="text-[0.78rem] font-semibold tracking-wide uppercase text-[color:var(--glod)]">
                      {p.show}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[1.15rem] leading-tight text-[color:var(--marin)] mb-3">
                    {p.episode}
                  </h3>
                  <p className="text-[0.95rem] text-ink-soft leading-relaxed mb-6">
                    {p.teaser}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-[0.9rem] font-semibold text-[color:var(--marin)] group-hover:text-[color:var(--glod)] transition-colors">
                    Lyssna på avsnittet
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="reveal reveal-d4 mt-10 text-center text-[0.95rem] text-ink-soft">
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
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
            <div className="reveal">
              <div className="relative rounded-3xl overflow-hidden border border-[color:var(--border-soft)] aspect-[4/5] bg-sand">
                <Image
                  src="/images/ola-fatolj.jpg"
                  alt="Ola Wallström sittande i fåtölj"
                  fill
                  sizes="(min-width: 1024px) 520px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="reveal eyebrow mb-5">Vad du får</p>
              <h2 className="reveal reveal-d1">
                25 år bland bolagsägare, förtätat till ett brev i veckan.
              </h2>
              <p className="reveal reveal-d2 mt-6 text-[1.02rem] text-ink-soft leading-relaxed">
                Jag skriver inte för att fylla ut. Varje brev kommer ur ett verkligt samtal
                med en bolagsägare den veckan: vad som fastnat, vad som lossnade, vad jag
                själv tagit med mig därifrån.
              </p>
              <ul className="reveal reveal-d3 mt-8 space-y-3">
                {PROMISES.map((p) => (
                  <li key={p} className="flex gap-3 items-start text-[1rem] text-ink">
                    <span className="shrink-0 mt-1 h-5 w-5 inline-flex items-center justify-center rounded-full bg-[color:var(--glod-dim)] text-[color:var(--glod)]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
        <div className="relative aspect-[16/9] md:aspect-[21/9] max-h-[520px] w-full">
          <Image
            src="/images/ola-biljard-stot.jpg"
            alt="Ola Wallström vid biljardbordet"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(23,59,96,0.78) 0%, rgba(23,59,96,0.35) 55%, rgba(23,59,96,0) 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container-site">
              <div className="max-w-xl">
                <p className="eyebrow mb-4 text-[color:var(--glod)]">Mellan dragen</p>
                <h2 className="text-[color:var(--papper)] text-[1.8rem] md:text-[2.4rem] font-[family-name:var(--font-lora)] font-semibold leading-tight">
                  Det bästa draget är det du inte behövde göra.
                </h2>
                <p className="mt-5 text-[1rem] text-[color:var(--papper)]/80 font-[family-name:var(--font-lora)] italic">
                  en återkommande tanke i inspirationsbrevet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MiniCtaBand
        headline="Vill du inte vänta till nästa brev?"
        subline="Boka ett 30 min samtal direkt med mig. Kostnadsfritt, inget säljtryck."
        ctaLabel="Boka 30 min med Ola"
        tone="marin"
      />

      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="reveal eyebrow mb-4">Teman</p>
            <h2 className="reveal reveal-d1">Det jag skriver om.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TOPICS.map((t, i) => (
              <article
                key={t.title}
                className={`reveal reveal-d${(i % 4) + 1} rounded-2xl bg-white border border-[color:var(--border-soft)] p-6`}
              >
                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[1.2rem] text-[color:var(--marin)] mb-3">
                  {t.title}
                </h3>
                <p className="text-[0.95rem] text-ink-soft leading-relaxed">
                  {t.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-marin relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none opacity-70"
          style={{ background: "radial-gradient(circle, rgba(242,106,46,0.18) 0%, transparent 65%)" }}
        />
        <div className="container-site relative">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
            <div className="reveal order-2 lg:order-1">
              <p className="eyebrow mb-5">Kommande</p>
              <h2>
                Boken: <em>Autentisk affärsutveckling</em>
              </h2>
              <p className="mt-6 text-[1.02rem] text-[color:var(--papper)]/80 leading-relaxed max-w-md">
                Jag arbetar just nu på en bok som samlar de fyra principerna och de misstag jag
                själv gjort i åtta bolag. Prenumererar du på inspirationsbrevet är du först med
                släppdatum och får läsa utvalda kapitel innan den trycks.
              </p>
              <div className="mt-7 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-[0.72rem] uppercase tracking-wider text-[color:var(--papper)]/75">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--glod)]" />
                Pre-release via inspirationsbrevet
              </div>
            </div>
            <div className="reveal reveal-d1 order-1 lg:order-2">
              <div className="relative mx-auto max-w-sm">
                <div className="rounded-2xl bg-gradient-to-br from-[color:var(--glod)] to-[color:var(--glod-dark)] aspect-[3/4] shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 p-10 flex flex-col justify-between text-white">
                    <div>
                      <div className="text-[0.7rem] uppercase tracking-[0.3em] opacity-80 mb-4">
                        Av Ola Wallström
                      </div>
                      <div className="font-[family-name:var(--font-lora)] font-semibold text-[2rem] leading-[1.05]">
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
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <p className="reveal eyebrow mb-4 text-center">Vill du gå djupare?</p>
            <h2 className="reveal reveal-d1 text-center mb-10">
              Här är nästa steg om breven resonerar.
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              <Link
                href="/boardroom"
                className="reveal reveal-d1 group rounded-2xl bg-sand border border-[color:var(--border-soft)] p-6 hover:border-[color:var(--glod)] transition-colors"
              >
                <div className="eyebrow-upper mb-3 text-[color:var(--glod)]">Boardroom 2027</div>
                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[1.15rem] text-[color:var(--marin)] mb-3 leading-tight">
                  Ett år med 14 andra ägare
                </h3>
                <p className="text-[0.92rem] text-ink-soft leading-relaxed">
                  12 månader tillsammans med andra bolagsägare i samma segment. Fyra workshopdagar och personligt stöd hela vägen. Max 15 platser.
                </p>
              </Link>
              <Link
                href="/metod"
                className="reveal reveal-d2 group rounded-2xl bg-sand border border-[color:var(--border-soft)] p-6 hover:border-[color:var(--glod)] transition-colors"
              >
                <div className="eyebrow-upper mb-3 text-[color:var(--glod)]">VIP-coaching</div>
                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[1.15rem] text-[color:var(--marin)] mb-3 leading-tight">
                  Jobba 1-till-1 med mig
                </h3>
                <p className="text-[0.92rem] text-ink-soft leading-relaxed">
                  Djuparbete över 6 månader. För bolagsägare som vill gå från flaskhals till arkitekt. Begränsat antal platser 2027.
                </p>
              </Link>
              <Link
                href="/webinar"
                className="reveal reveal-d3 group rounded-2xl bg-sand border border-[color:var(--border-soft)] p-6 hover:border-[color:var(--glod)] transition-colors"
              >
                <div className="eyebrow-upper mb-3 text-[color:var(--glod)]">Gratis webinar</div>
                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[1.15rem] text-[color:var(--marin)] mb-3 leading-tight">
                  60 minuter om de fyra principerna
                </h3>
                <p className="text-[0.92rem] text-ink-soft leading-relaxed">
                  Live på Zoom i november. Hela ramverket förtätat, med öppen frågestund.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        tone="sand"
        heading="Hellre direkt till saken?"
        intro="Boka ett kostnadsfritt strategisamtal med mig istället. 30 minuter, inget säljtryck."
      />
    </>
  );
}
