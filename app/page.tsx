import HeroSection       from '@/components/sections/HeroSection'
import AboutSection      from '@/components/sections/AboutSection'
import ProductsSection   from '@/components/sections/ProductsSection'
import DataLayerSection  from '@/components/sections/DataLayerSection'
import TechnologySection from '@/components/sections/TechnologySection'
import IndustriesSection from '@/components/sections/IndustriesSection'
import CTASection        from '@/components/sections/CTASection'

import {
  heroFeatures,
  products,
  dataTypes,
  dataSpecs,
  techPillars,
  industries,
} from '@/lib/home-data'

export default function Home() {
  return (
    <>
      <HeroSection
        tagline="Data · Streaming · Gaming · Enterprise"
        lines={['Technology', 'infrastructure']}
        accentLine="built for scale."
        features={heroFeatures}
      />

      <AboutSection />

      <ProductsSection products={products} />

      <DataLayerSection dataTypes={dataTypes} specs={dataSpecs} />

      <TechnologySection pillars={techPillars} />

      <IndustriesSection industries={industries} />

      <CTASection />
    </>
  )
}
