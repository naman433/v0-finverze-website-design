import { Wallet, Target, GraduationCap, LineChart, Shield, Users } from "lucide-react"

const features = [
  {
    icon: Wallet,
    title: "Spending Control Tools",
    description: "Set budgets, track expenses, and receive smart alerts when you're overspending. Perfect for managing pocket money or part-time job income.",
    example: "Example: Get notified when you've spent 80% of your monthly entertainment budget.",
  },
  {
    icon: Target,
    title: "Habit Tracking",
    description: "Build and maintain healthy financial habits with streak tracking, daily check-ins, and milestone celebrations.",
    example: "Example: Maintain a 30-day savings streak and earn exclusive badges.",
  },
  {
    icon: GraduationCap,
    title: "Expert-Led Courses",
    description: "Learn from finance professionals through bite-sized video lessons, interactive quizzes, and real-world case studies.",
    example: "Example: Complete 'Credit Cards 101' in just 15 minutes a day.",
  },
  {
    icon: LineChart,
    title: "Financial Planning",
    description: "Access personalized planning tools as you grow—from saving for a phone to planning for retirement.",
    example: "Example: Use our goal calculator to save for your first laptop.",
  },
  {
    icon: Shield,
    title: "Safe Learning Environment",
    description: "Practice financial decisions in a risk-free simulation mode before applying them in real life.",
    example: "Example: Simulate investing ₹1,000 and watch how markets work.",
  },
  {
    icon: Users,
    title: "Community & Leaderboards",
    description: "Connect with peers, join savings challenges, and compete on leaderboards to stay motivated.",
    example: "Example: Join your school's savings challenge and win prizes.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Features
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Everything You Need to Master Your Finances
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive tools designed specifically for students at every stage of their financial journey.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
              <p className="text-sm text-primary/80 italic">{feature.example}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
