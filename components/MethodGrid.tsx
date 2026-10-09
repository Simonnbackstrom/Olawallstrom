const KEYS = [
  {
    num: "01",
    title: "Rätt riktning",
    body: "Vart är bolaget på väg - och vill du själv dit? Vi stämmer av ägarens mål, bolagets strategi och vardagen. Utan riktning saknar varje beslut sammanhang.",
  },
  {
    num: "02",
    title: "Rätt struktur",
    body: "Processer, roller och rutiner som gör att bolaget rullar även dagar du inte är där. Rapportering som faktiskt används - inte dokument som arkiveras.",
  },
  {
    num: "03",
    title: "Rätt människor",
    body: "En ledning och nyckelpersoner som tar ansvar. Du slutar vara flaskhals. Ansvarstagande blir normen, inte undantaget.",
  },
  {
    num: "04",
    title: "Rätt lönsamhet",
    body: "Marginal, kassaflöde och tillväxt som håller - oavsett vad konjunkturen gör. En försäljningsmotor som inte hänger på dig som ägare.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Bolagsdiagnos - var sitter det?",
    body: "Vi lägger korten på bordet. Vad bromsar, vad äter tid, vad är ni egentligen bra på. Inga antaganden, bara det ni ser när ni verkligen tittar.",
  },
  {
    num: "02",
    title: "Struktur och delegering",
    body: "Vi bygger systemen som gör att teamet kan leverera utan att du är inblandad. Processer, ansvar och rapportering som blir konkreta - och faktiskt används.",
  },
  {
    num: "03",
    title: "Rekrytering och teamutveckling",
    body: "Vi jobbar med hur du hittar rätt folk, placerar dem rätt och bygger en kultur där de tar ansvar på allvar.",
  },
  {
    num: "04",
    title: "Lönsamhet och tillväxtmotor",
    body: "Vi identifierar de affärer som faktiskt är lönsamma och skapar en säljmotor som inte är beroende av dig.",
  },
  {
    num: "05",
    title: "1:1-samtal två gånger i månaden",
    body: "Vi stämmer av, planerar framåt och håller momentum. Personligt, konkret och alltid med nästa steg definierat innan vi lägger på.",
  },
  {
    num: "06",
    title: "Tillgång vid behov - när det brinner",
    body: "När något akut uppstår finns jag inom 24 timmar. Din förflyttning ska inte stanna av för att en vecka är dålig.",
  },
];

type Props = {
  variant?: "keys" | "steps";
  heading?: string;
  eyebrow?: string;
};

export default function MethodGrid({
  variant = "steps",
  heading,
  eyebrow,
}: Props) {
  const items = variant === "keys" ? KEYS : STEPS;
  const defaultEyebrow = variant === "keys" ? "Fyra principer" : "Så jobbar vi tillsammans";
  const defaultHeading =
    variant === "keys"
      ? "Fyra principer som bygger självgående bolag."
      : "Det här får du när vi börjar jobba ihop.";

  return (
    <section className="py-[var(--section-y)] sec-papper">
      <div className="container-site">
        <div className="max-w-2xl mb-14 md:mb-16">
          <p className="reveal eyebrow mb-5">{eyebrow ?? defaultEyebrow}</p>
          <h2 className="reveal reveal-d1">{heading ?? defaultHeading}</h2>
        </div>

        <ol className="grid gap-5 md:gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <li
              key={item.num}
              className={`reveal reveal-d${(i % 5) + 1} relative rounded-2xl p-7 md:p-8 bg-white border border-[color:var(--border-soft)] flex gap-6 transition-colors hover:border-[color:var(--glod)]`}
            >
              <div className="font-[family-name:var(--font-lora)] italic font-semibold text-[2.4rem] md:text-[2.8rem] leading-none text-[color:var(--glod)] min-w-[56px]">
                {item.num}
              </div>
              <div>
                <h3 className="text-[1.2rem] md:text-[1.3rem] mb-3">{item.title}</h3>
                <p className="text-[0.98rem] text-ink-soft leading-relaxed">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
