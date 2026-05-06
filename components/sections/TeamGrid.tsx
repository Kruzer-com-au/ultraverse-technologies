'use client'

import React from 'react'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

interface TeamMember {
  num: string
  title: string
  sublabel: string
  desc: string
  photo?: string
}

interface TeamGridProps {
  label?: string
  title?: string
  members: TeamMember[]
}

function MemberAvatar({ photo, name }: { photo?: string; name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  if (photo) {
    return (
      <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden flex-shrink-0 ring-4 ring-white/10 shadow-2xl">
        <Image src={photo} alt={name} fill className="object-cover" />
      </div>
    )
  }

  return (
    <div className="w-[200px] h-[200px] rounded-full flex-shrink-0 flex items-center justify-center bg-[#111] ring-4 ring-white/5 relative overflow-hidden group/avatar shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-teal/10 to-transparent opacity-30" />
      <svg
        className="w-20 h-20 text-white/20 group-hover/avatar:text-accent-teal/40 transition-colors duration-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
      <div className="absolute inset-0 border border-white/5 rounded-full pointer-events-none" />
    </div>
  )
}

export default function TeamGrid({ label = 'Leadership', title = 'The Team', members }: TeamGridProps) {
  return (
    <section className="section-dark py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden">
      <div className="teal-orb absolute -top-40 -right-40 w-[700px] h-[700px] opacity-15 teal-glow" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6">
            {label}
          </p>
          <h2 className="editorial-heading text-[clamp(2.5rem,6vw,5rem)] text-white mb-4 max-w-4xl">
            {title}
          </h2>
          <div className="w-12 h-[2px] bg-accent-teal mb-20" />
        </ScrollReveal>

        {/* 1-column layout */}
        <div className="flex flex-col gap-px bg-white/[0.06]">
          {members.map((member, idx) => (
            <ScrollReveal key={member.num} delay={idx * 0.04}>
              <div className="group bg-[#0a0a0a] p-10 lg:p-20 flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20 h-full hover:bg-[#0c0c0c] transition-all duration-500 relative">
                {/* avatar */}
                <MemberAvatar photo={member.photo} name={member.title} />

                {/* Content with left teal border matching reference image */}
                <div className="flex-1  pl-8 lg:pl-12 space-y-4">
                  <div>
                    <p className="editorial-uppercase text-white text-[11px] lg:text-[12px] font-bold tracking-[0.3em] uppercase mb-2">
                      {member.sublabel}
                    </p>
                    <h3 className="editorial-heading text-white text-3xl lg:text-4xl font-bold tracking-tight">
                      {member.title}
                    </h3>
                  </div>

                  <p className="text-white/50 text-[15px] lg:text-[16px] leading-relaxed font-normal max-w-2xl">
                    {member.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
