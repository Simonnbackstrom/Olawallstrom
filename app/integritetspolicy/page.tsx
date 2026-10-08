import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Hur Ola Wallström / Perspektivo i Sverige AB hanterar personuppgifter i enlighet med GDPR.",
  alternates: { canonical: "/integritetspolicy" },
};

export default function IntegritetspolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Integritet"
        title="Så hanterar vi dina personuppgifter."
        intro="Vi värnar om din personliga integritet. Här kan du läsa om hur vi samlar in, använder och skyddar dina uppgifter."
      />

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-narrow text-ink text-[1rem] leading-relaxed">
          <h2 className="mt-10 mb-4 text-[1.4rem]">Personuppgiftsansvarig</h2>
          <p>
            Perspektivo i Sverige AB ansvarar för behandlingen av personuppgifter som samlas in
            via olawallstrom.com. Kontakta oss på{" "}
            <a href="mailto:ola@olawallstrom.com" className="text-[color:var(--glod)] font-semibold hover:underline">
              ola@olawallstrom.com
            </a>{" "}
            vid frågor.
          </p>

          <h2 className="mt-12 mb-4 text-[1.4rem]">Vilka uppgifter samlar vi in?</h2>
          <p>
            När du bokar ett strategisamtal eller anmäler dig till nyhetsbrevet samlar vi in: namn,
            e-postadress, mobilnummer och (för bokning) företagsnamn. Vi samlar in uppgifterna
            direkt från dig via formulär på webbplatsen.
          </p>

          <h2 className="mt-12 mb-4 text-[1.4rem]">Så här använder vi uppgifterna</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>För att kunna kontakta dig och boka tid för strategisamtal.</li>
            <li>För att skicka ut nyhetsbrev om du valt att prenumerera.</li>
            <li>För att följa upp och förbättra våra tjänster.</li>
          </ul>

          <h2 className="mt-12 mb-4 text-[1.4rem]">Hur länge sparas uppgifterna?</h2>
          <p>
            Vi sparar uppgifterna så länge som är nödvändigt för det syfte de samlades in — eller
            så länge lagen kräver. Du kan när som helst begära att få dina uppgifter raderade.
          </p>

          <h2 className="mt-12 mb-4 text-[1.4rem]">Dina rättigheter</h2>
          <p>
            Enligt GDPR har du rätt att få information om, rätta, radera och begränsa behandlingen
            av dina personuppgifter. Kontakta oss på{" "}
            <a href="mailto:ola@olawallstrom.com" className="text-[color:var(--glod)] font-semibold hover:underline">
              ola@olawallstrom.com
            </a>{" "}
            för att utöva dessa rättigheter. Du har också rätt att inge klagomål till
            Integritetsskyddsmyndigheten.
          </p>

          <h2 className="mt-12 mb-4 text-[1.4rem]">Delning av uppgifter</h2>
          <p>
            Vi delar aldrig dina uppgifter med tredje part för marknadsföring. Vi använder
            följande personuppgiftsbiträden som hjälper oss med drift av webbplatsen och utskick:
            Vercel (hosting) och Resend (e-postutskick).
          </p>

          <p className="text-[0.85rem] text-muted mt-12 pt-6 border-t border-[color:var(--border-soft)]">
            Senast uppdaterad: oktober 2026.
          </p>
        </div>
      </section>
    </>
  );
}
