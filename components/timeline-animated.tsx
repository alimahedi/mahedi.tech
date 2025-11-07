"use client"

import { useEffect, useRef, useState } from "react"

interface TimelineItem {
  day: string
  label: string
  isActive: boolean
  isComplete: boolean
}

export function TimelineAnimated() {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setProgress(100), 100)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const items: TimelineItem[] = [
    { day: "Day 2", label: "Audit", isActive: true, isComplete: false },
    { day: "Day 8", label: "Build", isActive: false, isComplete: false },
    { day: "Day 12", label: "Launch", isActive: false, isComplete: false },
    { day: "Day 14", label: "Growth", isActive: false, isComplete: true },
  ]

  return (
    <div ref={ref} className="relative h-16 mb-16">
      {/* Animated timeline line */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2">
        {/* Replace hardcoded gradient with semantic tokens */}
        <div
          className="h-full bg-gradient-to-r from-accent-primary via-accent-primary/60 to-border transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Timeline dots */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div
              className={`transition-all duration-500 ${
                idx === 0
                  ? /* Use accent-primary token */ "w-4 h-4 bg-accent-primary shadow-lg shadow-accent-primary/50"
                  : idx === 3
                    ? /* Use success token */ "w-4 h-4 bg-success shadow-lg shadow-success/50"
                    : /* Use border token */ "w-3 h-3 bg-border"
              } rounded-full`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            />
            <div
              className={`mt-3 text-xs font-medium transition-colors duration-300 ${
                idx === 0 ? "text-muted-foreground" : idx === 3 ? "text-success" : "text-muted-foreground/50"
              }`}
            >
              {item.day}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
