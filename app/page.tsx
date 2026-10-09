import type { Metadata } from "next";
import ConsultHero from "@/components/ConsultHero";
import LogoCarousel from "@/components/LogoCarousel";
import CoreValues from "@/components/CoreValues";
import NeedsAnalysis from "@/components/NeedsAnalysis";
import MethodTeaser from "@/components/MethodTeaser";
import Testimonials from "@/components/Testimonials";
import BoardroomTeaser from "@/components/BoardroomTeaser";
import StrategyTeaser from "@/components/StrategyTeaser";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Ola Wallström - Autentisk affärsutveckling",
  description:
    "Äkta, rakt och med riktning framåt. Jag coachar bolagsägare som vill äga sin tid och sitt företag.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <ConsultHero />
      <LogoCarousel />
      <CoreValues />
      <NeedsAnalysis />
      <MethodTeaser />
      <Testimonials tone="sand" />
      <BoardroomTeaser />
      <StrategyTeaser />
      <CtaBand tone="marin" />
    </>
  );
}
