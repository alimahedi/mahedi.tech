"use client"

import { AnimatedSection } from "./animated-section"

export function DeliveryMilestones() {
  const milestones = [
    { percentage: 30, label: "Deposit to book", description: "Reserves engineering capacity" },
    { percentage: 50, label: "Mid-sprint demo", description: "Day 8 feedback & pivot" },
    { percentage: 20, label: "On delivery", description: "Day 14 final payment" },
  ]

  return (
    <section className="py-16 px-4 bg-surface-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-2 text-success">Delivery & Milestones</h3>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <AnimatedSection key={milestone.label} delay={200 + index * 100} className="text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent-primary to-primary flex items-center justify-center shadow-lg shadow-accent-primary/30 group hover:shadow-accent-primary/60 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-primary-foreground">{milestone.percentage}%</div>
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-bold mb-2">{milestone.label}</h4>
              <p className="text-muted-foreground text-sm">{milestone.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
