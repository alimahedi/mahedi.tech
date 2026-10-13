import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected 14-day sprints: TechFlow, DataMind, and CloudSync — from concept to deployed product in two weeks.",
};

const caseStudies = [
  {
    index: "01",
    client: "TechFlow",
    field: "Founder, YC-track startup",
    tags: ["MVP", "Stripe", "Admin dashboard"],
    challenge:
      "A workflow tool with paying users in mind from day one — but nothing to show investors but a deck.",
    shipped:
      "A complete MVP in fourteen days: onboarding, the core workflow engine, Stripe subscriptions, and an admin dashboard with analytics events.",
    stack: ["Next.js", "Postgres", "Stripe"],
    quote: testimonials[0],
  },
  {
    index: "02",
    client: "DataMind",
    field: "CEO, data platform",
    tags: ["Validation", "Auth", "Deployment"],
    challenge:
      "The team needed real user feedback within a month — the internal roadmap said six.",
    shipped:
      "We cut the scope to the one flow that mattered, built it, and put it in front of real users inside two weeks. The validation paid for the sprint.",
    stack: ["Next.js", "Auth", "Vercel"],
    quote: testimonials[1],
  },
  {
    index: "03",
    client: "CloudSync",
    field: "Co-founder, dev tools",
    tags: ["MVP", "Integrations", "Launch"],
    challenge:
      "A vision that lived in slide form. They needed a product, a demo video, and a launch page — simultaneously.",
    shipped:
      "From concept to deployed product, plus the launch kit: demo video, one-pager, and a landing page tuned for conversion.",
    stack: ["Next.js", "Tailwind", "Analytics"],
    quote: testimonials[2],
  },
];

export default function WorkPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Selected work"
        title="Shipped in fourteen days."
        sub="A few recent sprints — the scope, the stack, and what went live on day fourteen."
      />

      <section className="bg-white pb-32">
        <div className="mx-auto max-w-6xl space-y-24 px-6 md:space-y-32">
          {caseStudies.map((study) => (
            <Reveal key={study.index}>
              <article className="grid gap-10 border-t border-foreground/10 pt-14 md:grid-cols-[1fr_1.4fr] md:gap-20">
                <div>
                  <span className="font-mono text-sm text-foreground/40">{study.index}</span>
                  <h2 className="mt-4 text-4xl font-semibold tracking-tighter md:text-5xl">
                    {study.client}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{study.field}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-foreground/15 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-foreground/50">
                    {study.stack.map((tech) => (
                      <span key={tech} className="font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/40">
                      The challenge
                    </h3>
                    <p className="mt-3 leading-relaxed text-foreground/80">{study.challenge}</p>
                  </div>
                  <div className="mt-8">
                    <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/40">
                      What shipped
                    </h3>
                    <p className="mt-3 leading-relaxed text-foreground/80">{study.shipped}</p>
                  </div>
                  <blockquote className="mt-10 border-l-2 border-[#0071e3] pl-5">
                    <p className="text-balance text-lg font-medium leading-snug tracking-tight">
                      "{study.quote.quote}"
                    </p>
                    <footer className="mt-3 text-sm text-muted-foreground">
                      {study.quote.author} · {study.quote.role}
                    </footer>
                  </blockquote>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal className="rounded-[28px] bg-[#f5f5f7] p-10 text-center md:p-14">
            <h2 className="text-3xl font-semibold tracking-tighter md:text-4xl">
              Your product could be the next line here.
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-[#0071e3] px-7 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
            >
              Start your sprint
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
