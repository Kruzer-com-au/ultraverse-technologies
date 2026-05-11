import { Metadata } from 'next'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import ProductFeatureList from '@/components/sections/product/ProductFeatureList'
import CTASection from '@/components/sections/CTASection'
import IndustryProblem from '@/components/sections/industry/IndustryProblem'
import IndustryChallenges from '@/components/sections/industry/IndustryChallenges'
import { smartCitiesData } from '@/data/industries/smart-cities'

export const metadata: Metadata = {
  title: 'Smart Cities & Digital Twins | ULTRAVERSE',
  description: 'Building real-time ground-truth data infrastructure for the next generation of smart cities and digital twin models.',
}

export default function SmartCitiesPage() {
  const { 
    hero, 
    problem, 
    challenges, 
    visuals, 
    sections, 
    cta 
  } = smartCitiesData

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

      {/* Problem Section */}
      {problem && (
        <IndustryProblem 
          id="features"
          label={problem.label}
          title={problem.title}
          description={problem.description}
        />
      )}

      {/* Challenges Section */}
      {challenges && (
        <IndustryChallenges 
          label={challenges.label}
          title={challenges.title}
          challenges={challenges.items}
        />
      )}

      {/* Visuals Section */}
      <ProductVisuals 
        grid={visuals}
        bgClass="bg-background"
      />

      {/* Feature Sections (Stakeholders, etc) */}
      {sections?.map((section) => (
        <ProductFeatureList 
          key={section.id}
          id={section.id}
          label={section.label}
          title={section.title}
          description={section.description || ''}
          features={section.items}
          theme={section.theme}
          subGrid={section.subGrid}
          quote={section.quote}
        />
      ))}

      {/* CTA Section */}
      <CTASection 
        heading={cta.heading}
        subheading={cta.subheading}
        ctaLabel={cta.ctaLabel}
      />
    </main>
  )
}
