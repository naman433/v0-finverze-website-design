import { Header } from "@/components/finverze/header"
import { HeroSection } from "@/components/finverze/hero-section"
import { ProblemSection } from "@/components/finverze/problem-section"
import { AboutSection } from "@/components/finverze/about-section"
import { JourneySection } from "@/components/finverze/journey-section"
import { HowItWorksSection } from "@/components/finverze/how-it-works-section"
import { FeaturesSection } from "@/components/finverze/features-section"
import { InstitutionsSection } from "@/components/finverze/institutions-section"
import { PricingSection } from "@/components/finverze/pricing-section"
import { WhySection } from "@/components/finverze/why-section"
import { WaitlistSection } from "@/components/finverze/waitlist-section"
import { ContactSection } from "@/components/finverze/contact-section"
import { Footer } from "@/components/finverze/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProblemSection />
      <AboutSection />
      <JourneySection />
      <HowItWorksSection />
      <FeaturesSection />
      <InstitutionsSection />
      <PricingSection />
      <WhySection />
      <WaitlistSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
