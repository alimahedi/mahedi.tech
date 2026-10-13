import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What Mahedi Tech collects, why, and how it's handled.",
};

const sections = [
  {
    title: "What we collect",
    body: "When you contact us through the form or by email, we collect what you send: your name, email address, company (if provided), and the contents of your message. We also keep the date and time of the submission.",
  },
  {
    title: "How we use it",
    body: "Submissions are used for exactly one thing: replying to your inquiry and, if we start working together, delivering the work. We never sell, rent, or share your information with third parties for marketing purposes.",
  },
  {
    title: "Analytics",
    body: "This site uses privacy-respecting, aggregated analytics (Vercel Analytics) to understand overall traffic. No cross-site tracking, no advertising profiles, no cookies used for ad targeting.",
  },
  {
    title: "Retention",
    body: "Inquiries are kept for as long as they remain relevant — typically until the project concludes, or up to 24 months if we never spoke again. Ask us to delete your data at any time and it's gone within 72 hours.",
  },
  {
    title: "Your rights",
    body: `You can ask what we hold about you, ask for a copy, or ask us to delete it. Email ${site.email} and we'll handle it.`,
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Legal"
        title="Privacy."
        sub="The short version: we collect what you send us, use it only to reply and to deliver work, and delete it when you ask."
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
            Effective date: October 13, 2026 · {site.legalName}
          </p>
        </div>
      </section>
    </main>
  );
}
