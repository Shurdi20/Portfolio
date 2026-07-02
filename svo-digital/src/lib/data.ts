export const SERVICES = [
  {
    id: "websites",
    number: "01",
    title: "Websites",
    description:
      "Bespoke, high-performance websites engineered to convert — built with meticulous craft and modern architecture.",
    features: ["Custom design systems", "Blazing-fast performance", "SEO-first architecture"],
  },
  {
    id: "automation",
    number: "02",
    title: "Automation",
    description:
      "We connect your tools and streamline operations so your team spends less time on repetitive work and more on growth.",
    features: ["Workflow automation", "CRM & tool integrations", "Custom internal dashboards"],
  },
  {
    id: "ai",
    number: "03",
    title: "AI Solutions",
    description:
      "Intelligent AI agents and copilots tailored to your business — from support to sales to internal operations.",
    features: ["Custom AI agents", "Chat & voice copilots", "Predictive automation"],
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "We dive deep into your business, goals and audience to define a clear strategic direction.",
  },
  {
    number: "02",
    title: "Design",
    description: "We craft a distinctive visual identity and user experience rooted in your brand and objectives.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Our engineers bring the design to life with clean, scalable and high-performance code.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We ship, monitor and optimize — ensuring your project performs from day one and beyond.",
  },
] as const;

export const PORTFOLIO_PROJECTS = [
  {
    title: "Investment Platform",
    category: "Website · Finance",
    description: "A refined investment platform concept with real-time dashboards and a premium editorial feel.",
    tags: ["Web Design", "Development", "Branding"],
    gradient: "from-[#1a1a1a] via-[#0f1a08] to-[#080808]",
  },
  {
    title: "Retail Operations System",
    category: "Automation · Retail",
    description: "Inventory and fulfillment automation designed to cut operational overhead significantly.",
    tags: ["Automation", "Integrations", "Dashboards"],
    gradient: "from-[#151515] via-[#101a06] to-[#080808]",
  },
  {
    title: "AI Support Copilot",
    category: "AI Solutions · SaaS",
    description: "A custom AI support agent built to handle tier-1 tickets with human-level nuance.",
    tags: ["AI Agent", "NLP", "Product"],
    gradient: "from-[#171717] via-[#131f09] to-[#080808]",
  },
  {
    title: "Studio Portfolio Site",
    category: "Website · Creative",
    description: "An immersive portfolio experience concept for a creative or architecture studio.",
    tags: ["Web Design", "Motion", "Development"],
    gradient: "from-[#161616] via-[#0d1a07] to-[#080808]",
  },
] as const;

export const FAQS = [
  {
    question: "What does the process look like when we start working together?",
    answer:
      "We begin with a free strategy call to understand your goals, followed by our Discover → Design → Develop → Launch process. You'll have full visibility and feedback rounds at every stage.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most websites take 3-6 weeks, automation systems 2-4 weeks, and AI solutions vary based on complexity. We'll give you a precise timeline after our first call.",
  },
  {
    question: "Do you work with businesses outside your local market?",
    answer:
      "Yes — we work with clients globally and run our entire process remotely with clear communication and async updates.",
  },
  {
    question: "What's included after launch?",
    answer:
      "Every project includes a post-launch support window, and we offer ongoing retainers for continued optimization, updates and support.",
  },
  {
    question: "Can you help if we only need automation or AI, not a full website?",
    answer:
      "Absolutely. Our services are modular — you can engage us for a single service or a combination tailored to your needs.",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Senior-level craft",
    description: "No junior hand-offs. Every project is led by senior designers and engineers.",
  },
  {
    title: "Strategy-first approach",
    description: "We solve business problems first — design and code follow strategy, not the other way around.",
  },
  {
    title: "Transparent process",
    description: "Clear timelines, honest communication, and no surprises from kickoff to launch.",
  },
  {
    title: "Built to scale",
    description: "Every system we build is engineered to grow with your business, not against it.",
  },
] as const;
