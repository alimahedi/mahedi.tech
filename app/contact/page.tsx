import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute call or send us your brief. We reply within 24 hours — kickoff within 48.",
};

const steps = [
  { title: "We reply within 24 hours", description: "A short email to schedule the call — no sales sequence." },
  { title: "30-minute call", description: "We pressure-test the idea and scope what the 14 days would cover." },
  { title: "Proposal within 48 hours", description: "Fixed price, fixed scope, kickoff date. You decide." },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;

  return (
    <main className="bg-[#f5f5f7] pb-32 md:pb-40">
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you're building."
        sub="Book a free 30-minute call or send the brief — we reply within 24 hours."
      />

      {/* pt-8/12 lets the cards float in the gray so their rounded tops read clearly */}
      <div className="mx-auto max-w-6xl px-6 pt-8 md:pt-12">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <ContactForm initialPlan={plan} />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-8">
              <div className="rounded-[28px] bg-white p-8">
                <h2 className="font-semibold tracking-tight">What happens next</h2>
                <ol className="mt-6 space-y-6">
                  {steps.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="font-mono text-sm text-foreground/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="text-sm font-medium">{step.title}</div>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-[28px] bg-black p-8 text-white">
                <h2 className="font-semibold tracking-tight">Prefer email?</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Skip the form and write to us directly.
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-5 inline-block text-[15px] text-[#2997ff] hover:underline"
                >
                  {site.email}
                </a>
                <p className="mt-6 text-xs leading-relaxed text-white/40">
                  Sprints start weekly. See{" "}
                  <Link href="/pricing" className="underline hover:text-white/70">
                    pricing
                  </Link>{" "}
                  or the{" "}
                  <Link href="/sprint" className="underline hover:text-white/70">
                    sprint breakdown
                  </Link>{" "}
                  before you write.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
