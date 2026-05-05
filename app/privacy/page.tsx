import { Metadata } from 'next'
import PrivacyClient from '@/components/pages/PrivacyClient'

export const metadata: Metadata = {
  title: 'Privacy Policy | ULTRAVERSE',
  description: 'At ULTRAVERSE Technologies, privacy is not just a feature - it is a foundational principle. Learn how we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return <PrivacyClient />
}
