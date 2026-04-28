import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Subtle decorative circles */}
      <div className="absolute top-32 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo above headline */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/finverze-logo.png"
              alt="Finverze"
              width={180}
              height={60}
              className="h-16 w-auto"
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight text-balance leading-tight">
            Teaching Students to{" "}
            <span className="text-primary">Manage Money</span>{" "}
            Before Life Does
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Finverze helps schools and colleges teach students the one skill nobody teaches: how to handle money wisely. We make financial learning simple, practical, and something students actually enjoy.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 py-6 shadow-lg shadow-primary/20" asChild>
              <Link href="#institutions">
                Bring Finverze to Your Institution
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6" asChild>
              <Link href="#how-it-works">
                See How It Works
              </Link>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <ChevronDown className="h-6 w-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
