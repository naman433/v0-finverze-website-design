"use client"

import { motion } from "framer-motion"
import { Wallet, Eye, PiggyBank, Award, Brain } from "lucide-react"

const outcomes = [
  {
    icon: Wallet,
    title: "Better Understanding of Money",
  },
  {
    icon: Eye,
    title: "Improved Spending Awareness",
  },
  {
    icon: PiggyBank,
    title: "Basic Saving Discipline",
  },
  {
    icon: Award,
    title: "Confidence in Financial Decisions",
  },
  {
    icon: Brain,
    title: "Early Exposure to Financial Thinking",
  },
]

export function OutcomesSection() {
  return (
    <section id="outcomes" className="py-20 md:py-28 bg-card">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What Students Gain
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 p-5 bg-background border border-border rounded-xl hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <outcome.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground">{outcome.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
