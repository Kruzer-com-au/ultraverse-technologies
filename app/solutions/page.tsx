'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import SolutionListing from '@/components/sections/solution/SolutionListing'

const allSolutions = [
  {
    title: 'White-Label Streaming',
    category: 'Entertainment',
    description: 'Custom-branded streaming platforms for organizations. Your brand, your audience, your data — powered by enterprise-grade infrastructure.',
    href: '/solutions/white-label-streaming'
  },
  {
    title: 'Privacy & Compliance',
    category: 'Infrastructure',
    description: 'Zero-knowledge age verification and privacy-preserving identity. Prove what matters without exposing what doesn\'t.',
    href: '/solutions/privacy-compliance'
  },
  {
    title: 'Creator Economy',
    category: 'Web3 & Payments',
    description: 'Instant payments, engagement tools, and community governance for creator platforms. The infrastructure layer that powers the next generation of creator businesses.',
    href: '/solutions/creator-economy'
  },
  {
    title: 'City Data & Digital Twins',
    category: 'Smart Cities',
    description: 'Real-time city data and spatial intelligence for digital twin models. Building the data foundation for the smart cities of the future.',
    href: '/solutions/city-data'
  },
  {
    title: 'Secure Communications',
    category: 'Cybersecurity',
    description: 'End-to-end encrypted messaging and collaboration tools for enterprise and government organizations.',
    href: '/solutions/secure-communications'
  },
  {
    title: 'Community SDK',
    category: 'Software Development',
    description: 'Plug-and-play social and gamification tools to build deeply engaged communities within your own platform.',
    href: '/solutions/community-sdk'
  }
]

export default function SolutionsPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label="Ecosystem"
        title="Enterprise Solutions"
        description="Tailored technical ecosystems designed to solve specific industry challenges with the Ultraverse stack. High-fidelity infrastructure for the next era of digital experiences."
        hideCtas={true}
      />

      <SolutionListing solutions={allSolutions} />
    </main>
  )
}
