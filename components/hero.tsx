"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-primary">Fresh from Farm</span> to Your Table
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Discover premium, sustainably-grown avocados and join a community passionate about health, flavor, and
              responsible farming. From farm-to-market stories to delicious recipes, we bring you the best of avocado
              culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold text-center hover:shadow-lg hover:scale-105"
              >
                Shop Products
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all duration-200 font-semibold text-center"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl"></div>
              <img
                src="/fresh-avocados-on-tree-farm-sustainable-agricultur.jpg"
                alt="Fresh avocados from our farm"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
