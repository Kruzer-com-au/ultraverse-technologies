'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'

const capabilities = [
  {
    num: '01',
    title: 'Spatial Computing',
    desc: 'Advanced spatial awareness and environmental mapping that enables precise digital content placement in physical environments.'
  },
  {
    num: '02',
    title: 'Location-Based Experiences',
    desc: 'Geo-fenced digital experiences tied to specific physical locations, enabling contextual content delivery at scale.'
  },
  {
    num: '03',
    title: 'Physical-Digital Bridging',
    desc: 'Seamless integration between physical objects and digital content layers, creating hybrid experiences that feel native to both worlds.'
  },
  {
    num: '04',
    title: 'Multi-User Shared Spaces',
    desc: 'Collaborative spatial environments where multiple users interact with the same digital content layer simultaneously.'
  },
  {
    num: '05',
    title: 'Enterprise AR Tools',
    desc: 'Production-ready augmented reality tools for enterprise applications including training, maintenance, retail, and event management.'
  }
]

const enterpriseApps = [
  {
    num: '01',
    title: 'Enterprise AR Solutions',
    desc: 'Deploy spatial computing tools for workforce training, facility management, and operational efficiency across your organization.'
  },
  {
    num: '02',
    title: 'Spatial Computing Partnerships',
    desc: "Co-develop spatial computing applications tailored to your industry, leveraging Ultraworld's platform and expertise."
  },
  {
    num: '03',
    title: 'Retail Experiences',
    desc: 'Transform retail environments with interactive AR product displays, wayfinding, and personalized shopping experiences.'
  },
  {
    num: '04',
    title: 'Venue Activations',
    desc: 'Create immersive spatial experiences for concerts, conferences, exhibitions, and entertainment venues at any scale.'
  }
]

export default function UltraworldPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero
        label="Ultraworld"
        title="Spatial Experiences. Real-World Integration."
        description="A spatial computing platform that bridges the digital and physical. Ultraworld enables enterprises and creators to layer interactive experiences onto real-world environments, connecting people through shared spatial content."
      />

      <ProductVisuals
        primary={{
          label: '1400 × 600',
          sublabel: 'Spatial Computing Interface'
        }}
      />

      <ProductFeatureList
        label="Capabilities"
        title="Key Capabilities"
        description="Ultraworld provides the spatial computing foundation for building experiences that exist at the intersection of physical and digital environments."
        features={capabilities}
      />

      <ProductFeatureList
        label="Enterprise"
        title="Enterprise Applications"
        description="Ultraworld's spatial computing platform is built for enterprise deployments across retail, events, training, and beyond."
        features={enterpriseApps}
        theme="dark"
      />

      <ProductVisuals
        grid={[
          {
            label: '600 × 400',
            sublabel: 'Multi-User Shared Space',
            aspectRatio: '600/400'
          },
          {
            label: '600 × 400',
            sublabel: 'Enterprise AR Tools',
            aspectRatio: '600/400'
          }
        ]}
      />

      <ProductCTA
        title="Interested in Ultraworld?"
        description="Explore enterprise AR solutions, spatial computing partnerships, and venue activation opportunities."
        ctaText="Get in Touch"
      />
    </main>
  )
}
