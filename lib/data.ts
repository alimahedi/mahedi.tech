import {
  LayoutDashboard,
  CreditCard,
  LineChart,
  Clapperboard,
  FileText,
  ShieldCheck,
  Zap,
  Plug,
  Sparkles,
  Gauge,
  Tags,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "mahedi.tech",
  legalName: "Mahedi Tech",
  tagline: "Zero to one, fast.",
  email: "hello@atomiclabs.space",
  url: "https://mahedi.tech",
  description:
    "A 14-day MVP studio for founders. Strategy, design, and engineering in one focused sprint — from idea to live product in fourteen days.",
};

export const navLinks = [
  { label: "The sprint", href: "/sprint" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const sprintSteps = [
  {
    index: "01",
    phase: "Days 1–2",
    title: "Discover",
    duration: "2 days",
    description: "We pressure-test the idea before a single line of code is written.",
    features: [
      "Market & competitor analysis",
      "Technical feasibility",
      "User journey mapping",
      "Stack recommendation",
    ],
  },
  {
    index: "02",
    phase: "Days 3–12",
    title: "Build",
    duration: "10 days",
    description: "From rapid prototype to production deploy — the core, complete.",
    features: [
      "Core flow implementation",
      "Auth & user management",
      "Stripe payments",
      "Admin dashboard & analytics",
    ],
  },
  {
    index: "03",
    phase: "Days 13–14",
    title: "Launch",
    duration: "2 days",
    description: "Shipping is the beginning, not the end. We set up the first growth loop.",
    features: [
      "Landing page optimization",
      "First growth experiment",
      "Demo video",
      "Launch one-pager",
    ],
  },
];

export const sprints = [
  {
    key: "starter",
    name: "Starter",
    price: "$3,500",
    cadence: "one-time",
    description: "For founders validating an idea.",
    features: [
      "14-day delivery guarantee",
      "Discovery & product spec",
      "Core flow implementation",
      "Production deployment",
      "3 days post-launch support",
    ],
    highlight: true,
  },
  {
    key: "growth",
    name: "Growth",
    price: "$7,500",
    cadence: "one-time",
    description: "For products that need integrations.",
    features: [
      "Everything in Starter",
      "2 additional features",
      "Stripe & Zapier integrations",
      "Performance & security checks",
      "7 days post-launch support",
    ],
    highlight: false,
  },
  {
    key: "max",
    name: "Max",
    price: "$10,000",
    cadence: "one-time",
    description: "For launches that need polish.",
    features: [
      "Everything in Growth",
      "Polished UI & motion design",
      "Demo script & pitch deck",
      "Scalability audit",
      "30 days support, priority SLA",
    ],
    highlight: false,
  },
];

export const retainers = [
  {
    key: "launch",
    name: "Launch",
    price: "$499",
    cadence: "/month",
    description: "Maintenance and minor updates.",
    features: ["4 dev hours monthly", "Hosting & uptime monitoring", "Weekly backups", "Email support"],
    highlight: false,
  },
  {
    key: "scale",
    name: "Scale",
    price: "$2,500",
    cadence: "/month",
    description: "For teams iterating fast on growth.",
    features: ["20 dev hours monthly", "24h bug-fix SLA", "A/B tests & CRO", "Monthly roadmap"],
    highlight: true,
  },
  {
    key: "enterprise",
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "For companies with bigger requirements.",
    features: [
      "Dedicated engineering pod",
      "SSO & SOC2 readiness",
      "3-hour response SLA",
      "Custom hosting & metrics",
    ],
    highlight: false,
  },
];

export const deliverables: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: LayoutDashboard, title: "Admin dashboard", description: "Management interface for your team" },
  { icon: CreditCard, title: "Stripe payments", description: "Integrated payment processing, if you need it" },
  { icon: LineChart, title: "Analytics events", description: "User tracking and behavior insights" },
  { icon: Clapperboard, title: "Demo video", description: "Professional product demonstration" },
  { icon: FileText, title: "Launch one-pager", description: "Product summary for launch day" },
  { icon: ShieldCheck, title: "30-day bug-fix warranty", description: "Post-launch support included" },
];

export const milestones = [
  { percentage: 30, label: "Deposit to book", description: "Reserves engineering capacity" },
  { percentage: 50, label: "Mid-sprint demo", description: "Day 8 feedback & pivot" },
  { percentage: 20, label: "On delivery", description: "Day 14 final payment" },
];

export const addOns: { icon: LucideIcon; title: string; price: string; description: string }[] = [
  { icon: Zap, title: "Extra dev hours", price: "$150/hr", description: "Pack discounts for 20+ hours" },
  { icon: ShieldCheck, title: "Security audit", price: "$1,200+", description: "Hardening & compliance checks" },
  { icon: Plug, title: "Integrations", price: "$500–$3,000", description: "Stripe, Salesforce, HubSpot" },
  { icon: Sparkles, title: "Design polish", price: "$1,000+", description: "UI refinement & motion" },
  { icon: Gauge, title: "Performance optimization", price: "$800+", description: "Speed & scalability improvements" },
  { icon: Tags, title: "White-label", price: "$500+", description: "Rebranding & customization" },
];

export type PlanKey = "starter" | "growth" | "max" | "launch" | "scale" | "enterprise";

export const comparison: {
  feature: string;
  starter: boolean | string;
  growth: boolean | string;
  max: boolean | string;
  launch: boolean | string;
  scale: boolean | string;
  enterprise: boolean | string;
}[] = [
  { feature: "14-day delivery", starter: true, growth: true, max: true, launch: false, scale: false, enterprise: false },
  { feature: "Discovery session", starter: true, growth: true, max: true, launch: false, scale: false, enterprise: false },
  { feature: "Features included", starter: "1", growth: "3", max: "5", launch: false, scale: false, enterprise: "Custom" },
  { feature: "Hosting & deployment", starter: true, growth: true, max: true, launch: true, scale: true, enterprise: true },
  { feature: "Analytics & dashboard", starter: false, growth: true, max: true, launch: true, scale: true, enterprise: true },
  { feature: "Post-launch support", starter: "3d", growth: "7d", max: "30d", launch: "4h/mo", scale: "20h/mo", enterprise: "SLA" },
  { feature: "Priority queue", starter: false, growth: false, max: true, launch: false, scale: true, enterprise: true },
  { feature: "Price", starter: "$3.5k", growth: "$7.5k", max: "$10k", launch: "$499/mo", scale: "$2.5k/mo", enterprise: "Custom" },
];

export const comparisonPlans = ["starter", "growth", "max", "launch", "scale", "enterprise"] as const;

export const faqs = [
  {
    question: "How fast can you start?",
    answer: "Sprints start weekly. Once the deposit lands, kickoff happens within 48 hours.",
  },
  {
    question: "What if we need more features after the 14 days?",
    answer:
      "Add hourly dev packs, or move to a retainer for ongoing work. Your sprint doesn't have to be the end of the road.",
  },
  {
    question: "Do you provide refunds?",
    answer:
      "Deposits are non-refundable — they reserve engineering capacity. Larger projects can be structured around milestones; see the contract for details.",
  },
  {
    question: "Do you take equity deals?",
    answer: "For the right founders, yes. Book a call and tell us what you're building.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do, upon final payment. We may retain rights to reuse generic modules unless you purchase them outright.",
  },
  {
    question: "Do you provide support after launch?",
    answer: "Every sprint includes a support window after launch. Retainers cover everything beyond that.",
  },
];

export const testimonials = [
  {
    quote:
      "Mahedi Tech delivered our MVP in exactly 14 days. The process is incredibly efficient and the quality is enterprise-grade.",
    author: "Sarah Chen",
    role: "Founder, TechFlow",
  },
  {
    quote:
      "We validated our idea with real users within two weeks. Best investment we made. Responsive, knowledgeable, fast.",
    author: "Alex Rodriguez",
    role: "CEO, DataMind",
  },
  {
    quote: "From concept to deployed product. They understood our vision and executed flawlessly.",
    author: "Emma Johnson",
    role: "Co-founder, CloudSync",
  },
];

export const stats = [
  { to: 500, suffix: "+", label: "MVPs shipped" },
  { to: 14, suffix: "", label: "Days to launch" },
  { to: 1200, suffix: "+", label: "Founders served" },
  { to: 98, suffix: "%", label: "Success rate" },
];
