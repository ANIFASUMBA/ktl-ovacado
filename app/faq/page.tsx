"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How do I know when an avocado is ripe?",
    answer:
      "A ripe avocado should yield slightly to gentle pressure in your palm. The skin should be dark green or nearly black. If it's too hard, it needs more time. If it's mushy, it's overripe. You can also check the stem - if it's brown underneath, the avocado is overripe.",
  },
  {
    question: "How should I store my avocados?",
    answer:
      "Store unripe avocados at room temperature for 2-3 days. Once ripe, keep them in the refrigerator crisper drawer for up to 5 days. To slow ripening, store them in a paper bag. To speed it up, place them with a banana. Cut avocados can be stored with the pit in an airtight container for up to 3 days.",
  },
  {
    question: "Are your avocados organic?",
    answer:
      "Yes! All our avocados are certified organic. We use sustainable farming practices and avoid synthetic pesticides and fertilizers. We're committed to producing the highest quality avocados while protecting the environment.",
  },
  {
    question: "What is your shipping policy?",
    answer:
      "We ship within 48 hours of order placement. Most orders arrive within 3-5 business days. We use insulated packaging to ensure your avocados arrive fresh. Shipping is free on orders over $50. We offer tracking for all shipments.",
  },
  {
    question: "Can I return or exchange products?",
    answer:
      "We want you to be completely satisfied! If you receive damaged or unsatisfactory products, contact us within 7 days for a full refund or replacement. We stand behind the quality of our avocados.",
  },
  {
    question: "Do you offer bulk orders or wholesale?",
    answer:
      "We offer special pricing for bulk orders and wholesale partnerships. Contact our sales team at wholesale@avocadohaven.com for more information about volume discounts and custom arrangements.",
  },
  {
    question: "Are there any health benefits to eating avocados?",
    answer:
      "Yes! Avocados are packed with nutrients. They're rich in healthy monounsaturated fats, potassium, vitamin E, and antioxidants. They support heart health, brain function, and have anti-inflammatory properties. They're also high in fiber, making them great for digestive health.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@avocadohaven.com or call +1 (555) 123-4567. We're available Monday-Friday, 9am-5pm PST. We typically respond to emails within 24 hours.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our products and services
          </p>
        </div>
      </section>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-muted/30 animate-in fade-in slide-in-from-top-2">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
