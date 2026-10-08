import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olawallstrom.com"),
  title: {
    default: "Ola Wallström – Autentisk affärsutveckling",
    template: "%s · Ola Wallström",
  },
  description:
    "Autentisk affärsutveckling. Äkta, rakt och med riktning framåt. Ola Wallström coachar bolagsägare som vill äga sin tid och sitt företag.",
  openGraph: {
    title: "Ola Wallström – Autentisk affärsutveckling",
    description:
      "Äkta, rakt och med riktning framåt. Boka ett kostnadsfritt strategisamtal direkt med Ola.",
    url: "https://olawallstrom.com",
    siteName: "Ola Wallström",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ola Wallström – Autentisk affärsutveckling",
    description:
      "Äkta, rakt och med riktning framåt. Mentor för bolagsägare som vill äga sin tid.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${lora.variable} ${raleway.variable}`}>
      <body className="min-h-screen flex flex-col bg-papper text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
