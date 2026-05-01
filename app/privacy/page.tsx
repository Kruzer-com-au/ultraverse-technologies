'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import TermsContent from '@/components/sections/TermsContent'

const privacySections = [
  {
    title: 'Privacy First',
    content: [
      'At ULTRAVERSE Technologies, privacy is not a feature — it is our foundation. Our architecture is built to ensure that you own your data, your identity, and your digital footprint.',
      'We utilize Zero-Knowledge Proofs (ZKP) and end-to-end encryption to process data without ever compromising the underlying information or user identity.'
    ]
  },
  {
    title: 'Data Collection',
    content: [
      'We collect only the minimum amount of data necessary to provide our services. This includes technical metadata for platform optimization and account credentials provided during registration.',
      'We do not sell, trade, or rent user data to third parties. Our business model is built on infrastructure and technology licensing, not data monetization.'
    ]
  },
  {
    title: 'Spatial Intelligence',
    content: 'For our spatial computing and digital twin services (ULTRADATA), all spatial data is anonymized and aggregated at the source. We do not track individual movements or specific user locations in a personally identifiable manner.'
  },
  {
    title: 'Your Rights',
    content: 'You have the right to access, rectify, or delete your personal information at any time. Our decentralized architecture is designed to make data portability and control intuitive and accessible for all users.'
  },
  {
    title: 'Security Infrastructure',
    content: 'We employ enterprise-grade security measures to protect our ecosystem. This includes regular audits, automated threat detection, and the use of secure, distributed infrastructure nodes.'
  },
  {
    title: 'Updates',
    content: 'We may update this Privacy Policy to reflect changes in our technology or legal requirements. Significant updates will be communicated through our platform or via direct notification.'
  }
]

export default function PrivacyPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label="Privacy"
        title="Privacy Policy"
        description="Our commitment to data sovereignty, encryption, and the protection of your digital identity."
        hideCtas={true}
      />

      <TermsContent sections={privacySections} />
    </main>
  )
}
