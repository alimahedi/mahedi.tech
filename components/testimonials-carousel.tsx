"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    text: "Mahedi Tech delivered our MVP in exactly 14 days. Their process is incredibly efficient and the quality is enterprise-grade.",
    author: "Sarah Chen",
    role: "Founder, TechFlow",
    avatar: "SC",
  },
  {
    text: "We validated our idea with real users within 2 weeks. Best investment we made. The team is responsive and knowledgeable.",
    author: "Alex Rodriguez",
    role: "CEO, DataMind",
    avatar: "AR",
  },
  {
    text: "From concept to deployed product. They understood our vision and executed flawlessly. Highly recommend.",
    author: "Emma Johnson",
    role: "Co-founder, CloudSync",
    avatar: "EJ",
  },
]

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoplay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  return (
    <div className="py-16 px-4 bg-surface-muted border-y border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Loved by Founders</h2>

        <div className="bg-surface-elevated border border-border rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <p className="text-lg text-foreground leading-relaxed italic mb-8">"{testimonials[current].text}"</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-primary to-accent-primary/50 flex items-center justify-center text-background font-bold">
                {testimonials[current].avatar}
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">{testimonials[current].author}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-between">
            <button onClick={prev} className="p-2 hover:bg-surface-muted rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrent(i)
                    setAutoplay(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-accent-primary w-8" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <button onClick={next} className="p-2 hover:bg-surface-muted rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
