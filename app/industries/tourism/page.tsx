import { Metadata } from 'next'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductLinkList from '@/components/sections/product/ProductLinkList'
import CTASection from '@/components/sections/CTASection'
import { tourismData } from '@/data/industries/tourism'

export const metadata: Metadata = {
  title: 'Tourism & Hospitality Solutions | ULTRAVERSE',
  description: 'Transform destinations with interactive experiences. White-label Time Odyssey deployments for cruise lines, resorts, and heritage sites.',
}

export default function TourismPage() {
  const { 
    hero, 
    sections, 
    visuals, 
    products, 
    solutions, 
    cta 
  } = tourismData

  return (
    <main className="flex-1 bg-background">
      {/* Hero Section */}
      <ProductHero 
        label={hero.label}
        title={hero.title}
        description={hero.description}
        ctaText={hero.ctaText}
        ctaHref={hero.ctaHref}
        secondaryCtaText={hero.secondaryCtaText}
        secondaryCtaHref={hero.secondaryCtaHref}
      />

      {/* Feature Sections */}
      {sections?.map((section, idx) => (
        <div key={section.id}>
          <ProductFeatureList 
            id={section.id}
            label={section.label}
            title={section.title}
            description={section.description || ''}
            features={section.items}
            theme={section.theme}
            subGrid={section.subGrid}
            quote={section.quote}
          />
          
          {/* Inject visuals between sections as per design flow */}
          {section.id === 'cruise-lines' && (
            <ProductVisuals 
              grid={[visuals[1], visuals[2]]}
              bgClass="bg-background"
            />
          )}
          
          {section.id === 'process' && (
            <ProductVisuals 
              primary={visuals[0]}
              bgClass="bg-background"
            />
          )}
        </div>
      ))}

      {/* Relevant Products */}
      {/* {products && (
        <ProductLinkList 
          label={products.label}
          title={products.title}
          items={products.items}
        />
      )} */}

      {/* Relevant Solutions */}
      {solutions && (
        <ProductLinkList 
          label={solutions.label}
          title={solutions.title}
          items={solutions.items}
        />
      )}

      {/* CTA Section */}
      <CTASection 
        heading={cta.heading}
        subheading={cta.subheading}
        ctaLabel={cta.ctaLabel}
      />
    </main>
  )
}
