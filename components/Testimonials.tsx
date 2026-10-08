import Image from "next/image";

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
  variant?: "grid" | "showcase";
  items?: Testimonial[];
  tone?: "sand" | "papper" | "marin";
};

export default function Testimonials({
  variant = "grid",
  items = TESTIMONIALS,
  tone = "sand",
}: Props) {
  const isDark = tone === "marin";
  const sectionClass =
    tone === "marin" ? "sec-marin" : tone === "papper" ? "sec-papper" : "sec-sand";
  const cardBg = isDark
    ? "bg-white/[0.04] border border-white/10"
    : "bg-white border border-[color:var(--border-soft)]";
  const quoteColor = isDark ? "text-[color:var(--papper)]/90" : "text-ink";
  const authorColor = isDark ? "text-[color:var(--papper)]" : "text-[color:var(--marin)]";
  const roleColor = isDark ? "text-[color:var(--papper)]/60" : "text-muted";

  if (variant === "showcase") {
    return (
      <section className={`py-[var(--section-y)] ${sectionClass}`}>
        <div className="container-site">
          <div className="grid gap-8 md:grid-cols-2">
            {items.map((t, i) => (
              <article
                key={t.author}
                className={`reveal reveal-d${(i % 4) + 1} rounded-3xl p-8 md:p-10 ${cardBg}`}
              >
                <div className="eyebrow mb-5">{t.result}</div>
                <p className={`font-[family-name:var(--font-lora)] italic text-[1.1rem] md:text-[1.2rem] leading-relaxed mb-7 ${quoteColor}`}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-[color:var(--glod-dim)] shrink-0">
                    <Image src={t.photo} alt={t.author} width={48} height={48} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className={`font-[family-name:var(--font-raleway)] font-bold text-[0.95rem] ${authorColor}`}>
                      {t.author}
                    </div>
                    <div className={`text-[0.82rem] ${roleColor}`}>{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-[var(--section-y)] ${sectionClass}`}>
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <p className="reveal eyebrow mb-5 justify-center">Vad kunderna säger</p>
          <h2 className="reveal reveal-d1">Det här säger några av dem jag jobbat med.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((t, i) => (
            <article
              key={t.author}
              className={`reveal reveal-d${(i % 4) + 1} rounded-2xl p-7 md:p-8 ${cardBg}`}
            >
              <div className="eyebrow mb-4">{t.result}</div>
              <p className={`font-[family-name:var(--font-lora)] italic text-[1.05rem] leading-relaxed mb-6 ${quoteColor}`}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full overflow-hidden bg-[color:var(--glod-dim)] shrink-0">
                  <Image src={t.photo} alt={t.author} width={44} height={44} className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className={`font-[family-name:var(--font-raleway)] font-bold text-[0.9rem] ${authorColor}`}>
                    {t.author}
                  </div>
                  <div className={`text-[0.8rem] ${roleColor}`}>{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
