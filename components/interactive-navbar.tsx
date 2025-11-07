"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface InteractiveNavbarProps {
  onBookCall: () => void
  onNavigate: (section: string) => void
}

export function InteractiveNavbar({ onBookCall, onNavigate }: InteractiveNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "How It Works", id: "how-it-works" },
    { label: "Pricing", id: "pricing" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-accent-primary/5"
          : "bg-background/50 backdrop-blur-sm"
      } border-b border-border`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate("hero")}
            className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105"
          >
            <div className="w-8 h-8 bg-accent-primary rounded-lg flex items-center justify-center text-accent-primary-foreground font-bold group-hover:shadow-lg group-hover:shadow-accent-primary/50 transition-all duration-300">
              ▲
            </div>
            <span className="text-lg font-semibold">MAHEDI TECH</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-accent-primary transition-colors rounded-lg hover:bg-surface-muted/50"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={onBookCall}
              className="px-4 py-2 bg-accent-primary hover:bg-accent-primary/90 text-accent-primary-foreground font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40"
            >
              📞 Book Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-surface-muted rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-surface-muted/50 backdrop-blur-sm">
            <div className="space-y-2 p-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-accent-primary hover:bg-surface-muted rounded-lg transition-all"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onBookCall()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full mt-4 px-4 py-2 bg-accent-primary hover:bg-accent-primary/90 text-accent-primary-foreground font-semibold rounded-lg"
              >
                📞 Book Call
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
