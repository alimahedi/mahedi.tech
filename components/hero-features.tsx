import { Activity, Eye, DollarSign } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function HeroFeatures() {
  const features = [
    {
      icon: Activity,
      title: "14-day build → hosted, demo-ready",
    },
    {
      icon: Eye,
      title: "Outcome-first: demo + growth experiment",
    },
    {
      icon: DollarSign,
      title: "Option: cash + selective equity",
    },
  ]

  return (
    <div className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16" delay={100}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-primary to-accent-primary">
              Demo-ready
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-primary">MVPs</span>
            <span className="text-foreground"> & web apps</span>
            <br />
            <span className="text-success">— shipped in</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-primary ml-2">
              14 days
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
            We design, build, and validate launch-ready web apps{" "}
            <span className="text-success font-semibold">10x faster.</span>
            <br />
            Host, demo and get your first users — fast.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <AnimatedSection key={idx} className="flex flex-col items-center text-center" delay={200 + idx * 100}>
                <div className="w-16 h-16 rounded-full border border-accent-primary/30 bg-accent-primary/10 flex items-center justify-center mb-6 hover:bg-accent-primary/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-accent-primary" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.title}</p>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </div>
  )
}
