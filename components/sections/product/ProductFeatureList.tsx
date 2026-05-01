'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export interface Feature {
  num: string
  title: string
  desc: string
  tags?: string[]
  sublabel?: string
  bullets?: string[]
  linkText?: string
  linkHref?: string
}

interface ProductFeatureListProps {
  label: string
  title: string
  description: string
  features: Feature[]
  theme?: 'light' | 'dark'
  children?: React.ReactNode // For optional placeholders like the large UI image
}

export default function ProductFeatureList({
  label,
  title,
  description,
  features,
  theme = 'light',
  children
}: ProductFeatureListProps) {
  const isDark = theme === 'dark'
  
  return (
    <section className={`py-24 lg:py-48 px-6 lg:px-12 relative overflow-hidden ${isDark ? 'section-dark' : 'bg-background'}`}>
      {isDark && <div className="teal-orb absolute top-1/4 right-0 w-[600px] h-[600px] opacity-20 teal-glow" />}
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="max-w-4xl mb-20">
          <ScrollReveal>
            <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6">{label}</p>
            <h2 className={`editorial-heading text-[clamp(2rem,5vw,5rem)] ${isDark ? 'text-white' : 'text-text-primary'} mb-6 uppercase`}>
              {title}
            </h2>
            <p className={`${isDark ? 'text-white/60' : 'editorial-body text-text-secondary'} text-sm md:text-base max-w-2xl leading-relaxed`}>
              {description}
            </p>
          </ScrollReveal>
        </div>

        {children && (
          <div className="mb-20">
            {children}
          </div>
        )}

        <div className="space-y-0">
          {features.map((item, idx) => (
            <ScrollReveal key={item.num} delay={idx * 0.05}>
              <div className={`border-t ${isDark ? 'border-white/10' : 'border-black/10'} py-8 lg:py-10`}>
                <div className="grid grid-cols-12 gap-4 lg:gap-8 items-start">
                  <div className="col-span-2 lg:col-span-1">
                    <span className="editorial-uppercase text-accent-teal text-sm font-bold tabular-nums">{item.num}</span>
                  </div>
                  
                  <div className="col-span-10 lg:col-span-4">
                    {item.sublabel && (
                      <p className="editorial-uppercase text-accent-teal text-[10px] tracking-[0.15em] mb-2">{item.sublabel}</p>
                    )}
                    <h3 className={`editorial-heading text-xl lg:text-2xl ${isDark ? 'text-white' : 'text-text-primary'} uppercase`}>
                      {item.title}
                    </h3>
                  </div>

                  <div className={`col-span-12 ${item.tags ? 'lg:col-span-4 lg:col-start-5' : 'lg:col-span-6 lg:col-start-7'}`}>
                    <p className={`${isDark ? 'text-white/60' : 'text-text-secondary'} text-sm leading-relaxed ${item.bullets ? 'mb-6' : ''}`}>
                      {item.desc}
                    </p>
                    
                    {item.bullets && (
                      <ul className="space-y-3">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className={`flex items-start gap-3 text-sm ${isDark ? 'text-white/60' : 'text-text-secondary'}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-1.5 shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {item.tags && (
                    <div className="col-span-12 lg:col-span-3 lg:col-start-10 flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className={`editorial-uppercase text-[10px] tracking-[0.12em] border border-black/10 px-3 py-1 ${isDark ? 'text-accent-teal/70 border-white/10' : 'text-text-muted'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.linkText && item.linkHref && (
                    <div className="col-span-12 lg:col-span-1 lg:col-start-12 flex lg:justify-end mt-4 lg:mt-0">
                      <a 
                        href={item.linkHref} 
                        className={`text-sm font-medium inline-flex items-center gap-1 transition-all duration-700 hover:gap-2 ${isDark ? 'text-white hover:text-accent-teal' : 'text-text-primary hover:text-accent-teal'}`}
                      >
                        {item.linkText} <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className={`border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}></div>
        </div>
      </div>
    </section>
  )
}
