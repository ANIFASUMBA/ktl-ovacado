"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Truck, Clock, MapPin, Shield } from "lucide-react"

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shipping <span className="text-primary">Information</span>
          </h1>
          <p className="text-lg text-muted-foreground">Fast, reliable delivery of fresh avocados to your door</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Shipping Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-xl border border-border p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Standard Shipping</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Our most popular option. Your avocados arrive fresh and ready to enjoy.
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                3-5 business days
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Free on orders over $50
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                $9.99 for orders under $50
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Insulated packaging included
              </li>
            </ul>
            <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
              Select
            </button>
          </div>

          <div className="bg-card rounded-xl border border-border p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Express Shipping</h3>
            </div>
            <p className="text-muted-foreground mb-4">Need your avocados fast? Get them within 1-2 business days.</p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                1-2 business days
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                $24.99 flat rate
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Premium insulation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Guaranteed freshness
              </li>
            </ul>
            <button className="w-full py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-semibold">
              Select
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="mb-4 inline-block p-4 bg-primary/10 rounded-full">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Real-time Tracking</h3>
            <p className="text-muted-foreground">Track your order every step of the way with our tracking system</p>
          </div>

          <div className="text-center">
            <div className="mb-4 inline-block p-4 bg-primary/10 rounded-full">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Freshness Guarantee</h3>
            <p className="text-muted-foreground">If your avocados arrive damaged, we'll replace them free</p>
          </div>

          <div className="text-center">
            <div className="mb-4 inline-block p-4 bg-primary/10 rounded-full">
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Eco-Friendly Packaging</h3>
            <p className="text-muted-foreground">100% recyclable and compostable packaging materials</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Shipping FAQs</h2>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">When will my order ship?</h4>
              <p className="text-muted-foreground">
                Orders placed before 2pm PST ship the same day. Orders placed after 2pm PST ship the next business day.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Do you ship internationally?</h4>
              <p className="text-muted-foreground">
                Currently, we ship to all 50 US states. International shipping is coming soon! Sign up for our
                newsletter to be notified.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">What if my avocados arrive damaged?</h4>
              <p className="text-muted-foreground">
                We guarantee freshness! If your avocados arrive damaged or unsatisfactory, contact us within 7 days for
                a full refund or replacement.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Can I schedule a delivery date?</h4>
              <p className="text-muted-foreground">
                Yes! During checkout, you can select your preferred delivery date. We'll do our best to accommodate your
                request.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
