import { Header } from "@/components/finverze/header"
import { HeroSection } from "@/components/finverze/hero-section"
import { AboutSection } from "@/components/finverze/about-section"
import { JourneySection } from "@/components/finverze/journey-section"
import { HowItWorksSection } from "@/components/finverze/how-it-works-section"
import { FeaturesSection } from "@/components/finverze/features-section"
import { PricingSection } from "@/components/finverze/pricing-section"
import { TrustSection } from "@/components/finverze/trust-section"
import { WaitlistSection } from "@/components/finverze/waitlist-section"
import { ContactSection } from "@/components/finverze/contact-section"
import { Footer } from "@/components/finverze/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <TrustSection />
      <WaitlistSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
