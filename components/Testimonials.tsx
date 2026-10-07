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
    text: "Efter tre månaders arbete med Ola hade vi delegerat bort mycket av det som åt upp min tid. Nu kan jag lägga mer fokus på det som driver företaget framåt istället för att släcka bränder.",
    author: "Christoffer Sjölund",
    role: "VD, Räls & Markservice AB",
    photo: "/testimonials/christoffer.jpg",
  },
  {
    result: "Skärpa, värme och affärsnytta",
    text: "Det jag uppskattar med Ola är kombinationen av skärpa och värme. Han är affärsmässig, konkret och hjälper oss snabbt att se vad som är viktigt. När vi ligger rätt bekräftar han det, och när något behöver ramas in gör han det utan krångel.",
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
  tone?: "light" | "dark";
};

export default function Testimonials({ variant = "grid", items = TESTIMONIALS, tone = "light" }: Props) {
  const isDark = tone === "dark";

  if (variant === "showcase") {
    return (
      <section className={`py-20 md:py-28 ${isDark ? "bg-[#0B0E14] text-white" : "bg-white text-[#0B0E14]"}`}>
        <div className="container-site">
          <div className="grid gap-8 md:grid-cols-2">
            {items.map((t, i) => (
              <article
                key={t.author}
                className={`reveal reveal-d${(i % 4) + 1} rounded-3xl p-8 md:p-10 ${
                  isDark ? "bg-white/[0.03] ring-1 ring-white/10" : "bg-[#F7F4F0] ring-1 ring-[#E2DDD8]"
                }`}
              >
                <div className="eyebrow mb-4">{t.result}</div>
                <p className={`text-[17px] leading-relaxed mb-6 ${isDark ? "text-white/85" : "text-[#0B0E14]/85"}`}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-[#E8500A]/40 bg-[#E8500A]/10 shrink-0">
                    <Image src={t.photo} alt={t.author} width={48} height={48} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-manrope)] font-bold text-[15px]">{t.author}</div>
                    <div className={`text-[13px] ${isDark ? "text-white/60" : "text-[#6B7280]"}`}>{t.role}</div>
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
    <section className={`py-20 md:py-28 ${isDark ? "bg-[#0B0E14] text-white" : "bg-[#F7F4F0] text-[#0B0E14]"}`}>
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="reveal eyebrow mb-4 justify-center">Vad kunderna säger</p>
          <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(26px,3.8vw,42px)] leading-[1.12]">
            Det här säger några av mina kunder.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((t, i) => (
            <article
              key={t.author}
              className={`reveal reveal-d${(i % 4) + 1} rounded-2xl p-7 ${
                isDark ? "bg-white/[0.03] ring-1 ring-white/10" : "bg-white ring-1 ring-[#E2DDD8]"
              }`}
            >
              <div className="eyebrow mb-3">{t.result}</div>
              <p className={`text-[15.5px] leading-relaxed mb-5 ${isDark ? "text-white/85" : "text-[#0B0E14]/85"}`}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full overflow-hidden ring-2 ring-[#E8500A]/40 bg-[#E8500A]/10 shrink-0">
                  <Image src={t.photo} alt={t.author} width={44} height={44} className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-manrope)] font-bold text-[14px]">{t.author}</div>
                  <div className={`text-[12.5px] ${isDark ? "text-white/60" : "text-[#6B7280]"}`}>{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
