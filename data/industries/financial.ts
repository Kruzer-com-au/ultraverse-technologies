import { IndustryPageData } from './types'

export const financialData: IndustryPageData = {
  hero: {
    label: "Financial Services",
    title: "SOC 2 Certified Communications",
    description: "Secure communications infrastructure built for financial services organizations where client confidentiality, regulatory compliance, and audit readiness are fundamental requirements.",
    ctaText: "Contact Sales",
    ctaHref: "/contact",
    secondaryCtaText: "View All Industries",
    secondaryCtaHref: "/industries",
  },
  sections: [
    {
      id: "use-cases",
      label: "Use Cases",
      title: "How We Serve Financial Services",
      theme: "light",
      items: [
        {
          num: "01",
          title: "Client Advisory Calls",
          desc: "Encrypted, recorded video consultations for wealth management, investment advisory, and client relationship management. Automatic compliance archiving ensures every interaction is audit-ready.",
        },
        {
          num: "02",
          title: "Internal Compliance Communications",
          desc: "Secure channels for compliance teams to discuss sensitive regulatory matters, conduct internal investigations, and coordinate responses. Role-based access with complete audit trails.",
        },
        {
          num: "03",
          title: "Training & Onboarding",
          desc: "Secure streaming for compliance training, new hire onboarding, and continuing education. Track completion, issue certifications, and maintain records for regulatory review.",
        },
        {
          num: "04",
          title: "Regulatory Audit Trails",
          desc: "Immutable, timestamped records of all communications activity. Automated retention policies, eDiscovery support, and export capabilities to satisfy SEC, FINRA, and global regulatory requirements.",
        },
      ],
    }
  ],
  visuals: [
    {
      label: "",
      sublabel: "Trading Floor",
      aspectRatio: "800/500",
      src: "/images/industries/TRADING_FLOOR.jpg",
    },
    {
      label: "",
      sublabel: "Client Advisory Suite",
      aspectRatio: "800/500",
      src: "/images/industries/CLIENT_ADVISORY_SUITE.jpg",
    },
  ],
  products: {
    label: "Products",
    title: "Relevant Products",
    items: [
      {
        num: "01",
        title: "ULTRASTREAM",
        desc: "SOC 2 certified streaming infrastructure with encrypted recording, automated retention, and comprehensive audit logging.",
        href: "/products/ultrastream",
      },
    ],
  },
  solutions: {
    label: "Solutions",
    title: "Relevant Solutions",
    items: [
      {
        num: "01",
        title: "Secure Communications",
        desc: "SOC 2 certified, end-to-end encrypted video and messaging with automatic compliance archiving.",
        href: "/solutions",
      },
      {
        num: "02",
        title: "Privacy & Compliance",
        desc: "Infrastructure engineered for SEC, FINRA, MiFID II, and global financial regulatory frameworks.",
        href: "/solutions",
      },
    ],
  },
  cta: {
    heading: "Need Compliant Communications Infrastructure?",
    subheading: "Our team specializes in deploying SOC 2 certified platforms that meet the demands of financial regulators worldwide.",
    ctaLabel: "Schedule a Consultation",
  },
};
