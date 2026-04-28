import { GraduationCap, BookOpen, Briefcase, Landmark } from "lucide-react"

const journeyStages = [
  {
    icon: GraduationCap,
    title: "School",
    subtitle: "Ages 12-18",
    description: "Learn basic financial habits through engaging lessons, budgeting games, and savings challenges. Build the foundation for smart money decisions.",
    color: "bg-blue-500",
  },
  {
    icon: BookOpen,
    title: "College",
    subtitle: "Ages 18-22",
    description: "Navigate student finances with structured learning, expense tracking, and gamified challenges. Manage loans, part-time income, and build credit awareness.",
    color: "bg-blue-600",
  },
  {
    icon: Briefcase,
    title: "Early Career",
    subtitle: "Ages 22-30",
    description: "Transition to guided investing, tax planning, and emergency fund building. Make confident decisions about salary negotiations and retirement accounts.",
    color: "bg-blue-700",
  },
  {
    icon: Landmark,
    title: "Adulthood",
    subtitle: "Ages 30+",
    description: "Access comprehensive wealth management, investment portfolios, and long-term financial planning. Finverze grows with you through every life milestone.",
    color: "bg-blue-800",
  },
]

export function JourneySection() {
  return (
    <section id="journey" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            The Finverze Journey
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Your Lifelong Financial Partner
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From your first piggy bank to your retirement portfolio, Finverze evolves with you at every stage of life.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeyStages.map((stage, index) => (
              <div key={stage.title} className="relative">
                <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors h-full">
                  <div className={`w-14 h-14 rounded-xl ${stage.color} flex items-center justify-center mb-4`}>
                    <stage.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-xs font-medium text-primary mb-1">{stage.subtitle}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{stage.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{stage.description}</p>
                </div>
                
                {/* Timeline dot for desktop */}
                <div className="hidden lg:flex absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card border-4 border-primary items-center justify-center">
                  <span className="text-xs font-bold text-primary">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
