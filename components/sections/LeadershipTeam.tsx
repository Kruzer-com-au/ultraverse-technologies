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

interface LeadershipTeamProps {
  label?: string
  title?: string
  description?: string
  members: TeamMember[]
}

function MemberItem({ member, idx }: { member: TeamMember; idx: number }) {
  return (
    <ScrollReveal delay={idx * 0.05}>
      <div className="group relative py-12 md:py-16 border-t border-black/10 first:border-t-0 hover:bg-black/[0.02] transition-colors duration-500 px-4 -mx-4 rounded-xl">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-16">

          {/* Avatar Area */}
          <div className="relative flex-shrink-0">
            <div className="relative w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ring-1 ring-black/5 group-hover:ring-accent-teal/30">
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={member.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full bg-[#f5f5f5] flex items-center justify-center">
                  <span className="text-black/10 font-bold text-2xl">
                    {member.title.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent-teal rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>

          {/* Text Content Area */}
          <div className="flex-1 space-y-6">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
              <h3 className="editorial-heading text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight">
                {member.title}
              </h3>
              <p className="editorial-uppercase text-accent-teal text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase">
                {member.sublabel}
              </p>
            </div>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-none opacity-80 group-hover:opacity-100 transition-opacity duration-700">
              {member.desc}
            </p>
          </div>

        </div>
      </div>
    </ScrollReveal>
  )
}

export default function LeadershipTeam({
  label = "Leadership",
  title = "Meet the Team",
  description,
  members
}: LeadershipTeamProps) {
  return (
    <section className="section-dark bg-[#0a0a0a] py-24 md:py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-teal/[0.05] rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-4 md:mb-6">
            <div className="max-w-3xl">
              <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.25em] mb-4 uppercase">
                {label}
              </p>
              <h2 className={`editorial-heading text-[clamp(2rem,6vw,4rem)] text-white leading-[0.9] ${description ? 'mb-6' : 'mb-0'}`}>
                {title}
              </h2>
              {description && (
                <p className="text-white/60 text-base md:text-lg max-w-2xl mt-6">
                  {description}
                </p>
              )}
            </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col">
          {members.map((member, idx) => (
            <ScrollReveal key={member.num} delay={idx * 0.05}>
              <div className="group relative py-16 md:py-24 lg:py-28 border-t border-white/10 first:border-t-0 first:pt-4 lg:first:pt-8 hover:bg-white/[0.01] transition-colors duration-700 px-4 -mx-4">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-24">

                  {/* Avatar Area (Left) */}
                  <div className="relative flex-shrink-0">
                    <div className="relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ring-1 ring-white/10 group-hover:ring-accent-teal/40 shadow-2xl">
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-white/5 flex items-center justify-center">
                          <span className="text-white/10 font-bold text-2xl">
                            {member.title.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Area (Right) */}
                  <div className="flex-1 flex flex-col gap-8 md:gap-10">
                    <div className="space-y-3">
                      <h3 className="editorial-heading text-2xl md:text-3xl text-white font-semibold">
                        {member.title}
                      </h3>
                      <p className="editorial-uppercase text-accent-teal text-[10px] font-bold tracking-[0.4em] uppercase opacity-80">
                        {member.sublabel}
                      </p>
                    </div>

                    <p className="text-white/40 text-sm md:text-base leading-[1.8] max-w-none text-full-width opacity-80 group-hover:text-white/70 transition-all duration-700">
                      {member.desc}
                    </p>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
