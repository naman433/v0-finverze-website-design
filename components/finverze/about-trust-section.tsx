"use client"

import { motion } from "framer-motion"

export function AboutTrustSection() {
  return (
    <section id="about-finverze" className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">
            About Finverze
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Finverze is built with the vision of making financial discipline a core life skill for every student.
            </p>
            <p>
              We aim to bridge the gap between education and real-world financial behavior by introducing structured, practical, and engaging systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
