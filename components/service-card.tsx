"use client"

import type { LucideIcon } from "lucide-react"
import { useState } from "react"

interface ServiceCardProps {
  icon: LucideIcon
  number: number
  title: string
  duration: string
  description: string
  features: string[]
  highlight?: boolean
  delay?: number
}

export function ServiceCard({
  icon: Icon,
  number,
  title,
  duration,
  description,
  features,
  highlight = false,
  delay = 0,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group relative border rounded-xl p-8 transition-all duration-500 ${
        highlight
          ? /* Use semantic tokens for highlighted card */ "border-accent-primary/50 bg-gradient-to-br from-surface-muted to-accent-primary/20 hover:border-accent-primary"
          : /* Use border-subtle token for normal cards */ "border-border-subtle bg-surface-muted hover:border-border hover:bg-surface-hover"
      } cursor-pointer opacity-0 animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background glow on hover */}
      {highlight && isHovered && (
        <div className="absolute inset-0 rounded-xl bg-accent-primary/5 blur-xl transition-all duration-300" />
      )}

      <div className="relative z-10">
        {/* Number badge */}
        <div
          className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
            /* Use accent tokens for highlighted badge */ highlight
              ? "bg-accent-primary text-accent-primary-foreground"
              : /* Use border token for normal badge */ "bg-surface-hover border border-border text-muted-foreground"
          }`}
        >
          {number}
        </div>

        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ${
            /* Use semantic tokens for icon background */ highlight
              ? "bg-accent-primary text-accent-primary-foreground"
              : "bg-surface-hover text-muted-foreground group-hover:bg-surface-hover"
          }`}
        >
          <Icon className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>

        {/* Duration */}
        <p className={`text-sm mb-4 ${highlight ? "text-accent-primary" : "text-muted-foreground"}`}>{duration}</p>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-6">{description}</p>

        {/* Features list with staggered animation */}
        <ul className="space-y-3 text-sm text-muted-foreground">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-1"
              style={{ transitionDelay: isHovered ? `${idx * 50}ms` : "0ms" }}
            >
              {/* Use accent tokens for bullet points */}
              <span className={highlight ? "text-accent-primary mt-1" : "text-primary mt-1"}>▸</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
