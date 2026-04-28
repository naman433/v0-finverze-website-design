"use client"

import { motion } from "framer-motion"
import { BookX, TrendingDown, GraduationCap, AlertTriangle } from "lucide-react"

const problems = [
  {
    icon: BookX,
    title: "Schools Skip the Basics",
    description: "Nobody teaches students how to budget, save, or spend wisely. They learn algebra but not how to manage their first salary.",
  },
  {
    icon: TrendingDown,
    title: "Bad Habits Start Young",
    description: "Without guidance, students pick up poor spending habits early on, habits that follow them into adulthood.",
  },
  {
    icon: GraduationCap,
    title: "Thrown Into the Deep End",
    description: "Most students graduate and suddenly have to handle rent, bills, and savings without any preparation.",
  },
  {
    icon: AlertTriangle,
    title: "Expensive Lessons",
    description: "When financial education comes only through mistakes like debt or bad investments, the cost is too high.",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-28 bg-card">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-destructive/10 text-destructive rounded-full">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Why This Matters Now
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ask any young adult about their biggest regret. Chances are, it involves money. Here is why we need to start earlier.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border rounded-xl p-6 text-center hover:border-destructive/30 transition-colors"
            >
              <div className="w-14 h-14 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-muted/50 border border-border rounded-2xl p-8 md:p-10 text-center"
        >
          <p className="text-xl md:text-2xl text-foreground font-semibold">
            The good news? This can change. Financial discipline can be taught, and the earlier we start, the better.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
