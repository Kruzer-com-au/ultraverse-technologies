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
  if (photo) {
    return (
      <div className="relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full overflow-hidden flex-shrink-0 ring-1 ring-white/10 group-hover:ring-accent-teal/30 transition-all duration-700 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <Image src={photo} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-full" />
      </div>
    )
  }

  return (
    <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full flex-shrink-0 flex items-center justify-center bg-[#111] ring-1 ring-white/10 relative overflow-hidden group/avatar shadow-2xl group-hover:ring-accent-teal/30 transition-all duration-700">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-teal/5 to-transparent opacity-30" />
      <svg
        className="w-12 h-12 text-white/10 group-hover/avatar:text-accent-teal/20 transition-colors duration-700"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
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

        <div className="flex flex-col gap-8 md:gap-12">
          {members.map((member, idx) => (
            <ScrollReveal key={member.num} delay={idx * 0.05}>
              <div className="group relative flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 p-6 md:p-10 lg:p-12 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-accent-teal/20 transition-all duration-700 overflow-hidden">
                {/* Background Glow Effect */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-teal/[0.02] rounded-full blur-[100px] -mr-40 -mt-40 group-hover:bg-accent-teal/[0.05] transition-colors duration-700" />
                
                {/* avatar */}
                <div className="relative z-10">
                  <MemberAvatar photo={member.photo} name={member.title} />
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10 border-l border-white/10 pl-8 md:pl-12 lg:pl-16 group-hover:border-accent-teal/40 transition-colors duration-700">
                  <div className="mb-6">
                    <p className="editorial-uppercase text-accent-teal text-[11px] lg:text-[12px] font-bold tracking-[0.4em] uppercase mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      {member.sublabel}
                    </p>
                    <h3 className="editorial-heading text-white text-3xl lg:text-5xl font-bold tracking-tight">
                      {member.title}
                    </h3>
                  </div>

                  <p className="editorial-body text-white/50 text-base lg:text-lg leading-relaxed font-normal group-hover:text-white/70 transition-colors duration-700">
                    {member.desc}
                  </p>

                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/5 group-hover:border-accent-teal/20 transition-colors" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
