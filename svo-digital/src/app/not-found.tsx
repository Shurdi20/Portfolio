import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative flex min-h-[70vh] items-center overflow-hidden py-24">
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-[420px] w-[900px] rounded-full bg-accent/[0.1] blur-[140px]" />
          </div>
          <Container>
            <div className="flex flex-col items-center text-center">
              <p className="font-display text-sm font-medium uppercase tracking-[0.3em] text-accent">
                404
              </p>
              <h1 className="mt-6 font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
                Deze pagina bestaat niet
              </h1>
              <p className="mx-auto mt-6 max-w-md text-base text-muted">
                De pagina die je zoekt is mogelijk verplaatst of heeft nooit bestaan. Laten we
                je weer op weg helpen.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                <Button href="/" size="lg" showArrow>
                  Terug naar de homepage
                </Button>
                <Button href="/#contact" variant="secondary" size="lg">
                  Neem contact op
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
