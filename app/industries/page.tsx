import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import IndustriesContent from '@/components/sections/industry/IndustriesContent'
import ProductCTA from '@/components/sections/product/ProductCTA'

const industriesData = [
  {
    title: 'Smart Cities & Digital Twins',
    href: '/industries/smart-cities',
    desc: 'Real-time sensor data infrastructure for digital twin city platforms. Active ground-truth sensors delivering lean packet data feeds for urban modelling at scale.'
  },
  {
    title: 'Gaming & Esports',
    href: '/industries/gaming',
    desc: 'Streaming infrastructure, tournament tools, and creator community platforms built for competitive gaming at scale.'
  },
  {
    title: 'Entertainment & Music',
    href: '/industries/entertainment',
    desc: 'Live event streaming, token-gated experiences, and artist-direct payment infrastructure for the next era of entertainment.'
  },
  {
    title: 'Tourism & Hospitality',
    href: '/industries/tourism',
    desc: 'White-label interactive experiences for cruise lines, resorts, destination groups, and cultural heritage organizations.'
  },
  {
    title: 'Enterprise & Government',
    href: '/industries/enterprise',
    desc: 'Secure, compliance-ready communications infrastructure with data sovereignty and end-to-end encryption.'
  },
  {
    title: 'Healthcare',
    href: '/industries/healthcare',
    desc: 'HIPAA-compliant video infrastructure for telehealth, medical education, and secure patient communications.'
  },
  {
    title: 'Government',
    href: '/industries/government',
    desc: 'Secure digital infrastructure for public sector services, internal operations, and citizen-facing platforms.'
  },
  {
    title: 'CPG & Retail',
    href: '/industries/retail',
    desc: 'Connected commerce experiences for consumer brands, retail activation, and audience engagement at scale.'
  },
  {
    title: 'Education',
    href: '/industries/education',
    desc: 'FERPA-compliant platforms for virtual classrooms, interactive learning, and student credentialing at scale.'
  },
  {
    title: 'Financial Services',
    href: '/industries/financial',
    desc: 'SOC 2 certified communications with regulatory compliance, audit trails, and client confidentiality built in.'
  }
]

export default function IndustriesPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label="Industries"
        title="Industries We Serve"
        description="Purpose-built solutions for organizations that demand privacy, performance, and scale."
        ctaText="Contact Sales"
        ctaHref="/contact"
        secondaryCtaText="View Solutions"
        secondaryCtaHref="/solutions"
      />

      <IndustriesContent industries={industriesData} />

      <ProductCTA 
        title="Not Sure Where to Start?"
        description="Our team will help you identify the right products and solutions for your industry and use case."
        ctaText="Talk to an Expert"
      />
    </main>
  )
}
