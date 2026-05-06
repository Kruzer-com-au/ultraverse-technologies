'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'

interface EditorialQuoteProps {
  text: string
  label: string
  sublabel?: string
  isDark?: boolean
}

export default function EditorialQuote({ text, label, sublabel, isDark }: EditorialQuoteProps) {
  return (
    <div className="mt-24">
      <ScrollReveal>
        <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-8">{label}</p>
        <p className={`editorial-heading text-[clamp(1.2rem,2.5vw,2.5rem)] leading-relaxed max-w-3xl ${isDark ? 'text-white' : 'text-text-primary'}`}>
          &ldquo;{text}&rdquo;
        </p>
        <p className={`text-sm mt-6 ${isDark ? 'opacity-50 text-white' : 'text-text-muted'}`}>
          {sublabel || 'ULTRAVERSE approach to technology'}
        </p>
      </ScrollReveal>
    </div>
  )
}
