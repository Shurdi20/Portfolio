import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative flex min-h-[70vh] items-center overflow-hidden py-36">
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-[420px] w-[900px] rounded-full bg-accent/[0.1] blur-[140px]" />
          </div>
          <Container>
            <div className="flex flex-col items-center text-center">
              <p className="font-display text-sm font-medium uppercase tracking-[0.3em] text-accent">
                404
              </p>
              <h1 className="mt-6 font-display text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
                This page doesn&rsquo;t exist
              </h1>
              <p className="mx-auto mt-6 max-w-md text-lg text-muted">
                The page you&rsquo;re looking for may have moved or never existed. Let&rsquo;s
                get you back on track.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                <Button href="/" size="lg" showArrow>
                  Back to homepage
                </Button>
                <Button href="/#contact" variant="secondary" size="lg">
                  Contact us
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
