import JsonLd from "./JsonLd";

const SITE_URL = "https://olawallstrom.com";

export default function StructuredData() {
  const SOCIAL = [
    "https://se.linkedin.com/in/olawallstrom",
    "https://www.instagram.com/ola.wallstrom/",
  ];

  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}#organization`,
    name: "Perspektivo i Sverige AB",
    alternateName: ["Ola Wallström", "Ola Wallström Rethinking"],
    legalName: "Perspektivo i Sverige AB",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/brand/logo-horizontal.png`,
      width: 1289,
      height: 236,
    },
    image: `${SITE_URL}/images/ola-leende-ute.jpg`,
    description:
      "Autentisk affärsutveckling. Mentor och coach för bolagsägare som vill växa utan att det tar all deras tid och energi.",
    slogan: "Nästa tillväxtsteg börjar med ett samtal.",
    areaServed: {
      "@type": "Country",
      name: "Sverige",
    },
    serviceArea: {
      "@type": "AdministrativeArea",
      name: "Sverige",
    },
    founder: { "@id": `${SITE_URL}#person` },
    foundingDate: "2010",
    priceRange: "€€€",
    contactPoint: {
      "@type": "ContactPoint",
      email: "ola@olawallstrom.com",
      contactType: "customer service",
      availableLanguage: ["Swedish", "English"],
      areaServed: "SE",
    },
    sameAs: SOCIAL,
    knowsAbout: [
      "Affärsutveckling",
      "Ledarskap",
      "Entreprenörskap",
      "Mentorskap",
      "Säljstrategi",
      "Tillväxt",
      "Ägarskap",
      "Executive coaching",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "5",
      reviewCount: "5",
    },
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}#person`,
    name: "Ola Wallström",
    givenName: "Ola",
    familyName: "Wallström",
    jobTitle: "Mentor och serieentreprenör",
    url: SITE_URL,
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/ola-leende-ute.jpg`,
      caption: "Ola Wallström",
    },
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
    knowsLanguage: ["sv", "en"],
    nationality: {
      "@type": "Country",
      name: "Sverige",
    },
    email: "ola@olawallstrom.com",
    sameAs: SOCIAL,
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
