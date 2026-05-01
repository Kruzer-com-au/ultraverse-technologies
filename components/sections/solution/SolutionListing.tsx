'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export interface Solution {
  title: string
  category: string
  description: string
  href: string
}

interface SolutionListingProps {
  solutions: Solution[]
}

export default function SolutionListing({ solutions }: SolutionListingProps) {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16 lg:gap-y-24">
          {solutions.map((solution, idx) => (
            <ScrollReveal key={solution.title} delay={idx * 0.05}>
              <Link 
                href={solution.href}
                className="group block border-t border-black/10 pt-10 hover:border-accent-teal transition-colors duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-3 block">
                      {solution.category}
                    </span>
                    <h2 className="editorial-heading text-2xl lg:text-3xl text-text-primary group-hover:text-accent-teal-deep transition-colors duration-500">
                      {solution.title}
                    </h2>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500 transform group-hover:rotate-45">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
                <p className="editorial-body text-text-secondary text-base lg:text-lg leading-relaxed max-w-xl">
                  {solution.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-accent-teal text-xs font-bold tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  View Solution <span>→</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
