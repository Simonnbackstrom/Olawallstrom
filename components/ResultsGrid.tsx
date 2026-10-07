const RESULTS = [
  {
    tone: "orange",
    title: "Ditt bolag växer utan att kräva mer av dig",
    body: "Systemen är på plats och teamet levererar. Du leder riktningen istället för att utföra allt.",
  },
  {
    tone: "blue",
    title: "Rätt person på rätt plats",
    body: "Du delegerar tydligare, rekryterar bättre och får teamet att ta ansvar på riktigt.",
  },
  {
    tone: "green",
    title: "Du får kontroll på siffrorna",
    body: "Vi hittar de dolda möjligheterna i ditt bolag — där marginalerna och tiden egentligen finns.",
  },
  {
    tone: "amber",
    title: "Du får tillbaka tid till det som räknas",
    body: "Du arbetar färre timmar med högre effekt — och har plats för livet runt omkring.",
  },
  {
    tone: "purple",
    title: "Du leder med mer säkerhet",
    body: "Vi bygger ett tydligare ledarskap där medarbetarna vet vad som förväntas och kulturen håller.",
  },
  {
    tone: "teal",
    title: "Ett bolag som inte äger dig",
    body: "En mer självgående verksamhet — redo för expansion, exit eller mer frihet.",
  },
];

const TONES: Record<string, { bg: string; ring: string; dot: string }> = {
  orange: { bg: "bg-[#FFF4EC]", ring: "ring-[#E8500A]/20", dot: "bg-[#E8500A]" },
  blue:   { bg: "bg-[#EEF4FF]", ring: "ring-[#3B82F6]/20", dot: "bg-[#3B82F6]" },
  green:  { bg: "bg-[#ECFAF2]", ring: "ring-[#22C55E]/20", dot: "bg-[#22C55E]" },
  amber:  { bg: "bg-[#FFF7E6]", ring: "ring-[#F59E0B]/20", dot: "bg-[#F59E0B]" },
  purple: { bg: "bg-[#F3EEFF]", ring: "ring-[#8B5CF6]/20", dot: "bg-[#8B5CF6]" },
  teal:   { bg: "bg-[#E6FAF7]", ring: "ring-[#14B8A6]/20", dot: "bg-[#14B8A6]" },
};

type Props = {
  eyebrow?: string;
  heading?: string;
};

export default function ResultsGrid({
  eyebrow = "Förflyttningar jag hjälper till med",
  heading = "Sex månader från nu känner du skillnaden i vardagen.",
}: Props) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="reveal eyebrow mb-4 justify-center">{eyebrow}</p>
          <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(26px,3.8vw,42px)] leading-[1.12] text-[#0B0E14]">
            {heading}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {RESULTS.map((r, i) => {
            const t = TONES[r.tone];
            return (
              <article
                key={r.title}
                className={`reveal reveal-d${(i % 5) + 1} rounded-2xl p-7 ${t.bg} ring-1 ${t.ring} transition-transform hover:-translate-y-1`}
              >
                <div className={`h-2 w-10 rounded-full ${t.dot} mb-5`} />
                <h3 className="font-[family-name:var(--font-manrope)] font-extrabold text-[20px] leading-tight text-[#0B0E14] mb-3">
                  {r.title}
                </h3>
                <p className="text-[15px] text-[#0B0E14]/70 leading-relaxed">{r.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
