import { Metadata } from 'next'
import TermsClient from '@/components/pages/TermsClient'

export const metadata: Metadata = {
  title: 'Terms of Service | ULTRAVERSE',
  description: 'The framework governing our technology ecosystem, infrastructure usage, and professional relationships.',
}

export default function TermsPage() {
  return <TermsClient />
}
