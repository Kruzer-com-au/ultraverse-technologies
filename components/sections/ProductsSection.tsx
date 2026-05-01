import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { SectionLabel, SectionHeading } from '@/components/ui/SectionHeading'
import { TagPill } from '@/components/ui/Cards'
import { Button } from '@/components/ui/Button'
import type { Product } from '@/lib/home-data'

interface ProductsSectionProps {
  products: Product[]
}

export default function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <section className="py-16 md:py-32 lg:py-48 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <SectionLabel>Our Products</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <SectionHeading className="mb-20">Three Product Lines</SectionHeading>
        </ScrollReveal>

        <div className="space-y-0">
          {products.map((p, i) => (
            <ScrollReveal key={p.num} delay={i * 0.08}>
              <Link
                href={p.href}
                className="group block border-t border-black/10 py-8 lg:py-10 glitch-border transition-all duration-700"
              >
                <div className="grid grid-cols-12 gap-4 items-start">
                  {/* Number */}
                  <div className="col-span-2 lg:col-span-1">
                    <span className="editorial-uppercase text-[var(--accent-teal)] text-sm font-bold">{p.num}</span>
                  </div>
                  {/* Name */}
                  <div className="col-span-10 lg:col-span-4">
                    <h3 className="editorial-heading text-[clamp(1.2rem,2.5vw,2.5rem)] text-white group-hover:text-white transition-colors duration-700">
                      {p.name}
                    </h3>
                  </div>
                  {/* Description */}
                  <div className="col-span-12 lg:col-span-4 lg:col-start-6">
                    <p className="editorial-body text-[var(--text-secondary)] text-sm">{p.desc}</p>
                  </div>
                  {/* Tags */}
                  <div className="col-span-12 lg:col-span-3 lg:col-start-10 flex flex-wrap gap-2">
                    {p.tags.map(tag => <TagPill key={tag} label={tag} />)}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
          <div className="border-t border-black/10" />
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12">
            <Button href="/products">Explore All Products</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
