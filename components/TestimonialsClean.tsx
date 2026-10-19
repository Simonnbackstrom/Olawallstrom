"use client";

import Image from "next/image";
import { TESTIMONIALS, type Testimonial } from "@/components/Testimonials";

/* Quotes from Ola's earlier site (olawallstrom.com), shown alongside the main set. */
const EXTRA: Testimonial[] = [
  {
    result: "Från osäkerhet till tillväxt",
    text: "Olas pepp och vägledning har fått mig att våga expandera, anställa personal och flytta till större lokaler. Trots pandemin har vår omsättning ökat med 25%, och jag känner verkligen att investeringen har gett mig mångdubbelt tillbaka.",
    author: "Katrin Larsson",
    role: "VD, K4 Naprapati",
    photo: "/testimonials/katrin.png",
  },
  {
    result: "Ökat vår försäljning avsevärt",
    text: "Vi har fått nya perspektiv och lyckats bryta gamla invanda beteenden, vilket har lett till en konkret förändring i våra resultat. Vår försäljning har ökat avsevärt.",
    author: "Johan Vanerell",
    role: "Managing Director, Tomra Collection",
    photo: "/testimonials/johan.png",
  },
];

type Props = {
  items?: Testimonial[];
  tone?: "papper" | "sand";
};

const Stars = () => (
  <div className="flex gap-0.5" role="img" aria-label="5 av 5 stjärnor">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--glod)" aria-hidden>
        <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z" />
      </svg>
    ))}
  </div>
);

function ReviewCard({ t }: { t: Testimonial }) {
  return (
    <figure className="w-[300px] sm:w-[360px] shrink-0 flex flex-col rounded-2xl bg-white border border-[color:var(--border-soft)] p-7 md:p-8 shadow-[0_14px_36px_-30px_rgba(23,59,96,0.35)]">
      <Stars />
      <blockquote
        className="mt-5 flex-1 text-[0.98rem] leading-relaxed text-ink-soft"
        style={{ fontFamily: "var(--font-raleway), system-ui, sans-serif", fontStyle: "normal" }}
      >
        {t.text}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3.5">
        <span className="h-11 w-11 shrink-0 rounded-full overflow-hidden bg-[color:var(--glod-dim)]">
          <Image src={t.photo} alt="" width={44} height={44} className="h-full w-full object-cover" />
        </span>
        <span className="min-w-0">
          <span className="block font-semibold text-[0.98rem] text-[color:var(--marin)]">{t.author}</span>
          <span className="block text-[0.85rem] text-muted truncate">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function TestimonialsClean({ items = [...TESTIMONIALS, ...EXTRA], tone = "papper" }: Props) {
  const sectionClass = tone === "sand" ? "sec-sand" : "sec-papper";

  return (
    <section className={`py-[var(--section-y)] ${sectionClass} overflow-hidden`}>
      <div className="container-site">
        <h2 className="reveal max-w-3xl mx-auto text-center mb-12 md:mb-14">
          Det här säger några av dem jag jobbat med.
        </h2>
      </div>

      <div className="reveal reveal-d1 reviews-marquee" aria-label="Omdömen från kunder">
        {[0, 1].map((set) => (
          <div key={set} className="reviews-track" aria-hidden={set === 1}>
            {items.map((t) => (
              <ReviewCard key={`${set}-${t.author}`} t={t} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
