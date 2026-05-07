'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import TechnicalPlaceholder from '@/components/ui/TechnicalPlaceholder'

export interface IndustryItem {
  title: string
  href: string
  desc: string
}

interface IndustriesContentProps {
  industries: IndustryItem[]
}

export default function IndustriesContent({ industries }: IndustriesContentProps) {
  return (
    <div className="flex flex-col">
      {/* Verticals Section */}
      <section className="py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden bg-background">
        <div className="absolute top-10 right-10 w-[300px] h-[300px] pointer-events-none geo-shape-deco">
          {/* Decorative canvas or shape would go here */}
        </div>

        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl mb-20">
            <ScrollReveal>
              <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6">Verticals</p>
              <h2 className="editorial-heading text-[clamp(1.5rem,5vw,5rem)] text-text-primary mb-6">Technology That Adapts to Your Industry</h2>
            </ScrollReveal>
          </div>

          <div className="space-y-0">
            {industries.map((industry, idx) => (
              <ScrollReveal key={industry.title} delay={idx * 0.06}>
                <Link
                  href={industry.href}
                  className="group flex items-center justify-between border-t border-black/10 py-6 lg:py-8 glitch-border transition-all duration-700"
                >
                  <div className="flex-1">
                    <h3 className="editorial-heading text-[clamp(1.2rem,3.5vw,3.5rem)] text-text-primary group-hover:text-accent-teal-deep transition-colors duration-700 leading-tight">
                      {industry.title}
                    </h3>
                    <p className="text-text-secondary text-sm mt-2 max-w-xl">
                      {industry.desc}
                    </p>
                  </div>
                  <svg
                    className="w-6 h-6 lg:w-8 lg:h-8 text-text-muted group-hover:text-accent-teal transition-all duration-700 group-hover:translate-x-2 shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </ScrollReveal>
            ))}
            <div className="border-t border-black/10" />
          </div>
        </div>
      </section>

      {/* Visuals Overview Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <TechnicalPlaceholder
              label="1400 × 600"
              sublabel="Industry Solutions Overview"
              aspectRatio="1400/600"
              src="/images/ENTERPRISETECHNOLOGY.jpg"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ScrollReveal delay={0.15}>
              <TechnicalPlaceholder
                label="800 × 500"
                sublabel="Enterprise Technology"
                aspectRatio="800/500"
                src="/images/ENTERPRISETECHNOLOGY2.jpg"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <TechnicalPlaceholder
                label="800 × 500"
                sublabel="Smart City Data"
                aspectRatio="800/500"
                src="/images/ENTERPRISETECHNOLOGY3.jpg"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
