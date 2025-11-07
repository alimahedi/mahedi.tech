"use client"

import { AnimatedSection } from "./animated-section"
import { Check, Minus } from "lucide-react"

interface FeatureComparisonProps {
  onBookCall?: () => void
}

const comparisonData = [
  {
    feature: "14-day delivery",
    starter: true,
    growth: true,
    max: true,
    launch: false,
    scale: false,
    enterprise: false,
  },
  {
    feature: "Discovery session",
    starter: true,
    growth: true,
    max: true,
    launch: false,
    scale: false,
    enterprise: false,
  },
  {
    feature: "Features included",
    starter: "1",
    growth: "3",
    max: "5",
    launch: false,
    scale: false,
    enterprise: "Custom",
  },
  {
    feature: "Hosting & deployment",
    starter: true,
    growth: true,
    max: true,
    launch: true,
    scale: true,
    enterprise: true,
  },
  {
    feature: "Analytics & dashboard",
    starter: false,
    growth: true,
    max: true,
    launch: true,
    scale: true,
    enterprise: true,
  },
  {
    feature: "Post-launch support",
    starter: "3d",
    growth: "7d",
    max: "30d",
    launch: "4h/mo",
    scale: "20h/mo",
    enterprise: "SLA",
  },
  { feature: "Priority queue", starter: false, growth: false, max: true, launch: false, scale: true, enterprise: true },
  {
    feature: "Price",
    starter: "$3.5k",
    growth: "$7.5k",
    max: "$10k",
    launch: "$499/mo",
    scale: "$2.5k/mo",
    enterprise: "Custom",
  },
]

export function FeatureComparison({ onBookCall }: FeatureComparisonProps) {
  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Feature Comparison
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Compare what's included in each plan</p>
        </AnimatedSection>

        <AnimatedSection className="overflow-x-auto" delay={200}>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 px-4 font-bold sticky left-0 bg-surface-muted/50 backdrop-blur-sm">
                  Feature
                </th>
                {["Starter", "Growth", "Max", "Launch", "Scale", "Enterprise"].map((plan) => (
                  <th key={plan} className="text-center py-4 px-4 font-bold text-accent-primary">
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, rowIndex) => (
                <tr
                  key={row.feature}
                  className={`border-b border-border/50 hover:bg-surface-muted/30 transition-colors duration-300 ${
                    rowIndex % 2 === 0 ? "bg-surface-muted/10" : ""
                  }`}
                  style={{
                    animation: `fade-in 0.5s ease-out ${rowIndex * 50}ms forwards`,
                    opacity: 0,
                  }}
                >
                  <td className="py-4 px-4 font-semibold sticky left-0 bg-inherit z-10">{row.feature}</td>
                  {["starter", "growth", "max", "launch", "scale", "enterprise"].map((key) => {
                    const value = row[key as keyof typeof row]
                    return (
                      <td key={key} className="text-center py-4 px-4">
                        {typeof value === "boolean" ? (
                          value ? (
                            <Check className="w-5 h-5 text-success mx-auto" />
                          ) : (
                            <Minus className="w-5 h-5 text-border mx-auto" />
                          )
                        ) : (
                          <span className="text-accent-primary font-semibold">{value}</span>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </AnimatedSection>

        <AnimatedSection className="mt-12 text-center" delay={400}>
          <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
          <button
            onClick={onBookCall}
            className="px-8 py-3 bg-accent-primary hover:bg-accent-primary/90 text-accent-primary-foreground font-bold rounded-lg transition-all duration-300 shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40 hover:scale-105"
          >
            📞 Schedule Your Free Consultation
          </button>
        </AnimatedSection>
      </div>
    </section>
  )
}
