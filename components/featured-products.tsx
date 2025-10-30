"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Hass Avocados - Premium Box",
    price: "$24.99",
    image: "/hass-avocados-fresh-organic.jpg",
    description: "Our signature variety - creamy, rich, and perfect for any occasion",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Fuerte Avocados - Bulk Pack",
    price: "$32.99",
    image: "/fuerte-avocados-green-fresh.jpg",
    description: "Larger, buttery avocados ideal for families and meal prep",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Avocado Oil - Cold Pressed",
    price: "$18.99",
    image: "/avocado-oil-bottle-premium.jpg",
    description: "Pure, cold-pressed oil for cooking and salads",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Mixed Varieties Bundle",
    price: "$39.99",
    image: "/mixed-avocado-varieties-assorted.jpg",
    description: "Experience our full range of premium avocado varieties",
    rating: 5.0,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Products</span>
            </h2>
            <p className="text-lg text-muted-foreground">Handpicked selections from our farm</p>
          </div>
          <Link
            href="/products"
            className="hidden md:inline-block px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
          >
            View All
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="relative overflow-hidden h-64 bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <span className="text-sm text-secondary">★ {product.rating}</span>
                </div>
                <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold flex items-center justify-center gap-2 group/btn">
                  <ShoppingCart size={18} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/products"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
