import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SITE, SITE_URL } from "@/lib/constants";

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

const title = "SVO Digital — Websites, Automatisering & AI-oplossingen";
const description =
  "SVO Digital is een premium digital agency die bedrijven helpt groeien met prachtige websites, slimme automatisering en AI-oplossingen. Boek een gratis strategiegesprek.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s — ${SITE.name}`,
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
    title,
    description,
    url: SITE_URL,
    siteName: SITE.name,
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title,
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
  name: SITE.name,
  url: SITE_URL,
  description,
  email: SITE.email,
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
