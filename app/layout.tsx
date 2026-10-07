import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olawallstrom.com"),
  title: {
    default: "Ola Wallström – Mentor för bolagsägare från 10 till 50 Mkr",
    template: "%s · Ola Wallström",
  },
  description:
    "Serieentreprenör och mentor med 25 års erfarenhet. Jag coachar bolagsägare mellan 10–50 Mkr till självgående och lönsamma bolag — utan att du offrar livet runt omkring.",
  openGraph: {
    title: "Ola Wallström – Mentor för bolagsägare från 10 till 50 Mkr",
    description:
      "Serieentreprenör med 25 års erfarenhet och 650+ coachade bolagsägare. Boka ett kostnadsfritt strategisamtal.",
    url: "https://olawallstrom.com",
    siteName: "Ola Wallström",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ola Wallström – Mentor för bolagsägare",
    description:
      "Serieentreprenör med 25 års erfarenhet. Mentor för bolagsägare 10–50 Mkr.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${manrope.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-[#0B0E14]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
