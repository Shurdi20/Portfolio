import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";

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

const siteUrl = "https://svodigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SVO Digital — Websites, Automation & AI Solutions",
    template: "%s — SVO Digital",
  },
  description:
    "SVO Digital is a premium digital agency helping businesses grow through beautiful websites, intelligent automation and AI-powered solutions.",
  keywords: [
    "digital agency",
    "web design",
    "automation agency",
    "AI solutions",
    "premium website design",
    "business automation",
  ],
  openGraph: {
    title: "SVO Digital — Websites, Automation & AI Solutions",
    description:
      "Helping businesses grow through beautiful websites, intelligent automation and AI-powered solutions.",
    url: siteUrl,
    siteName: "SVO Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SVO Digital — Websites, Automation & AI Solutions",
    description:
      "Helping businesses grow through beautiful websites, intelligent automation and AI-powered solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-background">
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
