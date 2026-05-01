import React from 'react'

interface TechnicalPlaceholderProps {
  label: string
  sublabel?: string
  width?: number
  height?: number
  aspectRatio?: string
  className?: string
  dark?: boolean
}

export default function TechnicalPlaceholder({
  label,
  sublabel,
  width,
  height,
  aspectRatio,
  className = '',
  dark = true
}: TechnicalPlaceholderProps) {
  const bgClass = dark ? 'bg-[#3a3a3a]' : 'bg-[#d4d4d4]'
  const borderClass = 'border-[3px] border-[#0a0a0a]'
  const textPrimary = 'text-white/90'
  const textMuted = 'text-white/50'

  return (
    <div 
      className={`${bgClass} ${borderClass} rounded-md flex flex-col items-center justify-center gap-3 w-full relative overflow-hidden ${className}`}
      style={aspectRatio ? { aspectRatio } : {}}
    >
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
  )
}
