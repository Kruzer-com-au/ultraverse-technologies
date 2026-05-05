import { IndustryPageData } from './types'

export const gamingData: IndustryPageData = {
  hero: {
    label: "Gaming & Esports",
    title: "Infrastructure Built for Competitive Gaming",
    description: "From tournament broadcasts to creator communities, deliver the performance and scale that gaming audiences demand. Ultra-low latency, real-time interaction, and seamless in-game integration.",
    ctaText: "Contact Sales",
    ctaHref: "/contact",
    secondaryCtaText: "View All Industries",
    secondaryCtaHref: "/industries",
  },
  sections: [
    {
      id: "use-cases",
      label: "Use Cases",
      title: "How We Serve Gaming & Esports",
      theme: "light",
      items: [
        {
          num: "01",
          title: "Esports Tournament Streaming",
          desc: "Broadcast tournaments to global audiences with ultra-low latency, multi-camera switching, and real-time stats overlays. Purpose-built for competitive integrity and viewer engagement.",
        },
        {
          num: "02",
          title: "Gaming Community Platforms",
          desc: "Build persistent, branded communities around your game or league. Integrated chat, content sharing, leaderboards, and creator tools keep players engaged between sessions.",
        },
        {
          num: "03",
          title: "In-Game Live Events",
          desc: "Embed live streaming directly into game environments. Concert-style events, developer Q&As, and sponsored activations that reach players where they already are.",
        },
        {
          num: "04",
          title: "Creator & Streamer Tools",
          desc: "Equip creators with professional broadcasting tools, audience analytics, and monetization infrastructure. Reduce dependency on third-party platforms while retaining full control.",
        },
      ],
    }
  ],
  visuals: [
    {
      label: "800 × 500",
      sublabel: "Gaming Studio",
      aspectRatio: "800/500",
      src: "/images/industries/gaming-studio.png",
    },
    {
      label: "800 × 500",
      sublabel: "Esports Tournament",
      aspectRatio: "800/500",
      src: "/images/industries/esports-tournament.png",
    },
  ],
  products: {
    label: "Products",
    title: "Relevant Products",
    items: [
      {
        num: "01",
        title: "ULTRASTREAM",
        desc: "Ultra-low latency streaming infrastructure optimized for live competitive gaming broadcasts.",
        href: "/products/ultrastream",
      },
      {
        num: "02",
        title: "Squad Legacy",
        desc: "Team-based gameplay and community tools designed for competitive gaming organizations.",
        href: "/products/squad-legacy",
      },
      {
        num: "03",
        title: "Quantum Creatures",
        desc: "In-game economy integration and collectible creature mechanics for engaging player ecosystems.",
        href: "/products/quantum-creatures",
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
        desc: "Fully branded streaming platform deployed under your identity with complete control over the experience.",
        href: "/solutions",
      },
      {
        num: "02",
        title: "Community SDK",
        desc: "Embeddable community modules for chat, forums, leaderboards, and creator tools within your platform.",
        href: "/solutions",
      },
    ],
  },
  cta: {
    heading: "Ready to Level Up Your Gaming Platform?",
    subheading: "Talk to our team about streaming infrastructure, community tools, and in-game integrations for your organization.",
    ctaLabel: "Get in Touch",
  },
};
