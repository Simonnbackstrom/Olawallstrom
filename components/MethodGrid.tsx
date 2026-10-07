const KEYS = [
  {
    num: "01",
    title: "Rätt riktning",
    body: "Vi klargör vart bolaget faktiskt är på väg — och vad som ska bort från agendan. Utan tydlig riktning saknar varje beslut sammanhang.",
  },
  {
    num: "02",
    title: "Rätt struktur",
    body: "Vi bygger systemen som gör att teamet kan leverera utan att du är inblandad. Processer, ansvar och rapportering som faktiskt implementeras.",
  },
  {
    num: "03",
    title: "Rätt människor",
    body: "Du hittar rätt folk, placerar dem rätt och bygger en kultur där ansvarstagande är normen — inte undantaget.",
  },
  {
    num: "04",
    title: "Rätt lönsamhet",
    body: "Vi identifierar de lönsamma affärerna och skapar en försäljningsmotor som inte är beroende av dig som ägare.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Bolagsdiagnos: Var finns dina hinder?",
    body: "Vi identifierar exakt vad som bromsar tillväxten och äter din tid. Inte antaganden, utan faktisk analys av ditt specifika bolag.",
  },
  {
    num: "02",
    title: "Struktur och delegering",
    body: "Vi bygger systemen som gör att teamet kan leverera utan att du är inblandad. Processer, ansvar och rapportering som blir konkreta och faktiskt implementerade.",
  },
  {
    num: "03",
    title: "Rekrytering och teamutveckling",
    body: "Jag arbetar med dig kring hur du hittar rätt folk, placerar dem rätt och bygger en kultur där de tar ansvar på allvar.",
  },
  {
    num: "04",
    title: "Lönsamhet och tillväxtmotor",
    body: "Vi identifierar de lönsamma affärerna och skapar en försäljningsmotor som inte är beroende av dig.",
  },
  {
    num: "05",
    title: "1:1-samtal två gånger per månad",
    body: "Vi stämmer av, planerar framåt och håller momentum. Personligt, konkret och alltid med nästa steg definierat.",
  },
  {
    num: "06",
    title: "Tillgång vid behov — coach on the fly",
    body: "När något akut uppstår finns jag till hands inom 24 timmar. Din förflyttning ska inte stanna av för att en vecka är dålig.",
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
  const defaultEyebrow = variant === "keys" ? "Framgångsrikt entreprenörskap" : "Så jobbar vi tillsammans";
  const defaultHeading = variant === "keys"
    ? "Fyra nycklar som tar dig från 10 till 50 Mkr."
    : "Det här får du när vi börjar arbeta ihop.";

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-site">
        <div className="max-w-2xl mb-14">
          <p className="reveal eyebrow mb-4">{eyebrow ?? defaultEyebrow}</p>
          <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(28px,4vw,46px)] leading-[1.1] text-[#0B0E14]">
            {heading ?? defaultHeading}
          </h2>
        </div>

        <ol className="grid gap-5 md:grid-cols-2">
          {items.map((item, i) => (
            <li
              key={item.num}
              className={`reveal reveal-d${(i % 5) + 1} relative rounded-2xl p-7 bg-[#F7F4F0] ring-1 ring-[#E2DDD8] flex gap-5`}
            >
              <div className="font-[family-name:var(--font-manrope)] font-extrabold text-[36px] md:text-[44px] leading-none text-[#E8500A]/90 min-w-[62px]">
                {item.num}
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-manrope)] font-extrabold text-[19px] leading-tight text-[#0B0E14] mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#0B0E14]/70 leading-relaxed">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
