'use client'

import { useEffect, useRef } from 'react'

interface HeroVideoProps {
  /** Primary local source — place your file at /public/video/home-hero.mp4 */
  localSrc?: string
  /** Fallback CDN source shown while / if localSrc is missing */
  fallbackSrc?: string
}

// Free city-at-night video (Coverr / public CDN — stable, royalty-free)
const DEFAULT_FALLBACK =
  'https://cdn.coverr.co/videos/coverr-aerial-view-of-hong-kong-city-at-night-4752/1080p.mp4'

export default function HeroVideo({
  localSrc = '/video/home-hero.mp4',
  fallbackSrc = DEFAULT_FALLBACK,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Guarantee autoplay — browsers sometimes block the `autoPlay` HTML attribute
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true          // must be muted for browser autoplay policies
    video.playsInline = true

    const tryPlay = () => {
      video.play().catch(() => {
        // Some browsers need a user-interaction first;
        // attach a one-time click listener as last resort
        const resume = () => { video.play(); document.removeEventListener('click', resume) }
        document.addEventListener('click', resume, { once: true })
      })
    }

    if (video.readyState >= 2) {
      tryPlay()
    } else {
      video.addEventListener('canplay', tryPlay, { once: true })
    }

    // Re-play if the tab becomes visible again (e.g. user switches tabs)
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') video.play().catch(() => {})
    }
    document.addEventListener('visibilitychange', handleVisibility)

    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

  return (
    <div className="relative w-full overflow-hidden h-[28vh] md:h-[32vh] lg:h-[35vh]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      >
        {/* Local file (highest priority — add /public/video/home-hero.mp4) */}
        <source src={localSrc} type="video/mp4" />
        {/* CDN fallback so the section is never empty */}
        <source src={fallbackSrc} type="video/mp4" />
      </video>

      {/* Overlay: keeps hero text legible and adds teal scanline aesthetic */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.25) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          zIndex: 3,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(86,191,163,1) 2px 4px)',
        }}
      />
    </div>
  )
}
