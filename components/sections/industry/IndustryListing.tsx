'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { ArrowRight } from '@/components/ui/Cards'

export interface Industry {
  title: string
  category: string
  description: string
  href: string
}

interface IndustryListingProps {
  industries: Industry[]
}

export default function IndustryListing({ industries }: IndustryListingProps) {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#d4d4d4]">
      <div className="max-w-[1400px] mx-auto">
        <div className="space-y-0">
          {industries.map((industry, idx) => (
            <ScrollReveal key={industry.title} delay={idx * 0.05}>
              <Link 
                href={industry.href}
                className="group flex flex-col md:flex-row md:items-center justify-between border-t border-black/10 py-10 lg:py-14 transition-all duration-700"
              >
                <div className="flex-1 pr-8">
                  <span className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-4 block">
                    {industry.category}
                  </span>
                  <h2 className="editorial-heading text-[clamp(1.8rem,4vw,4rem)] text-white group-hover:text-accent-teal transition-colors duration-700 uppercase leading-none mb-4">
                    {industry.title}
                  </h2>
                  <p className="editorial-body text-black/50 text-sm md:text-base max-w-2xl leading-relaxed">
                    {industry.description}
                  </p>
                </div>
                <div className="mt-8 md:mt-0 flex shrink-0">
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
