'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import TechnicalPlaceholder from '@/components/ui/TechnicalPlaceholder'

interface VisualItem {
  label: string
  sublabel: string
  aspectRatio?: string
}

interface ProductVisualsProps {
  primary?: VisualItem
  grid?: VisualItem[]
  bgClass?: string
}

export default function ProductVisuals({
  primary,
  grid,
  bgClass = 'bg-[#ebeae4]'
}: ProductVisualsProps) {
  return (
    <section className={`py-16 lg:py-24 px-6 lg:px-12 ${bgClass}`}>
      <div className="max-w-[1400px] mx-auto">
        {primary && (
          <ScrollReveal>
            <TechnicalPlaceholder 
              label={primary.label} 
              sublabel={primary.sublabel} 
              aspectRatio={primary.aspectRatio || '1400/600'} 
            />
          </ScrollReveal>
        )}
        
        {grid && grid.length > 0 && (
          <div className={`grid grid-cols-1 md:grid-cols-${Math.min(grid.length, 2)} gap-8 ${primary ? 'mt-12' : ''}`}>
            {grid.map((item, idx) => (
              <ScrollReveal key={item.sublabel} delay={idx * 0.1}>
                <TechnicalPlaceholder 
                  label={item.label} 
                  sublabel={item.sublabel} 
                  aspectRatio={item.aspectRatio || '600/400'} 
                />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
