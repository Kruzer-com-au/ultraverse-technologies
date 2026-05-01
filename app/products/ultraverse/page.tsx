'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductInfoGrid from '@/components/sections/product/ProductInfoGrid'
import ProductVisuals from '@/components/sections/product/ProductVisuals'

const capabilities = [
  {
    num: '01',
    title: 'Squad Legacy',
    desc: 'AR-integrated squad-based combat with real-world territory control. Build your squad, claim your city, and compete in a persistent world that blends digital gameplay with real geography. Features cross-platform PC, Mobile & AR capabilities.',
    tags: ['Flagship Game', 'AR Integration', 'Territory Control', 'Cross-Platform']
  },
  {
    num: '02',
    title: 'Quantum Creatures',
    desc: 'Persistent digital companions that grow, evolve, and battle across sessions. A deep collection and competition platform with franchise expansion potential across merchandise, media, and animation.',
    tags: ['Digital Companions', 'Evolution Engine', 'Battle System', 'IP Franchise']
  },
  {
    num: '03',
    title: 'Time Odyssey',
    desc: 'Location-based historical exploration that transforms how people engage with the world around them. Real destinations, real history, real narrative experienced through immersive interactive storytelling.',
    tags: ['History Tech', 'Narrative AR', 'Destination Marketing', 'Education']
  },
  {
    num: '04',
    title: 'Ultraworld',
    desc: 'A spatial computing platform that bridges the digital and physical. Ultraworld enables enterprises and creators to layer interactive experiences onto real-world environments at any scale.',
    tags: ['Spatial Computing', 'World Layering', 'Enterprise SDK', 'Global Scale']
  }
]

const ecosystemPillars = [
  { num: '01', title: 'Unified Architecture', desc: 'All experiences share a common spatial engine, ensuring seamless transitions between gaming, exploration, and enterprise applications.' },
  { num: '02', title: 'One Economy', desc: 'A synchronized digital economy where value, assets, and achievements are recognized across the entire ecosystem.' },
  { num: '03', title: 'Player Identity', desc: 'Maintain a single persistent identity across multiple experiences, carrying your reputation and companions everywhere you go.' }
]

export default function UltraVersePage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label="ULTRAVERSE"
        title="One Ecosystem. Four Experiences."
        description="The Ultraverse is ULTRAVERSE's gaming and spatial experience platform; a unified ecosystem where location-based gaming, digital companions, historical exploration, and spatial computing share one architecture, one economy, and one player identity. Built for players, creators, and enterprise partners."
        ctaText="Partnership Inquiries"
        secondaryCtaText="View All Products"
      />

      <ProductFeatureList
        label="Capabilities"
        title="Key Capabilities"
        description="A unified spatial architecture powering the next generation of location-based entertainment and gaming IP."
        features={capabilities}
      />

      <ProductVisuals 
        primary={{ label: '1400 × 600', sublabel: 'Gaming & Spatial Architecture' }}
        grid={[
          { label: '600 × 400', sublabel: 'Squad Legacy Interface' },
          { label: '600 × 400', sublabel: 'Quantum Creature Profile' }
        ]}
      />

      <ProductInfoGrid 
        label="The Ecosystem"
        title="Shared Foundation"
        items={ecosystemPillars}
        columns={3}
      />

      <ProductCTA 
        title="Ready to Build in the Ultraverse?"
        description="Talk to our team about game licensing, IP partnerships, or spatial computing deployments."
        ctaText="Get in Touch"
      />
    </main>
  )
}
