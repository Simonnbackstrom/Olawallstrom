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
  "Alla frågor landar på ditt bord. Även de som andra borde kunna svara på.",
  "Du fastnar i problemlösning och längtar efter att få tid att tänka strategiskt.",
  "Du älskar ditt bolag. Men du vet inte hur länge till du orkar.",
  "Du har ett helt team. Ändå har du ingen att bolla de svåra besluten med.",
];

export default function Home() {
  return (
    <>
      <ConsultHero />
      <LogoCarousel />
      <SharedPainPoints
        plain
        heading={
          <>
            Du är där hårdare arbete <em>inte räcker.</em>
          </>
        }
        intro="Du äger ett bolag som omsätter minst 10 miljoner. Det du byggde har fungerat fram tills nu, men det är inte det som kommer att ta bolaget vidare. Känner du igen någon av de här tankarna?"
        points={HOME_PAINS}
        image={{ src: "/images/ola-fatolj-tanker.jpg", alt: "Ola Wallström sitter eftertänksam i en läderfåtölj" }}
      />
      <NeedsAnalysis />
      <BoardroomPrimary />
      <MethodTeaser />
      <CtaBand
        tone="olabla"
        plain
        heading="Nästa tillväxtsteg börjar med ett samtal."
        intro="30 minuter, direkt med mig. Vi tittar på var ditt bolag står i dag och vad som bromsar. Inget säljtryck, och oavsett går du därifrån med något konkret."
      />
    </>
  );
}
