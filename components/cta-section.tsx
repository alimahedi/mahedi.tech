"use client"

import { AnimatedSection } from "./animated-section"
import { ChevronRight } from "lucide-react"

interface CTASectionProps {
  onBookCall?: () => void
  onViewPricing?: () => void
}

export function CTASection({ onBookCall, onViewPricing }: CTASectionProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-surface-muted to-surface-elevated border-t border-border">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-primary">
            Transform Your Idea Into Reality
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Join 500+ founders who've launched their MVPs with Mahedi Tech. No lengthy discovery processes. No
            unnecessary overhead. Just results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookCall}
              className="px-8 py-4 bg-accent-primary hover:bg-accent-primary/90 text-accent-primary-foreground font-bold rounded-lg transition-all duration-300 shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40 hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>⚡</span> Start Your Sprint Today
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onViewPricing}
              className="px-8 py-4 border-2 border-success/50 text-success hover:border-success hover:bg-success/5 font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>💰</span> View All Pricing Options
            </button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Free 30-min consultation included • No credit card required
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
