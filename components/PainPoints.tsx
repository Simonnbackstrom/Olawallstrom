import Link from "next/link";

const POINTS = [
  "Du blir flaskhalsen i nästan varje viktigt beslut.",
  "Teamet väntar på dig istället för att ta egna initiativ.",
  "Du jobbar mer men bolaget rör sig ändå inte snabbare.",
  "Du kan ibland vara ledig fysiskt, men aldrig mentalt.",
  "Bolaget växer — liksom beroendet av dig.",
];

export default function PainPoints() {
  return (
    <section className="py-20 md:py-28 bg-[#0B0E14] text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,80,10,0.2) 0%, transparent 70%)" }}
      />
      <div className="container-site relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="reveal eyebrow mb-4 justify-center">Känner du igen dig?</p>
          <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(28px,4vw,46px)] leading-[1.1]">
            Du leder ett miljonbolag{" "}
            <em className="not-italic italic text-[#E8500A]">på samma sätt som när du startade.</em>
          </h2>
          <p className="reveal reveal-d2 mt-5 text-white/70 text-[17px]">
            Då är problemet inte att du behöver jobba hårdare.
          </p>
        </div>

        <ul className="max-w-2xl mx-auto space-y-3">
          {POINTS.map((p, i) => (
            <li
              key={p}
              className={`reveal reveal-d${(i % 5) + 1} flex gap-4 items-start rounded-xl bg-white/[0.03] ring-1 ring-white/10 px-5 py-4`}
            >
              <span className="shrink-0 h-7 w-7 inline-flex items-center justify-center rounded-full bg-[#E8500A]/20 text-[#E8500A] font-bold text-sm">
                !
              </span>
              <p className="text-[16px] md:text-[17px] text-white/90 leading-relaxed">{p}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <p className="reveal reveal-d2 text-[17px] md:text-xl text-white/85 max-w-2xl mx-auto">
            Problemet är att bolaget fortfarande är <strong className="text-white">byggt runt dig.</strong>
          </p>
          <div className="reveal reveal-d3 mt-8">
            <Link href="/kontakt" className="btn-primary">
              Boka kostnadsfritt strategisamtal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
