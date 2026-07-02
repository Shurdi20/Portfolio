import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SITE_URL } from "@/lib/constants";

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

const description =
  "SVO Digital is een premium digital agency die bedrijven helpt groeien met prachtige websites, slimme automatisering en AI-oplossingen. Boek een gratis strategiegesprek.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SVO Digital — Websites, Automatisering & AI-oplossingen",
    template: "%s — SVO Digital",
  },
  description,
  keywords: [
    "digital agency",
    "webdesign",
    "automatisering bedrijf",
    "AI-oplossingen",
    "premium websites laten maken",
    "bedrijfsautomatisering",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SVO Digital — Websites, Automatisering & AI-oplossingen",
    description,
    url: SITE_URL,
    siteName: "SVO Digital",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "SVO Digital — Websites, Automatisering & AI-oplossingen",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SVO Digital",
  url: SITE_URL,
  description,
  email: "hello@svodigital.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <MotionConfig reducedMotion="user">
          <ScrollProgress />
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
