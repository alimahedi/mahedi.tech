"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Reveal } from "./reveal";
import { sprintSteps } from "@/lib/data";

export function Services() {
  return (
    <section id="sprint" className="bg-white py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr] md:gap-24">
          <div className="self-start md:sticky md:top-32">
            <Eyebrow>The sprint</Eyebrow>
            <h2 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tighter md:text-6xl">
              Three moves.
              <br />
              Fourteen days.
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">
              Every sprint runs the same tight rhythm. Nothing wasted, nothing extra — momentum is
              the whole point.
            </p>
            <Link
              href="/sprint"
              className="mt-8 inline-flex items-center gap-1 text-[15px] text-[#0071e3] hover:underline"
            >
              How it works
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            {sprintSteps.map((step) => (
              <Reveal key={step.index} className="border-t border-foreground/10 py-12 first:border-t-0 first:pt-0 md:first:pt-0">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-foreground/40">{step.index}</span>
                  <span className="rounded-full border border-foreground/15 px-3 py-1 text-xs text-muted-foreground">
                    {step.duration}
                  </span>
                </div>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{step.description}</p>
                <ul className="mt-7 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {step.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-foreground/70"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-foreground/30" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
