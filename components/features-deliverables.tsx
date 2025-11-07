"use client"

import { AnimatedSection } from "./animated-section"

interface FeaturesDeliverablesProps {
  onBookCall?: () => void
  onViewPricing?: () => void
}

const features = [
  { icon: "📊", title: "Admin Dashboard", description: "Management interface for your team" },
  { icon: "💳", title: "Stripe Payments", description: "Integrated payment processing (if needed)" },
  { icon: "📈", title: "Analytics Events", description: "User tracking and behavior insights" },
  { icon: "🎬", title: "Demo Video", description: "Professional product demonstration" },
  { icon: "📄", title: "Launch One-Pager", description: "Product summary for launch" },
  { icon: "🛡️", title: "30-Day Bug-Fix Warranty", description: "Post-launch support included" },
]

export function FeaturesDeliverables({ onBookCall, onViewPricing }: FeaturesDeliverablesProps) {
  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to ship in 14 days?</h2>
          <p className="text-lg text-muted-foreground">
            Get a complete, demo-ready MVP with all the features below.{" "}
            <span className="text-accent-primary">No hidden costs, no surprise delays.</span>
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={200 + index * 50} className="group relative">
              <div className="p-6 rounded-2xl border-2 border-border bg-surface-muted/30 hover:border-accent-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-accent-primary/10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center" delay={500}>
          <button
            onClick={onBookCall}
            className="px-8 py-4 bg-accent-primary hover:bg-accent-primary/90 text-accent-primary-foreground font-bold rounded-lg transition-all duration-300 shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40 hover:scale-105 mr-4"
          >
            📞 Book 30-min Call
          </button>
          <button
            onClick={onViewPricing}
            className="px-8 py-4 border-2 border-success text-success font-bold rounded-lg hover:bg-success/10 transition-all duration-300"
          >
            📊 View Pricing
          </button>
        </AnimatedSection>
      </div>
    </section>
  )
}
