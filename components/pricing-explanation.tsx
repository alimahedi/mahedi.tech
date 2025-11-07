import { AnimatedSection } from "./animated-section"

export function PricingExplanation() {
  return (
    <div className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="border border-border rounded-2xl bg-surface-muted p-12" delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-primary to-primary">
            How We Charge
          </h2>

          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              Two paths: <span className="text-accent-primary font-semibold">Sprint pricing</span> — a fixed-fee 14-day
              build that delivers a demo-ready MVP, or{" "}
              <span className="text-success font-semibold">ongoing support/subscription</span> — hosting, analytics,
              growth features, and product iteration after launch.
            </p>

            <p className="text-muted-foreground">Custom enterprise solutions with integrations are available.</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
