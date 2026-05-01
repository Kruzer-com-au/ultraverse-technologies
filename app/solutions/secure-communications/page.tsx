'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import ProductInfoGrid from '@/components/sections/product/ProductInfoGrid'
import { secureCommData } from '@/data/solutions/secure-comm'

export default function SecureCommunicationsPage() {
  const { hero, capabilities, architecture, industries, cta } = secureCommData

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
        primary={{ label: '1400 × 600', sublabel: 'End-to-End Encryption Flow' }}
      />

      <ProductInfoGrid
        label={architecture.label}
        title={architecture.title}
        items={architecture.items}
        columns={2}
        theme="dark"
        showDividers={true}
      />

      <ProductVisuals 
        primary={{ label: '800 × 500', sublabel: 'Secure Messaging Interface', aspectRatio: '800/500' }}
        bgClass="bg-background"
      />

      <ProductFeatureList
        label={industries.label}
        title={industries.title}
        description={industries.description}
        features={industries.items}
      />

      <ProductCTA 
        title={cta.title}
        description={cta.description}
        ctaText={cta.ctaText}
      />
    </main>
  )
}
