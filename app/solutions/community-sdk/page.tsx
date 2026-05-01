'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import ProductProcessList from '@/components/sections/product/ProductProcessList'
import { communitySDKData } from '@/data/solutions/community-sdk'

export default function CommunitySDKPage() {
  const { hero, capabilities, integration, useCases, cta } = communitySDKData

  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label={hero.label}
        title={hero.title}
        description={hero.description}
        ctaText={hero.cta.text}
        ctaHref={hero.cta.href}
        secondaryCtaText={hero.secondaryCta.text}
        secondaryCtaHref={hero.secondaryCta.href}
      />

      <ProductFeatureList
        label={capabilities.label}
        title={capabilities.title}
        description={capabilities.description}
        features={capabilities.items}
      />

      <ProductVisuals 
        primary={{ label: '1400 × 600', sublabel: 'Community SDK Integration Preview' }}
      />

      <ProductProcessList
        label={integration.label}
        title={integration.title}
        items={integration.items}
      />

      <ProductVisuals 
        primary={{ label: '800 × 500', sublabel: 'Gamification & Engagement Dashboard', aspectRatio: '800/500' }}
        bgClass="bg-background"
      />

      <ProductFeatureList
        label={useCases.label}
        title={useCases.title}
        description={useCases.description}
        features={useCases.items}
      />

      <ProductCTA 
        title={cta.title}
        description={cta.description}
        ctaText={cta.ctaText}
      />
    </main>
  )
}
