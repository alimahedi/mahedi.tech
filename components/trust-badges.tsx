"use client"

import { Shield, Zap, BarChart3, Users } from "lucide-react"

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant, HIPAA ready, encrypted data",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "14-day delivery guarantee with 99.9% uptime SLA",
    },
    {
      icon: BarChart3,
      title: "Proven Results",
      description: "98% client satisfaction, $5M+ in funded companies",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "50+ engineers with 100+ years combined experience",
    },
  ]

  return (
    <div className="py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {badges.map((badge, i) => {
          const Icon = badge.icon
          return (
            <div
              key={i}
              className="p-6 rounded-xl bg-surface-muted border border-border smooth-transition hover:border-accent-primary hover:shadow-lg hover:shadow-accent-primary/10 hover:bg-surface-hover group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Icon className="w-8 h-8 text-accent-primary mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <h3 className="font-semibold text-foreground mb-2">{badge.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{badge.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
