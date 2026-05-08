import { IndustryPageData } from './types'

export const educationData: IndustryPageData = {
  hero: {
    label: "Education",
    title: "FERPA-Compliant Learning Infrastructure",
    description: "Secure, interactive platforms for virtual classrooms, lecture streaming, student communities, and credentialing. Built for institutions that take student privacy seriously.",
    ctaText: "Contact Sales",
    ctaHref: "/contact",
    secondaryCtaText: "Explore Industries",
    secondaryCtaHref: "/industries",
  },
  sections: [
    {
      id: "use-cases",
      label: "Use Cases",
      title: "How We Serve Education",
      theme: "light",
      items: [
        {
          num: "01",
          title: "Virtual Classrooms",
          desc: "Interactive, real-time virtual classrooms with breakout rooms, screen sharing, whiteboarding, and attendance tracking. FERPA-compliant by design, supporting K-12 through higher education.",
        },
        {
          num: "02",
          title: "Lecture Streaming & Recording",
          desc: "Stream and record lectures with automatic captioning, searchable transcripts, and on-demand playback. Multi-camera support for lab demonstrations and interactive coursework.",
        },
        {
          num: "03",
          title: "Student Community Platforms",
          desc: "Branded community spaces for student organizations, study groups, and campus-wide communication. Moderation tools, role-based access, and integrations with existing LMS platforms.",
        },
        {
          num: "04",
          title: "Assessment & Credentialing",
          desc: "Secure proctoring, skill-based assessments, and verifiable digital credentials. Tamper-proof records and portable credentials that students and institutions can trust.",
        },
      ],
    }
  ],
  visuals: [
    {
      label: "",
      sublabel: "Virtual Classroom",
      aspectRatio: "800/500",
      src: "/images/industries/VIRTUAL_CLASSROOM.jpg",
    },
    {
      label: "",
      sublabel: "Campus Learning Hub",
      aspectRatio: "800/500",
      src: "/images/industries/CAMPUS_LEARNING_HUB.jpg",
    },
  ],
  products: {
    label: "Products",
    title: "Relevant Products",
    items: [
      {
        num: "01",
        title: "ULTRASTREAM",
        desc: "Low-latency streaming and recording infrastructure with FERPA-compliant access controls and data handling.",
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
        title: "White-Label Streaming",
        desc: "Deploy a branded streaming platform for your institution with full control over the student experience.",
        href: "/solutions/white-label-streaming",
      },
      {
        num: "02",
        title: "Community SDK",
        desc: "Embeddable community modules for student engagement, discussion forums, and collaborative learning.",
        href: "/solutions/community-sdk",
      },
    ],
  },
  cta: {
    heading: "Modernizing Your Learning Platform?",
    subheading: "Our team will help you deploy FERPA-compliant streaming, community, and credentialing infrastructure for your institution.",
    ctaLabel: "Request a Demo",
  },
};
