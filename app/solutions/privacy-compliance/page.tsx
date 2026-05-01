'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import ProductInfoGrid from '@/components/sections/product/ProductInfoGrid'
import ProductProcessList from '@/components/sections/product/ProductProcessList'
import ScrollReveal from '@/components/ScrollReveal'

const capabilities = [
  {
    num: '01',
    title: 'ZKP Age Verification',
    desc: 'Proves a user is 18+ without revealing their date of birth, identity document, or any personal data. Mathematically guaranteed privacy.'
  },
  {
    num: '02',
    title: 'No Honeypot Databases',
    desc: 'Personal data is never stored on your servers. Eliminates the risk of data breaches, reducing liability and building user trust.'
  },
  {
    num: '03',
    title: 'GDPR & COPPA Ready',
    desc: 'Built from the ground up to satisfy EU General Data Protection Regulation and US Children\'s Online Privacy Protection Act requirements.'
  },
  {
    num: '04',
    title: 'Digital Services Act Aligned',
    desc: 'Meets the EU Digital Services Act transparency and safety obligations for platforms operating in European markets.'
  },
  {
    num: '05',
    title: 'UK & Australian Online Safety',
    desc: 'Compatible with the UK Online Safety Act and Australian Online Safety Act age assurance and duty of care frameworks.'
  },
  {
    num: '06',
    title: 'E2E Encrypted Data Handling',
    desc: 'All verification data is encrypted end-to-end. Even during the verification process, raw personal data is never exposed to your platform.'
  }
]

const zkpSteps = [
  {
    num: '01',
    title: 'User Provides Proof',
    desc: 'The user submits a cryptographic proof derived from a trusted identity source. No raw documents or personal data are transmitted to your platform.'
  },
  {
    num: '02',
    title: 'ZKP Validates Attribute',
    desc: 'The zero-knowledge proof protocol mathematically verifies the specific attribute (e.g., age >= 18) without decrypting or revealing any underlying data.'
  },
  {
    num: '03',
    title: 'Platform Receives Yes/No',
    desc: 'Your platform receives a simple boolean result — verified or not verified. No personal data is stored, transmitted, or accessible at any point.'
  }
]

const regulatoryLandscape = [
  {
    num: '01',
    title: 'European Union',
    desc: '',
    bullets: [
      'GDPR',
      'Digital Services Act (DSA)',
      'Audio Visual Media Services Directive'
    ]
  },
  {
    num: '02',
    title: 'United Kingdom',
    desc: '',
    bullets: [
      'Online Safety Act',
      'Age Appropriate Design Code',
      'UK GDPR'
    ]
  },
  {
    num: '03',
    title: 'United States',
    desc: '',
    bullets: [
      'COPPA',
      'State-level age verification laws',
      'FTC enforcement actions'
    ]
  },
  {
    num: '04',
    title: 'Australia',
    desc: '',
    bullets: [
      'Online Safety Act',
      'Privacy Act',
      'Age verification mandate'
    ]
  }
]

export default function PrivacyCompliancePage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label="Privacy Infrastructure"
        title="Privacy & Compliance Infrastructure"
        description="Zero-knowledge age verification and privacy-preserving identity. Prove what matters without exposing what doesn't."
        ctaText="Schedule a Briefing"
        ctaHref="/contact"
        secondaryCtaText="View All Solutions"
        secondaryCtaHref="/solutions"
      />

      <ProductFeatureList
        label="Capabilities"
        title="Privacy That Scales"
        description="Enterprise-grade verification infrastructure that satisfies regulators while respecting user privacy."
        features={capabilities}
      />

      <ProductVisuals 
        primary={{ label: '1400 × 600', sublabel: 'Zero-Knowledge Proof Architecture' }}
      />

      <ProductProcessList
        label="Technology"
        title="How Zero-Knowledge Verification Works"
        items={zkpSteps}
        result={{
          label: 'THE RESULT',
          content: 'NO PERSONAL DATA STORED. NO HONEYPOT DATABASES. NO BREACH RISK. JUST A VERIFIED ATTRIBUTE.'
        }}
      />

      <ProductVisuals 
        primary={{ label: '800 × 500', sublabel: 'Compliance Dashboard Interface', aspectRatio: '800/500' }}
        bgClass="bg-background"
      />

      <ProductFeatureList
        label="Compliance"
        title="Regulatory Landscape"
        description="Our infrastructure is designed to address current and emerging privacy and age verification regulations worldwide."
        features={regulatoryLandscape}
      />

      <ProductCTA 
        title="Future-Proof Your Compliance"
        description="Learn how zero-knowledge verification can satisfy regulatory requirements while protecting user privacy."
        ctaText="Schedule a Briefing"
      />
    </main>
  )
}
