'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import ScrollReveal from '@/components/ScrollReveal'
import { pressData } from '@/data/company/press'

export default function PressPage() {
  const { hero, announcements, resources, contact, cta } = pressData

  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label={hero.label}
        title={hero.title}
        description={hero.description}
      />

      <ProductFeatureList
        label={announcements.label}
        title={announcements.title}
        description={announcements.description}
        features={announcements.items}
      />

      <ProductVisuals 
        primary={{ label: '1400 × 600', sublabel: 'Press Event' }}
        bgClass="bg-background"
      />

      <section className="section-dark py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden">
        <div className="teal-orb absolute top-1/4 right-0 w-[600px] h-[600px] opacity-20 teal-glow" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6">{resources.label}</p>
                <h2 className="editorial-heading text-[clamp(1.8rem,3.5vw,3.5rem)] text-white">{resources.title}</h2>
                <p className="editorial-body text-white/60 text-sm mt-4">{resources.description}</p>
              </ScrollReveal>
            </div>
            
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-0">
                {resources.items.map((item, idx) => (
                  <ScrollReveal key={item.title} delay={idx * 0.08}>
                    <div className="border-t border-white/10 py-6 lg:py-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium text-base">{item.title}</p>
                          <p className="text-white/40 text-sm mt-1">{item.formats}</p>
                        </div>
                        <span className="editorial-uppercase text-accent-teal text-[10px] tracking-[0.15em]">Coming Soon</span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
                <div className="border-t border-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductVisuals 
        primary={{ label: '800 × 500', sublabel: 'Product Screenshot', aspectRatio: '800/500' }}
        bgClass="bg-background"
      />

      <section className="py-32 lg:py-48 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6">{contact.label}</p>
                <h2 className="editorial-heading text-[clamp(1.8rem,3.5vw,3.5rem)] text-text-primary">{contact.title}</h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <ScrollReveal delay={0.15}>
                <p className="editorial-body text-text-secondary text-sm mb-4">{contact.description}</p>
                <a href={`mailto:${contact.email}`} className="editorial-heading text-[clamp(1.2rem,2vw,1.8rem)] text-text-primary hover:text-accent-teal transition-colors duration-700">
                  {contact.email}
                </a>
                <p className="text-text-secondary text-sm mt-6">{contact.sla}</p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <ProductCTA 
        title={cta.title}
        description={cta.description}
        ctaText={cta.ctaText}
        ctaHref={`mailto:${contact.email}`}
      />
    </main>
  )
}
