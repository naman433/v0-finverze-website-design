import { UserPlus, BookOpen, BarChart3, Rocket } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Join as a Student",
    description: "Sign up with your school email and get instant access to age-appropriate financial courses and tools.",
  },
  {
    icon: BookOpen,
    step: "02",
    title: "Learn Through Courses",
    description: "Engage with interactive lessons, complete challenges, and earn rewards as you master financial concepts.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Track Your Progress",
    description: "Monitor your financial habits, set savings goals, and watch your money skills improve over time.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Grow With Finverze",
    description: "As you advance in life, unlock more sophisticated tools like investment planning and wealth management.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Start Your Financial Journey in 4 Simple Steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Getting started with Finverze is easy. Our platform guides you every step of the way.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative group">
              <div className="bg-background rounded-2xl p-8 h-full border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connector arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 text-primary/30">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* App Preview Mockup */}
        <div className="mt-20 relative">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">Dashboard</span>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-primary/20 rounded-full w-full" />
                  <div className="h-3 bg-primary/10 rounded-full w-3/4" />
                  <div className="h-3 bg-primary/10 rounded-full w-1/2" />
                </div>
                <div className="mt-4 text-2xl font-bold text-foreground">₹12,450</div>
                <div className="text-sm text-muted-foreground">Total Savings</div>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-semibold text-foreground">Learning</span>
                </div>
                <div className="text-sm text-muted-foreground mb-2">Current Course</div>
                <div className="font-medium text-foreground mb-3">Budgeting Basics</div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-3/4" />
                </div>
                <div className="mt-2 text-sm text-primary font-medium">75% Complete</div>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-xl">🏆</span>
                  </div>
                  <span className="font-semibold text-foreground">Achievements</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">Saver</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">Learner</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Streak 7</span>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  You&apos;re in the top 10% of savers this month!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
