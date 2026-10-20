import type { Metadata } from "next";
import ConsultHero from "@/components/ConsultHero";
import BoardroomPrimary from "@/components/BoardroomPrimary";
import LogoCarousel from "@/components/LogoCarousel";
import NeedsAnalysis from "@/components/NeedsAnalysis";
import MethodTeaser from "@/components/MethodTeaser";
import SharedPainPoints from "@/components/SharedPainPoints";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Ola Wallström | Autentisk affärsutveckling",
  description:
    "Äkta, rakt och med riktning framåt. Jag coachar bolagsägare som vill äga sin tid och sitt företag.",
  alternates: { canonical: "/" },
};

const HOME_PAINS = [
  "Inget rullar vidare utan mig. Jag är flaskhalsen i nästan varje viktigt beslut.",
  "Omsättningen har fastnat, och jag vet inte vad som ska flyttas först.",
  "Teamet gör sitt, men ingen tar ägarskap som en delägare skulle göra.",
  "Jag jobbar fler timmar nu än när bolaget var hälften så stort, och ändå räcker tiden inte.",
];

export default function Home() {
  return (
    <>
      <ConsultHero />
      <LogoCarousel plainHeading />
      <SharedPainPoints
        plain
        heading={
          <>
            Du är där taket inte går att <em>prata bort</em>.
          </>
        }
        intro="Du driver ett etablerat bolag. Det du byggde fungerade hit, men inte dit du vill. Känner du igen någon av de här tankarna?"
        points={HOME_PAINS}
        image={{ src: "/images/ola-fatolj-tanker.jpg", alt: "Ola Wallström sitter eftertänksam i en läderfåtölj" }}
      />
      <NeedsAnalysis />
      <BoardroomPrimary />
      <MethodTeaser />
      <CtaBand
        tone="olabla"
        plain
        heading="Börja med ett samtal."
        intro="30 minuter, direkt med mig. Vi tittar på var ditt bolag står i dag och vad som bromsar. Inget säljtryck, och du går därifrån med något konkret oavsett."
      />
    </>
  );
}
