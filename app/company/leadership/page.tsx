'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import ProductProcessList from '@/components/sections/product/ProductProcessList'

const leadershipTeam = [
  {
    num: '01',
    title: 'To Be Announced',
    sublabel: 'Chief Executive Officer',
    desc: 'Strategic leadership and overall company direction. Responsible for setting the vision and driving execution across all ULTRAVERSE verticals.'
  },
  {
    num: '02',
    title: 'To Be Announced',
    sublabel: 'Chief Technology Officer',
    desc: 'Technical architecture and engineering leadership. Oversees the development of ULTRAVERSE\'s core technology stack including privacy infrastructure and streaming engine.'
  },
  {
    num: '03',
    title: 'To Be Announced',
    sublabel: 'Chief Operating Officer',
    desc: 'Operational excellence and organizational scaling. Manages day-to-day operations, partnerships, and cross-functional coordination.'
  },
  {
    num: '04',
    title: 'To Be Announced',
    sublabel: 'Chief Financial Officer',
    desc: 'Financial strategy, fundraising, and corporate governance. Responsible for capital allocation, investor relations, and financial planning.'
  },
  {
    num: '05',
    title: 'To Be Announced',
    sublabel: 'Chief Marketing Officer',
    desc: 'Brand strategy, market positioning, and growth. Leads go-to-market efforts across consumer and enterprise product lines.'
  },
  {
    num: '06',
    title: 'To Be Announced',
    sublabel: 'VP Engineering',
    desc: 'Engineering team leadership and delivery. Manages development processes, technical hiring, and engineering culture across distributed teams.'
  }
]

export default function LeadershipPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label="Leadership"
        title="Leadership"
        description="The team building the future of digital entertainment."
      />

      <ProductProcessList
        label="Leadership"
        title="The Team"
        items={leadershipTeam}
      />

      <section className="px-6 lg:px-12 pb-32 lg:pb-48">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-text-secondary text-sm mb-16 italic opacity-60">
            Leadership profiles are being finalized. Full bios and professional headshots coming soon.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProductVisuals
              primary={{ label: '600 × 400', sublabel: 'Leadership Team', aspectRatio: '600/400' }}
              bgClass="bg-background"
            />
            <ProductVisuals
              primary={{ label: '600 × 400', sublabel: 'Board Room', aspectRatio: '600/400' }}
              bgClass="bg-background"
            />
          </div>
        </div>
      </section>

      <ProductCTA 
        title="Interested in Joining the Team?"
        description="We're assembling world-class talent across engineering, product, and operations."
        ctaText="View Open Positions"
        ctaHref="/company/careers"
      />
    </main>
  )
}
