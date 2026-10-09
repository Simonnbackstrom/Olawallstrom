"use client";

import Image from "next/image";
import { useState } from "react";

export type Testimonial = {
  result: string;
  text: string;
  author: string;
  role: string;
  photo: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    result: "Fri från att släcka bränder",
    text: "Efter tre månaders arbete med Ola hade vi delegerat bort mycket av det som åt upp min tid. Nu kan jag lägga fokus på det som driver bolaget framåt istället för att släcka bränder.",
    author: "Christoffer Sjölund",
    role: "VD, Räls & Markservice AB",
    photo: "/testimonials/christoffer.jpg",
  },
  {
    result: "Skärpa och värme",
    text: "Det jag uppskattar med Ola är kombinationen av skärpa och värme. Han är konkret och hjälper oss snabbt att se vad som faktiskt är viktigt. När vi ligger rätt bekräftar han det, när något behöver ramas in gör han det utan krångel.",
    author: "Fredrik Birath",
    role: "Beras International",
    photo: "/testimonials/fredrik.jpg",
  },
  {
    result: "Beslut i linje med ägarnas vision",
    text: "Ola hjälpte oss att lyfta blicken. Vi gick från att bara följa siffror till att fatta beslut som hänger ihop med ägarnas mål, värderingar och långsiktiga trygghet. Det gav oss en tydligare riktning att samlas kring.",
    author: "Helena Grufman",
    role: "Vice VD, Viredo AB",
    photo: "/testimonials/helena.png",
  },
  {
    result: "Hela teamet med på banan",
    text: "Ola är strukturerad utan att bli tung, och han får människor med sig. Hans sätt att arbeta har utvecklat vårt försäljningsarbete och skapat mer energi i teamet. Det märks när hela gruppen börjar dra åt samma håll.",
    author: "Rahel Belatchew",
    role: "CEO, Belatchew Arkitekter",
    photo: "/testimonials/rahel.png",
  },
];

type Props = {
  items?: Testimonial[];
  tone?: "sand" | "papper" | "marin";
};

const Stars = () => (
  <div className="flex gap-1 mb-5" aria-label="5 av 5 stjärnor">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="var(--glod)"
        aria-hidden
      >
        <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials({ items = TESTIMONIALS, tone = "sand" }: Props) {
  const [index, setIndex] = useState(0);
  const isDark = tone === "marin";
  const sectionClass =
    tone === "marin" ? "sec-marin" : tone === "papper" ? "sec-papper" : "sec-sand";
  const cardBg = isDark
    ? "bg-white/[0.04] border border-white/10"
    : "bg-white border border-[color:var(--border-soft)]";
  const quoteColor = isDark ? "text-[color:var(--papper)]/90" : "text-ink";
  const authorColor = isDark ? "text-[color:var(--papper)]" : "text-[color:var(--marin)]";
  const roleColor = isDark ? "text-[color:var(--papper)]/60" : "text-muted";
  const navBtn = isDark
    ? "border-white/20 text-[color:var(--papper)] hover:border-[color:var(--glod)] hover:text-[color:var(--glod)]"
    : "border-[color:var(--marin)]/20 text-[color:var(--marin)] hover:border-[color:var(--glod)] hover:text-[color:var(--glod)]";

  const total = items.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const t = items[index];

  return (
    <section className={`py-[var(--section-y)] ${sectionClass}`}>
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <h2 className="reveal reveal-d1">Det här säger några av dem jag jobbat med.</h2>
        </div>

        <div className="reveal reveal-d2 relative max-w-3xl mx-auto">
          <article
            key={t.author}
            className={`rounded-3xl p-8 md:p-12 ${cardBg} transition-opacity duration-300`}
          >
            <Stars />
            <div className="eyebrow mb-5">{t.result}</div>
            <p className={`font-[family-name:var(--font-lora)] italic text-[1.15rem] md:text-[1.35rem] leading-relaxed mb-8 ${quoteColor}`}>
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full overflow-hidden bg-[color:var(--glod-dim)] shrink-0">
                <Image
                  src={t.photo}
                  alt={t.author}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className={`font-[family-name:var(--font-raleway)] font-bold text-[1rem] ${authorColor}`}>
                  {t.author}
                </div>
                <div className={`text-[0.85rem] ${roleColor}`}>{t.role}</div>
              </div>
            </div>
          </article>

          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Föregående recension"
              className={`h-11 w-11 inline-flex items-center justify-center rounded-full border transition-colors ${navBtn}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Välj recension">
              {items.map((item, i) => (
                <button
                  key={item.author}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Visa recension från ${item.author}`}
                  aria-selected={i === index}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-[color:var(--glod)]"
                      : isDark
                        ? "w-2.5 bg-white/25 hover:bg-white/50"
                        : "w-2.5 bg-[color:var(--marin)]/20 hover:bg-[color:var(--marin)]/40"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Nästa recension"
              className={`h-11 w-11 inline-flex items-center justify-center rounded-full border transition-colors ${navBtn}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="reveal reveal-d3 mt-12 flex justify-center">
          <a
            href="https://calendly.com/olawallstrom/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Boka ett möte med Ola
            <svg
              width="16"
              height="16"
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
          </a>
        </div>
      </div>
    </section>
  );
}
