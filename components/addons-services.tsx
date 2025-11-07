"use client"

import { AnimatedSection } from "./animated-section"

const addOns = [
  {
    title: "Extra dev hours",
    price: "$150/hr",
    description: "Pack discounts for 20+ hours",
    icon: "⚡",
    color: "from-orange-500/20 to-orange-600/20",
    borderColor: "border-orange-500/30",
  },
  {
    title: "Security audit",
    price: "$1,200+",
    description: "Hardening & compliance checks",
    icon: "🔒",
    color: "from-red-500/20 to-red-600/20",
    borderColor: "border-red-500/30",
  },
  {
    title: "Integrations",
    price: "$500–$3,000",
    description: "Stripe, Salesforce, HubSpot",
    icon: "🔗",
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30",
  },
  {
    title: "Design polish",
    price: "$1,000+",
    description: "UI refinement & motion",
    icon: "✨",
    color: "from-purple-500/20 to-purple-600/20",
    borderColor: "border-purple-500/30",
  },
  {
    title: "Performance optimization",
    price: "$800+",
    description: "Speed & scalability improvements",
    icon: "⚙️",
    color: "from-green-500/20 to-green-600/20",
    borderColor: "border-green-500/30",
  },
  {
    title: "White-label",
    price: "$500+",
    description: "Rebranding & customization",
    icon: "🎨",
    color: "from-pink-500/20 to-pink-600/20",
    borderColor: "border-pink-500/30",
  },
]

export function AddOnsServices() {
  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            Add-ons & À-la-carte Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Customize your package with additional services
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {addOns.map((addon, index) => (
            <AnimatedSection key={addon.title} delay={200 + index * 50} className="group relative overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${addon.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
              />
              <div
                className={`relative p-6 rounded-xl border-2 ${addon.borderColor} bg-surface-muted/30 group-hover:bg-surface-muted/60 transition-all duration-500 backdrop-blur-sm hover:shadow-lg hover:shadow-foreground/5`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {addon.icon}
                </div>
                <h3 className="text-xl font-bold mb-1">{addon.title}</h3>
                <p className="text-accent-primary font-semibold mb-2 text-lg">{addon.price}</p>
                <p className="text-muted-foreground text-sm">{addon.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
