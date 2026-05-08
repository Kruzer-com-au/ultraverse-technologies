import { IndustryPageData } from './types'

export const smartCitiesData: IndustryPageData = {
  hero: {
    label: "Industries — Smart Cities",
    title: "Smart Cities & Digital Twins",
    description: "The cities of tomorrow need data infrastructure built for today. Active sensor networks delivering real-time, model-ready data for urban intelligence at scale.",
    ctaText: "Talk to Our City Team",
    ctaHref: "/contact",
    secondaryCtaText: "Explore Industries",
    secondaryCtaHref: "/industries",
  },
  problem: {
    label: "The Smart City Data Problem",
    title: "Every city wants a digital twin. None of them have the real-time data infrastructure to make one work. That is the gap we fill.",
    description: "Digital twin city models are only as good as the data feeding them. ULTRAVERSE deploys active sensor networks across launch cities and delivers that data in ultra-lean packets designed for direct model ingestion. No raw dumps. No quarterly reports. Real-time ground truth, continuously flowing.",
  },
  challenges: {
    label: "Challenges",
    title: "Problems We Solve",
    items: [
      {
        num: "01",
        title: "Data Freshness",
        shortDesc: "Most city data is historical — census reports, annual surveys, satellite passes. By the time it reaches a model, it is already outdated.",
        longDesc: "ULTRADATA sensors deliver sub-second ground-truth data. Your twin city model reflects what is happening now, not what happened last quarter.",
      },
      {
        num: "02",
        title: "Data Weight",
        shortDesc: "Raw IoT dumps and unstructured sensor output are too heavy for city-scale models to ingest at volume. Processing overhead kills real-time capability.",
        longDesc: "Our lean packet architecture compresses and structures data at the edge. Every packet is model-ready — no ETL, no cleaning, no transformation pipeline.",
      },
      {
        num: "03",
        title: "Standardization",
        shortDesc: "Every sensor vendor, every city department, every data source uses different formats. Integration is a full-time engineering effort.",
        longDesc: "ULTRADATA delivers standardized feeds with documented schemas. Plug & play connectors for major digital twin platforms. One integration, all data types.",
      },
      {
        num: "04",
        title: "Privacy Compliance",
        shortDesc: "Urban sensing raises legitimate privacy concerns. Regulatory requirements differ across jurisdictions and are constantly evolving.",
        longDesc: "Privacy-preserving by architecture. Data is aggregated and anonymized at the sensor level using zero-knowledge principles. No PII ever leaves the network.",
      },
    ],
  },
  sections: [
    {
      id: "stakeholders",
      label: "Stakeholders",
      title: "Built for City Stakeholders",
      theme: "light",
      items: [
        {
          num: "01",
          title: "City Governments",
          desc: "Real-time operational intelligence for traffic management, emergency response, urban planning, and citizen services. Data-driven governance with privacy-preserving infrastructure.",
        },
        {
          num: "02",
          title: "Urban Planning Firms",
          desc: "Ground-truth baselines for development proposals, impact assessments, and infrastructure planning. Simulate changes against live data, not historical estimates.",
        },
        {
          num: "03",
          title: "Digital Twin Platform Vendors",
          desc: "Plug & play data feeds that enhance your platform's value proposition. Pre-integrated, standardized, and continuously updated from active sensor networks.",
        },
        {
          num: "04",
          title: "Infrastructure & Construction",
          desc: "Construction activity monitoring, infrastructure load data, and development velocity metrics. Plan, build, and operate with continuous ground-truth intelligence.",
        },
        {
          num: "05",
          title: "Transport Authorities",
          desc: "Multimodal mobility data from vehicles to cyclists to pedestrians. Real-time flow analysis, capacity planning, and route optimization intelligence.",
        },
        {
          num: "06",
          title: "Sustainability & Climate Orgs",
          desc: "Hyper-local environmental monitoring at street level. Air quality, noise, microclimate data for carbon reduction tracking and green infrastructure planning.",
        },
      ],
    }
  ],
  visuals: [
    {
      label: "",
      sublabel: "City Skyline Digital Twin",
      aspectRatio: "800/500",
      src: "/images/industries/CITY_SKYLINE_DIGITAL_TWIN.jpg",
    },
    {
      label: "",
      sublabel: "Urban Sensor Network",
      aspectRatio: "800/500",
      src: "/images/industries/URBAN_SENSOR_NETWORK.jpg",
    },
  ],
  cta: {
    heading: "Let's Build Your City's Data Layer",
    subheading: "Whether you're a city government, planning firm, or platform vendor — talk to our team about sensor deployment and data integration.",
    ctaLabel: "Get in Touch",
  },
};
