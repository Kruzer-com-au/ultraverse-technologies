'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { products } from '@/lib/home-data'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductsContent from '@/components/sections/product/ProductsContent'
import ProductCTA from '@/components/sections/product/ProductCTA'

export default function ProductsPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label="Products"
        title="Our Products"
        description="Three product lines powering city-scale data, entertainment, gaming, and enterprise. Each built on ULTRAVERSE's data-first, privacy-first architecture and designed for scale."
      />

      <ProductsContent products={products} />

      <ProductCTA 
        title="Ready to Build With ULTRAVERSE?"
        description="Talk to our team about how our technology and products can power your next initiative."
        ctaText="Get in Touch"
        ctaHref="/contact"
      />
    </main>
  )
}
