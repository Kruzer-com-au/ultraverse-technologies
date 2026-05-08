'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'

const capabilities = [
  {
    num: '01',
    title: 'Persistent Pet Evolution',
    desc: 'Each creature develops unique traits, abilities, and personality over time based on player interaction and battle experience.'
  },
  {
    num: '02',
    title: 'Real-Time Battling',
    desc: 'Competitive and cooperative battle systems with strategic depth, allowing creatures to compete in ranked and casual formats.'
  },
  {
    num: '03',
    title: 'Cross-Platform Progression',
    desc: 'Creatures and player progress persist across devices and platforms, ensuring continuity wherever players engage.'
  },
  {
    num: '04',
    title: 'Collection & Trading',
    desc: 'A deep collection system with rarity tiers, discoverable species, and player-to-player trading mechanics.'
  },
  {
    num: '05',
    title: 'Community Tournaments',
    desc: 'Organized competitive events with seasonal formats, leaderboards, and community-driven tournament structures.'
  }
]

const enterpriseApps = [
  {
    num: '01',
    title: 'IP Licensing',
    desc: 'License Quantum Creatures IP for merchandise, media, and branded products across entertainment categories.'
  },
  {
    num: '02',
    title: 'Merchandise Opportunities',
    desc: 'Physical and digital merchandise programs built around the Quantum Creatures universe, from collectibles to apparel.'
  },
  {
    num: '03',
    title: 'Cross-Platform Integration',
    desc: 'Integrate Quantum Creatures into existing platforms, apps, and games through APIs and co-development arrangements.'
  },
  {
    num: '04',
    title: 'Branded Creature Partnerships',
    desc: 'Create custom branded creatures for promotional campaigns, co-branded experiences, and partner activations.'
  },
  {
    num: '05',
    title: 'Media & Animation Potential',
    desc: 'The Quantum Creatures universe is designed for franchise expansion into animation, series, and transmedia storytelling.'
  }
]

export default function QuantumCreaturesPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero
        label="Quantum Creatures"
        title="Persistent Digital Companions"
        description="Creatures that grow, evolve, and battle across sessions. Quantum Creatures combines collection mechanics, competitive battling, and persistent progression into a franchise-ready digital companion platform."
        secondaryCtaText="Explore Products"
        secondaryCtaHref="/products"
      />

      <ProductVisuals
        primary={{
          label: '1400 × 600',
          sublabel: 'Creature Collection Gallery'
        }}
      />

      <ProductFeatureList
        label="Capabilities"
        title="Key Capabilities"
        description="Quantum Creatures delivers a deep, persistent companion experience with competitive depth and franchise expansion potential."
        features={capabilities}
      />

      <ProductFeatureList
        label="Enterprise"
        title="Enterprise Applications"
        description="Quantum Creatures offers a broad range of partnership, licensing, and media opportunities for enterprises looking to engage audiences through digital companion experiences."
        features={enterpriseApps}
        theme="dark"
      />

      <ProductVisuals
        grid={[
          {
            label: '600 × 400',
            sublabel: 'Creature Battle Arena',
            aspectRatio: '600/400'
          },
          {
            label: '600 × 400',
            sublabel: 'Evolution System',
            aspectRatio: '600/400'
          }
        ]}
      />

      <ProductCTA
        title="Interested in Quantum Creatures?"
        description="Explore IP licensing, merchandise partnerships, and media opportunities with our team."
        ctaText="Get in Touch"
      />
    </main>
  )
}
