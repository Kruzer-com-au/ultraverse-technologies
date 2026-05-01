'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { products } from '@/lib/home-data'

export default function ProductsPage() {
  return (
    <main className="flex-1 bg-background">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] flex flex-col justify-end pt-32 pb-12 md:pb-16 lg:pb-24 px-6 lg:px-12 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-teal/[0.06] rounded-full blur-[120px] pointer-events-none teal-glow" />
        
        <div className="relative max-w-[1400px] mx-auto w-full">
          <ScrollReveal>
            <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-8">Products</p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h1 className="editorial-heading text-[clamp(2.2rem,6vw,6rem)] text-text-primary mb-8">
              Our Products
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="editorial-body text-text-secondary text-base md:text-lg max-w-2xl mb-10">
              Three product lines powering city-scale data, entertainment, gaming, and enterprise. 
              Each built on ULTRAVERSE's data-first, privacy-first architecture and designed for scale.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="border-t border-black/10 mt-16 pt-6">
              <span className="editorial-uppercase text-text-muted text-xs">Kruzer Ultraverse Pty Ltd</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Portfolio Section ── */}
      <section className="py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden border-t border-black/5">
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

      {/* ── Ecosystem Narrative Section ── */}
      <section className="py-32 lg:py-48 px-6 lg:px-12 bg-background border-t border-black/5">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-12">THE ECOSYSTEM</p>
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

      {/* ── Placeholder Ecosystem Section ── */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-[#ebeae4]">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="bg-[#1a1a1a] border-2 border-black rounded-md flex flex-col items-center justify-center gap-3 w-full aspect-[1400/600] min-h-[180px]">
               <div className="text-white/90 text-lg md:text-xl font-mono tracking-wider uppercase font-bold">1400 × 600</div>
               <div className="text-white/50 text-xs md:text-sm font-mono tracking-widest uppercase">Product Ecosystem Overview</div>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ScrollReveal delay={0.1}>
              <div className="bg-[#1a1a1a] border-2 border-black rounded-md flex flex-col items-center justify-center gap-3 w-full aspect-[600/400] min-h-[180px]">
                 <div className="text-white/90 text-lg md:text-xl font-mono tracking-wider uppercase font-bold">600 × 400</div>
                 <div className="text-white/50 text-xs md:text-sm font-mono tracking-widest uppercase">Platform Architecture</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-[#1a1a1a] border-2 border-black rounded-md flex flex-col items-center justify-center gap-3 w-full aspect-[600/400] min-h-[180px]">
                 <div className="text-white/90 text-lg md:text-xl font-mono tracking-wider uppercase font-bold">600 × 400</div>
                 <div className="text-white/50 text-xs md:text-sm font-mono tracking-widest uppercase">Technology Stack</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-32 lg:py-48 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="section-dark rounded-[32px] p-8 md:p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-accent-teal/20 blur-[80px] rounded-full teal-glow" />
            <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] bg-accent-teal/10 blur-[60px] rounded-full teal-glow" />
            
            <div className="relative z-10">
              <ScrollReveal>
                <h2 className="glitch-text editorial-heading text-[clamp(1.8rem,4vw,4rem)] text-white mb-6" data-text="Ready to Build With ULTRAVERSE?">
                  Ready to Build With ULTRAVERSE?
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <p className="text-white/50 text-base mb-10 max-w-xl mx-auto">
                  Talk to our team about how our technology and products can power your next initiative.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <Link href="/contact" className="btn-teal">
                  Get in Touch
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
