import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { addOns, comparison, comparisonPlans, retainers, sprints } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Fixed-price 14-day sprints from $3,500, monthly retainers from $499, and à-la-carte add-ons. Simple, honest pricing.",
};

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-4 w-4 text-[#0071e3]" />
    ) : (
      <Minus className="mx-auto h-4 w-4 text-foreground/20" />
    );
  }
  return <span className="text-sm font-medium">{value}</span>;
}

export default function PricingPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Pricing"
        title="Simple, fixed, honest."
        sub="One sprint, one price, one live product. Retainers when you want to keep moving. No hourly surprises, ever."
      />

      {/* Sprints */}
      <section className="bg-white pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">14-day sprints</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The core product: a focused sprint that produces a hosted, demo-ready app with specs,
              deployment, and a growth playbook.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {sprints.map((tier, i) => (
              <Reveal key={tier.key} delay={i * 0.08}>
                <div
                  className={`flex h-full flex-col rounded-[28px] p-8 ${
                    tier.highlight ? "bg-black text-white" : "bg-[#f5f5f7] text-foreground"
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
                      tier.highlight ? "bg-white text-black" : "bg-[#0071e3] text-white hover:bg-[#0077ed]"
                    }`}
                  >
                    Reserve sprint
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Retainers */}
      <section className="bg-white pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Retainers, after launch
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              For teams that want ongoing improvements, monitoring, and feature expansion.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {retainers.map((plan, i) => (
              <Reveal key={plan.key} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-[28px] bg-[#f5f5f7] p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{plan.name}</h3>
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
                    className="mt-8 self-start text-sm font-medium text-[#0071e3] hover:underline"
                  >
                    {plan.name === "Enterprise" ? "Talk to us" : "Start retainer"}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-[#f5f5f7] py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Add-ons</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              À-la-carte services you can bolt onto any sprint or retainer.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addon, i) => (
              <Reveal key={addon.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-[28px] bg-white p-7">
                  <addon.icon className="h-6 w-6 text-[#0071e3]" strokeWidth={1.75} />
                  <h3 className="mt-5 font-semibold">{addon.title}</h3>
                  <div className="mt-1 text-sm font-medium text-[#0071e3]">{addon.price}</div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {addon.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Compare every plan.
            </h2>
          </Reveal>

          <Reveal className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="py-4 pr-4 text-left font-semibold">Feature</th>
                  {comparisonPlans.map((plan) => (
                    <th key={plan} className="px-3 py-4 text-center font-semibold capitalize">
                      {plan}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-t border-foreground/10">
                    <td className="py-4 pr-4 font-medium">{row.feature}</td>
                    {comparisonPlans.map((plan) => (
                      <td key={plan} className="px-3 py-4 text-center text-muted-foreground">
                        <Cell value={row[plan]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <p className="mt-12 text-center text-sm text-muted-foreground">
            All prices in USD. Deposits reserve engineering capacity — kickoff happens within 48
            hours.{" "}
            <Link href="/contact" className="text-[#0071e3] hover:underline">
              Questions? Ask us.
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
