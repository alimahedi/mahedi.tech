"use client"

import { useEffect, useRef, useState } from "react"

interface StatProps {
  number: number
  label: string
  suffix?: string
}

function StatItem({ number, label, suffix = "" }: StatProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          let current = 0
          const increment = number / 50
          const timer = setInterval(() => {
            current += increment
            if (current >= number) {
              setCount(number)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 20)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [number, isVisible])

  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-primary to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        {label}
      </div>
    </div>
  )
}

export function StatsCounter() {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-background via-surface-muted/30 to-background border-y border-border/50">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <StatItem number={500} label="MVPs Built" suffix="+" />
        <StatItem number={14} label="Days to Launch" />
        <StatItem number={1200} label="Happy Founders" suffix="+" />
        <StatItem number={98} label="Success Rate" suffix="%" />
      </div>
    </div>
  )
}
