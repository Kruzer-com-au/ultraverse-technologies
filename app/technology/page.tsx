'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import ProductInfoGrid from '@/components/sections/product/ProductInfoGrid'
import TechnicalPlaceholder from '@/components/ui/TechnicalPlaceholder'

const coreInfrastructure = [
  {
    num: '01',
    sublabel: 'Data Infrastructure',
    title: 'Real-Time Sensor Networks',
    desc: 'Active ground-truth sensor networks deployed across launch cities, producing ultra-lean packet sets engineered specifically for digital twin city model ingestion. capture what is happening on the ground right now — from pedestrian flow to environmental conditions — and package it into standardized feeds.',
    bullets: [
      'Active sensor deployments across launch cities with real-time telemetry',
      'Ultra-lean packet architecture — compressed for city-scale model ingestion',
      'Plug & play integration with major digital twin platforms and urban modelling tools',
      'Eight core data types: pedestrian flow, environmental, infrastructure, etc.',
      'Privacy-preserving by design — aggregated and anonymized at the sensor level',
      'Sub-second data freshness for time-critical urban planning'
    ]
  },
  {
    num: '02',
    sublabel: 'Privacy Infrastructure',
    title: 'Zero-Knowledge Age Verification',
    desc: 'Privacy-preserving identity verification that proves user attributes without revealing personal data. No honeypot databases. No stored credentials. Regulatory-ready compliance built from the ground up.',
    bullets: [
      'Proves attributes (e.g., age 18+) without revealing any personal information',
      'No centralized personal data storage — eliminates breach risk entirely',
      'Regulatory-ready: UK Online Safety Act, EU Digital Services Act, COPPA, GDPR',
      'Cryptographic verification with zero server-side data retention'
    ]
  },
  {
    num: '03',
    sublabel: 'Communications Layer',
    title: 'End-to-End Encryption',
    desc: 'Built on the Matrix Protocol, all messages and streams are encrypted client-to-client. No server-side access to content at any point in the pipeline. Federation-capable architecture enables interoperability while maintaining security.',
    bullets: [
      'Matrix Protocol foundation for decentralized, encrypted communications',
      'Client-to-client encryption — servers never have access to plaintext content',
      'Federation-capable architecture for cross-platform interoperability',
      'On-premise deployment option for enterprise and government clients'
    ]
  },
  {
    num: '04',
    sublabel: 'Network Architecture',
    title: 'Decentralized Infrastructure',
    desc: 'Leveraging NEAR Protocol for identity management and transaction processing, ULTRAVERSE operates on a distributed architecture that eliminates single points of failure.',
    bullets: [
      'NEAR Protocol blockchain layer for identity and transaction processing',
      'Peer-to-peer content delivery reducing infrastructure costs significantly',
      'No single point of failure — geographic redundancy built into every layer',
      'Resilient architecture designed for global-scale availability'
    ]
  },
  {
    num: '05',
    sublabel: 'Media Delivery',
    title: 'Real-Time Streaming Engine',
    desc: 'A WebRTC-based streaming engine purpose-built for ultra-low-latency interactive experiences. From live streams to multiplayer gaming, the engine delivers consistent performance.',
    bullets: [
      'WebRTC-based architecture for native real-time capability',
      'Sub-100ms latency target for interactive streaming experiences',
      'Spatial audio capabilities for immersive content',
      'Adaptive bitrate streaming for optimal quality across network conditions',
      'Multi-platform delivery: web, mobile, and smart TV'
    ]
  },
  {
    num: '06',
    sublabel: 'Identity Layer',
    title: 'Wallet',
    desc: 'A single, portable identity that works across every ULTRAVERSE product. Users authenticate once and carry their reputation, preferences, and credentials seamlessly.',
    bullets: [
      'Soulbound reputation tokens for persistent, non-transferable credentials',
      'Account abstraction for frictionless user onboarding',
      'Portable across all ULTRAVERSE products and partner integrations'
    ]
  },
  {
    num: '07',
    sublabel: 'Developer Platform',
    title: 'Open Standards & API-First',
    desc: 'ULTRAVERSE is built on open protocols with a comprehensive API-first architecture. Third-party developers can integrate any layer of the stack through well-documented interfaces.',
    bullets: [
      'Built entirely on open protocols and standards',
      'RESTful API architecture with comprehensive documentation',
      'SDK available for third-party integrations across all major platforms',
      'Webhook event system for real-time data synchronization',
      'Developer portal with sandbox environments and testing tools'
    ]
  }
]

const zkpSteps = [
  { num: '01', title: 'Cryptographic Proof', desc: 'User provides a cryptographic proof generated from a verified credential' },
  { num: '02', title: 'ZKP Circuit Validation', desc: 'Zero-knowledge proof circuit validates the attribute without accessing underlying data' },
  { num: '03', title: 'Verified Response', desc: 'Platform receives a verified yes/no response. No personal data is stored or transmitted.' }
]

export default function TechnologyPage() {
  return (
    <main className="flex-1 bg-background relative">
      <ProductHero
        label="Technology"
        title="Our Technology"
        description="Purpose-built infrastructure designed for privacy, performance, and scale."
      />

      <ProductVisuals
        primary={{
          label: '1400 × 600',
          sublabel: 'Technology Infrastructure',
          src: '/images/TECHNOLOGYINFRASTRUCTURE.jpg'
        }}
      />

      <ProductFeatureList
        label="Core Infrastructure"
        title="Engineered for the Next Era"
        description="Every layer of the ULTRAVERSE stack is designed around privacy, interoperability, and performance at global scale."
        features={coreInfrastructure}
      />

      <ProductInfoGrid
        label="Zero-Knowledge Proofs"
        title="How It Works"
        items={zkpSteps}
        columns={3}
        theme="dark"
      >
        <ScrollReveal delay={0.1}>
          <TechnicalPlaceholder
            label="800 × 500"
            sublabel="ZKP Circuit Architecture"
            aspectRatio="800/500"
            src="/images/SERVERROOM.jpg"
          />
        </ScrollReveal>
      </ProductInfoGrid>

      <ProductCTA
        title="Interested in Our Technology?"
        description="Our engineering team is available to discuss integration opportunities and technical partnerships."
        ctaText="Contact Engineering"
      />
    </main>
  )
}
