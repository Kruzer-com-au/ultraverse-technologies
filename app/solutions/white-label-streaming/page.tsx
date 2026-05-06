'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import ProductInfoGrid from '@/components/sections/product/ProductInfoGrid'

const capabilities = [
  {
    num: '01',
    title: 'Fully Branded Player & UI',
    desc: 'Every pixel reflects your brand. Custom themes, logos, color systems, and domain — your audience never sees ours.'
  },
  {
    num: '02',
    title: 'Creator Management Tools',
    desc: 'Onboard, manage, and support creators at scale with built-in dashboards, scheduling, and content workflows.'
  },
  {
    num: '03',
    title: 'Audience Analytics Dashboard',
    desc: 'Real-time viewer metrics, engagement heatmaps, retention curves, and demographic insights to inform content strategy.'
  },
  {
    num: '04',
    title: 'Content Delivery Optimization',
    desc: 'Adaptive bitrate streaming, edge caching, and global CDN integration for buffer-free playback at any scale.'
  },
  {
    num: '05',
    title: 'Monetization Engine',
    desc: 'Subscriptions, pay-per-view, tipping, and ad integration — all configurable per-channel with flexible revenue splits.'
  },
  {
    num: '06',
    title: 'API-First Architecture',
    desc: 'RESTful APIs and webhooks for deep integration with your existing systems, CMS, and third-party tools.'
  }
]

const processSteps = [
  {
    num: '01',
    title: 'Configure',
    desc: 'Define your brand identity, feature set, and monetization model. Our team works with you to map requirements to platform capabilities.'
  },
  {
    num: '02',
    title: 'Deploy',
    desc: 'Your branded platform goes live on dedicated infrastructure. Custom domain, SSL, and CDN configuration are handled automatically.'
  },
  {
    num: '03',
    title: 'Scale',
    desc: 'Onboard creators, grow your audience, and iterate on features. Infrastructure scales automatically to meet demand.'
  }
]

const targetAudience = [
  {
    num: '01',
    title: 'Esports Organizations',
    desc: 'Dedicated streaming platforms for tournaments, team content, and fan engagement — fully branded to the organization.'
  },
  {
    num: '02',
    title: 'Entertainment Studios',
    desc: 'Direct-to-audience distribution for original content, live events, and premium programming.'
  },
  {
    num: '03',
    title: 'Media Companies',
    desc: 'Owned streaming infrastructure that reduces dependence on third-party platforms and protects audience relationships.'
  },
  {
    num: '04',
    title: 'Educational Institutions',
    desc: 'Secure, branded video platforms for lectures, seminars, and continuing education with access controls.'
  }
]

export default function WhiteLabelStreamingPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label="Streaming Infrastructure"
        title="White-Label Streaming Infrastructure"
        description="Custom-branded streaming platforms for organizations. Your brand, your audience, your data — powered by enterprise-grade infrastructure."
        ctaText="Request a Demo"
        ctaHref="/contact"
        secondaryCtaText="View All Solutions"
        secondaryCtaHref="/solutions"
      />

      <ProductFeatureList
        label="Capabilities"
        title="Everything You Need to Launch"
        description="A complete streaming platform stack — from ingest to playback, analytics to monetization — ready to deploy under your brand."
        features={capabilities}
      />

      <ProductVisuals 
        primary={{ 
          label: '', 
          sublabel: 'White-Label Streaming Dashboard', 
          src: '/images/solutions/mr_kruzer_white-label_streaming_dashboard_UI.jpg' 
        }}
      />

      <ProductInfoGrid
        label="Process"
        title="How It Works"
        items={processSteps}
        theme="dark"
      />

      <ProductVisuals 
        primary={{ 
          label: '', 
          sublabel: 'Branded Player UI Preview', 
          aspectRatio: '800/500',
          src: '/images/solutions/Branded_Player_UI_Preview.jpg' 
        }}
        bgClass="bg-background"
      />

      <ProductFeatureList
        label="Who It's For"
        title="Built for Organizations That Own Their Audience"
        description="White-label streaming is ideal for organizations that want to control the viewer experience and retain direct audience relationships."
        features={targetAudience}
      />

      <ProductCTA 
        title="Launch Your Streaming Platform"
        description="Talk to our team about deploying a fully branded streaming experience for your organization."
        ctaText="Request a Demo"
      />
    </main>
  )
}
