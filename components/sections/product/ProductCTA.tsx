'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

interface ProductCTAProps {
  title: string
  description: string
  ctaText?: string
  ctaHref?: string
}

export default function ProductCTA({
  title,
  description,
  ctaText = 'Get in Touch',
  ctaHref = '/contact'
}: ProductCTAProps) {
  return (
    <section className="py-24 lg:py-48 px-6 lg:px-12 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="section-dark rounded-[32px] p-8 md:p-12 lg:p-20 text-center relative overflow-hidden">
          {/* Decorative Orbs */}
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-accent-teal/20 blur-[80px] rounded-full teal-glow" />
          <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] bg-accent-teal/10 blur-[60px] rounded-full teal-glow" />
          
          <div className="relative z-10">
            <ScrollReveal>
              <h2 className="glitch-text editorial-heading text-[clamp(1.8rem,4vw,4rem)] text-white mb-6 uppercase" data-text={title}>
                {title}
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className="text-white/50 text-base mb-10 max-w-xl mx-auto">
                {description}
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <Link href={ctaHref} className="btn-teal">
                {ctaText}
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
