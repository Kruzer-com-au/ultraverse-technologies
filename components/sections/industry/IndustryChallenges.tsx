'use client'

import React from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { TealOrb } from '@/components/ui/Cards'

export interface ChallengeItem {
  num: string
  title: string
  shortDesc: string
  longDesc: string
}

interface IndustryChallengesProps {
  label: string
  title: string
  challenges: ChallengeItem[]
  id?: string
}

export default function IndustryChallenges({
  label,
  title,
  challenges,
  id
}: IndustryChallengesProps) {
  return (
    <section id={id} className="section-dark py-32 lg:py-48 px-6 lg:px-12">
      <TealOrb size="w-[500px] h-[500px]" position="-top-40 -right-40" />
      <TealOrb size="w-[300px] h-[300px]" position="bottom-20 left-0" delay="3s" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-6">{label}</p>
          <h2 className="editorial-heading text-[clamp(2rem,5vw,5rem)] text-white mb-20 uppercase">
            {title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {challenges.map((challenge, idx) => (
            <ScrollReveal key={challenge.num} delay={idx * 0.1}>
              <div className="bg-dark-bg p-10 lg:p-14 group glitch-hover h-full">
                <span className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-4 block">
                  {challenge.num}
                </span>
                <h3 className="editorial-heading text-xl lg:text-2xl text-white mb-4 group-hover:text-accent-teal transition-colors duration-700 uppercase">
                  {challenge.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed mb-4">
                  {challenge.shortDesc}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {challenge.longDesc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
