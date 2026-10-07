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

      <section className="py-16 md:py-24 bg-white">
        <div className="container-narrow prose max-w-none text-[#0B0E14]/85 text-[16px] leading-relaxed">
          <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-[22px] text-[#0B0E14] mt-10 mb-3">
            Personuppgiftsansvarig
          </h2>
          <p>
            Perspektivo i Sverige AB (org.nr tilldelas) ansvarar för behandlingen av personuppgifter
            som samlas in via olawallstrom.com. Kontakta oss på{" "}
            <a href="mailto:ola@olawallstrom.com" className="text-[#E8500A] font-semibold">
              ola@olawallstrom.com
            </a>{" "}
            vid frågor.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-[22px] text-[#0B0E14] mt-10 mb-3">
            Vilka uppgifter samlar vi in?
          </h2>
          <p>
            När du bokar ett strategisamtal eller anmäler dig till nyhetsbrevet samlar vi in: namn,
            e-postadress, mobilnummer och (för bokning) företagsnamn. Vi samlar in uppgifterna direkt
            från dig via formulär på webbplatsen.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-[22px] text-[#0B0E14] mt-10 mb-3">
            Så här använder vi uppgifterna
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>För att kunna kontakta dig och boka tid för strategisamtal.</li>
            <li>För att skicka ut nyhetsbrev om du valt att prenumerera.</li>
            <li>För att följa upp och förbättra våra tjänster.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-[22px] text-[#0B0E14] mt-10 mb-3">
            Hur länge sparas uppgifterna?
          </h2>
          <p>
            Vi sparar uppgifterna så länge som är nödvändigt för det syfte de samlades in — eller
            så länge lagen kräver. Du kan när som helst begära att få dina uppgifter raderade.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-[22px] text-[#0B0E14] mt-10 mb-3">
            Dina rättigheter
          </h2>
          <p>
            Enligt GDPR har du rätt att få information om, rätta, radera och begränsa behandlingen
            av dina personuppgifter. Kontakta oss på{" "}
            <a href="mailto:ola@olawallstrom.com" className="text-[#E8500A] font-semibold">
              ola@olawallstrom.com
            </a>{" "}
            för att utöva dessa rättigheter. Du har också rätt att inge klagomål till Integritets­skydds­myndigheten.
          </p>

          <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-[22px] text-[#0B0E14] mt-10 mb-3">
            Delning av uppgifter
          </h2>
          <p>
            Vi delar aldrig dina uppgifter med tredje part för marknadsföring. Vi använder följande
            personuppgiftsbiträden som hjälper oss med drift av webbplatsen och utskick: Vercel
            (hosting), Resend (e-postutskick) och Calendly (tidsbokning).
          </p>

          <p className="text-sm text-[#6B7280] mt-10">
            Senast uppdaterad: oktober 2026.
          </p>
        </div>
      </section>
    </>
  );
}
