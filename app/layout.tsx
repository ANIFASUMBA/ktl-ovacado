import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KTL Farming Limited - Farm Fresh Avocados & Recipes",
  description:
    "Discover premium avocados, farm-to-market stories, recipes, and farming tips from KTL Farming Limited's sustainable avocado farm. Join our community of avocado lovers worldwide.",
  keywords: "avocados, organic, farm-to-table, recipes, health benefits, sustainable farming, KTL Farming",
  openGraph: {
    title: "KTL Farming Limited - Premium Farm Fresh Avocados",
    description: "Discover premium avocados and join our community",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
