'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'

interface IndustryProblemProps {
  label: string
  title: string
  description: string
  theme?: 'light' | 'dark'
}

export default function IndustryProblem({
  label,
  title,
  description,
  theme = 'light'
}: IndustryProblemProps) {
  const isDark = theme === 'dark'
  
  return (
    <section className={`py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden ${isDark ? 'section-dark' : 'bg-background'}`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-8">{label}</p>
              <h2 className={`editorial-heading text-[clamp(1.8rem,4vw,4rem)] ${isDark ? 'text-white' : 'text-text-primary'} mb-12 leading-tight uppercase`}>
                {title}
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-4 flex flex-col">
            <ScrollReveal delay={0.2}>
              <p className={`${isDark ? 'text-white/60' : 'text-text-secondary'} text-sm leading-relaxed`}>
                {description}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
