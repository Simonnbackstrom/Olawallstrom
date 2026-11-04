import type { Metadata } from "next";
import WebinarLanding from "@/components/WebinarLanding";
import { WEBINAR } from "@/lib/webinar";

/* Landing page for ads (Meta etc.). Signups go to the "(Ads) Webinar" Brevo form. */
export const metadata: Metadata = {
  title: "Gratis webinar: så växer du från 10 till 50 miljoner, utan att jobba mer",
  description:
    `Live på Zoom ${WEBINAR.dateLabel}. 60 minuter för bolagsägare på 10 MSEK+. Ola Wallström delar Tillväxthjulet och fyra skiften bakom 650+ coachade bolag. Kostnadsfritt.`,
  alternates: { canonical: "/webinar" },
  // Paid-traffic landing page: kept out of search so Google visitors land on /live-webinar.
  robots: { index: false, follow: true },
  openGraph: {
    title: "Gratis webinar: så växer du från 10 till 50 miljoner",
    description:
      `Live på Zoom ${WEBINAR.dateLabel}. 60 minuter med Ola Wallström. Tillväxthjulet, fyra skiften, konkreta case.`,
    url: "https://olawallstrom.com/webinar",
    type: "website",
  },
};

export default function Page() {
  return <WebinarLanding source="ads" />;
}
