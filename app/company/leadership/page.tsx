'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import LeadershipTeam from '@/components/sections/LeadershipTeam'
import TechnicalPlaceholder from '@/components/ui/TechnicalPlaceholder'

import { leadershipTeam } from '@/data/leadership'

export default function LeadershipPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero
        label="Leadership"
        title="Meet the Team"
        description="The team building the future of digital entertainment."
        hideCtas
      />

      <LeadershipTeam
        label="Leadership"
        title="The Team"
        members={leadershipTeam}
      />

      <section className="px-6 lg:px-12 py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TechnicalPlaceholder
              label="600 × 400"
              sublabel="Leadership Team"
              aspectRatio="600/400"
              src="/images/TEAMPHOTO.jpg"
            />
            <TechnicalPlaceholder
              label="600 × 400"
              sublabel="Board Room"
              aspectRatio="600/400"
              src="/images/ULTRAVERSEHEADQUARTERS.png"
            />
          </div>
        </div>
      </section>

      <ProductCTA
        title="Interested in Joining the Team?"
        description="We're assembling world-class talent across engineering, product, and operations."
        ctaText="View Open Positions"
        ctaHref="/company/careers"
      />
    </main>
  )
}
