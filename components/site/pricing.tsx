"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Eyebrow, Reveal } from "./reveal";
import { retainers, sprints } from "@/lib/data";

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#f5f5f7] py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-6 text-5xl font-semibold tracking-tighter md:text-7xl">
            Pick your sprint.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            One focused sprint. A fixed price. A live product in fourteen days.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {sprints.map((tier, i) => (
            <Reveal key={tier.key} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-[28px] p-8 transition-transform duration-300 ${
                  tier.highlight
                    ? "bg-black text-white md:-translate-y-3 md:shadow-[0_24px_80px_-32px_rgba(0,0,0,0.45)]"
                    : "bg-white text-foreground hover:-translate-y-1"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{tier.name}</h3>
                  {tier.highlight && (
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white">
                      Most popular
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight">{tier.price}</span>
                  <span className={`text-sm ${tier.highlight ? "text-white/50" : "text-muted-foreground"}`}>
                    {tier.cadence}
                  </span>
                </div>
                <p className={`mt-3 text-sm ${tier.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${tier.highlight ? "text-[#30d158]" : "text-[#0071e3]"}`}
                      />
                      <span className={tier.highlight ? "text-white/80" : "text-foreground/80"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?plan=${tier.key}`}
                  className={`mt-10 w-full rounded-full py-3 text-center text-sm font-medium transition-transform hover:scale-[1.02] active:scale-95 ${
                    tier.highlight
                      ? "bg-white text-black"
                      : "bg-[#0071e3] text-white hover:bg-[#0077ed]"
                  }`}
                >
                  Reserve sprint
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-32">
          <Reveal className="text-center">
            <Eyebrow>After launch</Eyebrow>
            <h3 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
              Keep the momentum.
            </h3>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {retainers.map((plan, i) => (
              <Reveal key={plan.key} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-[28px] bg-white p-7">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{plan.name}</h4>
                    {plan.highlight && (
                      <span className="rounded-full bg-[#0071e3]/10 px-3 py-1 text-xs font-medium text-[#0071e3]">
                        Most popular
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-2xl font-semibold tracking-tight">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.cadence}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/75">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0071e3]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/contact?plan=${plan.key}`}
                    className="mt-8 inline-flex items-center gap-1 self-start text-sm font-medium text-[#0071e3] hover:underline"
                  >
                    {plan.name === "Enterprise" ? "Talk to us" : "Start retainer"}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-muted-foreground">
            All prices in USD. Deposits reserve engineering capacity — kickoff happens within 48
            hours.{" "}
            <Link href="/pricing" className="text-[#0071e3] hover:underline">
              Full details
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
