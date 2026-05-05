// ─── Home Page Data ───────────────────────────────────────────────────────────

export type Align = 'left' | 'right'

export interface HeroFeature {
  num: string
  text: string
  align: Align
}

export interface Product {
  num: string
  href: string
  name: string
  desc: string
  tags: string[]
}

export interface DataType {
  num: string
  title: string
  desc: string
}

export interface TechPillar {
  num: string
  title: string
  desc: string
}

export interface Industry {
  title: string
  href: string
  desc: string
}

export const heroFeatures: HeroFeature[] = [
  { 
    num: '01', 
    text: 'The first cross-platform XR consumer data pipeline in existence: behavioural, spatial, and community intelligence you can\'t get anywhere else', 
    align: 'left' 
  },
  { 
    num: '02', 
    text: 'A blockchain-native identity and wallet layer: institutional-grade compliance across four regulatory regimes', 
    align: 'left' 
  },
  { 
    num: '03', 
    text: 'A live digital commerce infrastructure: real-time transactions, active consumers, measurable revenue', 
    align: 'left' 
  },
]

export const products: Product[] = [
  {
    num: '01', href: '/products/ultradata', name: 'ULTRADATA',
    desc: 'Plug & play real-time data for digital twin city models.',
    tags: ['Active sensor', 'Ultra-lean packet', 'Real-time ground truth'],
  },
  {
    num: '02', href: '/products/ultrastream', name: 'ULTRASTREAM',
    desc: 'The streaming platform built for creators and enterprises.',
    tags: ['White-label deployment', 'Creator-first revenue', 'Real-time engagement'],
  },
  {
    num: '03', href: '/products/ultraverse', name: 'ULTRAVERSE',
    desc: 'The gaming and spatial experience ecosystem.',
    tags: [' AR gaming', ' Digital companions', 'Location-based experiences', 'Spatial computing'],
  },
]

export const dataTypes: DataType[] = [
  { num: '01', title: 'Pedestrian Flow', desc: 'Real-time foot traffic density, movement patterns, and crowd dynamics across city zones' },
  { num: '02', title: 'Environmental', desc: 'Air quality, noise levels, temperature, humidity — hyper-local readings at street level' },
  { num: '03', title: 'Infrastructure Status', desc: 'Road conditions, public transport load, utility grid status, and availability metrics' },
  { num: '04', title: 'Commercial Activity', desc: 'Retail density, venue occupancy patterns, economic activity indicators by district' },
  { num: '05', title: 'Traffic & Mobility', desc: 'Vehicle flow, parking utilization, cycling patterns, and multimodal transport data' },
  { num: '06', title: 'Safety & Incidents', desc: 'Anonymized incident reporting, emergency response patterns, and public safety metrics' },
  { num: '07', title: 'Energy & Utilities', desc: 'Grid load, renewable output, water consumption, and smart meter aggregations' },
  { num: '08', title: 'Urban Development', desc: 'Construction activity, zoning changes, permit density, and development velocity' },
]

export const techPillars: TechPillar[] = [
  { num: '01', title: 'Real-Time Sensor Networks', desc: 'Active ground-truth sensors across launch cities. Lean packet architecture built for city-scale digital twin ingestion.' },
  { num: '02', title: 'Zero-Knowledge Verification', desc: 'Privacy-preserving identity. Proves attributes without revealing data.' },
  { num: '03', title: 'End-to-End Encryption', desc: 'Matrix Protocol foundation. Client-to-client encryption. No server access.' },
  { num: '04', title: 'Decentralized Infrastructure', desc: 'NEAR Protocol layer. Peer-to-peer delivery. No single point of failure.' },
  { num: '05', title: 'Real-Time Engine', desc: 'WebRTC architecture. Sub-100ms latency. Adaptive bitrate streaming.' },
  { num: '06', title: 'Unified Identity & Wallet', desc: 'Cross-product portable identity. Single sign-on. Soulbound reputation tokens.' },
]

export const industries: Industry[] = [
  {
    title: 'Smart Cities & Digital Twins',
    href: '/industries/smart-cities',
    desc: 'Real-time sensor data infrastructure for digital twin city platforms. Active ground-truth sensors delivering lean packet data feeds for urban modelling at scale.'
  },
  {
    title: 'Gaming & Esports',
    href: '/industries/gaming',
    desc: 'Streaming infrastructure, tournament tools, and creator community platforms built for competitive gaming at scale.'
  },
  {
    title: 'Entertainment & Music',
    href: '/industries/entertainment',
    desc: 'Live event streaming, token-gated experiences, and artist-direct payment infrastructure for the next era of entertainment.'
  },
  {
    title: 'Tourism & Hospitality',
    href: '/industries/tourism',
    desc: 'White-label interactive experiences for cruise lines, resorts, destination-groups, and cultural heritage organizations.'
  },
  {
    title: 'Enterprise & Government',
    href: '/industries/enterprise',
    desc: 'Secure, compliance-ready communications infrastructure with data sovereignty and end-to-end encryption.'
  },
  {
    title: 'Healthcare',
    href: '/industries/healthcare',
    desc: 'HIPAA-compliant video infrastructure for telehealth, medical education, and secure patient communications.'
  },
  {
    title: 'Government',
    href: '/industries',
    desc: 'Secure digital infrastructure for public sector services, internal operations, and citizen-facing platforms.'
  },
  {
    title: 'CPG & Retail',
    href: '/industries',
    desc: 'Connected commerce experiences for consumer brands, retail activation, and audience engagement at scale.'
  },
  {
    title: 'Education',
    href: '/industries/education',
    desc: 'FERPA-compliant platforms for virtual classrooms, interactive learning, and student credentialing at scale.'
  },
  {
    title: 'Financial Services',
    href: '/industries/financial',
    desc: 'SOC 2 certified communications with regulatory compliance, audit trails, and client confidentiality built in.'
  },
]

export const dataSpecs = [
  { label: 'Packet Size', title: 'Ultra-Lean Architecture', desc: 'Compressed data packets designed for city-scale model ingestion at volume' },
  { label: 'Latency', title: 'Real-Time Ground Truth', desc: "Active sensors delivering what's happening now, not historical or satellite-delayed" },
  { label: 'Integration', title: 'Plug & Play', desc: 'Standardized feeds that slot directly into existing twin city platforms' },
]

export const waysIn = [
  {
    num: '01',
    title: 'Data licensing',
    desc: 'Exclusive category access to XR consumer intelligence before the market catches up.'
  },
  {
    num: '02',
    title: 'Commercial partnerships',
    desc: 'Brand and platform integration into a real-time multi-platform consumer network.'
  },
  {
    num: '03',
    title: 'Developer infrastructure',
    desc: 'Build on a compliant, scalable environment that spans every major XR platform.'
  },
  {
    num: '04',
    title: 'Institutional distribution',
    desc: 'Reach XR consumers through existing financial networks.'
  }
]
