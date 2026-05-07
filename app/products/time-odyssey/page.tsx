'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'

const capabilities = [
  {
    num: '01',
    title: 'Location-Based Historical Exploration',
    desc: 'Experience history at its actual sites. Explore ancient civilizations, landmark events, and cultural heritage through interactive, location-aware storytelling.'
  },
  {
    num: '02',
    title: 'Time-Period Immersion',
    desc: 'Step into fully realized historical periods with authentic environmental detail, cultural context, and narrative depth.'
  },
  {
    num: '03',
    title: 'Cultural Narrative Storytelling',
    desc: 'Rich, research-backed narratives that bring history to life through character-driven stories tied to real destinations.'
  },
  {
    num: '04',
    title: 'Offline & At-Sea Capability',
    desc: 'Full functionality in disconnected environments, enabling cruise ships, remote destinations, and areas without reliable connectivity.'
  },
  {
    num: '05',
    title: 'White-Label Deployment',
    desc: 'Customizable platform deployment for tourism boards, cruise operators, and hospitality brands seeking branded historical experiences.'
  },
  {
    num: '06',
    title: 'Multi-Language Support',
    desc: 'Localized content delivery in multiple languages, enabling global deployment across diverse tourism markets.'
  }
]

const enterpriseApps = [
  {
    num: '01',
    title: 'Tourism Board Partnerships',
    desc: 'Collaborate with national and regional tourism authorities to create immersive destination experiences that drive visitor engagement.'
  },
  {
    num: '02',
    title: 'Cruise Line Entertainment',
    desc: 'Pre-built and custom entertainment packages for cruise operators, with offline capability and port-of-call integration.'
  },
  {
    num: '03',
    title: 'Destination Marketing',
    desc: 'Interactive destination marketing tools that transform traditional tourism promotion into immersive historical experiences.'
  },
  {
    num: '04',
    title: 'Cultural Heritage Collaborations',
    desc: 'Partner with museums, heritage sites, and cultural institutions to digitize and gamify historical preservation efforts.'
  },
  {
    num: '05',
    title: 'Hospitality Integration',
    desc: 'In-room and on-property entertainment experiences for hotels, resorts, and hospitality venues seeking differentiated guest experiences.'
  },
  {
    num: '06',
    title: 'Custom Regional Experiences',
    desc: 'Bespoke, branded Time Odyssey deployments tailored to specific regions, histories, and cultural narratives.'
  }
]

export default function TimeOdysseyPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero
        label="Time Odyssey"
        title="Travel Through Time. Explore the World."
        description="Tourism-focused experiences that blend real-world locations with historical narratives. Time Odyssey transforms how travelers engage with destinations through immersive, interactive storytelling tied to the places they visit."
      />

      <ProductVisuals
        primary={{
          label: '1400 × 600',
          sublabel: 'Historical Exploration Experience'
        }}
      />

      <ProductFeatureList
        label="Capabilities"
        title="Key Capabilities"
        description="Time Odyssey combines location awareness, historical research, and interactive narrative to deliver tourism experiences unlike anything else on the market."
        features={capabilities}
      />

      <ProductFeatureList
        label="Enterprise"
        title="Enterprise Applications"
        description="Time Odyssey's platform is purpose-built for tourism, hospitality, and cultural heritage partnerships at every scale."
        features={enterpriseApps}
        theme="dark"
      />

      <ProductVisuals
        grid={[
          {
            label: '600 × 400',
            sublabel: 'Time Period Immersion',
            aspectRatio: '600/400'
          },
          {
            label: '600 × 400',
            sublabel: 'Destination Map Interface',
            aspectRatio: '600/400'
          }
        ]}
      />

      <ProductCTA
        title="Interested in Time Odyssey?"
        description="Explore tourism partnerships, cruise line packages, and custom regional deployments with our team."
        ctaText="Get in Touch"
      />
    </main>
  )
}
