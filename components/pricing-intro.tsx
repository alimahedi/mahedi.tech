"use client"

import { AnimatedSection } from "./animated-section"
import { ArrowRight } from "lucide-react"

interface PricingIntroProps {
  onBookCall?: () => void
}

export function PricingIntro({ onBookCall }: PricingIntroProps) {
  return (
    <div className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center" delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-primary to-primary">
            Simple, Bold Pricing
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Demo-ready products, built and validated in <span className="text-success font-semibold">14 days.</span>{" "}
            Fast MVPs, real users, launch-ready apps.
          </p>

          <p className="text-base text-muted-foreground mb-10">
            Pick a sprint or a support plan — choose the option that fits your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onBookCall}
              className="bg-accent-primary hover:bg-accent-primary/90 text-accent-primary-foreground font-bold px-8 py-6 rounded-lg transition-all duration-300 shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40 hover:scale-105"
            >
              💻 Book 30-min Call
            </button>
            <button className="border-success border-2 text-success hover:bg-success/10 font-bold px-8 py-6 rounded-lg transition-all duration-300 bg-transparent">
              <ArrowRight className="w-4 h-4 mr-2 inline" />
              See sprint pricing
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
