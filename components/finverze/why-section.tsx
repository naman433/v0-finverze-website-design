"use client"

import { motion } from "framer-motion"
import { Target, Users, Layers, Sparkles } from "lucide-react"

const reasons = [
  {
    icon: Target,
    title: "Focus on Discipline",
    description: "We emphasize financial discipline over just knowledge—building habits that last.",
  },
  {
    icon: Users,
    title: "Built for Students",
    description: "Designed from day one specifically for students at every stage of their journey.",
  },
  {
    icon: Layers,
    title: "Lifecycle Platform",
    description: "A long-term financial partner that grows with you from school to adulthood.",
  },
  {
    icon: Sparkles,
    title: "Education + Behavior + Tech",
    description: "Combines learning, habit formation, and technology for real results.",
  },
]

export function WhySection() {
  return (
    <section id="why" className="py-20 md:py-28 bg-card">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Our Difference
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Why Finverze?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We&apos;re not just teaching finance. We&apos;re building financially responsible individuals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 p-6 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center"
        >
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-balance">
            &ldquo;We&apos;re not just teaching finance. We&apos;re building financially responsible individuals who make smart decisions for life.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
