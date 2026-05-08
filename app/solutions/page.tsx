'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import SolutionsContent from '@/components/sections/solution/SolutionsContent'
import ProductCTA from '@/components/sections/product/ProductCTA'

const allSolutions = [
  {
    title: 'White-Label Streaming Infrastructure',
    category: 'Streaming',
    href: '/solutions/white-label-streaming'
  },
  {
    title: 'Privacy & Compliance Infrastructure',
    category: 'Privacy',
    href: '/solutions/privacy-compliance'
  },
  {
    title: 'Creator Economy Platform',
    category: 'Creators',
    href: '/solutions/creator-economy'
  },
  {
    title: 'Enterprise Secure Communications',
    category: 'Security',
    href: '/solutions/secure-communications'
  },
  {
    title: 'Community & Engagement SDK',
    category: 'Community',
    href: '/solutions/community-sdk'
  },
  {
    title: 'City Data & Digital Twin Feeds',
    category: 'Data',
    href: '/solutions/city-data'
  }
]

const whyUltraverse = [
  {
    num: '01',
    title: 'Privacy by Default',
    desc: 'Zero-knowledge architecture means no honeypot databases, no unnecessary data collection, and full regulatory readiness across jurisdictions.'
  },
  {
    num: '02',
    title: 'API-First Design',
    desc: 'Every solution exposes clean, well-documented APIs that integrate seamlessly with your existing technology stack and workflows.'
  },
  {
    num: '03',
    title: 'Global Infrastructure',
    desc: 'Built on distributed infrastructure engineered for low-latency delivery, high availability, and compliance across regions.'
  },
  {
    num: '04',
    title: 'Modular Adoption',
    desc: 'Each solution operates independently or as part of a unified platform, giving enterprises the flexibility to adopt what they need.'
  }
]

export default function SolutionsPage() {
  return (
    <main className="flex-1">
      <ProductHero
        label="Solutions"
        title="Enterprise Solutions"
        description="Purpose-built technology solving critical challenges across streaming, privacy, communications, and community."
        ctaText="Contact Sales"
        ctaHref="/contact"
        secondaryCtaText="Explore Solutions"
        secondaryCtaHref="/solutions"
      />

      <SolutionsContent 
        solutions={allSolutions}
        whyItems={whyUltraverse}
      />

      <ProductCTA 
        title="Find the Right Solution"
        description="Our team will help you identify the right combination of solutions for your specific requirements."
        ctaText="Talk to an Expert"
        ctaHref="/contact"
      />
    </main>
  )
}
