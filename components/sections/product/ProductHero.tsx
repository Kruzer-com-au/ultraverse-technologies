'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
  secondaryCtaText = 'Explore Products',
  secondaryCtaHref = '/products',
  companyName = 'Kruzer Ultraverse Pty Ltd',
  hideCtas = false,
  children
}: ProductHeroProps) {
  const router = useRouter()
  return (
    <section className="relative min-h-[35vh] md:min-h-[70vh] flex flex-col justify-end pt-16 md:pt-32 pb-6 md:pb-16 lg:pb-24 px-6 lg:px-12 overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-teal/[0.06] rounded-full blur-[120px] pointer-events-none teal-glow" />

      <div className="relative max-w-[1400px] mx-auto w-full">
        <ScrollReveal>
          <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-4 md:mb-8">{label}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="editorial-heading text-[clamp(1.8rem,6vw,6rem)] text-text-primary mb-4 md:mb-8 max-w-5xl">
            {title}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className={`editorial-body text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed ${hideCtas ? 'mb-16 md:mb-32 lg:mb-40' : 'mb-6 md:mb-10'}`}>
            {description}
          </p>
        </ScrollReveal>

        {!hideCtas && (
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 md:mb-16">
              <Link href={ctaHref} className="btn-teal w-full sm:w-auto justify-center">{ctaText}</Link>
              <button
                onClick={() => {
                  if (secondaryCtaHref.startsWith('#')) {
                    const targetId = secondaryCtaHref.substring(1)
                    const element = document.getElementById(targetId)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  } else if (
                    secondaryCtaHref === '/products' ||
                    secondaryCtaHref === '/solutions' ||
                    secondaryCtaHref === '/industries'
                  ) {
                    // On products/solutions/industries landing pages, scroll to the next section
                    const hero = document.querySelector('section');
                    if (hero) {
                      window.scrollTo({
                        top: hero.offsetHeight,
                        behavior: 'smooth'
                      });
                    }
                  } else {
                    router.push(secondaryCtaHref);
                  }
                }}
                className="btn-outline w-full sm:w-auto justify-center"
              >
                {secondaryCtaText}
              </button>
            </div>
          </ScrollReveal>
        )}

        {children && (
          <div className="mb-8 md:mb-16">
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

