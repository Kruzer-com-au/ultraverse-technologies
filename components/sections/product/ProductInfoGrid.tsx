'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'

interface InfoItem {
  num: string
  title: string
  desc: string
  bullets?: string[]
}

interface ProductInfoGridProps {
  label: string
  title: string
  items: InfoItem[]
  columns?: number
  className?: string
  theme?: 'light' | 'dark' | 'light-gray'
  showDividers?: boolean
  children?: React.ReactNode
}

export default function ProductInfoGrid({
  label,
  title,
  items,
  columns = 2,
  className = '',
  theme = 'light',
  showDividers = false,
  children
}: ProductInfoGridProps) {
  const isDark = theme === 'dark'
  const isLightGray = theme === 'light-gray'
  const gridCols = columns === 4 ? 'md:grid-cols-2 lg:grid-cols-2' : columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
  
  const bgClass = isDark ? 'section-dark' : isLightGray ? 'bg-[#d9d9d9]' : 'bg-background'
  const titleColor = isDark || isLightGray ? 'text-white' : 'text-text-primary'
  
  return (
    <section className={`py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden ${bgClass} ${className}`}>
      {isDark && <div className="teal-orb absolute top-1/4 right-0 w-[600px] h-[600px] opacity-20 teal-glow" />}
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className={children ? 'mb-24' : 'mb-32'}>
          <ScrollReveal>
            <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6">{label}</p>
            <h2 className={`editorial-heading text-[clamp(2.5rem,7vw,7rem)] ${titleColor} mb-6 uppercase tracking-tight leading-[0.95]`}>
              {title}
            </h2>
          </ScrollReveal>
        </div>

        {children && (
          <div className="mb-16">
            {children}
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridCols} gap-x-20 gap-y-16 lg:gap-y-24`}>
          {items.map((item, idx) => (
            <ScrollReveal key={item.num} delay={idx * 0.1}>
              <div className="h-full">
                <span className="editorial-uppercase text-accent-teal text-xs font-bold mb-4 block tabular-nums">{item.num}</span>
                <h3 className={`editorial-heading text-xl lg:text-2xl ${titleColor} mb-6 uppercase`}>
                  {item.title}
                </h3>
                <p className={`${isDark || isLightGray ? 'text-black/60' : 'text-text-secondary'} text-sm md:text-base leading-relaxed`}>
                  {item.desc}
                </p>

                {item.bullets && (
                  <ul className="space-y-4 mt-8">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-4 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-1.5 shrink-0" />
                        <span className={isDark ? 'text-white/40' : 'text-text-muted'}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
