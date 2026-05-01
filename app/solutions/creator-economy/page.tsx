'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import ProductInfoGrid from '@/components/sections/product/ProductInfoGrid'
import { creatorEconomyData } from '@/data/solutions/creator-economy'

export default function CreatorEconomyPage() {
  const { hero, capabilities, performance, audience, cta } = creatorEconomyData

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
        primary={{ label: '1400 × 600', sublabel: 'Creator Dashboard UI' }}
      />

      <ProductInfoGrid
        label={performance.label}
        title={performance.title}
        items={performance.items}
        columns={4}
        theme="dark"
      />

      <ProductFeatureList
        label={audience.label}
        title={audience.title}
        description={audience.description}
        features={audience.items}
      />

      <ProductVisuals 
        primary={{ label: '800 × 500', sublabel: 'Instant Payment Flow', aspectRatio: '800/500' }}
        bgClass="bg-background"
      />

      <ProductCTA 
        title={cta.title}
        description={cta.description}
        ctaText={cta.ctaText}
      />
    </main>
  )
}
