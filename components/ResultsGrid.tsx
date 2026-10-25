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
    body: "Vi hittar de dolda möjligheterna i ditt bolag, där marginalerna och tiden egentligen finns.",
  },
  {
    title: "Du får tillbaka tid till det som räknas",
    body: "Du jobbar färre timmar med högre effekt, och har plats för livet runt omkring.",
  },
  {
    title: "Du leder med mer säkerhet",
    body: "Ett tydligare ledarskap där medarbetarna vet vad som förväntas och kulturen håller.",
  },
  {
    title: "Ett bolag som inte äger dig",
    body: "En självgående verksamhet, redo för expansion, exit eller mer frihet.",
  },
];

type Props = {
  heading?: string;
};

export default function ResultsGrid({
  heading = "Åtta månader från nu känner du skillnaden i vardagen.",
}: Props) {
  return (
    <section className="py-[var(--section-y)] sec-sand">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <h2 className="reveal">{heading}</h2>
        </div>

        <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESULTS.map((r, i) => (
            <article
              key={r.title}
              className={`reveal reveal-d${(i % 5) + 1} rounded-2xl px-7 py-9 md:px-8 bg-white text-center shadow-[0_18px_44px_-34px_rgba(23,59,96,0.4)]`}
            >
              <div className="mx-auto h-[3px] w-10 rounded-full bg-[color:var(--glod)] mb-6" />
              <h3 className="leading-tight mb-3" style={{ fontSize: "clamp(1.15rem, 1.7vw, 1.25rem)" }}>
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
