import React from 'react'
import Image from 'next/image'

interface TechnicalPlaceholderProps {
  label: string
  sublabel?: string
  width?: number
  height?: number
  aspectRatio?: string
  className?: string
  dark?: boolean
  src?: string
}

export default function TechnicalPlaceholder({
  label,
  sublabel,
  width,
  height,
  aspectRatio,
  className = '',
  dark = true,
  src
}: TechnicalPlaceholderProps) {
  const bgClass = dark ? 'bg-[#3a3a3a]' : 'bg-[#d4d4d4]'
  const borderClass = 'border-[3px] border-[#0a0a0a]'
  const textPrimary = 'text-white/90'
  const textMuted = 'text-white/50'

  return (
    <div 
      className={`${bgClass} ${!src ? 'border-[3px] border-[#0a0a0a] rounded-md' : ''} flex flex-col items-center justify-center gap-3 w-full relative overflow-hidden ${className}`}
      style={aspectRatio ? { aspectRatio } : {}}
    >
      {src ? (
        <Image 
          src={src} 
          alt={sublabel || label} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="relative z-10 flex flex-col items-center gap-3">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          
          <div className="flex flex-col items-center gap-1">
            <span className={`${textPrimary} text-lg md:text-xl font-mono tracking-wider uppercase font-bold`}>
              {width && height ? `${width} × ${height}` : label}
            </span>
            {sublabel && (
              <span className={`${textMuted} text-xs md:text-sm font-mono tracking-widest uppercase`}>
                {sublabel}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
