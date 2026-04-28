"use client"

import { motion } from "framer-motion"
import { AlertCircle, BookX, TrendingDown, HelpCircle } from "lucide-react"

const problems = [
  {
    icon: BookX,
    title: "No Financial Education",
    description: "Schools don't teach how to manage money",
  },
  {
    icon: TrendingDown,
    title: "Poor Spending Habits",
    description: "Bad financial habits form from a young age",
  },
  {
    icon: HelpCircle,
    title: "No Guidance in College",
    description: "Students are left to figure it out alone",
  },
  {
    icon: AlertCircle,
    title: "Confusion About Investing",
    description: "No clear path to saving and growing wealth",
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
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            The Problem We&apos;re Solving
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Students are never taught how to manage money. This gap creates lifelong financial struggles.
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
          <p className="text-lg md:text-xl text-foreground font-medium mb-2">The Result?</p>
          <p className="text-muted-foreground text-lg">
            Most people learn about money only after making costly mistakes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
