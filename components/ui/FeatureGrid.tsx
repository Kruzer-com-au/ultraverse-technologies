'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'

interface FeatureGridProps {
  title: string
  items: { title: string; desc: string }[]
  isDark?: boolean
}

export default function FeatureGrid({ title, items, isDark }: FeatureGridProps) {
  return (
    <div className="mt-16 lg:mt-24">
      <ScrollReveal>
        <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6 lg:mb-8">{title}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item) => (
            <div key={item.title}>
              <h4 className={`editorial-heading text-lg mb-3 ${isDark ? 'text-white' : 'text-text-primary'}`}>{item.title}</h4>
              <p className={`text-sm ${isDark ? 'text-white/60' : 'text-text-secondary'} leading-relaxed`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  )
}
