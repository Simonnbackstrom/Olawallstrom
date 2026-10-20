import JsonLd from "./JsonLd";

const SITE_URL = "https://olawallstrom.com";

export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: "Perspektivo i Sverige AB",
    alternateName: "Ola Wallström",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo-horizontal.png`,
    image: `${SITE_URL}/images/ola-leende-ute.jpg`,
    description:
      "Autentisk affärsutveckling. Mentor och coach för bolagsägare som vill växa.",
    areaServed: "SE",
    founder: { "@id": `${SITE_URL}#person` },
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}#person`,
    name: "Ola Wallström",
    jobTitle: "Mentor och serieentreprenör",
    url: SITE_URL,
    image: `${SITE_URL}/images/ola-leende-ute.jpg`,
    description:
      "Civilekonom, serieentreprenör med åtta egna bolag och mentor för över 650 bolagsägare under 25 år.",
    worksFor: { "@id": `${SITE_URL}#organization` },
    knowsAbout: [
      "Affärsutveckling",
      "Ledarskap",
      "Entreprenörskap",
      "Mentorskap",
      "Säljstrategi",
      "Tillväxt",
    ],
    alumniOf: "Affärsvärlden",
    nationality: "SE",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: "Ola Wallström",
    inLanguage: "sv-SE",
    publisher: { "@id": `${SITE_URL}#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd id="root-schema" data={[organization, person, website]} />;
}
