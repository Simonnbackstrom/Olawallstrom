const VALUES = [
  {
    title: "Äkta",
    body: "Jag är den jag är, i varje möte och i varje kanal. Inga mallar, inga lånade ord.",
  },
  {
    title: "Klarhet",
    body: "Jag gör det komplicerade enkelt. Du ska alltid veta vad nästa steg är.",
  },
  {
    title: "Genomförande",
    body: "Ord ska bli handling. Det som syns är det som faktiskt blir gjort.",
  },
  {
    title: "Frihet",
    body: "Allt pekar mot frihet. Att äga sin tid och sitt företag.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-[var(--section-y)] sec-papper">
      <div className="container-site">
        <div className="max-w-2xl mb-14 md:mb-16">
          <p className="reveal eyebrow mb-5">Kärnvärden</p>
          <h2 className="reveal reveal-d1">
            Fyra ord som styr <em>allt</em> jag gör.
          </h2>
        </div>

        <div className="grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <article
              key={v.title}
              className={`reveal reveal-d${(i % 4) + 1} bg-papper border-t-2 border-[color:var(--glod)] pt-6`}
            >
              <h3 className="text-[color:var(--marin)] font-[family-name:var(--font-lora)] font-semibold text-[1.5rem]">
                {v.title}
              </h3>
              <p className="mt-3 text-ink-soft text-[0.98rem] leading-relaxed">
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
