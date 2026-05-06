'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function PrivacyClient() {
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
          
          <h1 className="text-[clamp(32px,5vw,48px)] font-bold mb-4 tracking-[-0.02em] leading-tight">Privacy Policy</h1>
          <p className="text-[#666] text-[13px] mb-12">Last updated: April 2026</p>
          
          <div className="space-y-12">
            <p className="text-[#999] text-[15px] leading-[1.8] mb-4">
              At ULTRAVERSE Technologies, privacy is not just a feature — it is a foundational principle. This policy outlines how we collect, use, and protect your information across all ULTRAVERSE products and services.
            </p>

            <hr className="border-none border-t border-[#222] my-12" />

            <section>
              <h3 className="text-[20px] font-light mb-4 text-[#fff]">1. Information We Collect</h3>
              <p className="text-[#999] text-[15px] leading-[1.8] mb-4">We collect only the minimum information necessary to provide our services:</p>
              <ul className="list-disc pl-5 space-y-2 text-[#999] text-[15px] leading-[1.8]">
                <li>Account information (name, email) when you register</li>
                <li>Usage data to improve product performance</li>
                <li>Device information for compatibility and security</li>
              </ul>
            </section>

            <section>
              <h3 className="text-[20px] font-light mb-4 text-[#fff]">2. How We Use Your Information</h3>
              <p className="text-[#999] text-[15px] leading-[1.8] mb-4">Your data is used exclusively to:</p>
              <ul className="list-disc pl-5 space-y-2 text-[#999] text-[15px] leading-[1.8]">
                <li>Provide and maintain our services</li>
                <li>Improve user experience and product features</li>
                <li>Communicate important updates and security notices</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h3 className="text-[20px] font-light mb-4 text-[#fff]">3. Data Protection</h3>
              <p className="text-[#999] text-[15px] leading-[1.8]">
                We employ industry-leading security measures including end-to-end encryption, zero-knowledge architecture, and decentralized data storage where applicable. Your data is never sold to third parties.
              </p>
            </section>

            <section>
              <h3 className="text-[20px] font-light mb-4 text-[#fff]">4. Your Rights</h3>
              <p className="text-[#999] text-[15px] leading-[1.8] mb-4">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 text-[#999] text-[15px] leading-[1.8]">
                <li>Access your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Opt out of non-essential data collection</li>
                <li>Export your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h3 className="text-[20px] font-light mb-4 text-[#fff]">5. Cookies and Tracking</h3>
              <p className="text-[#999] text-[15px] leading-[1.8]">
                We use minimal, essential cookies to maintain session state. We do not use third-party tracking cookies or sell data to advertisers.
              </p>
            </section>

            <section>
              <h3 className="text-[20px] font-light mb-4 text-[#fff]">6. Third-Party Services</h3>
              <p className="text-[#999] text-[15px] leading-[1.8]">
                When we integrate with third-party services, we ensure they meet our privacy standards. We only share data necessary for the service to function.
              </p>
            </section>

            <section>
              <h3 className="text-[20px] font-light mb-4 text-[#fff]">7. Changes to This Policy</h3>
              <p className="text-[#999] text-[15px] leading-[1.8]">
                We may update this policy periodically. Significant changes will be communicated through our platform and via email to registered users.
              </p>
            </section>

            <section>
              <h3 className="text-[20px] font-light mb-4 text-[#fff]">8. Contact</h3>
              <p className="text-[#999] text-[15px] leading-[1.8]">
                For privacy-related inquiries, please contact our team through our <Link href="/contact" className="text-[#6366f1] hover:underline">contact page</Link>.
              </p>
            </section>

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

