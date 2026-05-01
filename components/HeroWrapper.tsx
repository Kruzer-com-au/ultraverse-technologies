'use client'

import { useEffect, useRef, ReactNode } from 'react'

export default function HeroWrapper({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Trigger hero animations after a tiny delay (matches reference behavior)
    const t = setTimeout(() => el.classList.add('hero-ready'), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div ref={ref} className="w-full flex flex-col flex-1">
      {children}
    </div>
  )
}
