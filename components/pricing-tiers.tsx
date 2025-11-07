"use client"

import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "./animated-section"
import { Zap, Rocket, Crown } from "lucide-react"

interface PricingTiersProps {
  onReserve?: (tier: string) => void
}

const pricingTiers = [
  {
    name: "Starter Sprint",
    price: "$3,500",
    icon: Zap,
    badgeText: "Most Popular",
    description: "Best for founders validating an idea",
    features: [
      "14-day delivery guarantee",
      "Kickoff & discovery session",
      "Product spec + wireframe",
      "Core flow implementation",
      "Production deployment",
      "3 days post-launch support",
    ],
    cta: "Reserve Sprint",
    ctaVariant: "primary",
    highlight: true,
  },
  {
    name: "Growth Sprint",
    price: "$7,500",
    icon: Rocket,
    description: "Includes integrations & analytics",
    features: [
      "Everything in Starter",
      "2 additional features",
      "Integrations (Stripe, Zapier)",
      "Performance & security checks",
      "Email onboarding flow",
      "7 days post-launch support",
    ],
    cta: "Reserve Sprint",
    ctaVariant: "success",
  },
  {
    name: "Max Sprint",
    price: "$10,000",
    icon: Crown,
    description: "Polished UI & launch materials",
    features: [
      "Everything in Growth",
      "Polished UI & motion design",
      "Demo script & pitch deck",
      "Scalability audit",
      "30 days support",
      "Priority queue & SLA",
    ],
    cta: "Reserve Sprint",
    ctaVariant: "success",
  },
]

export function PricingTiers({ onReserve }: PricingTiersProps) {
  return (
    <div className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16" delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-primary to-primary">
            14-Day Sprint Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our core product: focused development sprints that produce hosted, demo-ready apps with product specs,
            deployment, and growth playbooks.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, idx) => {
            const IconComponent = tier.icon
            return (
              <AnimatedSection
                key={idx}
                className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                  tier.highlight
                    ? "border-accent-primary/50 bg-gradient-to-br from-surface-muted to-accent-primary/10 md:scale-105 md:z-10"
                    : "border-border bg-surface-muted hover:border-border-subtle"
                }`}
                delay={200 + idx * 100}
              >
                {tier.badgeText && (
                  <div className="flex justify-center -mx-8 -mt-8 mb-6">
                    <Badge className="bg-accent-primary text-accent-primary-foreground rounded-full px-4 py-1 text-xs font-semibold">
                      {tier.badgeText}
                    </Badge>
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        tier.highlight
                          ? "bg-accent-primary text-accent-primary-foreground"
                          : "bg-surface-hover text-accent-primary"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground">{tier.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-primary">
                      {tier.price}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-accent-primary mt-1 flex-shrink-0">▸</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onReserve?.(tier.name)}
                    className={`w-full font-bold py-6 rounded-lg transition-all duration-300 ${
                      tier.ctaVariant === "primary"
                        ? "bg-accent-primary hover:bg-accent-primary/90 text-accent-primary-foreground shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40 hover:scale-105"
                        : "bg-success hover:bg-success/90 text-success-foreground shadow-lg shadow-success/20 hover:shadow-success/40 hover:scale-105"
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </div>
  )
}
