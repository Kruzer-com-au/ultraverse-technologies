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
    <section className="py-12 md:py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="border-b border-black/10">
          {industries.map((industry, idx) => (
            <ScrollReveal key={industry.title} delay={idx * 0.05}>
              <Link 
                href={industry.href}
                className="group flex flex-col md:flex-row md:items-end justify-between border-t border-black/10 py-12 lg:py-16 hover:bg-black/[0.02] transition-all duration-500"
              >
                <div className="relative z-10">
                  <span className="editorial-uppercase text-accent-teal text-[10px] md:text-xs font-bold tracking-[0.25em] mb-4 block">
                    {industry.category}
                  </span>
                  <h2 className="editorial-heading text-[clamp(2rem,6vw,5.5rem)] text-white leading-[0.95] uppercase transition-transform duration-500 group-hover:translate-x-4">
                    {industry.title}
                  </h2>
                </div>

                <div className="mt-8 md:mt-0 flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-500">
                  <span className="w-12 lg:w-16 h-[2px] bg-black/10 transition-colors duration-500 group-hover:bg-accent-teal hidden md:block" />
                  <span className="text-2xl lg:text-4xl font-light text-black/20 group-hover:text-accent-teal transition-colors duration-500">
                    →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
