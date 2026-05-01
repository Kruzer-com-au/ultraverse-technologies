'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'

const capabilities = [
  {
    num: '01',
    title: 'White-Label Deployment',
    desc: 'Launch a fully branded streaming platform under your own identity, with complete control over the user experience and monetization.'
  },
  {
    num: '02',
    title: 'Creator-First Revenue Model',
    desc: 'Revenue structures designed to put creators first, with transparent splits and direct audience monetization tools.'
  },
  {
    num: '03',
    title: 'Instant Payments',
    desc: 'Real-time payment processing that ensures creators and partners are compensated without delays or intermediaries.'
  },
  {
    num: '04',
    title: 'Real-Time Engagement Tools',
    desc: 'Interactive features including live polls, reactions, chat overlays, and audience participation mechanics built into the platform.'
  },
  {
    num: '05',
    title: 'Privacy-First Architecture',
    desc: 'Zero-knowledge verification and end-to-end encryption protect user data while maintaining full platform functionality.'
  },
  {
    num: '06',
    title: 'SDK & API Access',
    desc: 'Comprehensive developer tools for integrating ULTRASTREAM capabilities into existing platforms, apps, and workflows.'
  }
]

const enterpriseApps = [
  {
    num: '01',
    title: 'SDK Licensing',
    desc: "License ULTRASTREAM's core streaming technology for integration into your own products and services."
  },
  {
    num: '02',
    title: 'White-Label Platform',
    desc: 'Deploy a fully branded streaming platform for your organization, complete with custom UI, monetization, and analytics.'
  },
  {
    num: '03',
    title: 'API Integrations',
    desc: 'Connect ULTRASTREAM capabilities to your existing technology stack through well-documented, enterprise-grade APIs.'
  },
  {
    num: '04',
    title: 'Custom-Branded Solutions',
    desc: 'Bespoke streaming solutions tailored to your brand, audience, and operational requirements.'
  }
]

export default function UltraStreamPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label="ULTRASTREAM"
        title="The Streaming Platform Built for Creators and Enterprises"
        description="Privacy-first streaming infrastructure that gives creators and organizations full control over their content, audience, and revenue. From white-label deployments to SDK integrations, ULTRASTREAM powers the next generation of live and on-demand streaming."
      />

      <ProductFeatureList
        label="Capabilities"
        title="Key Capabilities"
        description="ULTRASTREAM provides the full stack of streaming technology, from infrastructure to engagement, all underpinned by privacy-first design."
        features={capabilities}
      />

      <ProductVisuals 
        primary={{ label: '1400 × 600', sublabel: 'Streaming Platform UI' }}
      />

      <ProductFeatureList
        label="Enterprise"
        title="Enterprise Applications"
        description="ULTRASTREAM's technology is built for organizations that need reliable, scalable, and customizable streaming infrastructure."
        features={enterpriseApps}
        theme="dark"
      />

      <ProductVisuals 
        grid={[
          { label: '600 × 400', sublabel: 'Creator Dashboard' },
          { label: '600 × 400', sublabel: 'Analytics Overview' }
        ]}
      />

      <ProductCTA 
        title="Interested in ULTRASTREAM?"
        description="Talk to our team about licensing, white-label deployment, or custom integrations."
      />
    </main>
  )
}
