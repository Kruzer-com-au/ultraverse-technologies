'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductCTA from '@/components/sections/product/ProductCTA'
import TeamGrid from '@/components/sections/TeamGrid'
import { leadershipTeam } from '@/data/leadership'

export default function LeadershipPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero
        label="Leadership"
        title="Meet the Team"
        description="The team building the future of digital entertainment."
      />

      <TeamGrid
        label="Leadership"
        title="The Team"
        members={leadershipTeam}
      />

      <ProductCTA
        title="Interested in Joining the Team?"
        description="We're assembling world-class talent across engineering, product, and operations."
        ctaText="View Open Positions"
        ctaHref="/company/careers"
      />
    </main>
  )
}
