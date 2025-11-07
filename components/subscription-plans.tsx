"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function SubscriptionPlans() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly")

  const plans = [
    {
      name: "Launch",
      price: 499,
      icon: "🚀",
      badge: null,
      description: "For founders who want maintenance + minor updates",
      features: [
        "4 dev hours / month",
        "Hosted staging & production",
        "Uptime monitoring",
        "Weekly backups",
        "Monthly analytics report",
        "Email support (48h response)",
      ],
      button: "Get Started",
      buttonVariant: "default",
    },
    {
      name: "Scale",
      price: 2500,
      icon: "📊",
      badge: "Most Popular",
      description: "For teams iterating quickly to growth",
      features: [
        "20 dev hours / month",
        "Priority bug fixes (24h SLA)",
        "A/B test support",
        "Analytics dashboard",
        "Conversion optimization",
        "Monthly roadmap planning",
      ],
      button: "Get Started",
      buttonVariant: "default",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      icon: "👑",
      badge: null,
      description: "For larger companies requiring custom solutions",
      features: [
        "Dedicated engineering pod",
        "SAML / SSO integration",
        "HIPAA / SOC2 readiness",
        "3-hour response SLA",
        "Weekly delivery cadences",
        "Custom metrics & hosting",
      ],
      button: "Talk to Sales",
      buttonVariant: "primary",
    },
  ]

  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-primary">
            Subscription & Retainer Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For teams that want ongoing improvements, monitoring, and feature expansion after their sprint.
          </p>
        </AnimatedSection>

        {/* Billing Toggle */}
        <AnimatedSection className="flex justify-center gap-3 mb-12" delay={100}>
          <button
            onClick={() => setBillingPeriod("monthly")}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              billingPeriod === "monthly"
                ? "bg-accent-primary text-accent-primary-foreground shadow-lg shadow-accent-primary/20"
                : "bg-surface-muted text-muted-foreground hover:bg-surface-hover"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod("annual")}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              billingPeriod === "annual"
                ? "bg-accent-primary text-accent-primary-foreground shadow-lg shadow-accent-primary/20"
                : "bg-surface-muted text-muted-foreground hover:bg-surface-hover"
            }`}
          >
            Annual
            <span className="bg-success text-success-foreground text-xs font-bold px-2 py-1 rounded-full">
              Save 15%
            </span>
          </button>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <AnimatedSection
              key={plan.name}
              delay={200 + index * 100}
              className={`relative group transition-all duration-500 hover:scale-105 ${
                plan.highlight ? "md:scale-105" : ""
              }`}
            >
              {plan.highlight && (
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              )}

              <div
                className={`relative p-8 rounded-2xl border-2 transition-all duration-500 backdrop-blur-sm ${
                  plan.highlight
                    ? "border-accent-primary bg-surface-muted/50 shadow-lg shadow-accent-primary/20"
                    : "border-border bg-surface-muted/20 hover:border-accent-primary/50"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-success text-success-foreground text-sm font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}

                <div className="text-4xl mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  {typeof plan.price === "number" ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-accent-primary">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-accent-primary">{plan.price}</div>
                  )}
                </div>

                <Button
                  className={`w-full mb-8 font-semibold transition-all duration-300 ${
                    plan.highlight
                      ? "bg-success hover:bg-success/90 text-success-foreground"
                      : "bg-accent-primary hover:bg-accent-primary/90 text-accent-primary-foreground"
                  }`}
                >
                  {plan.button}
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 animate-fade-in"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
