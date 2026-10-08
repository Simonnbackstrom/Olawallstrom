const RESULTS = [
  {
    title: "Bolaget växer utan att kräva mer av dig",
    body: "Systemen är på plats och teamet levererar. Du leder riktningen istället för att utföra allt själv.",
  },
  {
    title: "Rätt person på rätt plats",
    body: "Du delegerar tydligare, rekryterar bättre och får teamet att ta ansvar på riktigt.",
  },
  {
    title: "Du får kontroll på siffrorna",
    body: "Vi hittar de dolda möjligheterna i ditt bolag — där marginalerna och tiden egentligen finns.",
  },
  {
    title: "Du får tillbaka tid till det som räknas",
    body: "Du jobbar färre timmar med högre effekt — och har plats för livet runt omkring.",
  },
  {
    title: "Du leder med mer säkerhet",
    body: "Ett tydligare ledarskap där medarbetarna vet vad som förväntas och kulturen håller.",
  },
  {
    title: "Ett bolag som inte äger dig",
    body: "En självgående verksamhet — redo för expansion, exit eller mer frihet.",
  },
];

type Props = {
  eyebrow?: string;
  heading?: string;
};

export default function ResultsGrid({
  eyebrow = "Förflyttningar",
  heading = "Sex månader från nu känner du skillnaden i vardagen.",
}: Props) {
  return (
    <section className="py-[var(--section-y)] sec-papper">
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <p className="reveal eyebrow mb-5 justify-center">{eyebrow}</p>
          <h2 className="reveal reveal-d1">{heading}</h2>
        </div>

        <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESULTS.map((r, i) => (
            <article
              key={r.title}
              className={`reveal reveal-d${(i % 5) + 1} rounded-2xl p-7 md:p-8 bg-white border border-[color:var(--border-soft)] transition-all hover:-translate-y-1 hover:border-[color:var(--glod)]`}
            >
              <div className="h-[3px] w-10 rounded-full bg-[color:var(--glod)] mb-6" />
              <h3 className="text-[1.15rem] md:text-[1.25rem] leading-tight mb-3">
                {r.title}
              </h3>
              <p className="text-[0.98rem] text-ink-soft leading-relaxed">{r.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
