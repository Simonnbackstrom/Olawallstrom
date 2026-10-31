import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Hur Ola Wallström / Perspektivo i Sverige AB hanterar personuppgifter i enlighet med GDPR.",
  alternates: { canonical: "/integritetspolicy" },
  openGraph: {
    title: "Integritetspolicy",
    description:
      "Hur Ola Wallström / Perspektivo i Sverige AB hanterar personuppgifter enligt GDPR.",
    url: "/integritetspolicy",
    type: "website",
  },
};

export default function IntegritetspolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Integritet"
        title="Så hanterar vi dina personuppgifter."
        intro="Perspektivo i Sverige AB är dedikerad till att skydda din integritet. Här kan du läsa om hur vi samlar in, använder och skyddar dina uppgifter."
      />

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-narrow text-ink text-[1rem] leading-relaxed">
          <h2 className="mt-10 mb-4 text-[1.4rem] text-left">1. Introduktion</h2>
          <p>
            Perspektivo i Sverige AB är dedikerad till att skydda din integritet. Denna policy
            förklarar hur personuppgifter hanteras när du besöker olawallstrom.com.
          </p>

          <h2 className="mt-12 mb-4 text-[1.4rem] text-left">2. Vilka uppgifter samlar vi in?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Kontaktuppgifter:</strong> namn, e-postadress, telefonnummer, företagsnamn.
            </li>
            <li>
              <strong>Kundinformation:</strong> data om köpta eller intressanta produkter och
              tjänster.
            </li>
            <li>
              <strong>Teknisk information:</strong> IP-adress, webbläsartyp, operativsystem,
              besökta sidor och tidpunkter.
            </li>
            <li>
              <strong>Kakor (cookies):</strong> används för att förbättra din upplevelse av
              webbplatsen.
            </li>
          </ul>

          <h2 className="mt-12 mb-4 text-[1.4rem] text-left">3. Hur använder vi dina uppgifter?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>För att tillhandahålla och förbättra tjänster och produkter.</li>
            <li>För att hantera kundförfrågningar och support.</li>
            <li>För att skicka nyhetsbrev och marknadsföringsmaterial (med ditt samtycke).</li>
            <li>För att anpassa din upplevelse av webbplatsen.</li>
            <li>För att uppfylla lagliga krav.</li>
          </ul>

          <h2 className="mt-12 mb-4 text-[1.4rem] text-left">4. Hur skyddar vi dina uppgifter?</h2>
          <p>
            Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina
            personuppgifter — bland annat genom brandväggar, kryptering och säkra servrar.
          </p>

          <h2 className="mt-12 mb-4 text-[1.4rem] text-left">5. Delning av personuppgifter</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Tjänsteleverantörer:</strong> betrodda tredje parter som hjälper oss driva
              verksamheten (t.ex. betalningsbehandlare och marknadsföringsplattformar).
            </li>
            <li>
              <strong>Laglig skyldighet:</strong> när vi är skyldiga att lämna ut uppgifter enligt
              lag.
            </li>
            <li>
              <strong>Affärstransaktioner:</strong> vid fusion, förvärv eller försäljning av
              verksamhet.
            </li>
          </ul>

          <h2 className="mt-12 mb-4 text-[1.4rem] text-left">6. Dina rättigheter</h2>
          <p>Enligt GDPR har du rätt att:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Begära åtkomst, rättelse eller radering av dina uppgifter.</li>
            <li>Invända mot eller begränsa behandlingen av dina uppgifter.</li>
            <li>Begära överföring av dina uppgifter till en annan organisation.</li>
            <li>Återkalla ett tidigare lämnat samtycke.</li>
          </ul>
          <p className="mt-4">
            Kontakta oss på{" "}
            <a
              href="mailto:ola@olawallstrom.com"
              className="text-[color:var(--glod)] font-semibold hover:underline"
            >
              ola@olawallstrom.com
            </a>{" "}
            för att utöva dina rättigheter.
          </p>

          <h2 className="mt-12 mb-4 text-[1.4rem] text-left">7. Ändringar av denna policy</h2>
          <p>
            Vi kan komma att uppdatera denna policy. Eventuella uppdateringar publiceras på
            webbplatsen med en ny datumstämpel.
          </p>

          <h2 className="mt-12 mb-4 text-[1.4rem] text-left">8. Kontakta oss</h2>
          <p>
            <strong>Perspektivo i Sverige AB, Ola Wallström</strong>
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
            Åkersberga, 1 augusti 2025.
          </p>
        </div>
      </section>
    </>
  );
}
