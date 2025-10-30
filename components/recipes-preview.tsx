"use client"

import Link from "next/link"
import { Clock, Users } from "lucide-react"

const recipes = [
  {
    id: 1,
    title: "Classic Guacamole",
    time: "10 min",
    servings: "4",
    image: "/guacamole-fresh-avocado-dip.jpg",
    description: "The perfect party dip with fresh lime and cilantro",
  },
  {
    id: 2,
    title: "Avocado Toast",
    time: "15 min",
    servings: "2",
    image: "/avocado-toast.png",
    description: "Creamy avocado on crispy sourdough with poached eggs",
  },
  {
    id: 3,
    title: "Green Smoothie Bowl",
    time: "5 min",
    servings: "1",
    image: "/green-smoothie-bowl-avocado.jpg",
    description: "Nutritious breakfast bowl with granola and berries",
  },
]

export default function RecipesPreview() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Delicious <span className="text-primary">Recipes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover creative ways to enjoy our premium avocados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{recipe.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{recipe.description}</p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {recipe.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    {recipe.servings} servings
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/recipes"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            View All Recipes
          </Link>
        </div>
      </div>
    </section>
  )
}
