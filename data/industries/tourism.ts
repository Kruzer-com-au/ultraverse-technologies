import { IndustryPageData } from './types'

export const tourismData: IndustryPageData = {
  hero: {
    label: "Tourism & Hospitality",
    title: "Interactive Experiences That Transform Destinations",
    description: "White-label Time Odyssey deployments for cruise lines, resorts, destination marketing organizations, and cultural heritage sites. Custom-branded experiences that explore historical narratives and cultural landmarks in real time.",
    ctaText: "Contact Sales",
    ctaHref: "/contact",
    secondaryCtaText: "View All Industries",
    secondaryCtaHref: "/industries",
  },
  sections: [
    {
      id: "platform",
      label: "Platform",
      title: "Purpose-Built for Tourism & Hospitality",
      theme: "light",
      items: [
        {
          num: "01",
          title: "White-Label Ready",
          desc: "Fully branded to your organization with no ULTRAVERSE branding visible to guests.",
        },
        {
          num: "02",
          title: "Works Offline",
          desc: "Designed for environments with limited connectivity, including cruise ships at sea.",
        },
        {
          num: "03",
          title: "Location-Aware",
          desc: "GPS and beacon-triggered experiences that activate at real-world points of interest.",
        },
        {
          num: "04",
          title: "Multilingual",
          desc: "Content localization and real-time translation for international guest audiences.",
        },
      ],
    },
    {
      id: "cruise-lines",
      label: "Cruise Lines",
      title: "Cruise Line Entertainment",
      theme: "dark",
      items: [
        {
          num: "01",
          title: "Branded Onboard Entertainment",
          desc: "Deploy Time Odyssey as your cruise line's own entertainment experience. Guests explore historical narratives tied to your itinerary destinations, all under your brand identity. No internet required at sea.",
        },
        {
          num: "02",
          title: "Itinerary-Linked Content",
          desc: "Automatically surface stories and challenges based on the ship's current position and upcoming ports of call. As the vessel approaches Alexandria, guests unlock ancient Egyptian narratives. Nearing Athens, Greek mythology comes alive.",
        },
        {
          num: "03",
          title: "Guest Engagement Analytics",
          desc: "Understand how guests interact with onboard entertainment. Session duration, completion rates, content preferences, and engagement patterns inform programming decisions and drive repeat bookings.",
        },
        {
          num: "04",
          title: "Offline-First Architecture",
          desc: "Full functionality without satellite internet. Content is pre-loaded and synced at port, ensuring seamless performance in the middle of the ocean. Background sync when connectivity is available.",
        },
      ],
      subGrid: {
        title: "Why Cruise Lines Choose Time Odyssey",
        items: [
          {
            title: "Guest Satisfaction",
            desc: "Interactive entertainment that engages guests across all age groups and interests. Meaningful content tied to the voyage creates deeper emotional connections to the cruise experience.",
          },
          {
            title: "Operational Simplicity",
            desc: "Offline-first design means zero dependency on satellite bandwidth. Content updates sync automatically at port. No onboard technical staff required for daily operation.",
          },
          {
            title: "Revenue Opportunity",
            desc: "Premium experience tiers, in-experience merchandise, and partner integrations create new ancillary revenue streams. Engagement data informs future itinerary and programming decisions.",
          },
        ],
      },
    },
    {
      id: "destination-marketing",
      label: "Destination Marketing",
      title: "Bring Regional Stories to Life",
      theme: "light",
      items: [
        {
          num: "01",
          title: "Regional Storytelling at Scale",
          desc: "Tourism boards and destination marketing organizations bring regional history, culture, and landmarks to life through interactive gameplay. Visitors engage with real locations through narrative-driven challenges that deepen their connection to the destination.",
        },
        {
          num: "02",
          title: "Visitor Journey Mapping",
          desc: "Guide visitors through curated routes that highlight key attractions, hidden gems, and local businesses. Dynamic pathfinding adapts to time of day, seasonal events, and real-time crowd density.",
        },
        {
          num: "03",
          title: "Local Business Integration",
          desc: "Connect visitors with local restaurants, shops, and experiences through in-game rewards and discovery mechanics. Drive foot traffic to partner businesses while enriching the visitor experience.",
        },
      ],
    },
    {
      id: "cultural-heritage",
      label: "Cultural Heritage",
      title: "History, Alive",
      theme: "dark",
      items: [
        {
          num: "01",
          title: "AR Historical Reconstruction",
          desc: "Overlay historically accurate 3D reconstructions onto real-world ruins, monuments, and archaeological sites. Visitors see ancient structures as they once stood, guided by narrative that brings centuries of history into the present moment.",
        },
        {
          num: "02",
          title: "Curator-Authored Narratives",
          desc: "Museum professionals and historians author the stories. Our platform provides the tools to transform scholarly knowledge into engaging, interactive experiences without requiring technical expertise.",
        },
        {
          num: "03",
          title: "Artifact Deep-Dives",
          desc: "Point a device at an exhibit to unlock detailed provenance, conservation stories, and contextual narratives that go far beyond a placard. Multi-layered content serves casual visitors and serious scholars alike.",
        },
      ],
      quote: {
        text: "The goal is not to replace the physical experience, but to add layers of context and narrative that make every visit more meaningful. Technology should serve the story, not overshadow it.",
        author: "ULTRAVERSE Heritage Team",
        label: "Heritage Preservation",
      },
    },
    {
      id: "resorts-hotels",
      label: "Resorts & Hotels",
      title: "Resort & Hotel Experiences",
      theme: "light",
      items: [
        {
          num: "01",
          title: "Property-Wide Adventures",
          desc: "Transform your resort grounds into an interactive playground. Scavenger hunts, historical narratives tied to the local region, and team challenges that encourage guests to explore every corner of the property.",
        },
        {
          num: "02",
          title: "Family & Group Experiences",
          desc: "Multi-player challenges designed for families and groups. Collaborative gameplay encourages interaction between guests, creating shared memories and social experiences that drive satisfaction and reviews.",
        },
        {
          num: "03",
          title: "Seasonal & Event Programming",
          desc: "Rotate content seasonally or tie experiences to special events, holidays, and themed weekends. Fresh content gives returning guests a reason to engage again, increasing repeat visit value.",
        },
      ],
    },
    {
      id: "process",
      label: "Process",
      title: "How We Deploy",
      theme: "light",
      items: [
        {
          num: "01",
          title: "Discovery",
          desc: "We learn your brand, your locations, and your guest demographics. Historical research begins in parallel with technical scoping.",
        },
        {
          num: "02",
          title: "Content Development",
          desc: "Our narrative team works with your historians, curators, or destination experts to craft authentic, engaging storylines tied to real locations.",
        },
        {
          num: "03",
          title: "White-Label Build",
          desc: "The platform is configured and branded to your organization. Custom UI, branded assets, and location-specific content are integrated and tested.",
        },
        {
          num: "04",
          title: "Launch & Iterate",
          desc: "Go live with full support. Analytics inform content updates, seasonal rotations, and expansion to additional properties or destinations.",
        },
      ],
    },
  ],
  visuals: [
    {
      label: "",
      sublabel: "Heritage Site AR Experience",
      aspectRatio: "1400/600",
      src: "/images/industries/HERITAGE_SITE_AR_EXPERIENCE.jpg",
    },
    {
      label: "",
      sublabel: "Tourist Destination",
      aspectRatio: "800/500",
      src: "/images/industries/TOURIST_DESTINATION.jpg",
    },
    {
      label: "",
      sublabel: "Tourist Destination",
      aspectRatio: "800/500",
      src: "/images/industries/TOURIST_DESTINATION_1.jpg",
    },
  ],
  products: {
    label: "Products",
    title: "Relevant Products",
    items: [
      {
        num: "01",
        title: "Time Odyssey",
        desc: "The core interactive experience platform. Historical narratives, location-based challenges, and AR-enhanced storytelling, deployed as a white-label solution under your brand.",
        href: "/products/time-odyssey",
      },
      {
        num: "02",
        title: "Ultraworld",
        desc: "Immersive virtual environments that extend physical destinations into digital space. Virtual tours, pre-trip exploration, and post-visit engagement.",
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
        desc: "Fully branded deployment with your identity, your content, and your guest data. No third-party branding visible to end users.",
        href: "/solutions/white-label-streaming",
      },
    ],
  },
  cta: {
    heading: "Ready to Transform Your Guest Experience?",
    subheading: "Talk to our team about white-label Time Odyssey deployments for your cruise line, resort, destination, or heritage site.",
    ctaLabel: "Schedule a Demo",
  },
};
