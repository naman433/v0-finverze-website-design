import { Quote, Shield, Clock, Award } from "lucide-react"

const testimonials = [
  {
    quote: "Finverze made me realize how easy it is to save. I've already saved ₹5,000 for my new phone!",
    author: "Arjun S.",
    role: "Class 11 Student, Delhi",
  },
  {
    quote: "The courses are so engaging. I finally understand what my parents mean by 'compound interest'.",
    author: "Priya M.",
    role: "College Freshman, Mumbai",
  },
  {
    quote: "As a teacher, I love how Finverze makes financial education fun and accessible for my students.",
    author: "Mr. Rajesh K.",
    role: "Economics Teacher, Bangalore",
  },
]

const trustPoints = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your data is encrypted and protected with enterprise-grade security standards.",
  },
  {
    icon: Clock,
    title: "10+ Years Vision",
    description: "We're building for the long term—Finverze will be your partner for life.",
  },
  {
    icon: Award,
    title: "Expert-Backed Content",
    description: "All courses are designed by certified financial educators and advisors.",
  },
]

export function TrustSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Why Trust Finverze?
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Built on Trust, Designed for Growth
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our mission is financial inclusion from a young age. We&apos;re committed to being your lifelong financial partner.
          </p>
        </div>

        {/* Trust Points */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {trustPoints.map((point) => (
            <div key={point.title} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <point.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-foreground mb-12">
            What Our Early Users Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border relative"
              >
                <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
                <p className="text-foreground leading-relaxed mb-6 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Finverze for Life
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just want to teach you about money—we want to be your trusted financial companion through every milestone. From your first savings account to your retirement plan, Finverze grows with you.
          </p>
        </div>
      </div>
    </section>
  )
}
