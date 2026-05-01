'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import TermsContent from '@/components/sections/TermsContent'

const termsSections = [
  {
    title: 'Acceptance of Terms',
    content: [
      'By accessing and using the services provided by ULTRAVERSE Technologies ("the Company"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
      'We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the service following any changes constitutes acceptance of those changes.'
    ]
  },
  {
    title: 'Service Infrastructure',
    content: [
      'ULTRAVERSE provides a decentralized ecosystem encompassing ULTRADATA, ULTRASTREAM, and spatial computing infrastructure. Users are responsible for maintaining the security of their access credentials and for all activities that occur under their account.',
      'Our infrastructure is designed for high availability, but we do not guarantee uninterrupted service. Maintenance and updates may occasionally limit access.'
    ]
  },
  {
    title: 'Intellectual Property',
    content: [
      'All technology, data models, spatial architectures, and software provided by ULTRAVERSE are the exclusive property of Kruzer Ultraverse Pty Ltd or its licensors.',
      'Users are granted a limited, non-exclusive license to use the services as intended. Any reverse engineering, unauthorized reproduction, or redistribution of our technology is strictly prohibited.'
    ]
  },
  {
    title: 'Data Privacy',
    content: 'Our commitment to privacy is absolute. All data processing is governed by our Privacy Policy, which is incorporated into these terms by reference. We utilize zero-knowledge verification to ensure user privacy is maintained across all ecosystem interactions.'
  },
  {
    title: 'Limitation of Liability',
    content: 'To the maximum extent permitted by law, ULTRAVERSE Technologies shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our infrastructure or services.'
  },
  {
    title: 'Governing Law',
    content: 'These terms are governed by and construed in accordance with the laws of Australia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts located in Australia.'
  }
]

export default function TermsPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label="Legal"
        title="Terms of Service"
        description="The framework governing our technology ecosystem, infrastructure usage, and professional relationships."
        hideCtas={true}
      />

      <TermsContent sections={termsSections} />
    </main>
  )
}
