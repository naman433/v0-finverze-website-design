"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Our Answer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">
            What is Finverze?
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Think of Finverze as a gym for your money habits. We do not just tell students what to do. We help them practice, build routines, and develop real financial discipline that sticks.
            </p>
            <p>
              Most financial courses dump information and hope it sticks. We take a different approach. We focus on <span className="text-foreground font-medium">changing behavior, not just teaching concepts</span>.
            </p>
            <p className="text-foreground font-semibold text-xl md:text-2xl pt-4">
              Students do not just learn about money. They learn to manage it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
