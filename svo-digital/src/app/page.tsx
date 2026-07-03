import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <Work />
        <Process />
        <WhyUs />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
