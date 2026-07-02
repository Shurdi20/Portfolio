import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";

// Below-the-fold sections are code-split into their own chunks so their
// (framer-motion-heavy) JS doesn't compete with the hero for main-thread
// time during initial hydration. They still render on the server (no
// `ssr: false`), so content stays in the initial HTML for SEO/no-JS.
const Portfolio = dynamic(() =>
  import("@/components/sections/portfolio").then((m) => m.Portfolio)
);
const Process = dynamic(() => import("@/components/sections/process").then((m) => m.Process));
const WhyChooseUs = dynamic(() =>
  import("@/components/sections/why-choose-us").then((m) => m.WhyChooseUs)
);
const Faq = dynamic(() => import("@/components/sections/faq").then((m) => m.Faq));
const Contact = dynamic(() => import("@/components/sections/contact").then((m) => m.Contact));

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <WhyChooseUs />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
