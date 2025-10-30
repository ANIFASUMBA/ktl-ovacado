"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Award, Leaf, Users, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            From humble beginnings to becoming a trusted source of premium avocados, our journey is one of passion,
            sustainability, and community.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To cultivate premium, sustainably-grown avocados while building a thriving community of avocado lovers
                worldwide. We believe in the power of quality, sustainability, and genuine connection.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every avocado we grow is a testament to our commitment to excellence and our responsibility to the
                planet.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Sustainability</strong> - Protecting our planet for future
                    generations
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Quality</strong> - Never compromising on excellence
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Community</strong> - Building genuine connections
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Transparency</strong> - Honest communication always
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}
