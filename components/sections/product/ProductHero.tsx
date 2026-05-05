'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

interface ProductHeroProps {
  label: string
  title: string
  description: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  companyName?: string
  hideCtas?: boolean
  children?: React.ReactNode
}

export default function ProductHero({
  label,
  title,
  description,
  ctaText = 'Request a Demo',
  ctaHref = '/contact',
  secondaryCtaText = 'View All Products',
  secondaryCtaHref = '/products',
  companyName = 'Kruzer Ultraverse Pty Ltd',
  hideCtas = false,
  children
}: ProductHeroProps) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col justify-end pt-32 pb-12 md:pb-16 lg:pb-24 px-6 lg:px-12 overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-teal/[0.06] rounded-full blur-[120px] pointer-events-none teal-glow" />
      
      <div className="relative max-w-[1400px] mx-auto w-full">
        <ScrollReveal>
          <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-8">{label}</p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="editorial-heading text-[clamp(2.2rem,6vw,6rem)] text-text-primary mb-8 max-w-5xl">
            {title}
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="editorial-body text-text-secondary text-base md:text-lg max-w-2xl mb-10">
            {description}
          </p>
        </ScrollReveal>

        {!hideCtas && (
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-4 mb-16">
              <Link href={ctaHref} className="btn-teal">{ctaText}</Link>
              <Link href={secondaryCtaHref} className="btn-outline">{secondaryCtaText}</Link>
            </div>
          </ScrollReveal>
        )}

        {children && (
          <div className="mb-16">
            {children}
          </div>
        )}
        
        <ScrollReveal delay={0.4}>
          <div className="pt-6">
            <span className="editorial-uppercase text-text-muted text-xs font-medium tracking-widest">{companyName}</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

