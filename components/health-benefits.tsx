"use client"

import { Heart, Brain, Zap, Shield } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Heart Health",
    description: "Rich in monounsaturated fats that support cardiovascular health and reduce bad cholesterol.",
  },
  {
    icon: Brain,
    title: "Brain Function",
    description: "Contains lutein and zeaxanthin, powerful antioxidants that support cognitive health.",
  },
  {
    icon: Zap,
    title: "Energy Boost",
    description: "Packed with potassium and B vitamins for sustained energy throughout your day.",
  },
  {
    icon: Shield,
    title: "Immune Support",
    description: "High in vitamin C and antioxidants to strengthen your immune system naturally.",
  },
]

export default function HealthBenefits() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nutritional <span className="text-primary">Powerhouse</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why avocados are nature's perfect superfood
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <div className="mb-4 inline-block p-3 bg-secondary/20 rounded-lg">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
