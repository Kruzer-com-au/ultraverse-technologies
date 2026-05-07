import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionHeading'
import GeodesicBackground from '@/components/visuals/GeodesicBackground'

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 lg:py-48 px-6 lg:px-12 overflow-hidden bg-background">
      <div className="max-w-[1400px] mx-auto relative">
        {/* Top left dot */}
        {/* <div className="absolute -top-12 -left-6 w-2 h-2 bg-black rounded-full" /> */}

        <ScrollReveal>
          <SectionLabel>About ULTRAVERSE</SectionLabel>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="lg:col-span-8">
            <ScrollReveal delay={0.1}>
              <div className="relative group inline-block">
                {/* Heading Brackets */}
                <span className="absolute -top-4 -left-4 w-10 h-10 border-t border-l border-black/40 pointer-events-none" />
                <h2
                  className="editorial-heading text-[clamp(1.5rem,4vw,4rem)] text-white mb-12 py-2"
                  data-text="We build real-time data infrastructure for digital twin cities, privacy-first streaming, and immersive technology that redefines how cities and enterprises operate."
                >
                  We build real-time data infrastructure for digital twin cities, privacy-first
                  streaming, and immersive technology that redefines how cities and enterprises operate.
                </h2>
                <span className="absolute -bottom-4 -right-4 w-10 h-10 border-b border-r border-black/40 pointer-events-none" />
              </div>
            </ScrollReveal>

            <div className="max-w-2xl mt-8">
              <ScrollReveal delay={0.2}>
                <div className="relative group p-8">
                  {/* Description Brackets */}
                  <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-black/40 pointer-events-none" />
                  <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">
                    From active sensor networks feeding digital twin city models to streaming infrastructure
                    and immersive gaming IP — ULTRAVERSE operates at the intersection of real-time data,
                    entertainment, and privacy. Our lean packet architecture makes city-scale data actually processable.
                  </p>
                  <span className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-black/40 pointer-events-none" />
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3}>
              <Link
                href="/company"
                className="editorial-uppercase text-[var(--accent-teal)] text-xs font-bold tracking-[0.2em] inline-flex items-center gap-2 group mt-12 hover:text-[var(--accent-teal-deep)] transition-colors"
              >
                Learn about us
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right: 3D Geodesic Sphere */}
          <div className="lg:col-span-4 flex items-center justify-center self-stretch">
            <ScrollReveal className="relative w-full h-full flex items-center justify-center" delay={0.2}>
              <div className="relative w-[300px] h-[300px]">
                <GeodesicBackground 
                  className="absolute inset-0" 
                  opacity={0.8} 
                  interactive={true} 
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
