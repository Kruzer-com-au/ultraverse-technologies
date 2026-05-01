'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import ScrollReveal from '@/components/ScrollReveal'
import { careersData } from '@/data/company/careers'

export default function CareersPage() {
  const { hero, valueProps, positions, cta } = careersData

  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label={hero.label}
        title={hero.title}
        description={hero.description}
      />

      <ProductFeatureList
        label={valueProps.label}
        title={valueProps.title}
        description={valueProps.description}
        features={valueProps.items}
      />

      <ProductVisuals 
        primary={{ label: '1400 × 600', sublabel: 'Office Culture' }}
        bgClass="bg-background"
      />

      <section className="section-dark py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden">
        <div className="teal-orb absolute top-1/4 right-0 w-[600px] h-[600px] opacity-20 teal-glow" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6">{positions.label}</p>
                <h2 className="editorial-heading text-[clamp(1.8rem,3.5vw,3.5rem)] text-white mb-6">
                  {positions.title}
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <ScrollReveal delay={0.15}>
                <p className="editorial-body text-white/70 text-base lg:text-lg leading-relaxed mb-8">
                  {positions.description}
                </p>
                <a href={positions.cta.href} className="inline-flex items-center gap-2 text-white text-sm font-medium editorial-uppercase tracking-[0.15em] transition-all duration-700 hover:gap-3">
                  {positions.cta.text} <span aria-hidden="true">→</span>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <ProductVisuals 
        primary={{ label: '800 × 500', sublabel: 'Team Collaboration', aspectRatio: '800/500' }}
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
