import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Användarvillkor",
  description:
    "Villkor för användning av olawallstrom.com. Perspektivo i Sverige AB — Ola Wallström.",
  alternates: { canonical: "/anvandarvillkor" },
  openGraph: {
    title: "Användarvillkor",
    description:
      "Villkor för användning av olawallstrom.com. Perspektivo i Sverige AB — Ola Wallström.",
    url: "/anvandarvillkor",
    type: "website",
  },
};

export default function AnvandarvillkorPage() {
  return (
    <>
      <PageHero
        eyebrow="Juridiskt"
        title="Användarvillkor."
        intro="Genom att använda olawallstrom.com accepterar du att följa och vara bunden av dessa villkor."
      />

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-narrow text-ink text-[1rem] leading-relaxed">
          <h2 className="mt-10 mb-4 text-[1.4rem] text-left">1. Introduktion</h2>
          <p>
            Välkommen till Perspektivo i Sverige AB:s webbplats www.olawallstrom.com. Genom att
            använda denna webbplats accepterar du att följa och vara bunden av dessa
            användarvillkor. Om du inte godkänner villkoren, vänligen avstå från att använda
            webbplatsen.
          </p>

          <h2 className="mt-12 mb-4 text-[1.4rem] text-left">2. Användning av webbplatsen</h2>
          <p>
            Du får använda vår webbplats för lagliga ändamål och på ett sätt som inte begränsar
            eller hindrar någon annan användare. Du åtar dig att inte:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Använda webbplatsen på ett sätt som kan skada, överbelasta eller störa dess funktioner.</li>
            <li>Överföra eller distribuera virus, skadlig kod eller andra tekniska hot.</li>
            <li>Skicka skräppost eller oönskade meddelanden via webbplatsen.</li>
            <li>Bryta mot tillämpliga lagar eller regler i samband med användningen av webbplatsen.</li>
          </ul>

          <h2 className="mt-12 mb-4 text-[1.4rem] text-left">3. Användarbidrag</h2>
          <p>
            Om du bidrar med innehåll till webbplatsen — till exempel kommentarer, recensioner
            eller inlägg — ger du oss en icke-exklusiv, royaltyfri, världsomspännande licens att
            använda, reproducera, modifiera, distribuera och visa detta innehåll. Du ansvarar för
            att ditt innehåll inte kränker tredje parts rättigheter eller är olagligt.
          </p>

          <h2 className="mt-12 mb-4 text-[1.4rem] text-left">4. Immateriella rättigheter</h2>
          <p>
            Allt innehåll på webbplatsen, inklusive text, grafik, bilder, logotyper och mjukvara,
            är skyddat av upphovsrätt, varumärkesrätt och andra immateriella rättigheter. Du får
            inte använda, kopiera eller distribuera något innehåll från webbplatsen utan vårt
            uttryckliga skriftliga tillstånd.
          </p>

          <h2 className="mt-12 mb-4 text-[1.4rem] text-left">5. Länkar till tredje part</h2>
          <p>
            Vår webbplats kan innehålla länkar till tredje parts webbplatser. Vi ansvarar inte för
            innehållet på dessa webbplatser och rekommenderar att du läser deras användarvillkor
            och integritetspolicyer.
          </p>

          <h2 className="mt-12 mb-4 text-[1.4rem] text-left">6. Ansvarsbegränsning</h2>
          <p>
            Vi tillhandahåller webbplatsen i befintligt skick och utan garantier av något slag,
            vare sig uttryckliga eller underförstådda. Vi ansvarar inte för några direkta,
            indirekta, tillfälliga eller följdskador som kan uppstå från din användning av
            webbplatsen eller från oförmåga att använda den.
          </p>

          <h2 className="mt-12 mb-4 text-[1.4rem] text-left">7. Ändringar av användarvillkoren</h2>
          <p>
            Vi förbehåller oss rätten att uppdatera eller ändra dessa villkor när som helst.
            Eventuella ändringar publiceras på denna webbplats med en uppdaterad datumstämpel. Vi
            rekommenderar att du regelbundet kontrollerar sidan för att hålla dig informerad.
          </p>

          <h2 className="mt-12 mb-4 text-[1.4rem] text-left">8. Kontakta oss</h2>
          <p>
            <strong>Perspektivo i Sverige AB</strong>
            <br />
            Karlsborgsvägen 8, 184 44 Åkersberga
            <br />
            <a
              href="mailto:ola@olawallstrom.com"
              className="text-[color:var(--glod)] font-semibold hover:underline"
            >
              ola@olawallstrom.com
            </a>
            <br />
            +46 733 884 222
          </p>

          <p className="text-[0.85rem] text-muted mt-12 pt-6 border-t border-[color:var(--border-soft)]">
            Åkersberga, 1 augusti 2024.
          </p>
        </div>
      </section>
    </>
  );
}
