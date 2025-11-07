"use client"

import { Mail, Zap, FileCode as GitCode } from "lucide-react"

export function Footer() {
  const handleEmailClick = () => {
    window.location.href = "mailto:hello@atomiclabs.space"
  }

  return (
    <footer className="border-t border-border bg-background">
      {/* Top CTA Section */}
      <div className="bg-gradient-to-r from-surface-elevated to-surface-muted py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to build your MVP?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join founders who've shipped their ideas in 14 days. Book a free audit and get your detailed plan.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => {
                /* Open booking modal */
              }}
              className="bg-accent-primary text-background px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-primary/50 transition-all duration-300 flex items-center gap-2 group"
            >
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Book 30-min Call
            </button>
            <button
              onClick={() => {
                /* Scroll to pricing */
              }}
              className="border-2 border-accent-primary text-accent-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent-primary/10 transition-all duration-300 flex items-center gap-2"
            >
              <GitCode className="w-5 h-5" />
              View Pricing
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent-primary rounded-lg" />
              <span className="text-xl font-bold text-foreground">MAHEDI TECH</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Zero-to-One, fast. We build demo-ready MVPs and web apps in 14 days for founders who want to validate fast
              and scale smart.
            </p>
            <button
              onClick={handleEmailClick}
              className="p-3 rounded-lg bg-surface-muted hover:bg-surface-elevated transition-colors group"
            >
              <Mail className="w-5 h-5 text-accent-primary group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-success">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent-primary transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-accent-primary">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-accent-primary transition-colors">
                  MVP Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent-primary transition-colors">
                  Discovery Sprint
                </a>
              </li>
              <li>
                <a href="#retainer" className="text-muted-foreground hover:text-accent-primary transition-colors">
                  Growth Retainer
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-success">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-accent-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-accent-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#book-audit" className="text-muted-foreground hover:text-accent-primary transition-colors">
                  Book Audit
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Mahedi Tech. All rights reserved.</p>
          <p>Mahedi Tech — Zero-to-One, fast.</p>
        </div>
      </div>
    </footer>
  )
}
