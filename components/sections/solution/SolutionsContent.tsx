'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import TechnicalPlaceholder from '@/components/ui/TechnicalPlaceholder'

export interface SolutionItem {
  title: string
  category: string
  href: string
}

export interface WhyItem {
  num: string
  title: string
  desc: string
}

interface SolutionsContentProps {
  solutions: SolutionItem[]
  whyItems: WhyItem[]
}

export default function SolutionsContent({ solutions, whyItems }: SolutionsContentProps) {
  return (
    <div className="flex flex-col">
      {/* What We Solve Section */}
      <section className="py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl mb-20">
            <ScrollReveal>
              <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6">What We Solve</p>
              <h2 className="editorial-heading text-[clamp(1.5rem,5vw,5rem)] text-text-primary mb-6">Technology Built for Scale</h2>
              <p className="editorial-body text-text-secondary text-sm md:text-base max-w-2xl">
                Each solution is designed to operate independently or as part of a unified platform,
                giving enterprises the flexibility to adopt what they need.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-0">
            {solutions.map((solution, idx) => (
              <ScrollReveal key={solution.title} delay={idx * 0.06}>
                <Link
                  href={solution.href}
                  className="group flex items-center justify-between border-t border-black/10 py-6 lg:py-8 glitch-border transition-all duration-700"
                >
                  <div>
                    <span className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.15em] block mb-2">
                      {solution.category}
                    </span>
                    <h3 className="editorial-heading text-[clamp(1.2rem,3vw,3rem)] text-text-primary group-hover:text-accent-teal-deep transition-colors duration-700 leading-tight">
                      {solution.title}
                    </h3>
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

      {/* Solutions Visuals */}
      <section className="px-6 lg:px-12 py-16 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <TechnicalPlaceholder
              label="1400 × 600"
              sublabel="Enterprise Solutions Overview"
              aspectRatio="1400/600"
              src="/images/ENTERPRISESOLUTIONSOVERVIEW.jpg"
            />
          </ScrollReveal>


        </div>
      </section>

      {/* Why ULTRAVERSE Section */}
      <section className="section-dark py-32 lg:py-48 px-6 lg:px-12">
        <div className="teal-orb w-[500px] h-[500px] -top-40 -right-40 teal-glow" />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <ScrollReveal>
            <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6">Why ULTRAVERSE</p>
            <h2 className="editorial-heading text-[clamp(1.5rem,5vw,5rem)] text-white mb-20">Engineered for Enterprise</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {whyItems.map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 0.1}>
                <div className="bg-dark-bg p-10 lg:p-14 group glitch-hover h-full">
                  <span className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-4 block">
                    {item.num}
                  </span>
                  <h3 className="editorial-heading text-xl lg:text-2xl text-white mb-4 group-hover:text-accent-teal transition-colors duration-700">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* Solutions Visuals */}
      <section className="px-6 lg:px-12 pt-16 bg-background">
        <div className="mt-12 max-w-[1400px] mx-auto">
          <ScrollReveal>
            <TechnicalPlaceholder
              label="1400 × 600"
              sublabel="Platform Architecture Diagram"
              aspectRatio="1400/600"
              src="/images/PLATFORMARCHITECTUREDIAGRAM.jpg"
            />
          </ScrollReveal>
        </div>

      </section>
    </div>
  )
}
