"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Clock, Users, ChefHat } from "lucide-react"

const recipes = [
  {
    id: 1,
    title: "Classic Guacamole",
    time: "10 min",
    servings: "4",
    difficulty: "Easy",
    image: "/guacamole-fresh-avocado-dip.jpg",
    description: "The perfect party dip with fresh lime and cilantro",
    ingredients: [
      "3 ripe avocados",
      "1 lime, juiced",
      "1/2 red onion, diced",
      "1 jalapeño, minced",
      "1/4 cup cilantro, chopped",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Cut avocados in half and remove the pit",
      "Scoop into a bowl and mash to desired consistency",
      "Add lime juice immediately to prevent browning",
      "Fold in onion, jalapeño, and cilantro",
      "Season with salt and pepper",
      "Serve immediately with tortilla chips",
    ],
  },
  {
    id: 2,
    title: "Avocado Toast",
    time: "15 min",
    servings: "2",
    difficulty: "Easy",
    image: "/avocado-toast.png",
    description: "Creamy avocado on crispy sourdough with poached eggs",
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "2 eggs",
      "2 tbsp butter",
      "Red pepper flakes",
      "Sea salt",
      "Lemon juice",
    ],
    instructions: [
      "Toast the sourdough bread until golden",
      "Bring water to a simmer and poach the eggs",
      "Slice the avocado and arrange on toast",
      "Top with poached egg",
      "Sprinkle with red pepper flakes and sea salt",
      "Drizzle with lemon juice and serve",
    ],
  },
  {
    id: 3,
    title: "Green Smoothie Bowl",
    time: "5 min",
    servings: "1",
    difficulty: "Easy",
    image: "/green-smoothie-bowl-avocado.jpg",
    description: "Nutritious breakfast bowl with granola and berries",
    ingredients: [
      "1 avocado",
      "1 cup spinach",
      "1 banana",
      "1 cup almond milk",
      "1/2 cup granola",
      "1/4 cup berries",
      "1 tbsp honey",
    ],
    instructions: [
      "Blend avocado, spinach, banana, and almond milk",
      "Pour into a bowl",
      "Top with granola and fresh berries",
      "Drizzle with honey",
      "Serve immediately",
    ],
  },
]

export default function RecipesPage() {
  const [selectedRecipe, setSelectedRecipe] = useState<(typeof recipes)[0] | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Delicious <span className="text-primary">Recipes</span>
          </h1>
          <p className="text-lg text-muted-foreground">Creative ways to enjoy our premium avocados</p>
        </div>
      </section>

      {/* Recipes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {selectedRecipe ? (
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Recipe Image */}
            <div>
              <img
                src={selectedRecipe.image || "/placeholder.svg"}
                alt={selectedRecipe.title}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>

            {/* Recipe Details */}
            <div>
              <button
                onClick={() => setSelectedRecipe(null)}
                className="text-primary hover:text-primary/80 font-semibold mb-6 transition-colors"
              >
                ← Back to Recipes
              </button>

              <h1 className="text-4xl font-bold text-foreground mb-4">{selectedRecipe.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{selectedRecipe.description}</p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-semibold text-foreground">{selectedRecipe.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Servings</p>
                    <p className="font-semibold text-foreground">{selectedRecipe.servings}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ChefHat className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Difficulty</p>
                    <p className="font-semibold text-foreground">{selectedRecipe.difficulty}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ingredients</h3>
                <ul className="space-y-2">
                  {selectedRecipe.ingredients.map((ingredient, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <input type="checkbox" className="w-4 h-4 rounded" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Instructions</h3>
                <ol className="space-y-3">
                  {selectedRecipe.instructions.map((instruction, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <span className="text-muted-foreground pt-1">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                onClick={() => setSelectedRecipe(recipe)}
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
        )}
      </div>

      <Footer />
    </main>
  )
}
