const KEYS = [
  {
    num: "01",
    title: "Rätt riktning",
    body: "Vart är bolaget på väg, och vill du själv dit? Vi stämmer av ägarens mål, bolagets strategi och vardagen. Utan riktning saknar varje beslut sammanhang.",
  },
  {
    num: "02",
    title: "Rätt struktur",
    body: "Processer, roller och rutiner som gör att bolaget rullar även dagar du inte är där. Rapportering som faktiskt används, inte dokument som arkiveras.",
  },
  {
    num: "03",
    title: "Rätt människor",
    body: "En ledning och nyckelpersoner som tar ansvar. Du slutar vara flaskhals. Ansvarstagande blir normen, inte undantaget.",
  },
  {
    num: "04",
    title: "Rätt lönsamhet",
    body: "Marginal, kassaflöde och tillväxt som håller, oavsett vad konjunkturen gör. En försäljningsmotor som inte hänger på dig som ägare.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Bolagsdiagnos",
    body: "Vi lägger korten på bordet: vad som bromsar, vad som äter din tid och vad ni faktiskt är bra på. Det blir vår startpunkt.",
  },
  {
    num: "02",
    title: "Struktur och delegering",
    body: "Processer, ansvar och rapportering som gör att teamet levererar utan att du behöver vara med i allt.",
  },
  {
    num: "03",
    title: "Team och rekrytering",
    body: "Rätt människor på rätt plats, och en kultur där de tar ansvar på riktigt.",
  },
  {
    num: "04",
    title: "Lönsamhet och sälj",
    body: "Vi hittar de affärer som verkligen lönar sig och bygger ett sälj som inte hänger på dig.",
  },
];

type Props = {
  variant?: "keys" | "steps";
  heading?: string;
};

export default function MethodGrid({
  variant = "steps",
  heading,
}: Props) {
  const items = variant === "keys" ? KEYS : STEPS;
  const defaultHeading =
    variant === "keys"
      ? "Fyra principer som bygger självgående bolag."
      : "Det här jobbar vi med.";

  return (
    <section className="py-[var(--section-y)] sec-papper">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
          <h2 className="reveal">{heading ?? defaultHeading}</h2>
        </div>

        <ol className="grid gap-5 md:gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <li
              key={item.num}
              className={`reveal reveal-d${(i % 5) + 1} relative rounded-2xl px-7 py-9 md:px-10 md:py-10 bg-white border border-[color:var(--border-soft)] text-center transition-colors hover:border-[color:var(--glod)]`}
            >
              <div className="font-[family-name:var(--font-lora)] italic font-semibold text-[2.2rem] md:text-[2.5rem] leading-none text-[color:var(--glod)]">
                {item.num}
              </div>
              <h3 className="mt-4 mb-3" style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.35rem)" }}>{item.title}</h3>
              <p className="text-[0.98rem] text-ink-soft leading-relaxed max-w-md mx-auto">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
