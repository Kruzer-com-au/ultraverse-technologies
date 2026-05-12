import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Kruzer Ultraverse',
  description: 'Privacy Policy for the Kruzer Ultraverse websites. How we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#56bfa3]/30 font-sans">
      <style dangerouslySetInnerHTML={{ __html: `
        body { background: #0a0a0a !important; }
        header, footer { display: none !important; }
        html { scroll-behavior: smooth; }
        
        .privacy-container { 
          max-width: 820px; 
          margin: 0 auto; 
          padding: 80px 24px 120px; 
        }
        
        h1 { 
          font-size: clamp(2.5rem, 5vw, 4rem); 
          margin: 0 0 1rem; 
          line-height: 1.1; 
          font-weight: 800;
          letter-spacing: -0.04em;
          text-transform: uppercase;
        }
        
        h2 { 
          font-size: 1.5rem; 
          margin-top: 4rem; 
          margin-bottom: 1.5rem; 
          padding-bottom: 0.75rem; 
          border-bottom: 1px solid rgba(255, 255, 255, 0.1); 
          color: #fff;
          font-weight: 700;
        }
        
        h3 { 
          font-size: 1.2rem; 
          margin-top: 2.5rem; 
          margin-bottom: 1rem; 
          color: #fff;
          font-weight: 600;
        }
        
        p, li { 
          color: rgba(255, 255, 255, 0.7); 
          line-height: 1.8; 
          font-size: 16px; 
          margin-bottom: 1.25rem; 
        }
        
        ul { 
          padding-left: 1.5rem; 
          margin-bottom: 1.5rem; 
          list-style-type: disc;
        }
        
        li { margin-bottom: 0.5rem; }
        
        a { 
          color: #56bfa3; 
          text-decoration: none; 
          transition: color 0.2s;
        }
        
        a:hover { 
          color: #fff; 
          text-decoration: underline; 
        }
        
        .meta { 
          color: rgba(255, 255, 255, 0.4); 
          font-size: 0.95rem; 
          margin-bottom: 3rem; 
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-left: 2px solid rgba(86, 191, 163, 0.3);
          padding-left: 1.5rem;
        }
        
        .meta strong { color: rgba(255, 255, 255, 0.6); }
        
        table { 
          width: 100%; 
          border-collapse: collapse; 
          margin: 2rem 0; 
          font-size: 14px; 
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        th, td { 
          text-align: left; 
          padding: 12px 16px; 
          border: 1px solid rgba(255, 255, 255, 0.1); 
          vertical-align: top; 
        }
        
        th { 
          background: rgba(255, 255, 255, 0.03); 
          font-weight: 600; 
          color: #fff;
        }
        
        .disclaimer {
          margin-top: 5rem; 
          padding: 24px 32px; 
          background: rgba(255, 255, 255, 0.02);
          border-left: 4px solid #56bfa3; 
          border-radius: 4px;
          font-size: 0.95rem; 
          color: rgba(255, 255, 255, 0.4);
          font-style: italic;
        }
        
        .toc { 
          background: rgba(255, 255, 255, 0.02); 
          padding: 32px; 
          border-radius: 8px; 
          margin: 3rem 0; 
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .toc h2 { 
          margin-top: 0; 
          border: none; 
          font-size: 0.75rem; 
          text-transform: uppercase; 
          letter-spacing: 0.2em; 
          color: #56bfa3;
          margin-bottom: 1.5rem;
        }
        
        .toc ol { 
          margin: 0; 
          padding-left: 1.25rem; 
          display: grid;
          grid-template-cols: 1fr;
        }
        
        @media (min-width: 640px) {
          .toc ol { grid-template-cols: 1fr 1fr; gap-x: 2rem; }
        }
        
        .toc a { 
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none; 
        }
        
        .toc a:hover { color: #fff; }
        
        .addr { font-style: normal; color: #fff; }
      ` }} />

      <main className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="meta">
          <strong>Applies to:</strong> The Kruzer Ultraverse websites (collectively, the &ldquo;Sites&rdquo;)<br />
          <strong>Effective date:</strong> 11 May 2026<br />
          <strong>Last updated:</strong> 11 May 2026
        </p>

        <nav className="toc" aria-label="Table of contents">
          <h2>Contents</h2>
          <ol>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#who-we-are">Who we are</a></li>
            <li><a href="#scope">Scope</a></li>
            <li><a href="#information-we-collect">Personal information we collect</a></li>
            <li><a href="#how-we-collect">How we collect personal information</a></li>
            <li><a href="#purposes">Why we use your personal information</a></li>
            <li><a href="#cookies">Cookies and similar tracking technologies</a></li>
            <li><a href="#disclosure">Disclosure of personal information</a></li>
            <li><a href="#transfers">International data transfers</a></li>
            <li><a href="#marketing">Marketing communications and newsletters</a></li>
            <li><a href="#security">Data security</a></li>
            <li><a href="#retention">Data retention</a></li>
            <li><a href="#rights">Your privacy rights</a></li>
            <li><a href="#children">Children&rsquo;s privacy</a></li>
            <li><a href="#automated">Automated decision-making</a></li>
            <li><a href="#third-party-links">Third-party links</a></li>
            <li><a href="#changes">Changes to this Privacy Policy</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ol>
        </nav>

        <h2 id="introduction">1. Introduction</h2>
        <p>Kruzer Ultraverse (&ldquo;Kruzer Ultraverse&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, store, and safeguard personal information across the Kruzer Ultraverse websites (collectively, the &ldquo;Sites&rdquo;), and the rights you have in relation to that information.</p>
        <p>This policy is designed to meet the requirements of the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs), the EU General Data Protection Regulation (GDPR), the UK GDPR, the California Consumer Privacy Act as amended by the CPRA (CCPA/CPRA), and applicable global privacy laws and best practice. Where local laws apply to you, the rights and protections in those laws are in addition to the general protections set out in this policy.</p>
        <p>By using the Sites, registering for an account, contacting us, or subscribing to our communications, you acknowledge that you have read and understood this Privacy Policy.</p>

        <h2 id="who-we-are">2. Who we are</h2>
        <p>Kruzer Ultraverse is the operator of the Sites and acts as the &ldquo;data controller&rdquo; (under GDPR/UK GDPR), &ldquo;APP entity&rdquo; (under the Australian Privacy Act), and &ldquo;business&rdquo; (under the CCPA/CPRA) responsible for your personal information.</p>
        <p>For any privacy-related questions, requests, or complaints, please contact:</p>
        <ul>
          <li><strong>Privacy contact:</strong> <a href="mailto:admin@kruzer.com.au">admin@kruzer.com.au</a></li>
          <li><strong>Postal address:</strong>
            <address className="addr">
              Kruzer Ultraverse Pty Ltd<br />
              (ABN 62 686 962 783)<br />
              Level 13, 60 Castlereagh Street,<br />
              Sydney NSW 2000, Australia
            </address>
          </li>
          <li><strong>Website operator:</strong> Kruzer Ultraverse</li>
        </ul>
        <p>If you are in the EU or UK and require an Article 27 representative, please contact us at the address above and we will provide current details.</p>

        <h2 id="scope">3. Scope</h2>
        <p>This Privacy Policy applies to all of the Kruzer Ultraverse websites and the services accessed through them. It does not apply to third-party websites or services that may be linked from the Sites; those third parties have their own privacy policies which we encourage you to review.</p>

        <h2 id="information-we-collect">4. Personal information we collect</h2>
        <p>We collect personal information in three broad categories:</p>

        <h3>4.1 Account and login information</h3>
        <p>When you create an account or sign in to the Sites, we collect information such as:</p>
        <ul>
          <li>Your name and display name or username</li>
          <li>Email address</li>
          <li>Password (stored in hashed form &mdash; we never store plain-text passwords)</li>
          <li>Account preferences and settings</li>
          <li>Profile information you choose to provide</li>
          <li>Authentication metadata (for example, sign-in timestamps, IP address used to sign in, and approximate location derived from IP for security purposes)</li>
        </ul>

        <h3>4.2 Site analytics and technical information</h3>
        <p>When you visit the Sites, we and our analytics providers automatically collect certain technical information, including:</p>
        <ul>
          <li>IP address and approximate geographic location</li>
          <li>Device type, operating system, and browser type and version</li>
          <li>Referring URL and pages viewed</li>
          <li>Date, time, and duration of visit</li>
          <li>Clickstream and interaction data</li>
          <li>Cookie identifiers and similar tracking technologies (see Section 7)</li>
        </ul>
        <p>This information is generally collected in aggregate and pseudonymised form for analytics purposes.</p>

        <h3>4.3 Contact forms and newsletter sign-ups</h3>
        <p>When you contact us through a form, subscribe to a newsletter, or otherwise communicate with us, we collect:</p>
        <ul>
          <li>Your name</li>
          <li>Email address</li>
          <li>Any other information you choose to include in your message</li>
          <li>Subscription preferences and email engagement data (for example, whether emails are opened or clicked)</li>
        </ul>

        <h3>4.4 Information we do not knowingly collect</h3>
        <p>We do not knowingly collect &ldquo;sensitive information&rdquo; (as defined under the Australian Privacy Act) or &ldquo;special category&rdquo; data (as defined under the GDPR) &mdash; such as health information, racial or ethnic origin, religious beliefs, political opinions, sexual orientation, or biometric data &mdash; unless you voluntarily provide it to us in a message and it is necessary for the purpose of your enquiry.</p>

        <h2 id="how-we-collect">5. How we collect personal information</h2>
        <p>We collect personal information:</p>
        <ul>
          <li>Directly from you, when you register, log in, fill in a form, subscribe to a newsletter, or otherwise interact with the Sites</li>
          <li>Automatically, through cookies, server logs, and analytics technologies when you visit the Sites</li>
          <li>From third-party service providers, such as authentication providers, analytics platforms, and email service providers, in accordance with their own privacy policies</li>
        </ul>

        <h2 id="purposes">6. Why we use your personal information (purposes and lawful bases)</h2>
        <p>We use personal information for the following purposes. Where the GDPR or UK GDPR applies, we have indicated the lawful basis we rely on:</p>
        <table>
          <thead>
            <tr><th>Purpose</th><th>Lawful basis (GDPR / UK GDPR)</th></tr>
          </thead>
          <tbody>
            <tr><td>Creating and managing your account, authenticating sign-ins, and providing site functionality</td><td>Performance of a contract; legitimate interests</td></tr>
            <tr><td>Responding to your enquiries submitted via contact forms</td><td>Legitimate interests; performance of pre-contractual steps at your request</td></tr>
            <tr><td>Sending newsletters and marketing communications you have signed up for</td><td>Consent (which you may withdraw at any time)</td></tr>
            <tr><td>Improving the Sites, troubleshooting, and understanding how visitors use the Sites (analytics)</td><td>Legitimate interests; consent (for non-essential cookies, where required)</td></tr>
            <tr><td>Securing the Sites, preventing fraud, abuse and unauthorised access</td><td>Legitimate interests; legal obligation</td></tr>
            <tr><td>Complying with legal, regulatory, tax, and audit requirements</td><td>Legal obligation</td></tr>
            <tr><td>Enforcing our Terms of Service and protecting our legal rights</td><td>Legitimate interests</td></tr>
          </tbody>
        </table>
        <p>We will not use your personal information for a purpose materially different from the purpose for which it was collected without first notifying you and, where required, obtaining your consent.</p>

        <h2 id="cookies">7. Cookies and similar tracking technologies</h2>
        <p>The Sites use cookies and similar technologies (such as pixels, local storage, and SDKs) to make the Sites work, remember your preferences, and understand how visitors use the Sites.</p>
        <p>We use the following categories of cookies:</p>
        <ul>
          <li><strong>Strictly necessary cookies</strong> &mdash; required to operate the Sites, including session and authentication cookies. These do not require your consent.</li>
          <li><strong>Functional cookies</strong> &mdash; remember your preferences (for example, language or display settings).</li>
          <li><strong>Analytics cookies</strong> &mdash; help us understand site usage in aggregate so we can improve the Sites.</li>
          <li><strong>Marketing cookies</strong> &mdash; used in limited circumstances to measure the effectiveness of campaigns (if and where deployed).</li>
        </ul>
        <p>Where required by law (for example, in the EU/UK), we will request your consent before setting non-essential cookies. You can manage or withdraw consent at any time through the cookie banner or your browser settings. Disabling certain cookies may affect Site functionality.</p>

        <h2 id="disclosure">8. Disclosure of personal information</h2>
        <p>We may disclose personal information to:</p>
        <ul>
          <li><strong>Service providers and processors</strong> who help us operate the Sites, including hosting, authentication, analytics, email delivery, customer support tools, and security providers. These providers are contractually required to handle personal information only as instructed by us and consistent with this policy.</li>
          <li><strong>Professional advisers</strong> such as legal counsel, accountants, and auditors, where necessary.</li>
          <li><strong>Government authorities and regulators</strong>, where we are required by law, court order, or to protect our or others&rsquo; rights, safety, or property.</li>
          <li><strong>A successor entity</strong> in connection with a merger, acquisition, restructuring, or sale of all or part of our business, subject to the recipient committing to protect personal information in a manner consistent with this policy.</li>
        </ul>
        <p>We do not sell your personal information. We do not &ldquo;share&rdquo; your personal information for cross-context behavioural advertising as those terms are defined under the CCPA/CPRA.</p>

        <h2 id="transfers">9. International data transfers</h2>
        <p>We are based in Australia. Some of our service providers may store or process personal information outside your country of residence, including in the United States, the European Union, the United Kingdom, and other jurisdictions.</p>
        <p>Where personal information of EU or UK residents is transferred outside the EEA or UK to a country that has not been recognised as providing an adequate level of protection, we rely on appropriate safeguards such as the European Commission&rsquo;s Standard Contractual Clauses (and the UK Addendum where applicable), or another lawful transfer mechanism. A copy of the safeguards can be requested at the contact details in Section 2.</p>
        <p>By using the Sites, you understand and acknowledge that your personal information may be transferred to and processed in countries other than your own.</p>

        <h2 id="marketing">10. Marketing communications and newsletters</h2>
        <p>If you have subscribed to a newsletter or other marketing communication from us, we will use the email address and preferences you provided to send you those communications.</p>
        <p>You can unsubscribe at any time by clicking the &ldquo;unsubscribe&rdquo; link at the bottom of any marketing email, or by contacting us at <a href="mailto:admin@kruzer.com.au">admin@kruzer.com.au</a>. Unsubscribing from marketing emails does not affect transactional or service-related communications (such as account security notices or important changes to our Sites or terms).</p>

        <h2 id="security">11. Data security</h2>
        <p>We implement reasonable technical and organisational security measures designed to protect personal information from unauthorised access, disclosure, alteration, or destruction. These measures include:</p>
        <ul>
          <li>Encryption of data in transit (TLS) and at rest where appropriate</li>
          <li>Hashing of passwords using industry-standard algorithms</li>
          <li>Access controls and authentication requirements for our personnel</li>
          <li>Regular review of our security practices and service providers</li>
        </ul>
        <p>No method of transmission over the internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security. If you believe your account or information has been compromised, please contact us immediately.</p>

        <h2 id="retention">12. Data retention</h2>
        <p>We retain personal information only for as long as is necessary for the purposes set out in this policy, including:</p>
        <ul>
          <li><strong>Account information</strong> &mdash; for as long as your account is active, plus a reasonable period afterwards to comply with legal and accounting obligations and to handle disputes</li>
          <li><strong>Contact form submissions</strong> &mdash; for as long as needed to resolve your enquiry, plus a reasonable period for record-keeping</li>
          <li><strong>Newsletter subscriber data</strong> &mdash; until you unsubscribe, after which we retain a suppression record (typically your email address only) so we can honour your unsubscribe request</li>
          <li><strong>Analytics and log data</strong> &mdash; retained in identifiable form for a limited period and then aggregated or deleted</li>
        </ul>
        <p>When personal information is no longer required, we will securely delete or de-identify it.</p>

        <h2 id="rights">13. Your privacy rights</h2>
        <p>Subject to the laws that apply to you, you may have the following rights in relation to your personal information:</p>
        <ul>
          <li><strong>Access</strong> &mdash; request a copy of the personal information we hold about you</li>
          <li><strong>Correction / rectification</strong> &mdash; ask us to correct information that is inaccurate or out of date</li>
          <li><strong>Deletion / erasure</strong> &mdash; ask us to delete personal information in certain circumstances</li>
          <li><strong>Restriction / objection</strong> &mdash; ask us to restrict or object to certain processing</li>
          <li><strong>Data portability</strong> &mdash; request a copy of certain personal information in a machine-readable format</li>
          <li><strong>Withdraw consent</strong> &mdash; withdraw consent at any time where we rely on consent (this does not affect the lawfulness of processing before withdrawal)</li>
          <li><strong>Opt out of marketing</strong> &mdash; opt out of receiving marketing communications at any time</li>
          <li><strong>Opt out of &ldquo;sale&rdquo; or &ldquo;sharing&rdquo;</strong> &mdash; under the CCPA/CPRA. We do not sell or share personal information as defined under that law, but if this changes we will provide a &ldquo;Do Not Sell or Share My Personal Information&rdquo; option</li>
          <li><strong>Non-discrimination</strong> &mdash; exercise your rights without being discriminated against for doing so</li>
        </ul>
        <p>To exercise any of these rights, please contact us at <a href="mailto:admin@kruzer.com.au">admin@kruzer.com.au</a>. We may need to verify your identity before responding. We will respond within the timeframes required by applicable law (typically within 30 days under the GDPR/UK GDPR; 45 days under the CCPA/CPRA, with the possibility of an extension).</p>
        <p>If you are not satisfied with our response, you have the right to lodge a complaint with a supervisory authority:</p>
        <ul>
          <li><strong>Australia:</strong> the Office of the Australian Information Commissioner (OAIC) &mdash; <a href="https://www.oaic.gov.au" target="_blank" rel="noopener">oaic.gov.au</a></li>
          <li><strong>EU:</strong> your local Data Protection Authority</li>
          <li><strong>UK:</strong> the Information Commissioner&rsquo;s Office (ICO) &mdash; <a href="https://ico.org.uk" target="_blank" rel="noopener">ico.org.uk</a></li>
          <li><strong>California:</strong> the California Privacy Protection Agency or the California Attorney General</li>
        </ul>
        <p>We would, however, appreciate the chance to address your concerns first.</p>

        <h2 id="children">14. Children&rsquo;s privacy</h2>
        <p>The Sites are not directed to children under the age of 16, and we do not knowingly collect personal information from children under 16. If you believe that a child has provided us with personal information, please contact us at <a href="mailto:admin@kruzer.com.au">admin@kruzer.com.au</a> and we will take steps to delete that information.</p>

        <h2 id="automated">15. Automated decision-making</h2>
        <p>We do not use your personal information for any automated decision-making that produces legal or similarly significant effects on you.</p>

        <h2 id="third-party-links">16. Third-party links</h2>
        <p>The Sites may contain links to third-party websites, plug-ins, applications, or services. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy practices. We encourage you to read the privacy policy of every website you visit.</p>

        <h2 id="changes">17. Changes to this Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date at the top of this policy. If the changes are material, we will provide a more prominent notice (for example, by email or by an on-Site banner) before the change takes effect. Your continued use of the Sites after the effective date constitutes your acceptance of the updated Privacy Policy.</p>

        <h2 id="contact">18. Contact us</h2>
        <p>If you have any questions, concerns, or requests about this Privacy Policy or our handling of your personal information, please contact us:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:admin@kruzer.com.au">admin@kruzer.com.au</a></li>
          <li><strong>Postal:</strong>
            <address className="addr">
              Kruzer Ultraverse Pty Ltd<br />
              (ABN 62 686 962 783)<br />
              Level 13, 60 Castlereagh Street,<br />
              Sydney NSW 2000, Australia
            </address>
          </li>
        </ul>

        <p className="disclaimer">This document is a general-purpose privacy policy template prepared for the Kruzer Ultraverse websites. It is intended as a starting point and should be reviewed by qualified legal counsel &mdash; and tailored to the specific data flows, service providers, and jurisdictions in which Kruzer Ultraverse operates &mdash; before being published.</p>
      </main>
    </div>
  )
}
