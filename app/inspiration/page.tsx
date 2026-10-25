import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InspirationSignupForm from "@/components/InspirationSignupForm";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://olawallstrom.com";
const LINKEDIN_URL = "https://se.linkedin.com/in/olawallstrom";

export const metadata: Metadata = {
  title: "Inspiration: Ola Wallström i poddar och samtal",
  description:
    "Lyssna på Ola Wallström i poddar och LinkedIn Live. Samtal om ledarskap, tillväxt och att driva bolag utan att tappa sig själv. Prenumerera på Ägartipset en gång i månaden.",
  alternates: { canonical: "/inspiration" },
  openGraph: {
    title: "Inspiration: Ola Wallström i poddar och samtal",
    description: "Samtal om ledarskap, tillväxt och att driva bolag utan att tappa sig själv.",
    url: `${SITE_URL}/inspiration`,
    type: "website",
  },
};

type Platform = "Spotify" | "Apple Podcasts" | "Poddtoppen" | "LinkedIn" | "YouTube";

type Episode = {
  show: string;
  host: string;
  title: string;
  summary: string;
  topics?: string[];
  platform: Platform;
  href: string;
  /** Cover image in /public/images/poddar. */
  image: string;
  /** Wide covers are shown whole instead of cropped to a square. */
  wide?: boolean;
};

/* Newest first, the same conversations as on the current olawallstrom.com/inspiration. */
const EPISODES: Episode[] = [
  {
    show: "Sälj & Entreprenörspodden",
    host: "Michel Laporte Gordon",
    title: "Tillväxtexperten som utmanar",
    summary:
      "För dig som vill mer än att bara springa snabbare. Om att sälja, leva och leda med äkthet, riktning och inre kraft.",
    topics: [
      "Vad det innebär att leva sin sanning",
      "Varför så många fastnar i fel mål",
      "Självledarskap som nyckel till både affärer och inre lugn",
      "Rädslan som håller oss tillbaka",
    ],
    platform: "Apple Podcasts",
    href: "https://podcasts.apple.com/se/podcast/ola-wallstr%C3%B6m-tillv%C3%A4xtexperten-som-utmanar/id1692149281?i=1000700452021",
    image: "/images/poddar/michel.jpg",
  },
  {
    show: "Roberts Podcast, avsnitt 82",
    host: "Robert Edvardsson",
    title: "Målgurun: tänk tvärtom för maximal tillväxt",
    summary:
      "En barfota-kaffe om entreprenörskap, målsättning och strategin bakom en av de snabbaste tillväxtresorna jag har varit med om. Tänk stort, börja litet, gör det nu.",
    platform: "Poddtoppen",
    href: "https://poddtoppen.se/podcast/1726949171/robert/082-malgurun-tank-tvartom-infor-hosten-for-maximal-tillvaxt-ola-wallstrom",
    image: "/images/poddar/robert.jpg",
  },
  {
    show: "Simon Bäckström Podcast",
    host: "Simon Bäckström",
    title: "Väx ditt bolag utan att gå in i väggen",
    summary:
      "Om att få både bolaget och människorna bakom det att växa. Inte med fler verktyg eller fler timmar, utan med klarhet, fokus och ett sunt mindset.",
    topics: [
      "Hur du tar ett etablerat bolag vidare",
      "Att växa utan att offra hälsan",
      "Balansen mellan företagande och privatliv",
      "Vanliga fallgropar och hur du undviker dem",
    ],
    platform: "Spotify",
    href: "https://open.spotify.com/episode/3pNdil3ziZGJ68qDsMzWR9",
    image: "/images/poddar/simon.jpg",
  },
  {
    show: "LinkedIn Live",
    host: "Sibbe Silvén",
    title: "Jobba smartare som vd",
    summary:
      "Ett praktiskt samtal om hur AI kan ta hand om nyheter, mejl och kunduppföljning, med konkreta verktyg och livedemo. För ägare och vd:ar som vill bli av med admin och få mer tid att växa.",
    platform: "LinkedIn",
    href: "https://www.linkedin.com/events/jobbasmartaresomvd-tipsensomspa7399740374455554048/theater/",
    image: "/images/poddar/sibbe.jpg",
    wide: true,
  },
  {
    show: "Intentionspodden, avsnitt 4",
    host: "Kia Helles",
    title: "Varför jobba hårt? Att leda mer med hjärtat",
    summary:
      "Om mitt eget skifte, från att jaga mål till att leda med hjärtat. Hur värderingar, tillit och relationer ger både mer mening och bättre resultat, och varför de bästa resultaten ibland kommer när vi slutar jaga dem.",
    platform: "Spotify",
    href: "https://open.spotify.com/episode/03vVO1EOVZ9Y858iv2vkkv",
    image: "/images/poddar/kia.jpg",
  },
  {
    show: "Enter your Calm Power Era, avsnitt 33",
    host: "Sarah Hesslow",
    title: "Lugn på insidan när det är kaos på utsidan",
    summary:
      "Vad gör de mest hållbara ledarna annorlunda? Om att fatta bättre beslut i osäkerhet, misstagen många nya entreprenörer gör och hur du lyckas långsiktigt utan att tappa kontakten med dig själv.",
    platform: "Spotify",
    href: "https://open.spotify.com/episode/5ACuWYkRITWDIB1Hfom7rR",
    image: "/images/poddar/sarah.jpg",
  },
  {
    show: "The Badass Entrepreneur, avsnitt 51",
    host: "Nella Lisserow",
    title: "Känslor och tankar har ett bäst före-datum",
    summary:
      "Om varför det som oftast stoppar tillväxten är en själv, varför rädslan för konkurrens är onödig och hur du vet när det är dags att lämna ifrån dig uppgifter. Och om att släppa taget innan man känner sig redo.",
    platform: "Poddtoppen",
    href: "https://poddtoppen.se/podcast/1729799920/the-badass-entrepreneur/51-kanslor-och-tankar-har-ett-bast-fore-datum-med-ola-wallstrom",
    image: "/images/poddar/nella.jpg",
  },
  {
    show: "Business Zen Live, avsnitt 12",
    host: "Ana Bosnjak",
    title: "Ledarskap utan ansträngning",
    summary:
      "Efter många år av tekniker och metoder hittade jag ett mer avslappnat och glädjefyllt sätt att leda mig själv och andra. Här berättar jag hur.",
    topics: [
      "Bli en gladare och mer effektiv ledare",
      "Få proaktiva och engagerade medarbetare",
      "Vad du kan göra i stället för att kämpa hårdare",
    ],
    platform: "YouTube",
    href: "https://www.youtube.com/watch?v=WG8R5au1zJE",
    image: "/images/poddar/ana.jpg",
  },
  {
    show: "Miljonpodden, avsnitt 7",
    host: "Jonathan Ljungqvist",
    title: "Njut av varje dag som företagare",
    summary:
      "Mina bästa tips för att leva i nuet, lyckas utan att slita ihjäl sig och varför jakten på högt uppsatta mål inte behöver vara allt. Och resan från okänd till föreläsare.",
    platform: "Spotify",
    href: "https://open.spotify.com/episode/3N1reEXVQlNRs9xEOYdd1O",
    image: "/images/poddar/jonathan.jpg",
  },
  {
    show: "Human Change, avsnitt 17",
    host: "Daniel Magnusson",
    title: "Målgurun som tänkte om",
    summary:
      "Om åren som målgurun, och vändningen som fick mig att ompröva hur jag ser på mål, resultat och ledarskap.",
    platform: "Poddtoppen",
    href: "https://poddtoppen.se/podcast/1519865250/human-change-med-daniel-magnusson/17-malgurun-som-tankte-om-ola-wallstrom",
    image: "/images/poddar/daniel.jpg",
  },
];

const actionLabel = (p: Platform) => (p === "LinkedIn" || p === "YouTube" ? `Se på ${p}` : `Lyssna på ${p}`);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Inspiration", item: `${SITE_URL}/inspiration` },
  ],
};

const episodesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ola Wallström i poddar och samtal",
  itemListElement: EPISODES.map((e, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${e.title} (${e.show}, med ${e.host})`,
    url: e.href,
  })),
};

export default function InspirationPage() {
  const [latest, ...earlier] = EPISODES;
  return (
    <>
      <JsonLd id="inspiration-schema" data={[breadcrumbSchema, episodesSchema]} />
      <PageHero
        align="center"
        plain
        title={
          <>
            Inspiration av och med Ola. <em>Samtal att lyssna på.</em>
          </>
        }
        intro="Att leda ett bolag är en resa full av beslut, möjligheter och utmaningar som ibland känns större än livet självt. Här har jag samlat samtal där jag gästat poddar och livesändningar. Lyssna när du vill ha nya perspektiv, som ledare, entreprenör och människa."
        cta={{ label: "Lyssna på samtalen", href: "#samtal", sub: `${EPISODES.length} samtal, nyast först` }}
      />

      {/* CONVERSATIONS */}
      <section id="samtal" className="py-[var(--section-y)] sec-papper scroll-mt-20">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <h2 className="reveal">Ola i poddar och samtal.</h2>
            <p className="reveal reveal-d1 mt-6 text-[1.05rem] text-ink-soft leading-relaxed">
              Om ledarskap, tillväxt och att driva bolag utan att tappa sig själv.
            </p>
          </div>

          {/* Newest conversation, featured */}
          <a
            href={latest.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${actionLabel(latest.platform)}: ${latest.title}`}
            className="reveal group grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto rounded-[2rem] bg-marin p-5 md:p-8"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={latest.image}
                alt={`Omslag: ${latest.show}`}
                fill
                quality={90}
                sizes="(min-width: 768px) 440px, 88vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="px-2 pb-6 md:pb-0 md:pr-6 text-center">
              <p className="text-[0.92rem] text-[color:var(--papper)]/60">
                Senaste samtalet · {latest.show}
              </p>
              <h3 className="mt-3 leading-tight text-[color:var(--papper)]" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
                {latest.title}
              </h3>
              <p className="mt-5 text-[1.05rem] text-[color:var(--papper)]/75 leading-relaxed max-w-md mx-auto">
                {latest.summary}
              </p>
              <p className="mt-4 text-[0.92rem] text-[color:var(--papper)]/55">Med {latest.host}</p>
              <span className="mt-8 btn-primary">
                {actionLabel(latest.platform)}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="transition-transform group-hover:translate-x-1">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </span>
            </div>
          </a>

          {/* Earlier conversations */}
          <ul className="mt-16 md:mt-20 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {earlier.map((e, i) => (
              <li key={e.href} className={`reveal reveal-d${(i % 3) + 1}`}>
                <a
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${actionLabel(e.platform)}: ${e.title}`}
                  className="group flex h-full flex-col text-center"
                >
                  <div
                    className={`relative aspect-square overflow-hidden rounded-2xl ring-1 ring-[color:var(--marin)]/[0.06] shadow-[0_22px_44px_-30px_rgba(23,59,96,0.45)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_30px_56px_-30px_rgba(23,59,96,0.55)] ${e.wide ? "bg-marin" : "bg-sand"}`}
                  >
                    <Image
                      src={e.image}
                      alt={`Omslag: ${e.show}`}
                      fill
                      quality={90}
                      sizes="(min-width: 1024px) 330px, (min-width: 640px) 46vw, 92vw"
                      className={e.wide ? "object-contain" : "object-cover"}
                    />
                  </div>
                  <p className="mt-6 text-[0.86rem] text-muted">{e.show}</p>
                  <h3 className="mt-1.5 leading-snug" style={{ fontSize: "1.2rem" }}>
                    {e.title}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] text-ink-soft leading-relaxed line-clamp-3">{e.summary}</p>
                  <span className="mt-auto pt-4 inline-flex items-center justify-center gap-2 text-[0.92rem] font-semibold text-[color:var(--marin)] group-hover:text-[color:var(--glod)] transition-colors">
                    {actionLabel(e.platform)}
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="transition-transform group-hover:translate-x-1">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="13 6 19 12 13 18" />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ÄGARTIPSET */}
      <section id="agartipset" className="py-[var(--section-y)] sec-papper scroll-mt-20">
        <div className="container-site">
          <div className="grid gap-5 md:gap-6 lg:grid-cols-2 items-stretch max-w-5xl mx-auto">
            <div className="reveal relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] rounded-3xl overflow-hidden bg-sand">
              <Image
                src="/images/ola-skrivbord.jpg"
                alt="Ola Wallström vid skrivbordet med dator och mikrofon"
                fill
                quality={90}
                sizes="(min-width: 1024px) 500px, 92vw"
                className="object-cover object-[50%_35%]"
              />
            </div>
            <div className="reveal reveal-d1 flex flex-col justify-center rounded-3xl bg-white px-7 py-9 md:px-10 md:py-10 shadow-[0_24px_60px_-38px_rgba(23,59,96,0.45)]">
              <h2 className="text-center" style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.1rem)" }}>
                Ägartipset
              </h2>
              <p className="mt-3 mb-7 text-center text-[1rem] text-ink-soft leading-relaxed">
                Konkreta tips, verktyg och nya perspektiv i din inkorg en gång i månaden. Om hur du
                kan växa ditt bolag på ett enkelt, effektivt och roligt sätt.
              </p>
              <InspirationSignupForm />
            </div>
          </div>
        </div>
      </section>

      {/* LINKEDIN */}
      <section className="py-14 md:py-16 sec-himmel">
        <div className="container-site text-center">
          <h2 className="reveal" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2rem)" }}>
            Följ mig på LinkedIn.
          </h2>
          <p className="reveal reveal-d1 mt-4 text-[1.02rem] text-ink-soft leading-relaxed max-w-xl mx-auto">
            Där delar jag fler tankar och perspektiv mellan samtalen, och berättar när jag är med i nästa
            podd eller livesändning.
          </p>
          <div className="reveal reveal-d2 mt-7 flex justify-center">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#0A66C2] px-6 py-3.5 text-[0.95rem] font-semibold text-white transition hover:brightness-110"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
              Ola Wallström på LinkedIn
            </a>
          </div>
        </div>
      </section>

      <CtaBand
        tone="marin"
        plain
        heading="Vill du prata direkt med mig?"
        intro="Boka ett kostnadsfritt strategisamtal på 30 minuter. Vi tittar på var ditt bolag står i dag och vad som skulle flytta det mest. Inget säljtryck."
      />
    </>
  );
}
