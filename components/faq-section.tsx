"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { AnimatedSection } from "./animated-section"

interface FAQSectionProps {
  onBookCall?: () => void
}

const faqs = [
  {
    question: "How fast can you start?",
    answer: "We start new sprints weekly. After booking and deposit, kickoff is within 48 hours.",
  },
  {
    question: "What if we need more features after the 14 days?",
    answer:
      "No problem! You can add more features through our hourly dev packs or switch to a subscription retainer for ongoing work.",
  },
  {
    question: "Do you provide refunds?",
    answer:
      "Deposits are non-refundable because they reserve our engineering capacity. For larger projects we offer milestone-based refunds in rare cases — see contract.",
  },
  {
    question: "Do you take equity deals?",
    answer: "Yes, we do take equity deals for the right founders. Get in touch to discuss your situation.",
  },
  {
    question: "Who owns the code?",
    answer: "You do, upon final payment. We may retain rights to re-use generic modules unless purchased outright.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes! All 14-day sprints include a 1-week support window. After that, you can move to subscription support.",
  },
]

export function FAQSection({ onBookCall }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]))

  const toggleItem = (index: number) => {
    const newSet = new Set(openItems)
    if (newSet.has(index)) {
      newSet.delete(index)
    } else {
      newSet.add(index)
    }
    setOpenItems(newSet)
  }

  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">Get answers to common questions</p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={100 + index * 50}>
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 rounded-xl border-2 border-border bg-surface-muted/30 hover:border-accent-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold group-hover:text-accent-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-accent-primary transition-transform duration-300 ${
                      openItems.has(index) ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openItems.has(index) && (
                  <div className="mt-4 text-muted-foreground text-sm leading-relaxed animate-fade-in">{faq.answer}</div>
                )}
              </button>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-success/10 to-success/5 border-2 border-success/30 text-center"
          delay={600}
        >
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Book a free 20-minute call to discuss your project and get all your questions answered.
          </p>
          <button
            onClick={onBookCall}
            className="px-8 py-3 bg-accent-primary hover:bg-accent-primary/90 text-accent-primary-foreground font-bold rounded-lg transition-all duration-300 shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40"
          >
            📞 Book Free Consultation
          </button>
        </AnimatedSection>
      </div>
    </section>
  )
}
