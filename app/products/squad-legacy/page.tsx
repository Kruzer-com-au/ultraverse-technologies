'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'

const capabilities = [
  {
    num: '01',
    title: 'Augmented Reality Gameplay',
    desc: 'Immersive AR combat layered onto real-world environments, bringing digital battles into physical spaces with precision tracking.'
  },
  {
    num: '02',
    title: 'Real-World Map Integration',
    desc: 'Persistent game world mapped to real geography. Control territory, establish outposts, and compete for strategic locations in your city.'
  },
  {
    num: '03',
    title: 'Squad Formation & Strategy',
    desc: 'Build squads, assign roles, coordinate tactics, and execute strategies in real-time team-based combat scenarios.'
  },
  {
    num: '04',
    title: 'Cross-Platform Play',
    desc: 'Seamless gameplay across mobile devices and AR hardware, ensuring squads can compete regardless of their preferred platform.'
  },
  {
    num: '05',
    title: 'Community-Driven Events',
    desc: 'Seasonal competitions, community challenges, and live events that bring players together in shared physical and digital spaces.'
  }
]

const enterpriseApps = [
  {
    num: '01',
    title: 'IP Licensing',
    desc: "License Squad Legacy's game IP, mechanics, and technology for use in branded entertainment, marketing, or co-branded products."
  },
  {
    num: '02',
    title: 'Co-Development Partnerships',
    desc: "Partner with ULTRAVERSE to co-develop custom game experiences built on Squad Legacy's proven AR combat framework."
  },
  {
    num: '03',
    title: 'Branded In-Game Experiences',
    desc: 'Integrate your brand into the Squad Legacy world through sponsored events, branded equipment, and in-game activations.'
  },
  {
    num: '04',
    title: 'Location-Based Activations',
    desc: 'Drive foot traffic and engagement at physical locations through geo-fenced AR events and territory-based competitions.'
  }
]

export default function SquadLegacyPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero
        label="Squad Legacy"
        title="Where Gaming Meets the Real World"
        description="AR-integrated squad-based combat with territory control. Build your squad, claim your territory, and compete in a persistent world that blends digital gameplay with real-world geography."
        secondaryCtaText="Explore Products"
        secondaryCtaHref="/products"
      />

      <ProductVisuals
        primary={{
          label: '1400 × 600',
          sublabel: 'AR Gameplay Screenshot'
        }}
      />

      <ProductFeatureList
        label="Capabilities"
        title="Key Capabilities"
        description="Squad Legacy combines augmented reality, real-world mapping, and team-based strategy into a persistent combat experience."
        features={capabilities}
      />

      <ProductFeatureList
        label="Enterprise"
        title="Enterprise Applications"
        description="Squad Legacy's IP and technology platform offer multiple avenues for enterprise partnerships, brand integration, and co-development."
        features={enterpriseApps}
        theme="dark"
      />

      <ProductVisuals
        grid={[
          {
            label: '600 × 400',
            sublabel: 'Territory Map View',
            aspectRatio: '600/400'
          },
          {
            label: '600 × 400',
            sublabel: 'Squad Combat UI',
            aspectRatio: '600/400'
          }
        ]}
      />

      <ProductCTA
        title="Interested in Squad Legacy?"
        description="Explore IP licensing, co-development partnerships, and branded activation opportunities."
        ctaText="Get in Touch"
      />
    </main>
  )
}
