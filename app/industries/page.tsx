'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import IndustryListing from '@/components/sections/industry/IndustryListing'
import { industriesData } from '@/data/industries/listing'

export default function IndustriesPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label="Industries"
        title="Impact at Scale"
        description="Ultraverse technologies provide the foundational layer for critical sectors. We build the privacy-first infrastructure that powers the world's most innovative industries."
        hideCtas={true}
      />

      <IndustryListing industries={industriesData} />
    </main>
  )
}
