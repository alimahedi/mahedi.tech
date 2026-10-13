import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms under which Mahedi Tech delivers sprints, retainers, and add-on work.",
};

const sections = [
  {
    title: "Services",
    body: "Mahedi Tech delivers fixed-scope 14-day development sprints, ongoing retainers, and à-la-carte add-on services. The exact scope, deliverables, and price for your engagement are defined in the proposal you approve before kickoff.",
  },
  {
    title: "Payment",
    body: "Sprints are paid in three milestones: a 30% deposit to reserve engineering capacity, 50% after the day-8 mid-sprint demo, and the remaining 20% on delivery (day 14). Retainers are billed monthly in advance. Deposits are non-refundable because they reserve capacity.",
  },
  {
    title: "Delivery guarantee",
    body: "If a sprint misses its 14-day delivery window for reasons within our control, we continue working at no additional cost until the agreed scope ships. Delays caused by third parties (e.g., payment processors, client-side reviews) pause the clock rather than void the guarantee.",
  },
  {
    title: "Intellectual property",
    body: "You own the delivered code, designs, and documentation upon final payment. We may retain rights to reuse generic modules and internal tooling unless purchased outright as part of the engagement.",
  },
  {
    title: "Confidentiality",
    body: "Anything you share with us — ideas, data, code, roadmaps — is treated as confidential. We only reference client work publicly when you've agreed to it.",
  },
  {
    title: "Limitation of liability",
    body: "Our liability for any claim related to the services is limited to the amount you paid for the engagement in question. We are not liable for indirect or consequential damages. All engagements are additionally governed by the signed contract.",
  },
];

export default function TermsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Legal"
        title="Terms."
        sub="The plain-English version. The signed contract for your engagement always takes precedence."
      />
      <section className="bg-white pb-32">
        <div className="mx-auto max-w-3xl px-6">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className={`py-10 ${i > 0 ? "border-t border-foreground/10" : ""}`}
            >
              <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{section.body}</p>
            </div>
          ))}
          <p className="mt-4 border-t border-foreground/10 pt-10 text-sm text-muted-foreground">
            Effective date: October 13, 2026 · {site.legalName} · {site.email}
          </p>
        </div>
      </section>
    </main>
  );
}
