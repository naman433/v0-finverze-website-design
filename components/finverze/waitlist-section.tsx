"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react"

export function WaitlistSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setError("")
    
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
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
    <section id="waitlist" className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4" />
            Be the First to Know
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground text-balance">
            Join the Finverze Waitlist
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Be among the first to experience the future of student finance. Get early access, exclusive updates, and special launch pricing.
          </p>

          {isSubmitted ? (
            <div className="mt-10 bg-primary-foreground/10 rounded-2xl p-8 inline-flex flex-col items-center">
              <CheckCircle2 className="h-16 w-16 text-primary-foreground mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground">You&apos;re on the List!</h3>
              <p className="mt-2 text-primary-foreground/80">
                We&apos;ll notify you as soon as Finverze launches. Check your email for a confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-14 px-6 bg-primary-foreground text-foreground placeholder:text-muted-foreground border-0 text-base"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="h-14 px-8 bg-foreground text-background hover:bg-foreground/90 text-base font-semibold"
                >
                  {isLoading ? (
                    "Joining..."
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-200">{error}</p>
              )}
              <p className="mt-4 text-sm text-primary-foreground/60">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          )}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Free to join</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Early access benefits</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Launch discounts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
