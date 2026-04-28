"use client"

import { motion } from "framer-motion"
import { Users, BookOpen, Gamepad2, Target, CheckCircle2 } from "lucide-react"

const steps = [
  {
    icon: Users,
    step: "01",
    title: "We Start with a Conversation",
    description: "Our first session is an eye opener. We get students thinking about money in ways they never have before, no lectures, just real talk.",
  },
  {
    icon: BookOpen,
    step: "02",
    title: "A Simple, Structured Program",
    description: "Over 2 to 3 weeks, students go through bite sized modules that are easy to follow. Each one builds on the last, no jargon, no overwhelm.",
  },
  {
    icon: Gamepad2,
    step: "03",
    title: "Learning by Doing",
    description: "This is where it gets fun. Students take on challenges, track their spending, set small goals, and actually practice what they have learned.",
  },
  {
    icon: Target,
    step: "04",
    title: "Building Real Habits",
    description: "We do not stop at awareness. We help students turn good intentions into daily habits, like saving a little each week or thinking twice before spending.",
  },
  {
    icon: CheckCircle2,
    step: "05",
    title: "Walking Away Prepared",
    description: "By the end, students have a real understanding of money and the confidence to handle it wisely, skills that stay with them for life.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Simple Steps, Lasting Impact
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We have designed a process that actually works. No boring textbooks, no complicated theories, just practical steps that lead to real change.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
