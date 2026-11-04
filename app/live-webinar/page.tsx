import type { Metadata } from "next";
import WebinarLanding from "@/components/WebinarLanding";
import { WEBINAR } from "@/lib/webinar";

/* Organic landing page (site links, newsletters, social). Signups go to the organic Brevo form. */
export const metadata: Metadata = {
  title: "Gratis webinar: så växer du från 10 till 50 miljoner, utan att jobba mer",
  description:
    `Live på Zoom ${WEBINAR.dateLabel}. 60 minuter för bolagsägare på 10 MSEK+. Ola Wallström delar Tillväxthjulet och fyra skiften bakom 650+ coachade bolag. Kostnadsfritt.`,
  alternates: { canonical: "/live-webinar" },
  openGraph: {
    title: "Gratis webinar: så växer du från 10 till 50 miljoner",
    description:
      `Live på Zoom ${WEBINAR.dateLabel}. 60 minuter med Ola Wallström. Tillväxthjulet, fyra skiften, konkreta case.`,
    url: "https://olawallstrom.com/live-webinar",
    type: "website",
  },
};

export default function Page() {
  return <WebinarLanding source="organic" />;
}
