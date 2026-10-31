import type { Metadata, Viewport } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import StructuredData from "@/components/StructuredData";
import CookieBanner from "@/components/CookieBanner";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F3EC" },
    { media: "(prefers-color-scheme: dark)", color: "#173B60" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://olawallstrom.com"),
  title: {
    default: "Ola Wallström | Autentisk affärsutveckling",
    template: "%s | Ola Wallström",
  },
  description:
    "Autentisk affärsutveckling. Äkta, rakt och med riktning framåt. Ola Wallström coachar bolagsägare som vill äga sin tid och sitt företag.",
  applicationName: "Ola Wallström",
  authors: [{ name: "Ola Wallström", url: "https://olawallstrom.com" }],
  creator: "Ola Wallström",
  publisher: "Perspektivo i Sverige AB",
  keywords: [
    "Ola Wallström",
    "autentisk affärsutveckling",
    "mentor",
    "serieentreprenör",
    "Ägarklivet",
    "VIP-coaching",
    "bolagsägare",
    "ledarskap",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Ola Wallström | Autentisk affärsutveckling",
    description:
      "Äkta, rakt och med riktning framåt. Boka ett kostnadsfritt strategisamtal direkt med Ola.",
    url: "https://olawallstrom.com",
    siteName: "Ola Wallström",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ola Wallström | Autentisk affärsutveckling",
    description:
      "Äkta, rakt och med riktning framåt. Mentor för bolagsägare som vill äga sin tid.",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${lora.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://calendly.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body className="min-h-screen flex flex-col bg-papper text-ink">
        <StructuredData />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollReveal />
        <CookieBanner />
      </body>
    </html>
  );
}
