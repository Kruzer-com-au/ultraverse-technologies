import { IndustryPageData } from './types'

export const entertainmentData: IndustryPageData = {
  hero: {
    label: "Entertainment & Music",
    title: "The Future of Live Entertainment",
    description: "Stream live events at scale, build direct artist-fan relationships, and create immersive experiences that redefine what entertainment can be.",
    ctaText: "Contact Sales",
    ctaHref: "/contact",
    secondaryCtaText: "Explore Industries",
    secondaryCtaHref: "/industries",
  },
  sections: [
    {
      id: "use-cases",
      label: "Use Cases",
      title: "How We Serve Entertainment & Music",
      theme: "light",
      items: [
        {
          num: "01",
          title: "Concert & Live Event Streaming",
          desc: "Broadcast live performances to global audiences with studio-grade quality, spatial audio, and ultra-low latency. Multi-camera production tools give creators full control over the viewer experience.",
        },
        {
          num: "02",
          title: "Artist Fan Platforms",
          desc: "Give artists direct relationships with their audience. Token-gated content, exclusive drops, direct messaging, and fan communities that bypass traditional intermediaries.",
        },
        {
          num: "03",
          title: "Immersive Venue Experiences",
          desc: "Transform physical venues with interactive digital overlays, synchronized lighting, and audience participation tools. Bridge the gap between in-person and remote attendees.",
        },
        {
          num: "04",
          title: "Artist-Direct Payments",
          desc: "Transparent, real-time payment infrastructure that connects fans directly to artists. Eliminate opaque royalty structures and ensure creators are compensated instantly and fairly.",
        },
      ],
    }
  ],
  visuals: [
    {
      label: "",
      sublabel: "Live Concert Event",
      aspectRatio: "1400/600",
      src: "/images/industries/LIVE_CONCERT_EVENT.jpg",
    },
    {
      label: "",
      sublabel: "Artist Fan Platform",
      aspectRatio: "800/500",
      src: "/images/industries/ARTIST_FAN_PLATFORM.jpg",
    },
    {
      label: "",
      sublabel: "Immersive Venue Experience",
      aspectRatio: "800/500",
      src: "/images/industries/mr_kruzer_mmersive_venue_experience.jpg",
    },
  ],
  products: {
    label: "Products",
    title: "Relevant Products",
    items: [
      {
        num: "01",
        title: "ULTRASTREAM",
        desc: "Professional-grade streaming infrastructure with spatial audio and multi-camera production tools.",
        href: "/products/ultrastream",
      },
      {
        num: "02",
        title: "Ultraworld",
        desc: "Immersive virtual environments for concerts, festivals, and interactive entertainment experiences.",
        href: "/products/ultraworld",
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
        desc: "Deploy a fully branded streaming platform for your label, venue, or entertainment network.",
        href: "/solutions/white-label-streaming",
      },
      {
        num: "02",
        title: "Creator Economy",
        desc: "End-to-end infrastructure for artist monetization, fan engagement, and content distribution.",
        href: "/solutions/creator-economy",
      },
    ],
  },
  cta: {
    heading: "Ready to Transform Your Entertainment Platform?",
    subheading: "Talk to our team about streaming infrastructure, immersive experiences, and creator economy tools.",
    ctaLabel: "Get in Touch",
  },
};
