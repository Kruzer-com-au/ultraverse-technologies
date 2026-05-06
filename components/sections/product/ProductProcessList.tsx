'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'

interface ProcessItem {
  num: string
  title: string
  sublabel?: string
  desc: string
}

interface ProductProcessListProps {
  label: string
  title: string
  items: ProcessItem[]
  result?: {
    label: string
    content: string
  }
}

export default function ProductProcessList({
  label,
  title,
  items,
  result
}: ProductProcessListProps) {
  return (
    <section className="section-dark py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden">
      <div className="teal-orb absolute -top-40 -right-40 w-[600px] h-[600px] opacity-20 teal-glow" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6">{label}</p>
          <h2 className="editorial-heading text-[clamp(2.5rem,6vw,5rem)] text-white mb-20 max-w-4xl">
            {title}
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {items.map((item, idx) => (
            <ScrollReveal key={item.num} delay={idx * 0.1}>
              <div className="border-t border-white/10 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <span className="editorial-uppercase text-accent-teal text-base font-bold tabular-nums">
                      {item.num}
                    </span>
                  </div>

                  <div className="lg:col-span-5">
                    <h3 className="editorial-heading text-xl lg:text-2xl text-white tracking-normal">
                      {item.title}
                    </h3>
                    {item.sublabel && (
                      <p className="editorial-uppercase text-accent-teal text-[10px] tracking-[0.15em] mt-2">
                        {item.sublabel}
                      </p>
                    )}
                  </div>

                  <div className="lg:col-span-6">
                    <p className="text-white/70 text-sm md:text-base leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
          {/* <div className="border-t border-white/10" /> */}
        </div>

        {result && (
          <ScrollReveal delay={0.4}>
            <div className="mt-20 border border-white/10 p-10 lg:p-16 rounded-sm">
              <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6">
                {result.label}
              </p>
              <p className="editorial-heading text-lg lg:text-xl text-white tracking-tight leading-snug">
                {result.content}
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
