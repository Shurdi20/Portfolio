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
  title: "SVO Digital — Websites, Automation & AI Solutions",
  description:
    "SVO Digital helps businesses grow through beautiful websites, intelligent automation and AI-powered solutions. Book a free strategy call.",
  keywords: [
    "digital agency",
    "web design",
    "website development",
    "automation",
    "AI solutions",
  ],
  openGraph: {
    title: "SVO Digital — Websites, Automation & AI Solutions",
    description:
      "Helping businesses grow through modern digital experiences. Websites. Automation. AI.",
    type: "website",
    siteName: "SVO Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "SVO Digital — Websites, Automation & AI Solutions",
    description:
      "Helping businesses grow through modern digital experiences. Websites. Automation. AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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
