'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const termsSections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing and using the services provided by ULTRAVERSE Technologies ("the Company"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
      'We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the service following any changes constitutes acceptance of those changes.'
    ]
  },
  {
    title: '2. Service Infrastructure',
    content: [
      'ULTRAVERSE provides a decentralized ecosystem encompassing ULTRADATA, ULTRASTREAM, and spatial computing infrastructure. Users are responsible for maintaining the security of their access credentials and for all activities that occur under their account.',
      'Our infrastructure is designed for high availability, but we do not guarantee uninterrupted service. Maintenance and updates may occasionally limit access.'
    ]
  },
  {
    title: '3. Intellectual Property',
    content: [
      'All technology, data models, spatial architectures, and software provided by ULTRAVERSE are the exclusive property of Kruzer Ultraverse Pty Ltd or its licensors.',
      'Users are granted a limited, non-exclusive license to use the services as intended. Any reverse engineering, unauthorized reproduction, or redistribution of our technology is strictly prohibited.'
    ]
  },
  {
    title: '4. Data Privacy',
    content: [
      'Our commitment to privacy is absolute. All data processing is governed by our Privacy Policy, which is incorporated into these terms by reference. We utilize zero-knowledge verification to ensure user privacy is maintained across all ecosystem interactions.'
    ]
  },
  {
    title: '5. Limitation of Liability',
    content: [
      'To the maximum extent permitted by law, ULTRAVERSE Technologies shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our infrastructure or services.'
    ]
  },
  {
    title: '6. Governing Law',
    content: [
      'These terms are governed by and construed in accordance with the laws of Australia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts located in Australia.'
    ]
  }
];

export default function TermsClient() {
  return (
    <div className="min-h-screen bg-[#000] text-[#fff] selection:bg-[#6366f1]/30">
      {/* Force pure black background even outside the main container */}
      <style jsx global>{`
        body { background: #000 !important; }
        header, footer { display: none !important; }
      `}</style>

      <div className="max-w-[800px] mx-auto px-6 py-20 lg:py-[80px] font-sans">
        <ScrollReveal>
          <Link 
            href="/" 
            className="inline-block text-[#888] hover:text-[#fff] text-[14px] no-underline mb-10 transition-colors"
          >
            Back to Home
          </Link>
          
          <h1 className="text-[clamp(32px,5vw,48px)] font-bold mb-4 tracking-[-0.02em] leading-tight">Terms of Service</h1>
          <p className="text-[#666] text-[13px] mb-12">Last updated: April 2026</p>
          
          <div className="space-y-12">
            <p className="text-[#999] text-[15px] leading-[1.8] mb-4">
              The framework governing our technology ecosystem, infrastructure usage, and professional relationships. By using our technology, you agree to the following terms.
            </p>

            <hr className="border-none border-t border-[#222] my-12" />

            {termsSections.map((section, idx) => (
              <section key={idx}>
                <h3 className="text-[20px] font-light mb-4 text-[#fff]">{section.title}</h3>
                <div className="space-y-4">
                  {Array.isArray(section.content) ? (
                    section.content.map((p, pIdx) => (
                      <p key={pIdx} className="text-[#999] text-[15px] leading-[1.8]">
                        {p}
                      </p>
                    ))
                  ) : (
                    <p className="text-[#999] text-[15px] leading-[1.8]">
                      {section.content}
                    </p>
                  )}
                </div>
              </section>
            ))}

            <hr className="border-none border-t border-[#222] my-12" />

            <p className="text-[#666] text-[13px]">
              © 2026 ULTRAVERSE Technologies. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
