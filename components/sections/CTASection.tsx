import ScrollReveal from '@/components/ScrollReveal'
import { TealOrb } from '@/components/ui/Cards'
import { Button } from '@/components/ui/Button'

interface CTASectionProps {
  heading?: string
  subheading?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function CTASection({
  heading = 'Ready to Build With ULTRAVERSE?',
  subheading = 'Talk to our team about how our technology and products can power your next initiative.',
  ctaLabel = 'Get in Touch',
  ctaHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-32 lg:py-48 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="section-dark rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-20 text-center">
          <TealOrb size="w-[300px] h-[300px]" position="-top-20 -right-20" />
          <TealOrb size="w-[200px] h-[200px]" position="-bottom-10 -left-10" delay="3s" />

          <div className="relative z-10">
            <ScrollReveal>
              <h2
                className="glitch-text editorial-heading text-[clamp(1.8rem,4vw,4rem)] text-white mb-6"
                data-text={heading}
              >
                {heading}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-white/60 text-base mb-10 max-w-xl mx-auto">
                {subheading}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Button href={ctaHref} variant="teal">{ctaLabel}</Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
