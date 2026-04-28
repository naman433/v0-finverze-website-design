"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Building2, Users, Calendar, BarChart3, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const offerings = [
  {
    icon: Users,
    title: "Sessions That Connect",
    description: "Our facilitators know how to engage students, making finance relatable and even enjoyable",
  },
  {
    icon: Calendar,
    title: "Ready to Go Programs",
    description: "A complete 2 to 3 week curriculum that fits into your academic calendar without hassle",
  },
  {
    icon: BarChart3,
    title: "Students Actually Participate",
    description: "Challenges and activities that get students involved, not just sitting and listening",
  },
  {
    icon: CheckCircle2,
    title: "Results You Can See",
    description: "Students walk away with real skills and changed attitudes toward money",
  },
]

export function InstitutionsSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    institutionName: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.contactName,
          email: formData.email,
          institution: formData.institutionName,
          phone: formData.phone,
          message: formData.message || "Institution partnership inquiry",
          type: "institution",
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Something went wrong")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="institutions" className="py-20 md:py-28 bg-primary/5">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            For Schools and Colleges
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Partner With Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We work with institutions that want to give their students more than just academic knowledge. If you believe your students deserve practical life skills, let us talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Offerings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">What Your Institution Gets</h3>
            </div>

            <div className="space-y-4">
              {offerings.map((offering, index) => (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <offering.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{offering.title}</h4>
                    <p className="text-sm text-muted-foreground">{offering.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-card rounded-xl border border-border">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Give your students an edge</span> by teaching them something they will use every single day of their lives.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl border border-border p-8"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Thank You</h3>
                <p className="text-muted-foreground">
                  We have received your details and will reach out within a day or two. Looking forward to speaking with you.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-foreground mb-2">Let us Talk</h3>
                <p className="text-muted-foreground mb-6">
                  Share your details and we will get in touch to understand your needs and put together a program that fits.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="institutionName" className="block text-sm font-medium text-foreground mb-1.5">
                      Institution Name
                    </label>
                    <Input
                      id="institutionName"
                      placeholder="eg St. Xavier's College, Bangalore"
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      required
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-foreground mb-1.5">
                      Contact Person
                    </label>
                    <Input
                      id="contactName"
                      placeholder="eg Priya Sharma"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      required
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="priya@college.edu.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                      Phone (Optional)
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                      Additional Information (Optional)
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us a bit about your institution and what you are looking for..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                    />
                  </div>
                  {error && <p className="text-sm text-red-500">{error}</p>}
                  <Button type="submit" size="lg" className="w-full h-12" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Request Program"}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
