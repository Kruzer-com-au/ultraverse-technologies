import { NavItem } from '@/lib/types';

export const navItems: NavItem[] = [
  {
    label: 'Products',
    href: '/products',
    subItems: [
      { label: 'ULTRADATA', href: '/products/ultradata', description: 'City sensor data & digital twins' },
      { label: 'ULTRASTREAM', href: '/products/ultrastream', description: 'Streaming infrastructure' },
      { label: 'ULTRAVERSE', href: '/products/ultraverse', description: 'Gaming & AR infrastructure' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    subItems: [
      { label: 'White-Label Streaming', href: '/solutions/white-label-streaming', description: 'Custom-branded platforms' },
      { label: 'Privacy', href: '/solutions/privacy-compliance', description: 'Regulatory-ready infrastructure' },
      { label: 'Creator Economy', href: '/solutions/creator-economy', description: 'Payments & engagement' },
      { label: 'Secure Communications', href: '/solutions/secure-communications', description: 'E2E encrypted messaging' },
      { label: 'Community SDK', href: '/solutions/community-sdk', description: 'Social & gamification tools' },
      { label: 'City Data & Digital Twins', href: '/solutions/city-data', description: 'Plug & play sensor data' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    subItems: [
      { label: 'Smart Cities', href: '/industries/smart-cities', description: 'Digital twin data feeds' },
      { label: 'Gaming & Esports', href: '/industries/gaming', description: 'Tournament & streaming' },
      { label: 'Entertainment & Music', href: '/industries/entertainment', description: 'Live events & artist tools' },
      { label: 'Tourism & Hospitality', href: '/industries/tourism', description: 'Interactive experiences' },
      { label: 'Enterprise & Government', href: '/industries/enterprise', description: 'Secure infrastructure' },
      { label: 'Healthcare', href: '/industries/healthcare', description: 'HIPAA-compliant solutions' },
      { label: 'Education', href: '/industries/education', description: 'FERPA-compliant platforms' },
      { label: 'Financial Services', href: '/industries/financial', description: 'Regulatory compliance' },
    ],
  },
  { label: 'Technology', href: '/technology' },
  { label: 'Company', href: '/company' },
  { label: 'Contact', href: '/contact' },
];
