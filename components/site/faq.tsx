"use client";

import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Eyebrow, Reveal } from "./reveal";
import { faqs } from "@/lib/data";

export function Faq() {
  return (
    <section id="faq" className="bg-[#f5f5f7] py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr] md:gap-24">
          <div className="self-start md:sticky md:top-32">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tighter md:text-6xl">
              Questions,
              <br />
              answered.
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">
              Still curious?{" "}
              <Link href="/contact" className="text-[#0071e3] hover:underline">
                Book a call
              </Link>{" "}
              and ask us directly.
            </p>
          </div>

          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className={i === 0 ? "border-t border-foreground/10" : "border-foreground/10"}
                >
                  <AccordionTrigger className="py-6 text-left text-lg font-medium hover:no-underline [&>svg]:text-muted-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-[15px] leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
