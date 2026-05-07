import ScrollReveal from '@/components/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionHeading'
import { DarkCard } from '@/components/ui/Cards'
import { Button } from '@/components/ui/Button'
import type { TechPillar } from '@/lib/home-data'

interface TechnologySectionProps {
  pillars: TechPillar[]
}

export default function TechnologySection({ pillars }: TechnologySectionProps) {
  return (
    <section className="section-dark py-32 lg:py-48 px-6 lg:px-12 relative">
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <ScrollReveal><SectionLabel>Our Technology</SectionLabel></ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="editorial-heading text-[clamp(1.5rem,4vw,4rem)] text-white mb-4 py-2">Built on Data-First <br /> Privacy-First Architecture </h2>
        </ScrollReveal>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10">
          {pillars.map((t, i) => (
            <ScrollReveal key={t.num} delay={i * 0.1} className="h-full">
              <DarkCard num={t.num} title={t.title} desc={t.desc} size="lg" />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12">
            <Button href="/technology" variant="teal">Explore Our Technology</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
