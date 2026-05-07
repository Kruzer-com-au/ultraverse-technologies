'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { ArrowRight } from '@/components/ui/Cards'
import type { Industry } from '@/lib/home-data'

interface IndustriesSectionProps {
  industries: Industry[]
}

export default function IndustriesSection({ industries }: IndustriesSectionProps) {
  return (
    <section className="py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-12 lg:mb-16">
          <ScrollReveal>
            <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-4">Verticals</p>
            <h2 className="editorial-heading text-[clamp(1.8rem,7vw,7rem)] text-white mb-6 uppercase tracking-tight leading-[0.9] max-w-5xl">
              Solutions Across Industries
            </h2>
          </ScrollReveal>
        </div>

        <div className="space-y-0">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.title} delay={i * 0.05}>
              <Link
                href={ind.href}
                className="group flex flex-row items-center justify-between border-t border-black/10 py-6 lg:py-8 transition-all duration-700"
              >
                <div className="flex-1 pr-4">
                  <h3 className="editorial-heading text-[clamp(1.1rem,4vw,4rem)] text-white group-hover:text-accent-teal transition-colors duration-700 uppercase leading-[1.1]">
                    {ind.title}
                  </h3>
                </div>
                <div className="flex shrink-0">
                  <ArrowRight />
                </div>
              </Link>
            </ScrollReveal>
          ))}
          <div className="border-t border-black/10" />
        </div>
      </div>
    </section>
  )
}
