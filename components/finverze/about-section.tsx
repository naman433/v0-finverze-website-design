import { Target, Heart, TrendingUp } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              About Finverze
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Building Financial Confidence from Day One
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Finverze is a lifestyle finance platform designed to nurture financial discipline from a young age, evolving into a lifelong financial partner. We believe that financial education shouldn&apos;t start when you get your first job—it should begin in school.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our platform combines engaging learning experiences, gamification, and personalized guidance to transform how young people think about and manage money.
            </p>

            <div className="mt-10 grid gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Our Mission</h3>
                  <p className="mt-1 text-muted-foreground">
                    Make financial literacy accessible to every student, regardless of background.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Our Values</h3>
                  <p className="mt-1 text-muted-foreground">
                    Transparency, inclusivity, and empowerment guide everything we build.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Our Vision</h3>
                  <p className="mt-1 text-muted-foreground">
                    A generation of financially confident individuals shaping a better economy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <span className="text-6xl font-bold text-primary">F</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Finverze</h3>
                <p className="mt-2 text-muted-foreground">Finance for Life</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
