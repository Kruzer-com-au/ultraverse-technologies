import HeroWrapper from '@/components/HeroWrapper'
import HeroVideo from '@/components/ui/HeroVideo'
import type { HeroFeature } from '@/lib/home-data'

interface HeroSectionProps {
  tagline: string
  lines: string[]          // first N lines (dark), last line handled via accentLine
  accentLine: string       // teal line
  features: HeroFeature[]
  company?: string
  year?: string
}

export default function HeroSection({
  tagline,
  lines,
  accentLine,
  features,
  company = 'Kruzer Ultraverse Pty Ltd',
  year = '2026',
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[100svh] flex flex-col pt-28 overflow-hidden">
      {/* Ambient teal glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none teal-glow"
        style={{ background: 'rgba(86,191,163,0.06)', filter: 'blur(120px)' }}
      />

      <HeroWrapper>
        {/* Headlines — pinned to bottom */}
        <div className="relative max-w-[1400px] mx-auto w-full flex-1 flex items-end pb-10 lg:pb-14 px-6 lg:px-12">
          <div className="w-full">
            {/* Eyebrow */}
            <p className="hero-animate-label editorial-uppercase text-[var(--accent-teal)] text-[10px] md:text-xs font-bold tracking-[0.25em] mb-6 lg:mb-8">
              {tagline}
            </p>

            {/* Main lines */}
            {lines.map((line, i) => (
              <h1 key={i} className="hero-animate-h1-1 editorial-display text-[clamp(2.2rem,7vw,8rem)] text-white  leading-[0.9] mb-1">
                {line}
              </h1>
            ))}

            {/* Accent line */}
            <h1 className="hero-animate-h1-2 editorial-display text-[clamp(2.2rem,7vw,8rem)] text-white  leading-[0.9] mb-8 lg:mb-14">
              {accentLine}
            </h1>

            {/* Feature callouts */}
            <div className="hero-animate-body max-w-4xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-4 lg:gap-y-5">
                {features.map(({ num, text, align }) => (
                  <div key={num} className={`flex items-start gap-3 md:gap-4 ${align === 'right' ? 'lg:justify-end lg:text-right' : ''}`}>
                    <span className={`editorial-uppercase text-[var(--accent-teal)] text-[10px] md:text-xs font-bold tracking-[0.2em] mt-[0.35em] shrink-0 tabular-nums ${align === 'right' ? 'lg:order-2' : ''}`}>
                      {num}
                    </span>
                    <span className={`text-[var(--text-primary)] text-sm md:text-base lg:text-lg font-medium tracking-[0.01em] leading-relaxed ${align === 'right' ? 'lg:order-1' : ''}`}>
                      {text}<span className="text-[var(--accent-teal)] font-black text-[1.2em] ml-[0.05em]">.</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video strip — HeroVideo handles guaranteed autoplay */}
        <div className="hero-animate-video relative w-full mt-auto mb-6">
          <HeroVideo />
        </div>

        {/* Bottom info bar */}
        <div className="hero-animate-bar relative max-w-[1400px] mx-auto w-full pt-6 pb-4 px-6 lg:px-12">
          <div className="border-t-2 border-black/15 pt-6">
            <div className="flex items-center justify-between">
              <span className="editorial-uppercase text-[var(--text-secondary)] text-xs font-semibold tracking-[0.15em]">{company}</span>
              <span className="editorial-uppercase text-[var(--text-secondary)] text-xs font-semibold tracking-[0.15em] hidden md:block">Scroll to explore</span>
              <span className="editorial-uppercase text-[var(--text-secondary)] text-xs font-semibold tracking-[0.15em]">{year}</span>
            </div>
          </div>
        </div>
      </HeroWrapper>
    </section>
  )
}
