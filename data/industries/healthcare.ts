import { IndustryPageData } from './types'

export const healthcareData: IndustryPageData = {
  hero: {
    label: "Healthcare",
    title: "HIPAA-Compliant Video Infrastructure",
    description: "Secure, reliable video and communications infrastructure purpose-built for healthcare organizations. From telehealth to medical education, patient privacy is never compromised.",
    ctaText: "Contact Sales",
    ctaHref: "/contact",
    secondaryCtaText: "Explore Industries",
    secondaryCtaHref: "/industries",
  },
  sections: [
    {
      id: "use-cases",
      label: "Use Cases",
      title: "How We Serve Healthcare",
      theme: "light",
      items: [
        {
          num: "01",
          title: "Telehealth Platforms",
          desc: "HIPAA-compliant video infrastructure for virtual consultations, remote monitoring, and patient follow-ups. Low-latency, high-fidelity video ensures clinical-grade communication quality.",
        },
        {
          num: "02",
          title: "Medical Education Streaming",
          desc: "Stream surgical procedures, grand rounds, and continuing education content to distributed medical teams. Multi-angle cameras and annotation tools support real-time collaborative learning.",
        },
        {
          num: "03",
          title: "Patient Consultation Recording",
          desc: "Secure, encrypted recording of patient consultations with role-based access, automatic retention policies, and tamper-proof audit logs. Fully compliant with HIPAA and state-level regulations.",
        },
        {
          num: "04",
          title: "Inter-Facility Communications",
          desc: "Encrypted, real-time video and messaging between hospitals, clinics, and specialist offices. Secure referral workflows and multi-party consultations that meet healthcare compliance standards.",
        },
      ],
    }
  ],
  visuals: [
    {
      label: "",
      sublabel: "Telehealth Consultation",
      aspectRatio: "1400/600",
      src: "/images/industries/TELEHEALTH_CONSULTATION.jpg",
    },
    {
      label: "",
      sublabel: "Hospital Tech Infrastructure",
      aspectRatio: "800/500",
      src: "/images/industries/HOSPITAL_TECH_INFRASTRUCTURE.jpg",
    },
    {
      label: "",
      sublabel: "Medical Education Stream",
      aspectRatio: "800/500",
      src: "/images/industries/MEDICAL_EDUCATION_STREAM.jpg",
    },
  ],
  products: {
    label: "Products",
    title: "Relevant Products",
    items: [
      {
        num: "01",
        title: "ULTRASTREAM",
        desc: "HIPAA-compliant streaming infrastructure with encryption, access controls, and audit logging for healthcare video.",
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
        desc: "End-to-end encrypted video and messaging infrastructure built for patient-provider communications.",
        href: "/solutions/secure-communications",
      },
      {
        num: "02",
        title: "Privacy & Compliance",
        desc: "HIPAA-compliant architecture with BAA support, encryption at rest and in transit, and audit logging.",
        href: "/solutions/privacy-compliance",
      },
    ],
  },
  cta: {
    heading: "Building for Healthcare?",
    subheading: "Our team will help you deploy HIPAA-compliant video infrastructure tailored to your clinical workflows.",
    ctaLabel: "Request a Consultation",
  },
};
