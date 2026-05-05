export interface IndustryHeroData {
  label: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export interface UseCaseItem {
  num: string;
  title: string;
  desc: string;
  bullets?: string[];
}

export interface VisualItemData {
  label: string;
  sublabel: string;
  aspectRatio?: string;
  src?: string;
}

export interface LinkItemData {
  num: string;
  title: string;
  desc: string;
  href: string;
}

export interface IndustryFeatureSection {
  id: string;
  label: string;
  title: string;
  description?: string;
  theme?: 'light' | 'dark';
  items: {
    num: string;
    title: string;
    desc: string;
  }[];
  subGrid?: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  quote?: {
    text: string;
    author: string;
    label: string;
  };
}

export interface IndustryPageData {
  hero: IndustryHeroData;
  problem?: {
    label: string;
    title: string;
    description: string;
  };
  challenges?: {
    label: string;
    title: string;
    items: {
      num: string;
      title: string;
      shortDesc: string;
      longDesc: string;
    }[];
  };
  sections?: IndustryFeatureSection[];
  visuals: VisualItemData[];
  products?: {
    label: string;
    title: string;
    items: LinkItemData[];
  };
  solutions?: {
    label: string;
    title: string;
    items: LinkItemData[];
  };
  stakeholders?: {
    label: string;
    title: string;
    items: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  cta: {
    heading: string;
    subheading: string;
    ctaLabel: string;
  };
}
