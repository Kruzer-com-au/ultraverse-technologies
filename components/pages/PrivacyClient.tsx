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

      <div className="max-w-[800px] mx-auto px-6 py-20 lg:py-[100px] font-sans">
        <ScrollReveal>
          <Link
            href="/"
            className="inline-block text-[#888] hover:text-[#fff] text-[14px] no-underline mb-12 transition-colors"
          >
            Back to Home
          </Link>
          
          <h1 className="!text-[32px] md:!text-[42px] font-bold mb-6 tracking-tight leading-tight uppercase">Privacy Policy</h1>
          <div className="flex flex-col gap-2 mb-16 border-l border-[#222] pl-6">
            <p className="text-[#666] text-[13px] uppercase tracking-widest">Applies to: The Kruzer Ultraverse websites (collectively, the "Sites")</p>
            <p className="text-[#666] text-[13px] uppercase tracking-widest">Effective date: 11 May 2026</p>
            <p className="text-[#666] text-[13px] uppercase tracking-widest">Last updated: 11 May 2026</p>
          </div>
          
          <div className="space-y-20">
            {/* Section 1 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">1. Introduction</h2>
              <div className="text-[#999] text-[15px] leading-[1.8] space-y-6">
                <p>
                  Kruzer Ultraverse ("Kruzer Ultraverse", "we", "us", or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, store, and safeguard personal information across the Kruzer Ultraverse websites (collectively, the "Sites"), and the rights you have in relation to that information.
                </p>
                <p>
                  This policy is designed to meet the requirements of the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs), the EU General Data Protection Regulation (GDPR), the UK GDPR, the California Consumer Privacy Act as amended by the CPRA (CCPA/CPRA), and applicable global privacy laws and best practice. Where local laws apply to you, the rights and protections in those laws are in addition to the general protections set out in this policy.
                </p>
                <p>
                  By using the Sites, registering for an account, contacting us, or subscribing to our communications, you acknowledge that you have read and understood this Privacy Policy.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">2. Who we are</h2>
              <div className="text-[#999] text-[15px] leading-[1.8] space-y-6">
                <p>
                  Kruzer Ultraverse is the operator of the Sites and acts as the "data controller" (under GDPR/UK GDPR), "APP entity" (under the Australian Privacy Act), and "business" (under the CCPA/CPRA) responsible for your personal information.
                </p>
                <p>For any privacy-related questions, requests, or complaints, please contact:</p>
                <ul className="list-none space-y-4 bg-[#111] p-6 border border-[#222]">
                  <li><strong className="text-white block text-[12px] uppercase tracking-widest mb-1">Privacy contact</strong> admin@kruzer.com.au</li>
                  <li><strong className="text-white block text-[12px] uppercase tracking-widest mb-1">Postal address</strong> KRUZER ULTRAVERSE PTY LTD, (ABN 62 686 962 783), Level 13, 60 Castlereagh Street, Sydney NSW 2000, Australia</li>
                  <li><strong className="text-white block text-[12px] uppercase tracking-widest mb-1">Website operator</strong> Kruzer Ultraverse</li>
                </ul>
                <p>
                  If you are in the EU or UK and require an Article 27 representative, please contact us at the address above and we will provide current details.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">3. Scope</h2>
              <p className="text-[#999] text-[15px] leading-[1.8]">
                This Privacy Policy applies to all of the Kruzer Ultraverse websites and the services accessed through them. It does not apply to third-party websites or services that may be linked from the Sites; those third parties have their own privacy policies which we encourage you to review.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">4. Personal information we collect</h2>
              <div className="text-[#999] text-[15px] leading-[1.8] space-y-12">
                <p>We collect personal information in three broad categories:</p>
                
                <div className="space-y-4">
                  <h3 className="text-white font-bold !text-[20px] uppercase tracking-widest opacity-90">4.1 Account and login information</h3>
                  <p>When you create an account or sign in to the Sites, we collect information such as:</p>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>Your name and display name or username</li>
                    <li>Email address</li>
                    <li>Password (stored in hashed form)</li>
                    <li>Account preferences and settings</li>
                    <li>Profile information you choose to provide</li>
                    <li>Authentication metadata</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-bold !text-[20px] uppercase tracking-widest opacity-90">4.2 Site analytics and technical information</h3>
                  <p>When you visit the Sites, we and our analytics providers automatically collect certain technical information, including:</p>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>IP address and approximate geographic location</li>
                    <li>Device type, operating system, and browser type and version</li>
                    <li>Referring URL and pages viewed</li>
                    <li>Date, time, and duration of visit</li>
                    <li>Clickstream and interaction data</li>
                    <li>Cookie identifiers and similar tracking technologies</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-bold !text-[20px] uppercase tracking-widest opacity-90">4.3 Contact forms and newsletter sign-ups</h3>
                  <p>When you contact us through a form, subscribe to a newsletter, or otherwise communicate with us, we collect:</p>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>Your name</li>
                    <li>Email address</li>
                    <li>Any other information you choose to include in your message</li>
                    <li>Subscription preferences and email engagement data</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-bold !text-[20px] uppercase tracking-tight">4.4 Information we do not knowingly collect</h3>
                  <p>
                    We do not knowingly collect "sensitive information" or "special category" data unless you voluntarily provide it to us in a message and it is necessary for the purpose of your enquiry.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">5. How we collect personal information</h2>
              <div className="text-[#999] text-[15px] leading-[1.8] space-y-6">
                <p>We collect personal information:</p>
                <ul className="list-disc pl-5 space-y-3">
                  <li>Directly from you, when you register, log in, or fill in a form</li>
                  <li>Automatically, through cookies and analytics technologies when you visit the Sites</li>
                  <li>From third-party service providers in accordance with their own privacy policies</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">6. Why we use your personal information</h2>
              <div className="text-[#999] text-[15px] leading-[1.8] space-y-8">
                <p>We use personal information for the following purposes. Where the GDPR or UK GDPR applies, we have indicated the lawful basis we rely on:</p>
                <div className="overflow-x-auto border border-[#222]">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#111]">
                        <th className="p-4 text-left text-white text-[12px] uppercase tracking-widest border-b border-[#222]">Purpose</th>
                        <th className="p-4 text-left text-white text-[12px] uppercase tracking-widest border-b border-[#222]">Lawful basis</th>
                      </tr>
                    </thead>
                    <tbody className="text-[14px]">
                      <tr className="border-b border-[#222]">
                        <td className="p-4">Account management and authentication</td>
                        <td className="p-4">Contract performance; Legitimate interests</td>
                      </tr>
                      <tr className="border-b border-[#222]">
                        <td className="p-4">Responding to enquiries via contact forms</td>
                        <td className="p-4">Legitimate interests; Pre-contractual steps</td>
                      </tr>
                      <tr className="border-b border-[#222]">
                        <td className="p-4">Marketing communications and newsletters</td>
                        <td className="p-4">Consent</td>
                      </tr>
                      <tr className="border-b border-[#222]">
                        <td className="p-4">Site improvement and analytics</td>
                        <td className="p-4">Legitimate interests; Consent</td>
                      </tr>
                      <tr className="border-b border-[#222]">
                        <td className="p-4">Security and fraud prevention</td>
                        <td className="p-4">Legitimate interests; Legal obligation</td>
                      </tr>
                      <tr>
                        <td className="p-4">Legal and regulatory compliance</td>
                        <td className="p-4">Legal obligation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">7. Cookies and tracking</h2>
              <div className="text-[#999] text-[15px] leading-[1.8] space-y-6">
                <p>The Sites use cookies to make the Sites work, remember your preferences, and understand usage.</p>
                <ul className="list-disc pl-5 space-y-3">
                  <li><strong className="text-white">Strictly necessary</strong> — Required for site operation.</li>
                  <li><strong className="text-white">Functional</strong> — Remember your preferences.</li>
                  <li><strong className="text-white">Analytics</strong> — Help us understand site usage.</li>
                  <li><strong className="text-white">Marketing</strong> — Measure campaign effectiveness.</li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">8. Disclosure of information</h2>
              <div className="text-[#999] text-[15px] leading-[1.8] space-y-6">
                <p>We may disclose personal information to:</p>
                <ul className="list-disc pl-5 space-y-3">
                  <li>Service providers and processors who help us operate the Sites</li>
                  <li>Professional advisers such as legal counsel and auditors</li>
                  <li>Government authorities where required by law</li>
                  <li>A successor entity in connection with a business sale or merger</li>
                </ul>
                <p className="italic border-l-2 border-accent-teal pl-6 py-2 bg-[#111]">
                  We do not sell your personal information.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">9. International data transfers</h2>
              <div className="text-[#999] text-[15px] leading-[1.8] space-y-6">
                <p>We are based in Australia. Some of our service providers may store or process personal information outside your country of residence, including in the United States, the European Union, the United Kingdom, and other jurisdictions.</p>
                <p>Where personal information of EU or UK residents is transferred outside the EEA or UK, we rely on appropriate safeguards such as Standard Contractual Clauses.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">10. Marketing communications</h2>
              <div className="text-[#999] text-[15px] leading-[1.8] space-y-6">
                <p>If you have subscribed to a newsletter, we will use your email to send communications. You can unsubscribe at any time by clicking the "unsubscribe" link or contacting us.</p>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">11. Data security</h2>
              <div className="text-[#999] text-[15px] leading-[1.8] space-y-6">
                <p>We implement technical and organisational security measures designed to protect personal information. However, no method of transmission over the internet is completely secure.</p>
              </div>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">12. Data retention</h2>
              <div className="text-[#999] text-[15px] leading-[1.8] space-y-6">
                <p>We retain personal information only for as long as is necessary for the purposes set out in this policy, including account maintenance and legal compliance.</p>
              </div>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">13. Your privacy rights</h2>
              <div className="text-[#999] text-[15px] leading-[1.8] space-y-8">
                <p>Subject to the laws that apply to you, you may have the following rights in relation to your personal information:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Access a copy of your information",
                    "Request correction of data",
                    "Request deletion of data",
                    "Restrict or object to processing",
                    "Request data portability",
                    "Withdraw consent at any time",
                    "Opt out of marketing",
                    "Exercise rights without discrimination"
                  ].map((right, i) => (
                    <div key={i} className="bg-[#111] p-4 border border-[#222] flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-teal shrink-0" />
                      <span className="text-[14px] text-white/80">{right}</span>
                    </div>
                  ))}
                </div>
                <p>To exercise any of these rights, please contact us at admin@kruzer.com.au.</p>
              </div>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">14. Children's privacy</h2>
              <div className="text-[#999] text-[15px] leading-[1.8] space-y-6">
                <p>The Sites are not directed to children under the age of 16. If you believe a child has provided us with personal information, please contact us.</p>
              </div>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">15. Automated decision-making</h2>
              <div className="text-[#999] text-[15px] leading-[1.8] space-y-6">
                <p>We do not use your personal information for any automated decision-making that produces legal effects.</p>
              </div>
            </section>

            {/* Section 16 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">16. Third-party links</h2>
              <div className="text-[#999] text-[15px] leading-[1.8] space-y-6">
                <p>The Sites may contain links to third-party websites. We are not responsible for their privacy practices.</p>
              </div>
            </section>

            {/* Section 17 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">17. Changes to this policy</h2>
              <div className="text-[#999] text-[15px] leading-[1.8] space-y-6">
                <p>We may update this Privacy Policy from time to time. Significant changes will be communicated via notice on the Sites.</p>
              </div>
            </section>

            {/* Section 18 */}
            <section>
              <h2 className="!text-[24px] font-bold mb-8 text-white uppercase tracking-wider border-b border-[#222] pb-4">18. Contact us</h2>
              <div className="text-[#999] text-[15px] leading-[1.8] space-y-6">
                <p>If you have any questions or requests about this Privacy Policy, please contact us:</p>
                <ul className="list-none space-y-4 bg-[#111] p-6 border border-[#222]">
                  <li><strong className="text-white block text-[12px] uppercase tracking-widest mb-1">Email</strong> admin@kruzer.com.au</li>
                  <li><strong className="text-white block text-[12px] uppercase tracking-widest mb-1">Postal</strong> KRUZER ULTRAVERSE PTY LTD, Level 13, 60 Castlereagh Street, Sydney NSW 2000, Australia</li>
                </ul>
              </div>
            </section>

            <hr className="border-none border-t border-[#222] mt-24" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[#666] text-[13px]">
                © 2026 Kruzer Ultraverse. All rights reserved.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
