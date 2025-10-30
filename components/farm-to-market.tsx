"use client"

import { Leaf, Truck, Users, Award } from "lucide-react"

const stories = [
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description:
      "We practice regenerative agriculture to ensure healthy soil and thriving ecosystems for generations to come.",
  },
  {
    icon: Truck,
    title: "Farm to Table",
    description: "Direct from our orchards to your doorstep within 48 hours, ensuring peak freshness and quality.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Supporting local farmers and building relationships with avocado lovers around the world.",
  },
  {
    icon: Award,
    title: "Quality Certified",
    description: "Certified organic and awarded for excellence in sustainable agricultural practices.",
  },
]

export default function FarmToMarket() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            From Farm to <span className="text-primary">Your Table</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to quality, sustainability, and community excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((story, index) => {
            const Icon = story.icon
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{story.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{story.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
