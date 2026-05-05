'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import TechnicalPlaceholder from '@/components/ui/TechnicalPlaceholder'
import { Product } from '@/lib/home-data'

interface ProductsContentProps {
  products: Product[]
}

export default function ProductsContent({ products }: ProductsContentProps) {
  return (
    <div className="flex flex-col">
      {/* Portfolio Section */}
      <section className="py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden bg-background">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <span className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em]">Portfolio</span>
              <h2 className="editorial-display text-[clamp(2rem,5vw,5rem)] text-text-primary mt-4 leading-[0.95]">
                Three products,<br />one architecture
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {products.map((product, idx) => (
              <ScrollReveal key={product.name} delay={idx * 0.1}>
                <Link
                  href={product.href}
                  className="group block border-t border-black/10 py-8 lg:py-10 glitch-border transition-all duration-700"
                >
                  <div className="grid grid-cols-12 gap-4 items-start">
                    <div className="col-span-2 lg:col-span-1">
                      <span className="editorial-uppercase text-accent-teal text-sm font-bold tabular-nums">{product.num}</span>
                    </div>
                    <div className="col-span-10 lg:col-span-3">
                      <h3 className="editorial-heading text-[clamp(1.2rem,2.5vw,2.5rem)] text-text-primary group-hover:text-accent-teal-deep transition-colors duration-700 uppercase">
                        {product.name}
                      </h3>
                    </div>
                    <div className="col-span-12 lg:col-span-5 lg:col-start-5">
                      <p className="editorial-body text-text-secondary text-sm leading-relaxed">
                        {product.desc}
                      </p>
                    </div>
                    <div className="col-span-12 lg:col-span-3 lg:col-start-10 flex flex-wrap gap-2">
                      {product.tags.map(tag => (
                        <span key={tag} className="editorial-uppercase text-[10px] tracking-[0.15em] text-text-muted border border-black/10 px-3 py-1 bg-white/5 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
            <div className="border-t border-black/10" />
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 lg:py-48 px-6 lg:px-12 bg-background ">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <h2 className="editorial-heading text-[clamp(2rem,5vw,5rem)] text-text-primary mt-4 leading-[0.95]">THE ECOSYSTEM</h2>
            <div className="max-w-4xl">
              <p className="editorial-body text-text-secondary text-lg md:text-xl leading-relaxed">
                ULTRAVERSE Technologies operates as a single, interconnected ecosystem.
                ULTRADATA captures real-world behavioural and spatial intelligence from the ground up,
                the data foundation everything else is built on. ULTRAVERSE turns that real-world layer
                into shared digital experiences, through gaming, spatial computing, and interactive entertainment.
                ULTRASTREAM connects the community around it, giving creators, players, and organisations
                the infrastructure to build audiences, stream content, and drive engagement.
                Three products. One architecture. Designed to compound.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Visuals Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <TechnicalPlaceholder 
              label="1400 × 600" 
              sublabel="Product Ecosystem Overview" 
              aspectRatio="1400/600" 
              src="/images/PRODUCTECOSYSTEMOVERVIEW.jpg"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ScrollReveal delay={0.1}>
              <TechnicalPlaceholder 
                label="600 × 400" 
                sublabel="Platform Architecture" 
                aspectRatio="600/400" 
                src="/images/PLATFORMARCHITECTURE.jpg"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <TechnicalPlaceholder 
                label="600 × 400" 
                sublabel="Technology Stack" 
                aspectRatio="600/400" 
                src="/images/TECHNOLOGYSTACK.jpg"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
