import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProductsSection from '@/components/sections/ProductsSection'
import DataLayerSection from '@/components/sections/DataLayerSection'
import TechnologySection from '@/components/sections/TechnologySection'
import IndustriesSection from '@/components/sections/IndustriesSection'
import CTASection from '@/components/sections/CTASection'
import HomeCTA from '@/components/sections/HomeCTA'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'

import {
  heroFeatures,
  products,
  dataTypes,
  dataSpecs,
  techPillars,
  industries,
  waysIn,
} from '@/lib/home-data'

export default function Home() {
  return (
    <>
      <HeroSection
        tagline="Data · Identity · Commerce · At scale"
        lines={[
          'Your next customer',
          'already lives in an',
          'augmented world.'
        ]}
        description="We built the infrastructure to reach them."
        features={heroFeatures}
      />
      <ProductFeatureList
        label="THE HOW"
        title="Four Ways In"
        description="ULTRAVERSE provides multiple entry points for enterprises, brands, and developers to access the augmented economy."
        features={waysIn}
        theme="light"
        layout="grid"
      />

      <HomeCTA />
      <AboutSection />

      <ProductsSection products={products} />

      <DataLayerSection dataTypes={dataTypes} specs={dataSpecs} />

      <TechnologySection pillars={techPillars} />

      <IndustriesSection industries={industries} />

      <CTASection />
    </>
  )
}
