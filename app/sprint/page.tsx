import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { deliverables, milestones, sprintSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "The sprint",
  description:
    "How a 14-day sprint works: two days of discovery, ten days of focused build, two days of launch. Fixed scope, fixed price, live product.",
};

export default function SprintPage() {
  return (
    <main>
      <PageHeader
        eyebrow="The sprint"
        title="Two weeks. One focused team. A live product."
        sub="Every sprint runs the same tight rhythm — nothing wasted, nothing extra. Here's exactly how the fourteen days unfold."
      />

      <section className="bg-white pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {sprintSteps.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-[28px] bg-[#f5f5f7] p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-foreground/40">{step.index}</span>
                    <span className="rounded-full border border-foreground/15 px-3 py-1 text-xs text-muted-foreground">
                      {step.phase}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <ul className="mt-7 flex-1 space-y-2.5 border-t border-foreground/10 pt-6">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground/70">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-foreground/30" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl">
              Everything in the box.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              No hidden costs, no surprise delays. Every sprint ships with the full package.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-[28px] border border-foreground/10 p-7">
                  <item.icon className="h-6 w-6 text-[#0071e3]" strokeWidth={1.75} />
                  <h3 className="mt-5 font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7] py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:gap-24">
            <div className="self-start md:sticky md:top-32">
              <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl">
                Payments in three milestones.
              </h2>
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">
                You never pay ahead of progress. The deposit reserves the slot; the rest follows
                demonstrated work.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-block rounded-full bg-[#0071e3] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
              >
                Reserve your sprint
              </Link>
            </div>
            <div>
              {milestones.map((milestone) => (
                <Reveal key={milestone.label} className="border-t border-foreground/10 py-10 first:border-t-0 first:pt-0 md:first:pt-0">
                  <div className="flex items-center gap-6">
                    <span className="text-5xl font-semibold tracking-tighter md:text-6xl">
                      {milestone.percentage}%
                    </span>
                    <div>
                      <div className="font-medium">{milestone.label}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <p className="mt-8 rounded-2xl bg-black p-6 text-sm leading-relaxed text-white/70">
                <span className="font-medium text-white">The 14-day guarantee:</span> if we miss the
                window, we keep working at no extra cost until it ships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
