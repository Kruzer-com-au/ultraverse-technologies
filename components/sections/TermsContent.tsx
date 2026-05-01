'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'

interface TermsBlockProps {
  title: string
  content: string | string[]
}

const TermsBlock = ({ title, content }: TermsBlockProps) => (
  <ScrollReveal>
    <div className="py-12 border-t border-black/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <h3 className="editorial-uppercase text-text-primary text-xs font-bold tracking-[0.2em]">{title}</h3>
        </div>
        <div className="lg:col-span-8">
          <div className="space-y-6">
            {Array.isArray(content) ? (
              content.map((p, i) => (
                <p key={i} className="text-text-secondary text-sm leading-relaxed">
                  {p}
                </p>
              ))
            ) : (
              <p className="text-text-secondary text-sm leading-relaxed">
                {content}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  </ScrollReveal>
)

export default function TermsContent({ sections }: { sections: TermsBlockProps[] }) {
  return (
    <section className="py-32 lg:py-48 px-6 lg:px-12 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="border-b border-black/10 mb-8" />
        {sections.map((section, idx) => (
          <TermsBlock key={idx} {...section} />
        ))}
      </div>
    </section>
  )
}
