'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import ProductInfoGrid from '@/components/sections/product/ProductInfoGrid'
import ScrollReveal from '@/components/ScrollReveal'
import { cityData } from '@/data/solutions/city-data'

export default function CityDataPage() {
  const { hero, opportunity, useCases, integration, cta } = cityData

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

      <section className="py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-8">
              <ScrollReveal>
                <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-8">{opportunity.label}</p>
                <h2 className="editorial-heading text-[clamp(1.8rem,4vw,4rem)] text-text-primary leading-[1.1]">
                  {opportunity.title}
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <ScrollReveal delay={0.2}>
                <div className="space-y-8">
                  {opportunity.stats.map((stat, idx) => (
                    <div key={idx} className="border-l-2 border-accent-teal pl-8">
                      <p className="text-text-primary text-3xl font-bold mb-1">{stat.value}</p>
                      <p className="text-text-secondary text-sm leading-relaxed">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <ProductVisuals
        primary={{ 
          label: '', 
          sublabel: 'Digital Twin City Dashboard', 
          src: '/images/solutions/DIGITAL_TWIN_CITY_DASHBOARD.jpg' 
        }}
      />

      <ProductFeatureList
        label={useCases.label}
        title={useCases.title}
        description={useCases.description}
        features={useCases.items}
        theme="dark"
      />

      <ProductVisuals
        primary={{ 
          label: '', 
          sublabel: 'Sensor Network Data Flow', 
          aspectRatio: '800/500',
          src: '/images/solutions/SENSOR_NETWORK_DATA_FLOW.jpg' 
        }}
        bgClass="bg-background"
      />

      <ProductInfoGrid
        label={integration.label}
        title={integration.title}
        items={integration.items}
        columns={4}
      // theme="light-gray"
      />

      <ProductCTA
        title={cta.title}
        description={cta.description}
        ctaText={cta.ctaText}
      />
    </main>
  )
}
