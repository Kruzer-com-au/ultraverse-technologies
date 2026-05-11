import { Metadata } from 'next'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import ProductLinkList from '@/components/sections/product/ProductLinkList'
import CTASection from '@/components/sections/CTASection'
import { educationData } from '@/data/industries/education'

export const metadata: Metadata = {
  title: 'Education Solutions | ULTRAVERSE',
  description: 'FERPA-compliant learning infrastructure. Secure virtual classrooms, lecture streaming, student community platforms, and digital credentialing.',
}

export default function EducationPage() {
  const { 
    hero, 
    sections, 
    visuals, 
    products, 
    solutions, 
    cta 
  } = educationData

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
      {sections?.map((section) => (
        <ProductFeatureList 
          key={section.id}
          id={section.id}
          label={section.label}
          title={section.title}
          description={section.description || ''}
          features={section.items}
          theme={section.theme}
        />
      ))}

      {/* Visuals Section */}
      <ProductVisuals 
        grid={visuals}
        bgClass="bg-background"
      />

      {/* Relevant Products */}
      {products && (
        <ProductLinkList 
          label={products.label}
          title={products.title}
          items={products.items}
        />
      )}

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
