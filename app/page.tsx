import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import FarmToMarket from "@/components/farm-to-market"
import HealthBenefits from "@/components/health-benefits"
import FeaturedProducts from "@/components/featured-products"
import RecipesPreview from "@/components/recipes-preview"
import VarietiesPreview from "@/components/varieties-preview"
import BlogPreview from "@/components/blog-preview"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FarmToMarket />
      <HealthBenefits />
      <FeaturedProducts />
      <VarietiesPreview />
      <RecipesPreview />
      <BlogPreview />
      <Newsletter />
      <Footer />
    </main>
  )
}
