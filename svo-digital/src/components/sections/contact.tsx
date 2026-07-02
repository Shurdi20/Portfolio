"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { TextReveal } from "@/components/ui/text-reveal";
import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/lib/constants";

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted/70 outline-none transition-colors duration-300 focus:border-accent/50 focus:bg-white/[0.05]";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      message: String(data.get("message") || ""),
      website: String(data.get("website") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(json.error || "Er ging iets mis. Probeer het opnieuw.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Er ging iets mis. Probeer het opnieuw.");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[420px] w-[900px] rounded-full bg-accent/[0.12] blur-[140px]" />
      </div>

      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-card px-8 py-16 sm:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
            }}
          />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <h2 className="mx-auto max-w-md text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:mx-0">
                <TextReveal text="Klaar om je bedrijf te laten groeien?" as="span" className="block" />
              </h2>
              <Reveal type="slide-up" delay={0.2}>
                <p className="mx-auto mt-6 max-w-sm text-lg text-muted lg:mx-0">
                  Laten we iets uitzonderlijks bouwen. Vertel ons over je project en we
                  reageren binnen één werkdag.
                </p>
              </Reveal>
              <Reveal type="fade" delay={0.3}>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-300 hover:text-accent"
                >
                  Liever e-mailen? {SITE.email}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </Reveal>
            </div>

            <Reveal type="scale" delay={0.25}>
              {status === "success" ? (
                <div
                  role="status"
                  className="flex h-full min-h-[380px] flex-col items-center justify-center rounded-2xl border border-accent/30 bg-accent/[0.06] p-8 text-center"
                >
                  <CheckCircle2 className="size-10 text-accent" />
                  <p className="mt-4 font-display text-xl font-medium">Bericht verzonden</p>
                  <p className="mt-2 max-w-xs text-sm text-muted">
                    Bedankt voor je bericht — we reageren binnen één werkdag.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  {/* Honeypot field — hidden from real users, catches basic bots */}
                  <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted">
                        Naam
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        minLength={2}
                        maxLength={100}
                        autoComplete="name"
                        className={inputClasses}
                        placeholder="Jan Jansen"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted">
                        E-mail
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={200}
                        autoComplete="email"
                        className={inputClasses}
                        placeholder="jan@bedrijf.nl"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-muted">
                      Bedrijf <span className="text-muted">(optioneel)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      maxLength={200}
                      autoComplete="organization"
                      className={inputClasses}
                      placeholder="Bedrijf B.V."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">
                      Bericht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      maxLength={5000}
                      rows={4}
                      className={inputClasses}
                      placeholder="Vertel ons kort over je project en doelen…"
                    />
                  </div>

                  {status === "error" && (
                    <p role="alert" className="text-sm text-red-400">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    data-cursor-hover
                    className="group mt-2 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-medium text-background transition-colors duration-300 hover:bg-[#c9ff33] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="size-4 animate-spin motion-reduce:animate-none" />
                        Versturen…
                      </>
                    ) : (
                      <>
                        Boek een Gratis Strategiegesprek
                        <ArrowUpRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
