"use client"

import { motion } from "framer-motion"
import { BookOpen, Gamepad2, LineChart, TrendingUp } from "lucide-react"

const pillars = [
  {
    icon: BookOpen,
    title: "Learn",
    description: "Through structured, expert-led courses",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Gamepad2,
    title: "Apply",
    description: "Through real-life challenges and games",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: LineChart,
    title: "Track",
    description: "Through habits and financial tools",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "Into long-term financial decision makers",
    color: "bg-purple-500/10 text-purple-600",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            The Solution
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What is Finverze?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Finverze is a lifestyle finance platform designed to build financial discipline early and guide students throughout life. We don&apos;t just teach finance—we help students practice it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/20 transition-all group"
            >
              <div
                className={`w-14 h-14 ${pillar.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <pillar.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From basic money habits to wealth management, Finverze provides the tools, knowledge, and guidance students need at every stage of their financial journey.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
