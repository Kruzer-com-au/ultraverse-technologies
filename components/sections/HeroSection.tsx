'use client'

import React from 'react'
import HeroWrapper from '@/components/HeroWrapper'
import HeroVideo from '@/components/ui/HeroVideo'
import type { HeroFeature } from '@/lib/home-data'

interface HeroSectionProps {
  tagline: string
  lines: string[]
  accentLine?: string
  description?: string
  features: HeroFeature[]
  company?: string
  year?: string
}

export default function HeroSection({
  tagline,
  lines,
  accentLine,
  description,
  features,
  company = 'Kruzer Ultraverse Pty Ltd',
  year = '2026',
}: HeroSectionProps) {
  const sectionRef = React.useRef<HTMLElement>(null)

  const handleScroll = () => {
    if (sectionRef.current) {
      const height = sectionRef.current.offsetHeight
      window.scrollTo({ top: height, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    }
  }

  return (
    <section ref={sectionRef} className="relative min-h-[60svh] md:min-h-[100svh] flex flex-col pt-16 md:pt-28 overflow-hidden">
      {/* Ambient teal glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none teal-glow"
        style={{ background: 'rgba(86,191,163,0.06)', filter: 'blur(120px)' }}
      />

      <HeroWrapper>
        {/* Headlines — pinned to bottom */}
        <div className="relative max-w-[1400px] mx-auto w-full flex-1 flex items-end pb-6 md:pb-10 lg:pb-14 px-6 lg:px-12">
          <div className="w-full">
            {/* Eyebrow */}
            <p className="hero-animate-label editorial-uppercase text-[var(--accent-teal)] text-[10px] md:text-xs font-bold tracking-[0.25em] mb-4 md:mb-6 lg:mb-8">
              {tagline}
            </p>

            {/* Main Headlines - Single H1, no spans, natural wrapping */}
            <h1 className="hero-animate-h1-1 editorial-display text-[clamp(1.8rem,7vw,8rem)] text-white leading-[0.95] mb-6 md:mb-12 lg:mb-20 uppercase">
              {lines.join(' ')} {accentLine ? accentLine : ''}
            </h1>

            {/* Description - ordinary p tag */}
            {description && (
              <p className="hero-animate-body editorial-body text-[var(--text-secondary)] text-lg md:text-xl lg:text-2xl max-w-4xl mb-6 md:mb-12 lg:mb-16 leading-relaxed">
                {description}
              </p>
            )}

            {/* Feature callouts */}
            <div className="hero-animate-body max-w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-8 lg:gap-y-0">
                {features.map(({ num, text }) => (
                  <div key={num} className="flex flex-col items-start gap-4 border-l border-black/10 pl-6">
                    <span className="editorial-uppercase text-[var(--accent-teal)] text-[10px] md:text-xs font-bold tracking-[0.2em] tabular-nums">
                      {num}
                    </span>
                    <span className="text-[var(--text-primary)] text-sm md:text-base lg:text-[15px] font-medium tracking-[0.01em] leading-relaxed max-w-[300px]">
                      {text}<span className="text-[var(--accent-teal)] font-black text-[1.2em] ml-[0.05em]">.</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video strip — HeroVideo handles guaranteed autoplay */}
        <div className="hero-animate-video relative w-full mt-auto mb-6">
          <HeroVideo />
        </div>

        {/* Bottom info bar */}
        <div className="hero-animate-bar relative max-w-[1400px] mx-auto w-full pt-6 pb-4">
          <div className="border-t-2 border-black/15 pt-6">
            <div className="flex items-center justify-between">
              <span className="editorial-uppercase text-[var(--text-secondary)] text-xs font-semibold tracking-[0.15em]">{company}</span>
              <button
                onClick={handleScroll}
                className="editorial-uppercase text-[var(--text-secondary)] text-xs font-semibold tracking-[0.15em] hidden md:block hover:text-[var(--accent-teal)] transition-colors cursor-pointer"
              >
                Scroll to explore
              </button>
              <span className="editorial-uppercase text-[var(--text-secondary)] text-xs font-semibold tracking-[0.15em]">{year}</span>
            </div>
          </div>
        </div>
      </HeroWrapper>
    </section>
  )
}
