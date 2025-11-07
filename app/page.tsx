"use client"

import { useState, useEffect } from "react"
import { Search, Code2, Rocket, Menu, X, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { TimelineAnimated } from "@/components/timeline-animated"
import { ServiceCard } from "@/components/service-card"
import { HeroFeatures } from "@/components/hero-features"
import { PricingIntro } from "@/components/pricing-intro"
import { PricingTiers } from "@/components/pricing-tiers"
import { PricingExplanation } from "@/components/pricing-explanation"
import { SubscriptionPlans } from "@/components/subscription-plans"
import { AddOnsServices } from "@/components/addons-services"
import { DeliveryMilestones } from "@/components/delivery-milestones"
import { FeaturesDeliverables } from "@/components/features-deliverables"
import { FAQSection } from "@/components/faq-section"
import { FeatureComparison } from "@/components/feature-comparison"
import { Footer } from "@/components/footer"
import { BookCallModal } from "@/components/book-call-modal"
import { StatsCounter } from "@/components/stats-counter"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { TrustBadges } from "@/components/trust-badges"

export default function Home() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [isDarkMode])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden dark">
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm smooth-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-accent-primary to-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-accent-primary/30 group-hover:shadow-accent-primary/50 transition-all group-hover:scale-110">
              ⚛
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-accent-primary to-blue-400 bg-clip-text text-transparent">
              MAHEDI TECH
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-muted-foreground hover:text-accent-primary transition-colors duration-300 relative group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-primary to-blue-400 group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-muted-foreground hover:text-accent-primary transition-colors duration-300 relative group"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-primary to-blue-400 group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-accent-primary transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-primary to-blue-400 group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => setIsBookCallOpen(true)}
              className="bg-gradient-to-r from-accent-primary to-blue-600 hover:from-accent-primary/90 hover:to-blue-600/90 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-lg shadow-accent-primary/30 hover:shadow-accent-primary/50 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>📞</span> Book Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 hover:bg-surface-muted rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-surface-muted/80 backdrop-blur-xl p-4 space-y-3 animate-fade-in">
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left px-4 py-2.5 text-muted-foreground hover:text-accent-primary transition-colors font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left px-4 py-2.5 text-muted-foreground hover:text-accent-primary transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2.5 text-muted-foreground hover:text-accent-primary transition-colors font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => {
                setIsBookCallOpen(true)
                setIsMobileMenuOpen(false)
              }}
              className="w-full bg-gradient-to-r from-accent-primary to-blue-600 text-white font-semibold py-2.5 rounded-lg transition-all duration-300"
            >
              📞 Book Call
            </button>
          </div>
        )}
      </nav>

      <div id="hero" className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface-muted/50 to-background" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-3xl opacity-40 animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl opacity-40 animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <AnimatedSection className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-6 inline-block">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-sm font-semibold">
              🚀 14-Day MVP Delivery
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-blue-400 animate-gradient">
              Build Fast.
            </span>{" "}
            <span className="block">Scale Faster.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto font-light">
            Turn your ideas into production-ready MVPs in 14 days. Zero compromise on quality. From discovery to launch,
            we handle everything.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setIsBookCallOpen(true)}
              className="group bg-gradient-to-r from-accent-primary to-blue-600 hover:from-accent-primary/90 hover:to-blue-600/90 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-xl shadow-accent-primary/30 hover:shadow-accent-primary/50 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              🚀 Start Building
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="border-2 border-accent-primary/50 text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              📺 How It Works
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </AnimatedSection>
      </div>

      <TrustBadges />

      {/* Hero Features Section */}
      <HeroFeatures />

      <StatsCounter />

      {/* Timeline/Progress Indicator */}
      <div id="how-it-works" className="relative py-24 px-4 bg-gradient-to-b from-transparent to-surface-muted/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={200} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-blue-400">
                How It Works
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our proven 3-phase process delivers results faster than traditional development
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <TimelineAnimated />
          </AnimatedSection>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <ServiceCard
              icon={Search}
              number={1}
              title="Audit & Discovery"
              duration="2 days"
              description="We validate the core hypothesis & deliver a complete product roadmap."
              features={[
                "Market & competitor analysis",
                "Technical feasibility assessment",
                "User journey mapping",
                "Technology stack recommendation",
              ]}
              delay={200}
            />
            <ServiceCard
              icon={Code2}
              number={2}
              title="Build"
              duration="10 days"
              description="Rapid prototype → production deploy; core flows + payments + admin."
              features={[
                "MVP development with core features",
                "Authentication & user management",
                "Payment integration (Stripe)",
                "Admin dashboard & analytics",
              ]}
              highlight
              delay={300}
            />
            <ServiceCard
              icon={Rocket}
              number={3}
              title="Launch & Growth"
              duration="2 days"
              description="Landing + 1 growth experiment + demo video + one-pager."
              features={[
                "Landing page optimization",
                "Growth experiment setup",
                "Demo video creation",
                "Launch one-pager",
              ]}
              delay={400}
            />
          </div>
        </div>
      </div>

      <TestimonialsCarousel />

      <div id="pricing">
        <PricingIntro onBookCall={() => setIsBookCallOpen(true)} />
      </div>

      <PricingTiers
        onReserve={(tier) => {
          setIsBookCallOpen(true)
        }}
      />

      <PricingExplanation />

      <SubscriptionPlans />

      <AddOnsServices />

      <DeliveryMilestones />

      <FeaturesDeliverables
        onBookCall={() => setIsBookCallOpen(true)}
        onViewPricing={() => scrollToSection("pricing")}
      />

      <div id="faq">
        <FAQSection onBookCall={() => setIsBookCallOpen(true)} />
      </div>

      <FeatureComparison onBookCall={() => setIsBookCallOpen(true)} />

      <section className="relative py-24 px-4 bg-gradient-to-r from-surface-muted/50 via-surface-muted/30 to-background border-t border-border/50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
        </div>

        <AnimatedSection className="max-w-4xl mx-auto text-center relative z-10" delay={300}>
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-blue-400">
            Ready to Build Your MVP?
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Join 500+ founders who have launched their products with our 14-day sprints.
          </p>
          <p className="text-lg text-success mb-8 font-semibold">No hidden costs. No surprise delays. Just results.</p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsBookCallOpen(true)}
              className="group bg-gradient-to-r from-accent-primary to-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-xl shadow-accent-primary/30 hover:shadow-accent-primary/50 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              🚀 Book 30-min Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="border-2 border-success text-success hover:bg-success/10 font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              💰 View All Plans
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </AnimatedSection>
      </section>

      <div id="contact">
        <Footer />
      </div>

      <BookCallModal isOpen={isBookCallOpen} onClose={() => setIsBookCallOpen(false)} />
    </div>
  )
}
