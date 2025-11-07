"use client"

import type React from "react"

import { useState } from "react"
import { X, CheckCircle2 } from "lucide-react"

interface BookCallModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setFormData({ name: "", email: "", company: "", message: "" })
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg">
      <div className="bg-surface-muted border border-border/50 rounded-2xl shadow-2xl w-full max-w-md mx-4 animate-scale-in smooth-transition">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Book a Call</h2>
            <p className="text-sm text-muted-foreground mt-1">Schedule a 30-minute strategy session</p>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-all p-2 hover:bg-surface-hover rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form or Success State */}
        {submitted ? (
          <div className="p-8 flex flex-col items-center justify-center text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Booking Confirmed!</h3>
            <p className="text-muted-foreground">We'll send you details shortly. Thanks for reaching out!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all smooth-transition"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all smooth-transition"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all smooth-transition"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Tell us about your project</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all smooth-transition resize-none"
                placeholder="Describe your idea, timeline, and goals..."
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-accent-primary to-blue-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-accent-primary/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              🚀 Schedule Call
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
