'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import ProductProblemSection from '@/components/sections/product/ProductProblemSection'
import ProductLinkList from '@/components/sections/product/ProductLinkList'
import TechnicalPlaceholder from '@/components/ui/TechnicalPlaceholder'

const threePillars = [
  {
    num: '01',
    title: 'Streaming Infrastructure',
    sublabel: 'ULTRASTREAM',
    desc: 'A privacy-first, real-time streaming platform built for creators and enterprises. End-to-end encryption, zero-knowledge age verification, and sub-100ms latency.',
    linkText: 'Explore',
    linkHref: '/products/ultrastream'
  },
  {
    num: '02',
    title: 'Gaming & Interactive IP',
    sublabel: 'Gaming IP',
    desc: 'A portfolio of original gaming IP including Squad Legacy, Quantum Creatures, Time Odyssey, and Ultraworld. Immersive experiences built on our core technology stack.',
    linkText: 'Explore',
    linkHref: '/products/ultraverse'
  },
  {
    num: '03',
    title: 'Enterprise Technology',
    sublabel: 'Enterprise',
    desc: 'Privacy infrastructure, compliance tooling, and encrypted communications solutions for enterprises and regulated industries. White-label and API-first.',
    linkText: 'Explore',
    linkHref: '/solutions'
  }
]

const learnMore = [
  { num: '01', title: 'Leadership', desc: 'Meet the team building ULTRAVERSE.', href: '/company/leadership' },
  { num: '02', title: 'Careers', desc: 'Join us and help build the future.', href: '/company/careers' },
  { num: '03', title: 'Press & Media', desc: 'News, announcements, and media resources.', href: '/company/press' },
  { num: '04', title: 'Partners', desc: 'Technology and integration partnerships.', href: '/company/partners' }
]

export default function CompanyPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label="Company"
        title="About ULTRAVERSE"
        description="We build technology that puts people first."
      />

      <section className="py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-6">
              <ScrollReveal>
                <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6">Our Mission</p>
                <h2 className="editorial-heading text-[clamp(1.8rem,3.5vw,3.5rem)] text-white">
                  Unite AR and crypto in one ecosystem to deliver highquality gameplay that reconnects friends and families.
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-6">
              <ScrollReveal delay={0.1}>
                <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6">Our Vision</p>
                <h2 className="editorial-heading text-[clamp(1.8rem,3.5vw,3.5rem)] text-white">
                  Technology that brings people closer, turning digital moments into shared memories with global financial impact.
                </h2>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <ProductVisuals 
        primary={{ label: '1400 × 600', sublabel: 'ULTRAVERSE Headquarters' }}
        bgClass="bg-background"
      />

      <ProductFeatureList 
        label="What We Do"
        title="Three Pillars of Innovation"
        description="ULTRAVERSE operates across three interconnected verticals, each reinforcing the others."
        features={threePillars}
      />

      <ProductVisuals 
        grid={[{ label: '800 × 500', sublabel: 'Team Photo', aspectRatio: '800/500' }]}
        bgClass="bg-background"
      />

      <section className="section-dark py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden">
        <div className="teal-orb absolute top-1/4 right-0 w-[600px] h-[600px] opacity-20 teal-glow" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6">Our Approach</p>
                <h2 className="editorial-heading text-[clamp(1.8rem,3.5vw,3.5rem)] text-white">
                  Privacy-First, Regulatory-Forward
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ScrollReveal delay={0.15}>
                <div className="space-y-6 editorial-body text-white/70 text-base lg:text-lg leading-relaxed">
                  <p>ULTRAVERSE is built on the conviction that privacy is not a feature — it is a foundation. Every product we ship, every protocol we adopt, and every partnership we form is evaluated against this principle.</p>
                  <p>We are regulatory-forward, not reactive. Our technology is designed to meet current and emerging compliance requirements across jurisdictions including the UK, EU, US, and Australia. We believe that companies who build compliance into their architecture from day one will lead the next era of digital services.</p>
                  <p>Built on open standards and open protocols, our stack is designed for interoperability and longevity. We are headquartered in Australia with global ambition, assembling a world-class team to deliver on our vision.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <ProductLinkList 
        title="Learn More"
        description="Explore the people, opportunities, and partnerships behind ULTRAVERSE."
        items={learnMore}
      />

      <ProductCTA 
        title="Ready to Build With ULTRAVERSE?"
        description="Talk to our team about how our technology and products can power your next initiative."
        ctaText="Get in Touch"
      />
    </main>
  )
}
