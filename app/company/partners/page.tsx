'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import ScrollReveal from '@/components/ScrollReveal'
import { partnersData } from '@/data/company/partners'

export default function PartnersPage() {
  const { hero, foundation, integration, join, cta } = partnersData

  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label={hero.label}
        title={hero.title}
        description={hero.description}
        hideCtas
      />

      <ProductFeatureList
        label={foundation.label}
        title={foundation.title}
        description={foundation.description}
        features={foundation.items}
      />

      <ProductVisuals 
        primary={{ label: '1400 × 600', sublabel: 'Partner Ecosystem' }}
        bgClass="bg-background"
      />

      <section className="section-dark py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden">
        <div className="teal-orb absolute top-1/4 right-0 w-[600px] h-[600px] opacity-20 teal-glow" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6">{integration.label}</p>
                <h2 className="editorial-heading text-[clamp(1.8rem,3.5vw,3.5rem)] text-white">
                  {integration.title}
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <ScrollReveal delay={0.15}>
                <h3 className="editorial-heading text-xl lg:text-2xl text-white mb-4">{integration.subtitle}</h3>
                <p className="editorial-body text-white/70 text-base leading-relaxed">
                  {integration.description}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <ProductVisuals 
        primary={{ label: '800 × 500', sublabel: 'Integration Demo', aspectRatio: '800/500' }}
        bgClass="bg-background"
      />

      <ProductFeatureList
        label={join.label}
        title={join.title}
        description={join.description}
        features={join.items}
      />

      <ProductCTA 
        title={cta.title}
        description={cta.description}
        ctaText={cta.ctaText}
      />
    </main>
  )
}
