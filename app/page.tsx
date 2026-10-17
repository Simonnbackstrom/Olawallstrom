import type { Metadata } from "next";
import ConsultHero from "@/components/ConsultHero";
import BoardroomPrimary from "@/components/BoardroomPrimary";
import LogoCarousel from "@/components/LogoCarousel";
import Testimonials from "@/components/Testimonials";
import NeedsAnalysis from "@/components/NeedsAnalysis";
import MethodTeaser from "@/components/MethodTeaser";
import SharedPainPoints from "@/components/SharedPainPoints";
import MiniCtaBand from "@/components/MiniCtaBand";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Ola Wallström | Autentisk affärsutveckling",
  description:
    "Äkta, rakt och med riktning framåt. Jag coachar bolagsägare som vill äga sin tid och sitt företag.",
  alternates: { canonical: "/" },
};

const HOME_PAINS = [
  "Du är själv flaskhals i nästan varje viktigt beslut, inget rullar vidare utan dig.",
  "Omsättningen fastnar vid ett tak och du vet inte vad som faktiskt ska flyttas först.",
  "Teamet gör sitt, men ingen tar ägarskap som en delägare skulle göra.",
  "Du jobbar fler timmar nu än när bolaget var hälften så stort, och ändå räcker tiden inte.",
];

export default function Home() {
  return (
    <>
      <ConsultHero />
      <LogoCarousel />
      <SharedPainPoints
        tone="sand"
        eyebrow="Problemet är sällan kunderna"
        heading={
          <>
            Du är där taket inte går att <em>prata bort</em>.
          </>
        }
        intro="Du driver ett bolag mellan 10 och 50 Mkr. Det du byggde funkade dit du är nu, men inte dit du vill."
        points={HOME_PAINS}
      />
      <MiniCtaBand
        headline="Det går att komma ur. Jag har sett det hundratals gånger."
        subline="30 min på Zoom, kostnadsfritt. Vi ringar in vad som faktiskt bromsar och vad som ska flyttas först."
        ctaLabel="Boka 30 min med Ola"
        tone="marin"
      />
      <Testimonials tone="sand" />
      <NeedsAnalysis />
      <BoardroomPrimary />
      <MethodTeaser />
      <CtaBand tone="marin" />
    </>
  );
}
