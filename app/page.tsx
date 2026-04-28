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
    <main>
      <Header />
      <HeroSection />
      <ProblemSection />
      <AboutSection />
      <HowItWorksSection />
      <ApproachSection />
      <InstitutionsSection />
      <OutcomesSection />
      <AboutTrustSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
