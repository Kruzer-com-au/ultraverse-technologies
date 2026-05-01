// Numbered dark card (used in Data Layer & Technology sections)
interface DarkCardProps {
  num: string
  title: string
  desc: string
  size?: 'sm' | 'lg' // sm = data grid (p-8), lg = tech grid (p-10/p-14)
}

export function DarkCard({ num, title, desc, size = 'sm' }: DarkCardProps) {
  const padding = size === 'lg' ? 'p-10 lg:p-14' : 'p-8 lg:p-10'
  const titleSize = size === 'lg' ? 'text-xl lg:text-2xl mb-4' : 'text-lg mb-3'
  const descSize = size === 'lg' ? 'text-sm' : 'text-xs'
  const numMb = size === 'lg' ? 'mb-4' : 'mb-3'

  return (
    <div className={`bg-dark-bg ${padding} group glitch-hover h-full flex flex-col`}>
      <span className={`editorial-uppercase text-[var(--accent-teal)] text-xs font-bold tracking-[0.2em] ${numMb} block`}>
        {num}
      </span>
      <h3 className={`editorial-heading ${titleSize} text-white group-hover:text-[var(--accent-teal)] transition-colors duration-700`}>
        {title}
      </h3>
      <p className={`text-white/50 ${descSize} leading-relaxed`}>{desc}</p>
    </div>
  )
}

// Tag pill (used in Products section)
interface TagPillProps {
  label: string
}

export function TagPill({ label }: TagPillProps) {
  return (
    <span className="editorial-uppercase text-[10px] tracking-[0.15em] text-[var(--text-muted)] border border-black/10 px-3 py-1">
      {label}
    </span>
  )
}

// Arrow icon (used in Industries row links)
export function ArrowRight() {
  return (
    <svg
      className="w-6 h-6 lg:w-8 lg:h-8 text-[var(--text-muted)] group-hover:text-[var(--accent-teal)] transition-all duration-700 group-hover:translate-x-2"
      fill="none" viewBox="0 0 24 24" stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
    </svg>
  )
}

// Teal orb background decoration (used in dark sections)
interface TealOrbProps {
  size: string        // e.g. "w-[600px] h-[600px]"
  position: string    // e.g. "-top-48 left-1/2 -translate-x-1/2"
  delay?: string      // CSS animation-delay
}

export function TealOrb({ size, position, delay }: TealOrbProps) {
  return (
    <div
      className={`teal-orb ${size} ${position} teal-glow`}
      style={{
        background: 'radial-gradient(circle, rgba(86,191,163,0.3) 0%, transparent 70%)',
        filter: 'blur(60px)',
        ...(delay ? { animationDelay: delay } : {}),
      }}
    />
  )
}
