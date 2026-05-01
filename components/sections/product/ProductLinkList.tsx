'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

interface LinkItem {
  num: string
  title: string
  desc: string
  href: string
}

interface ProductLinkListProps {
  label?: string
  title?: string
  description?: string
  items: LinkItem[]
}

export default function ProductLinkList({
  label,
  title,
  description,
  items
}: ProductLinkListProps) {
  return (
    <section className="py-32 lg:py-48 px-6 lg:px-12 bg-background border-t border-black/5">
      <div className="max-w-[1400px] mx-auto">
        {(label || title || description) && (
          <div className="max-w-4xl mb-20">
            {label && (
              <ScrollReveal>
                <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6">{label}</p>
              </ScrollReveal>
            )}
            {title && (
              <ScrollReveal delay={0.1}>
                <h2 className="editorial-heading text-[clamp(2rem,5vw,5rem)] text-text-primary mb-6 uppercase">
                  {title}
                </h2>
              </ScrollReveal>
            )}
            {description && (
              <ScrollReveal delay={0.2}>
                <p className="editorial-body text-text-secondary text-sm md:text-base max-w-2xl">
                  {description}
                </p>
              </ScrollReveal>
            )}
          </div>
        )}

        <div className="space-y-0">
          {items.map((item, idx) => (
            <ScrollReveal key={item.num} delay={idx * 0.08}>
              <Link href={item.href} className="group block">
                <div className="border-t border-black/10 py-8 lg:py-10 transition-all duration-700 hover:bg-black/[0.02] px-2 -mx-2">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-2 lg:col-span-1">
                      <span className="editorial-uppercase text-accent-teal text-sm font-bold tabular-nums">{item.num}</span>
                    </div>
                    <div className="col-span-7 lg:col-span-4">
                      <h3 className="editorial-heading text-[clamp(1.2rem,2.5vw,2rem)] text-text-primary group-hover:text-accent-teal transition-colors duration-700 uppercase">
                        {item.title}
                      </h3>
                    </div>
                    <div className="col-span-12 lg:col-span-5 lg:col-start-6">
                      <p className="text-text-secondary text-sm">
                        {item.desc}
                      </p>
                    </div>
                    <div className="col-span-3 lg:col-span-1 lg:col-start-12 flex justify-end">
                      <span className="text-text-primary text-lg transition-transform duration-700 group-hover:translate-x-2" aria-hidden="true">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
          <div className="border-t border-black/10"></div>
        </div>
      </div>
    </section>
  )
}
