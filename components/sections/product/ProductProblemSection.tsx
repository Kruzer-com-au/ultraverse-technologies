'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'

interface ProductProblemSectionProps {
  label: string
  title: string
  col1Text: string
  col2Text: string
}

export default function ProductProblemSection({
  label,
  title,
  col1Text,
  col2Text
}: ProductProblemSectionProps) {
  return (
    <section className="py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-8">{label}</p>
              <h2 className="editorial-heading text-[clamp(1.8rem,4vw,4rem)] text-white mb-12 leading-tight">
                {title}
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-4 flex flex-col">
            <ScrollReveal delay={0.1}>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {col1Text}
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                {col2Text}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
