"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy <span className="text-primary">Policy</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Avocado Haven ("we", "us", "our", or "Company") operates the avocadohaven.com website. This page informs
              you of our policies regarding the collection, use, and disclosure of personal data when you use our
              Service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information Collection and Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect several different types of information for various purposes to provide and improve our Service
              to you.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Personal Data: Name, email address, phone number, address</li>
              <li>Usage Data: Browser type, IP address, pages visited, time spent</li>
              <li>Cookies and tracking technologies for site functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              Avocado Haven uses the collected data for various purposes including providing and maintaining our
              Service, notifying you about changes, allowing you to participate in interactive features, and providing
              customer support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Security of Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              The security of your data is important to us but remember that no method of transmission over the Internet
              or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
              protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at privacy@avocadohaven.com
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
