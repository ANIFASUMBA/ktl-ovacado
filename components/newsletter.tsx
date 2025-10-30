"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl border border-border p-12 text-center">
          <div className="mb-6 inline-block p-4 bg-primary/10 rounded-full">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join Our Community</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get exclusive recipes, farming tips, and special offers delivered to your inbox
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold hover:shadow-lg hover:scale-105"
            >
              Subscribe
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-sm text-primary font-semibold animate-in fade-in">
              Thank you for subscribing! Check your email for a welcome gift.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
