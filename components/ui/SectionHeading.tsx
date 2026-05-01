// Section label: "Our Products" / teal eyebrow above headings
interface SectionLabelProps {
  children: string
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="editorial-uppercase text-[var(--accent-teal)] text-xs font-bold tracking-[0.2em] mb-6">
      {children}
    </p>
  )
}

// Large editorial heading (used for section H2s)
interface SectionHeadingProps {
  children: React.ReactNode
  color?: 'primary' | 'white' | 'teal'
  className?: string
}

export function SectionHeading({ children, color = 'primary', className = '' }: SectionHeadingProps) {
  const colorMap = {
    primary: 'text-[var(--text-primary)]',
    white: 'text-white',
    teal: 'text-[var(--accent-teal)]',
  }
  return (
    <h2 className={`editorial-heading text-[clamp(1.8rem,4vw,4rem)] ${colorMap[color]} mb-12 py-2 ${className}`}>
      {children}
    </h2>
  )
}
