import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for getting started with financial basics",
    features: [
      "Basic budgeting tools",
      "5 introductory courses",
      "Savings goal tracker",
      "Community access",
      "Weekly progress reports",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "₹199",
    period: "/month",
    description: "For students serious about financial mastery",
    features: [
      "Everything in Free",
      "50+ expert-led courses",
      "Advanced habit tracking",
      "Personalized insights",
      "Investment simulator",
      "Priority support",
      "Exclusive challenges",
    ],
    cta: "Start Premium Trial",
    highlighted: true,
  },
  {
    name: "School",
    price: "Custom",
    period: "pricing",
    description: "For schools and institutions",
    features: [
      "Bulk student licenses",
      "Teacher dashboard",
      "Custom curriculum",
      "Progress analytics",
      "Parent reports",
      "Dedicated support",
      "On-site workshops",
    ],
    cta: "Contact for Pricing",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free and upgrade as your financial journey progresses.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground ring-4 ring-primary/20 scale-105"
                  : "bg-background border border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="text-sm font-medium mb-4 bg-primary-foreground/20 rounded-full px-3 py-1 inline-block">
                  Most Popular
                </div>
              )}
              <h3 className={`text-2xl font-bold ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className={`text-4xl font-bold ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className={plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}>
                  {plan.period}
                </span>
              </div>
              <p className={`mt-4 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 flex-shrink-0 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                    <span className={plan.highlighted ? "text-primary-foreground/90" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full mt-8 ${
                  plan.highlighted
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : ""
                }`}
                variant={plan.highlighted ? "secondary" : "default"}
                asChild
              >
                <Link href={plan.name === "School" ? "#contact" : "#waitlist"}>
                  {plan.cta}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
