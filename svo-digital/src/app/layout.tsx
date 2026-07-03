import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/layout/Cursor";
import { Preloader } from "@/components/layout/Preloader";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://svodigital.com"),
  title: "SVO Digital — Websites, Automatisering & AI-oplossingen",
  description:
    "SVO Digital helpt bedrijven groeien met prachtige websites, slimme automatisering en AI-oplossingen. Plan een gratis strategiegesprek.",
  keywords: [
    "digital agency",
    "webdesign",
    "website laten maken",
    "automatisering",
    "AI-oplossingen",
  ],
  openGraph: {
    title: "SVO Digital — Websites, Automatisering & AI-oplossingen",
    description:
      "Wij helpen bedrijven groeien met moderne digitale ervaringen. Websites. Automatisering. AI.",
    type: "website",
    siteName: "SVO Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "SVO Digital — Websites, Automatisering & AI-oplossingen",
    description:
      "Wij helpen bedrijven groeien met moderne digitale ervaringen. Websites. Automatisering. AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} noise bg-background text-primary antialiased`}
      >
        <Preloader />
        <ScrollProgress />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
