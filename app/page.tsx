import { Header } from "@/components/finverze/header"
import { HeroSection } from "@/components/finverze/hero-section"
import { ProblemSection } from "@/components/finverze/problem-section"
import { AboutSection } from "@/components/finverze/about-section"
import { HowItWorksSection } from "@/components/finverze/how-it-works-section"
import { ApproachSection } from "@/components/finverze/approach-section"
import { InstitutionsSection } from "@/components/finverze/institutions-section"
import { OutcomesSection } from "@/components/finverze/outcomes-section"
import { AboutTrustSection } from "@/components/finverze/about-trust-section"
import { ContactSection } from "@/components/finverze/contact-section"
import { Footer } from "@/components/finverze/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />

      <HeroSection />

      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.primary/10),transparent_45%)] pointer-events-none" />
        <div className="relative">
          <ProblemSection />
          <AboutSection />
        </div>
      </div>

      <div className="bg-muted/30 border-y border-border/60">
        <HowItWorksSection />
      </div>

      <div className="bg-gradient-to-b from-background via-accent/10 to-background">
        <ApproachSection />
        <InstitutionsSection />
      </div>

      <div className="bg-muted/20 border-y border-border/60">
        <OutcomesSection />
        <AboutTrustSection />
      </div>

      <div className="bg-gradient-to-b from-background to-primary/5">
        <ContactSection />
      </div>

      <Footer />
    </main>
  )
}
