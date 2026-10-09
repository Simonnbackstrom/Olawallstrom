const QUESTIONS = [
  {
    q: "Var står bolaget idag?",
    a: "Vi börjar med en ärlig nulägesbild - intäkter, team, flaskhalsar och vad som faktiskt stjäl din tid.",
  },
  {
    q: "Vart vill du?",
    a: "Vi sätter en riktning du tror på. Inte en standardplan - en plan som matchar ditt liv och dina mål som ägare.",
  },
  {
    q: "Vad står i vägen?",
    a: "Vi identifierar de två till tre grejer som faktiskt bromsar - och lägger upp vad som ska göras först.",
  },
];

export default function NeedsAnalysis() {
  return (
    <section className="py-[var(--section-y)] sec-papper">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="reveal reveal-d1">
            Innan vi börjar - <em>vi tar reda på vad du faktiskt behöver.</em>
          </h2>
          <p className="reveal reveal-d2 mt-6 text-[1.05rem] text-ink-soft leading-relaxed">
            Jag jobbar inte med färdiga paket. Vi startar alltid med en kostnadsfri
            behovsanalys där vi tillsammans ringar in vad som skulle flytta ditt bolag mest.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {QUESTIONS.map((item, i) => (
            <div
              key={item.q}
              className={`reveal reveal-d${i + 1} rounded-2xl bg-sand/50 border border-[color:var(--border-soft)] p-7 md:p-8`}
            >
              <div className="font-[family-name:var(--font-lora)] font-semibold text-[1.75rem] leading-none text-[color:var(--glod)] mb-5">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[1.15rem] md:text-[1.2rem] leading-tight mb-3 text-[color:var(--marin)]">
                {item.q}
              </h3>
              <p className="text-[0.98rem] text-ink-soft leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
