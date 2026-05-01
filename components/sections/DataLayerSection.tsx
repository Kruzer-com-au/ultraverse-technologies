import ScrollReveal from '@/components/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionHeading'
import { DarkCard, TealOrb } from '@/components/ui/Cards'
import { Button } from '@/components/ui/Button'
import type { DataType } from '@/lib/home-data'

interface DataSpec {
  label: string
  title: string
  desc: string
}

interface DataLayerSectionProps {
  dataTypes: DataType[]
  specs: DataSpec[]
}

export default function DataLayerSection({ dataTypes, specs }: DataLayerSectionProps) {
  return (
    <section className="section-dark py-16 md:py-32 lg:py-48 px-6 lg:px-12">
      <TealOrb size="w-[600px] h-[600px]" position="-top-48 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Section header */}
        <ScrollReveal><SectionLabel>The Data Layer</SectionLabel></ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="editorial-heading text-[clamp(1.8rem,4vw,4rem)] text-white mb-4 py-2">Plug &amp; Play Data</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <h2 className="editorial-heading text-[clamp(1.8rem,4vw,4rem)] text-white mb-12 py-2">for Twin Cities</h2>
        </ScrollReveal>

        {/* Two-column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.2}>
              <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-6">
                Digital twin city platforms need ground-truth data that's current, processable, and standardized.
                Most real-world data is too noisy, too heavy, or too delayed for large-scale city models.
              </p>
              <p className="text-white/70 text-base lg:text-lg leading-relaxed">
                ULTRAVERSE deploys active sensor networks across launch cities, producing ultra-lean packet sets
                specifically engineered for twin city ingestion. No raw dumps. No cleaning required. Just
                plug-and-play data feeds that city-scale models can actually use.
              </p>
            </ScrollReveal>
          </div>

          {/* Specs list */}
          <div className="lg:col-span-5 lg:col-start-8">
            <ScrollReveal delay={0.25}>
              <div className="space-y-6">
                {specs.map(item => (
                  <div key={item.label} className="border-l-2 border-[var(--accent-teal)] pl-6">
                    <p className="editorial-uppercase text-white text-[10px] tracking-[0.15em] mb-1">{item.label}</p>
                    <p className="text-white text-lg font-bold">{item.title}</p>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Data type cards */}
        <ScrollReveal delay={0.3}>
          <SectionLabel>Data Types We Deliver</SectionLabel>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {dataTypes.map((d, i) => (
            <ScrollReveal key={d.num} delay={i * 0.05}>
              <DarkCard num={d.num} title={d.title} desc={d.desc} size="sm" />
            </ScrollReveal>
          ))}
        </div>

        {/* CTAs */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/products/ultradata" variant="teal">Explore ULTRADATA</Button>
            <Button href="/solutions/city-data" variant="outline-dark">City Data Solutions</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
