"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ShoppingCart, Filter } from "lucide-react"

const allProducts = [
  {
    id: 1,
    name: "Hass Avocados - Premium Box",
    price: 24.99,
    category: "Fresh",
    rating: 4.9,
    reviews: 128,
    image: "/hass-avocados-fresh-organic.jpg",
    description: "Our signature variety - creamy, rich, and perfect for any occasion",
    inStock: true,
  },
  {
    id: 2,
    name: "Fuerte Avocados - Bulk Pack",
    price: 32.99,
    category: "Fresh",
    rating: 4.8,
    reviews: 95,
    image: "/fuerte-avocados-green-fresh.jpg",
    description: "Larger, buttery avocados ideal for families and meal prep",
    inStock: true,
  },
  {
    id: 3,
    name: "Avocado Oil - Cold Pressed",
    price: 18.99,
    category: "Oil",
    rating: 4.9,
    reviews: 156,
    image: "/avocado-oil-bottle-premium.jpg",
    description: "Pure, cold-pressed oil for cooking and salads",
    inStock: true,
  },
  {
    id: 4,
    name: "Mixed Varieties Bundle",
    price: 39.99,
    category: "Fresh",
    rating: 5.0,
    reviews: 87,
    image: "/mixed-avocado-varieties-assorted.jpg",
    description: "Experience our full range of premium avocado varieties",
    inStock: true,
  },
  {
    id: 5,
    name: "Organic Avocado Spread",
    price: 12.99,
    category: "Spreads",
    rating: 4.7,
    reviews: 64,
    image: "/organic-avocado-spread-jar.jpg",
    description: "Creamy, organic avocado spread perfect for toast and snacks",
    inStock: true,
  },
  {
    id: 6,
    name: "Bacon Avocados - Seasonal",
    price: 28.99,
    category: "Fresh",
    rating: 4.6,
    reviews: 42,
    image: "/bacon-avocado-green.jpg",
    description: "Mild and nutty flavor, available in fall and winter",
    inStock: false,
  },
  {
    id: 7,
    name: "Avocado Seed Tea",
    price: 14.99,
    category: "Beverages",
    rating: 4.5,
    reviews: 38,
    image: "/avocado-seed-tea-package.jpg",
    description: "Antioxidant-rich tea made from avocado seeds",
    inStock: true,
  },
  {
    id: 8,
    name: "Premium Gift Box",
    price: 49.99,
    category: "Gifts",
    rating: 4.9,
    reviews: 73,
    image: "/premium-avocado-gift-box.jpg",
    description: "Perfect gift set with assorted avocados and oil",
    inStock: true,
  },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")
  const [cart, setCart] = useState<number[]>([])

  const categories = ["All", "Fresh", "Oil", "Spreads", "Beverages", "Gifts"]

  const filteredProducts =
    selectedCategory === "All" ? allProducts : allProducts.filter((p) => p.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    if (sortBy === "rating") return b.rating - a.rating
    return 0
  })

  const addToCart = (id: number) => {
    setCart([...cart, id])
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Product Catalog</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover our complete range of premium avocados and avocado products
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter size={20} className="text-primary" />
                <h3 className="text-lg font-bold text-foreground">Filters</h3>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-4">Category</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                        selectedCategory === cat
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-8">
              <p className="text-muted-foreground">Showing {sortedProducts.length} products</p>
              <div className="text-sm text-muted-foreground">Cart: {cart.length} items</div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
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
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">Out of Stock</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-primary">${product.price}</span>
                      <div className="text-sm">
                        <span className="text-secondary font-semibold">★ {product.rating}</span>
                        <span className="text-muted-foreground text-xs ml-1">({product.reviews})</span>
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(product.id)}
                      disabled={!product.inStock}
                      className={`w-full py-2 rounded-lg transition-all font-semibold flex items-center justify-center gap-2 ${
                        product.inStock
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:scale-105"
                          : "bg-muted text-muted-foreground cursor-not-allowed"
                      }`}
                    >
                      <ShoppingCart size={18} />
                      {product.inStock ? "Add to Cart" : "Unavailable"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
