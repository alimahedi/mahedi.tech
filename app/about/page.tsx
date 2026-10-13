import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { Metrics } from "@/components/site/metrics";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mahedi Tech is a 14-day MVP studio. Subtraction is the strategy, momentum over meetings, production from day one.",
};

const principles = [
  {
    title: "Subtraction is the strategy",
    description:
      "Great software isn't built faster by adding more. It's built faster by removing everything that isn't the product. Every feature must earn its place.",
  },
  {
    title: "Momentum over meetings",
    description:
      "Weekly demos, daily commits, no status calls. You see working software from day three — not a slide about software.",
  },
  {
    title: "Production from day one",
    description:
      "Hosted, monitored, and deployable from the first hour. There is no 'we'll productionize it later' phase.",
  },
  {
    title: "You own everything",
    description:
      "The code, the infrastructure, the knowledge. When the sprint ends, nothing holds you hostage — you can hand it to any team.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About"
        title="A studio that ships."
        sub="Mahedi Tech exists for one reason: most ideas don't die from rejection — they die from six-month roadmaps. We compress idea to live product into fourteen days."
      />

      <section className="bg-white pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-x-20 gap-y-14 md:grid-cols-2">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={(i % 2) * 0.08}>
                <span className="font-mono text-sm text-foreground/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  {principle.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Metrics />
    </main>
  );
}
