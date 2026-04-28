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
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">
            Why We Started Finverze
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              We started Finverze because we saw too many young people struggle with money, not because they were irresponsible, but because nobody ever taught them.
            </p>
            <p>
              Our mission is simple: make financial discipline a skill every student learns, just like reading or math. We believe that when you teach someone to manage money well, you change the course of their entire life.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
