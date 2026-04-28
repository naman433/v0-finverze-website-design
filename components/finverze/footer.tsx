import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">F</span>
              </div>
              <span className="text-xl font-bold text-background">Finverze</span>
            </Link>
            <p className="mt-4 text-background/70 max-w-sm leading-relaxed">
              Empowering Financial Discipline for the Next Generation.
            </p>
            <p className="mt-4">
              <a href="mailto:founder@finverze.com" className="text-primary hover:underline">
                founder@finverze.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-background/70 hover:text-background transition-colors">
                  What is Finverze
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-background/70 hover:text-background transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#institutions" className="text-background/70 hover:text-background transition-colors">
                  For Institutions
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-background/70 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20">
          <p className="text-center text-background/60 text-sm">
            Copyright © Finverze 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
