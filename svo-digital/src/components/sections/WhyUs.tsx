import { Gauge, Gem, MessagesSquare, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

const stats = [
  { value: 60, suffix: "+", label: "Projecten opgeleverd" },
  { value: 98, suffix: "%", label: "Klanttevredenheid" },
  { value: 3, suffix: "×", label: "Gemiddelde leadgroei" },
  { value: 14, suffix: " dagen", label: "Gemiddelde tijd tot livegang" },
];

const reasons = [
  {
    icon: Gem,
    title: "Premium als standaard",
    description:
      "Geen templates, geen shortcuts. Elke pixel wordt ontworpen voor jouw merk en elke regel code is geschreven om lang mee te gaan.",
  },
  {
    icon: Gauge,
    title: "Gebouwd op prestaties",
    description:
      "Snelle laadtijden, vlekkeloze weergave op elk apparaat en technische SEO standaard ingebouwd — want snelheid converteert en Google ziet het.",
  },
  {
    icon: MessagesSquare,
    title: "Een partner, geen leverancier",
    description:
      "Directe communicatie, eerlijk advies en proactieve ideeën. Je weet altijd precies waar je project staat.",
  },
  {
    icon: ShieldCheck,
    title: "Toekomstbestendige technologie",
    description:
      "Moderne technologie, schaalbare automatisering en AI die met je meegroeit — zodat de investering van vandaag ook morgen blijft renderen.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden border-t border-line bg-surface/30 py-28 lg:py-40"
    >
      {/* ambient corner glow */}
      <div
        aria-hidden
        className="absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-accent/[0.05] blur-[120px]"
      />

      <div className="container-site relative">
        <SectionHeading
          eyebrow="Waarom SVO Digital"
          title="Gekozen om vakmanschap, gebleven om resultaat"
          description="Bedrijven blijven bij ons omdat we het vakmanschap van een bureau combineren met de snelheid en aandacht van een toegewijde partner."
        />

        {/* stat band */}
        <Reveal className="mb-20">
          <div className="grid divide-y divide-line overflow-hidden rounded-3xl border border-line bg-card sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {stats.map((stat) => (
              <div key={stat.label} className="p-8 lg:p-10">
                <p className="font-display text-4xl font-semibold tracking-tight text-accent lg:text-5xl">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={(i % 2) * 0.1}>
                <div className="group flex h-full gap-6 rounded-3xl border border-line bg-card/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/25 hover:bg-card lg:p-9">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent transition-shadow duration-500 group-hover:shadow-[0_0_26px_-6px_var(--color-accent-glow)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-secondary lg:text-base">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
