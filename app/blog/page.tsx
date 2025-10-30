"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, User, Search } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Sustainable Farming Practices for Avocado Orchards",
    excerpt:
      "Learn how we implement regenerative agriculture to maintain soil health and biodiversity while producing premium avocados.",
    author: "Maria Garcia",
    date: "Oct 15, 2024",
    image: "/avocado-farm-sustainable-agriculture.jpg",
    category: "Farming",
    content: `Sustainable farming is at the heart of everything we do. Our commitment to regenerative agriculture goes beyond just growing avocados—it's about nurturing the land for future generations.

## Our Approach

We implement several key practices:

- **Soil Health**: We use cover crops and composting to maintain rich, healthy soil
- **Water Conservation**: Drip irrigation systems reduce water usage by 40%
- **Biodiversity**: We maintain native plants and wildlife habitats throughout our orchards
- **Minimal Pesticides**: We use integrated pest management to reduce chemical inputs

## The Results

By focusing on sustainability, we've seen:
- Increased soil organic matter by 25% over 5 years
- Reduced water consumption while maintaining yields
- Improved fruit quality and nutritional content
- Stronger ecosystem resilience

Join us in supporting sustainable agriculture!`,
  },
  {
    id: 2,
    title: "The Perfect Avocado: How to Choose and Store",
    excerpt:
      "Expert tips on selecting ripe avocados and keeping them fresh for longer. Learn the secrets from our farmers.",
    author: "James Chen",
    date: "Oct 10, 2024",
    image: "/fresh-avocados-selection-ripeness.jpg",
    category: "Tips",
    content: `Choosing the perfect avocado is an art and a science. Here's everything you need to know to select and store avocados like a pro.

## How to Choose

**Feel**: Gently squeeze the avocado in your palm. It should yield slightly to pressure but not be mushy.

**Color**: Look for dark green or nearly black skin. Lighter green usually means unripe.

**Weight**: A ripe avocado should feel heavy for its size, indicating good fat content.

## Storage Tips

- **Room Temperature**: Keep unripe avocados on the counter for 2-3 days
- **Refrigerator**: Store ripe avocados in the crisper drawer for up to 5 days
- **Freezing**: Slice and freeze in airtight containers for up to 3 months
- **Prevent Browning**: Coat cut surfaces with lemon juice and wrap tightly

## Pro Tips

- Store with a banana to speed up ripening
- Cut just before serving to maintain freshness
- Use the pit to keep guacamole fresh longer`,
  },
  {
    id: 3,
    title: "From Seed to Harvest: A Year in Our Orchard",
    excerpt:
      "Follow our avocado trees through the complete growing cycle and discover what it takes to produce premium fruit.",
    author: "Sofia Rodriguez",
    date: "Oct 5, 2024",
    image: "/avocado-orchard-harvest-season.jpg",
    category: "Stories",
    content: `Growing premium avocados is a year-long journey. Here's what happens in our orchards throughout the seasons.

## Spring (March-May)

Flowering season begins. Our bees work overtime pollinating thousands of flowers. Only a small percentage will develop into fruit.

## Summer (June-August)

Young fruit develops rapidly. We carefully thin the fruit to ensure larger, higher-quality avocados. Irrigation is critical during this hot season.

## Fall (September-November)

Harvest season! Our team carefully picks each avocado at peak ripeness. It's labor-intensive but ensures the best quality.

## Winter (December-February)

Rest and renewal. We prune trees, improve soil, and plan for the next season. It's also when we implement maintenance and upgrades.

## The Result

This careful attention throughout the year results in the premium avocados you enjoy. Every fruit is a testament to our commitment to quality.`,
  },
]

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<(typeof blogPosts)[0] | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground">Farming tips, recipes, and stories from our community</p>
        </div>
      </section>


      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {selectedPost ? (
          <article className="max-w-3xl mx-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="text-primary hover:text-primary/80 font-semibold mb-8 transition-colors"
            >
              ← Back to Blog
            </button>

            <img
              src={selectedPost.image || "/placeholder.svg"}
              alt={selectedPost.title}
              className="rounded-2xl shadow-2xl w-full h-96 object-cover mb-8"
            />

            <div className="mb-8">
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  {selectedPost.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{selectedPost.title}</h1>

            </div>

            <div className="prose prose-invert max-w-none">
              {selectedPost.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("##")) {
                  return (
                    <h2 key={i} className="text-2xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                }
                if (paragraph.startsWith("-")) {
                  return (
                    <ul key={i} className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                      {paragraph.split("\n").map((item, j) => (
                        <li key={j}>{item.replace("- ", "")}</li>
                      ))}
                    </ul>
                  )
                }
                return (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </article>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
