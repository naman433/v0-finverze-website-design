"use client"

import { motion } from "framer-motion"
import { BookOpen, Gamepad2, Brain, ArrowRight } from "lucide-react"

const approaches = [
  {
    icon: BookOpen,
    title: "Education",
    description: "Simple and structured financial concepts",
  },
  {
    icon: Gamepad2,
    title: "Engagement",
    description: "Activities and challenges",
  },
  {
    icon: Brain,
    title: "Behavior",
    description: "Focus on habit building",
  },
  {
    icon: ArrowRight,
    title: "Continuity",
    description: "Designed to grow with students over time",
  },
]

export function ApproachSection() {
  return (
    <section id="approach" className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Our Method
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Approach
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Finverze combines multiple elements to create lasting change.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <approach.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{approach.title}</h3>
              <p className="text-sm text-muted-foreground">{approach.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 text-center"
        >
          <p className="text-xl md:text-2xl text-foreground font-semibold">
            We focus on building habits, not just delivering content.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
