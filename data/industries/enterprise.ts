import { IndustryPageData } from './types'

export const enterpriseData: IndustryPageData = {
  hero: {
    label: "Enterprise & Government",
    title: "Secure Communications at Scale",
    description: "Compliance-ready infrastructure for organizations where data sovereignty, regulatory adherence, and communications security are non-negotiable.",
    ctaText: "Contact Sales",
    ctaHref: "/contact",
    secondaryCtaText: "Explore Industries",
    secondaryCtaHref: "/industries",
  },
  sections: [
    {
      id: "use-cases",
      label: "Use Cases",
      title: "How We Serve Enterprise & Government",
      theme: "light",
      items: [
        {
          num: "01",
          title: "Data Sovereignty & Secure Infrastructure",
          desc: "Deploy communications infrastructure within your jurisdiction and on your terms. Full control over data residency, encryption keys, and access policies to meet the strictest sovereignty requirements.",
        },
        {
          num: "02",
          title: "Regulatory Compliance",
          desc: "Infrastructure designed from the ground up for regulated environments. Meet ITAR, FedRAMP, CMMC, and industry-specific compliance frameworks without compromising on capability.",
        },
        {
          num: "03",
          title: "Internal Communications Security",
          desc: "End-to-end encrypted video conferencing, messaging, and file sharing for sensitive internal communications. Zero-knowledge architecture ensures only authorized personnel can access content.",
        },
        {
          num: "04",
          title: "Encrypted Streaming & Broadcasts",
          desc: "Secure, real-time streaming for classified briefings, all-hands meetings, and cross-agency communications. Military-grade encryption with audit logging and access controls.",
        },
      ],
    }
  ],
  visuals: [
    {
      label: "",
      sublabel: "Secure Operations Center",
      aspectRatio: "800/500",
      src: "/images/industries/SECURE_OPERATIONS_CENTER.jpg",
    },
    {
      label: "",
      sublabel: "Government Data Center",
      aspectRatio: "800/500",
      src: "/images/industries/GOVERNMENT_DATA_CENTER.jpg",
    },
  ],
  products: {
    label: "Products",
    title: "Relevant Products",
    items: [
      {
        num: "01",
        title: "ULTRASTREAM",
        desc: "Encrypted, low-latency streaming infrastructure with enterprise-grade access controls and audit logging.",
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
        desc: "End-to-end encrypted video, messaging, and file sharing with zero-knowledge architecture.",
        href: "/solutions/secure-communications",
      },
      {
        num: "02",
        title: "Privacy & Compliance",
        desc: "Infrastructure engineered for ITAR, FedRAMP, CMMC, and other regulatory frameworks.",
        href: "/solutions/privacy-compliance",
      },
    ],
  },
  cta: {
    heading: "Need Secure, Compliant Infrastructure?",
    subheading: "Our team specializes in deploying communications platforms that meet the strictest enterprise and government requirements.",
    ctaLabel: "Request a Briefing",
  },
};
