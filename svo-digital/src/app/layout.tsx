import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { CustomCursor } from "@/components/ui/custom-cursor";
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
  "SVO Digital is a premium digital agency helping businesses grow through beautiful websites, intelligent automation and AI-powered solutions. Book a free strategy call today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SVO Digital — Websites, Automation & AI Solutions",
    template: "%s — SVO Digital",
  },
  description,
  keywords: [
    "digital agency",
    "web design",
    "automation agency",
    "AI solutions",
    "premium website design",
    "business automation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SVO Digital — Websites, Automation & AI Solutions",
    description,
    url: SITE_URL,
    siteName: "SVO Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SVO Digital — Websites, Automation & AI Solutions",
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
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <MotionConfig reducedMotion="user">
          <ScrollProgress />
          <CustomCursor />
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
