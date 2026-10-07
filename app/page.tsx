import type { Metadata } from "next";
import ConsultHero from "@/components/ConsultHero";
import LogoCarousel from "@/components/LogoCarousel";
import MethodTeaser from "@/components/MethodTeaser";
import QuoteBlock from "@/components/QuoteBlock";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Ola Wallström — Mentor för bolagsägare 10–50 Mkr",
  description:
    "Serieentreprenör med 25 års erfarenhet. Jag coachar bolagsägare till självgående och lönsamma bolag — med metoden Framgångsrikt Entreprenörskap.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <ConsultHero />
      <LogoCarousel />
      <MethodTeaser />
      <QuoteBlock />
      <CtaBand tone="dark" />
    </>
  );
}
