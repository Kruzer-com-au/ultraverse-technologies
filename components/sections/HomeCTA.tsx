'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

import { TealOrb } from '@/components/ui/Cards'

export default function HomeCTA() {
  const links = [
    { text: 'License our data', href: '/products/ultradata' },
    { text: 'Partner with us', href: '/company/partners' },
    { text: 'Build on Ultraverse', href: '/developers' }
  ]

  return (
    <section className="py-12 md:py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="section-dark rounded-[32px] p-8 md:p-12 lg:p-20 relative overflow-hidden">
          <TealOrb size="w-[300px] h-[300px]" position="-top-20 -right-20" />
          <TealOrb size="w-[200px] h-[200px]" position="-bottom-10 -left-10" delay="3s" />

          <div className="relative z-10">
            <ScrollReveal>
              <p className="editorial-uppercase text-accent-teal text-[10px] md:text-xs font-bold tracking-[0.25em] mb-12">READY TO GET STARTED?</p>
              <h2 className="editorial-heading text-white mb-20 max-w-5xl leading-[1.1] uppercase">
                Your competitors are already looking at this. Are you?
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 text-left">
              {links.map((link, idx) => (
                <ScrollReveal key={link.text} delay={idx * 0.1}>
                  <Link
                    href={link.href}
                    className="group flex flex-col gap-6 border-l border-white/10 pl-8 py-2 transition-all duration-500 hover:border-accent-teal"
                  >
                    <span className="text-white text-xl lg:text-2xl font-medium tracking-tight group-hover:text-accent-teal transition-colors">
                      {link.text} <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
                    </span>
                    <p className="text-white/80 text-sm max-w-xs group-hover:opacity-100 transition-opacity duration-700 leading-relaxed">
                      Join the leaders in the augmented economy.
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
