"use client"

import Link from "next/link"

const varieties = [
  {
    name: "Hass",
    season: "Year-round",
    flavor: "Rich & Creamy",
    image: "/hass-avocado-dark-green.jpg",
  },
  {
    name: "Fuerte",
    season: "Fall & Winter",
    flavor: "Buttery & Smooth",
    image: "/fuerte-avocado-light-green.jpg",
  },
  {
    name: "Bacon",
    season: "Fall & Winter",
    flavor: "Mild & Nutty",
    image: "/bacon-avocado-green.jpg",
  },
  {
    name: "Zutano",
    season: "Spring & Summer",
    flavor: "Tangy & Fresh",
    image: "/zutano-avocado-bright-green.jpg",
  },
]

export default function VarietiesPreview() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Avocado <span className="text-primary">Varieties</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse selection of premium avocado varieties
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {varieties.map((variety, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={variety.image || "/placeholder.svg"}
                  alt={variety.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{variety.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-semibold text-foreground">Season:</span> {variety.season}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Flavor:</span> {variety.flavor}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/varieties"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Explore All Varieties
          </Link>
        </div>
      </div>
    </section>
  )
}
