import { NavItem } from '@/lib/types';

export const navItems: NavItem[] = [
  { label: 'Technology', href: '/technology' },
  {
    label: 'Products',
    href: '/products',
    subItems: [
      { label: 'ULTRASTREAM', href: '/products/ultrastream', description: 'Next-gen streaming infrastructure.' },
      { label: 'ULTRADATA', href: '/products/ultradata', description: 'Decentralized data edge.' },
      { label: 'ULTRAVERSE', href: '/products/ultraverse', description: 'Immersive virtual worlds.' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    subItems: [
      { label: 'White Label Streaming', href: '/solutions/white-label-streaming' },
      { label: 'Privacy Compliance', href: '/solutions/privacy-compliance' },
      { label: 'Creator Economy', href: '/solutions/creator-economy' },
      { label: 'Secure Communications', href: '/solutions/secure-communications' },
      { label: 'Community SDK', href: '/solutions/community-sdk' },
      { label: 'City Data', href: '/solutions/city-data' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    subItems: [
      { label: 'Smart Cities', href: '/industries/smart-cities' },
      { label: 'Gaming', href: '/industries/gaming' },
      { label: 'Entertainment', href: '/industries/entertainment' },
      { label: 'Tourism', href: '/industries/tourism' },
      { label: 'Enterprise', href: '/industries/enterprise' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Education', href: '/industries/education' },
      { label: 'Financial', href: '/industries/financial' },
    ],
  },
  {
    label: 'Company',
    href: '/company',
    subItems: [
      { label: 'About Us', href: '/company' },
      { label: 'Leadership', href: '/company/leadership' },
      { label: 'Careers', href: '/company/careers' },
      { label: 'Press', href: '/company/press' },
      { label: 'Partners', href: '/company/partners' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];
