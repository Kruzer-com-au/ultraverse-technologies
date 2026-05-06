'use client'

import React from 'react'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductCTA from '@/components/sections/product/ProductCTA'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import TeamGrid from '@/components/sections/TeamGrid'

const leadershipTeam = [
  {
    num: '01',
    title: 'Josh Bludell',
    sublabel: 'Founder & CEO',
    desc: "With 13 years of entrepreneurial experience across augmented reality, streaming, robotics, and digital commerce, he built the company on one belief: the most powerful technology solves genuine human problems. That belief drives everything;from the Ultraverse platform's mission to rebuild real-world human connection through play, to the global launch strategy he is currently leading across six countries."
  },
  {
    num: '02',
    title: 'Rick Marriott',
    sublabel: 'Chief Operating Officer',
    desc: 'His career spans military service at HQ London District and MoD HQ, Big 4 consulting at Deloitte and KPMG, and a portfolio of high-growth ventures across AI, cybersecurity, augmented reality, and UAV technology. That combination of military discipline, strategic advisory, and scale-up execution is what he brings to Kruzer, where he owns operational delivery, infrastructure, and milestone accountability across all product lines.'
  },
  {
    num: '03',
    title: 'Tushar Hazra',
    sublabel: 'Chief Technology Officer',
    desc: "With 20+ years delivering digital transformation across enterprise and government environments, his work has consistently centred on one challenge: helping organisations navigate complexity when technology, scale, and risk converge. His experience spans healthcare IT, enterprise platforms, cloud programmes, cybersecurity, and large-scale modernisation, much of it in regulated, high-risk settings where decisions carry real consequences. At Kruzer, he brings that same execution-led discipline to the full technology build: platform architecture, infrastructure delivery, and the systems that underpin a global AR gaming ecosystem."
  },
  {
    num: '04',
    title: 'Keith Wilson',
    sublabel: 'Chief Financial Officer',
    desc: "A Chartered Accountant and Fellow of leading professional bodies in both the UK and Australia, he brings over 25 years of financial leadership across start-ups, mobile, internet, and technology businesses. His track record includes founding five ventures, raising more than A$30 million in equity, debt, and government funding, managing banking facilities exceeding US$50 million, and completing multiple acquisitions and disposals across more than 10 countries. At Kruzer, he leads financial strategy, capital management, and the commercial structuring that underpins the company's global growth."
  },
  {
    num: '05',
    title: 'Shari Thompson',
    sublabel: 'Head of Strategic Operations',
    desc: "With over two decades of leadership across technology, finance, health, and creative sectors, she brings a rare combination of brand strategy and operational discipline — with a track record that includes securing over £14 million in new contracts through brand repositioning and more than £1 million in international growth through global marketing strategy. At Kruzer, she is responsible for operational alignment, cross-team accountability, launch execution, and risk management across the ecosystem."
  },
  {
    num: '06',
    title: 'Jules Pedersen',
    sublabel: 'Non-Executive Director',
    desc: "Over 25 years in Telecommunications, Media, Entertainment, and Technology, he has built a global network spanning the Americas and Asia Pacific — applied through his role as Executive Chairman and major shareholder of Newport Capital Group, where he delivers high-growth investment returns through complex go-to-market structures and M&A. An active philanthropist supporting causes including the Royal Children's Hospital and the Daniel Morcombe Foundation, Jules brings board-level strategic and commercial expertise to Kruzer."
  }
  ,
  {
    num: '07',
    title: 'Leon Gardiner',
    sublabel: 'Non-Executive Director',
    desc: "With over 30 years of leadership across property, infrastructure, and construction, he is a trusted advisor to boards, government bodies, and private organisations on corporate governance, enterprise risk, audit, and compliance. His career includes serving as an independent government reviewer on projects exceeding AUD $2 billion, leading property compliance audits exceeding AUD $3 billion, and overseeing commercial portfolios valued at over AUD $1.5 billion. He is also the Founder Director of the Men's Mental Health Foundation, combining deep commercial expertise with a genuine commitment to social impact. At Kruzer, he brings the independent judgment and governance rigour that a company at this stage of growth requires."
  },
  {
    num: '08',
    title: 'Uday Senapati',
    sublabel: 'Non-Executive Director',
    desc: "Based in London, he is a globally experienced technology and strategy executive currently serving as Vice President and Partner in Automotive, Battery & Mobility at Siemens Advanta. His career spans Bentley Motors, Group Lotus, and General Motors, building a reputation for bridging deep engineering expertise with commercial outcomes across large-scale transformation programmes. He holds an Executive MBA from the University of Manchester alongside advanced engineering degrees from the University of Southampton. At Kruzer, he brings independent strategic oversight and forward-looking insight across digital transformation, emerging technologies, and global market expansion."
  },
  {
    num: '09',
    title: 'Tabber Benedict',
    sublabel: 'Non-Executive Director',
    desc: "A Columbia Law School graduate and founder of Benedict Advisors PLLC in New York, he brings over 25 years of expertise in mergers and acquisitions, private equity, and complex corporate transactions — with aggregate deal experience exceeding $100 billion. He trained at White & Case and Schulte Roth & Zabel, and has held senior roles across the White House, the Federal Reserve Bank of New York, and ACE Limited (now Chubb). At Kruzer, he provides independent oversight and strategic guidance across corporate structuring, capital strategy, and international transactions."
  },
  {
    num: '10',
    title: 'Tim Sims AM FAICD',
    sublabel: 'Mentor and Advisor',
    desc: "A Founding Partner of Pacific Equity Partners, one of Australia's leading private equity firms, he brings decades of experience across private equity, management consulting, and organisational transformation. Prior to PEP, he served as Managing Partner for Australasia and Africa at Bain & Company and was a founding figure in L.E.K. Consulting's Asia-Pacific operations. A Kennedy Scholar, he holds degrees from the University of Oxford and a Master of Public Administration from Harvard University. Appointed a Member of the Order of Australia in 2019 for his contributions to community and philanthropy, and a Foundation Fellow of the Australian Institute of Company Directors, Tim brings to Kruzer the kind of strategic depth and governance experience that comes from building and scaling businesses at the highest level."
  }
]

export default function LeadershipPage() {
  return (
    <main className="flex-1 bg-background">
      <ProductHero
        label="Leadership"
        title="Meet the Team"
        description="The team building the future of digital entertainment."
      />

      <TeamGrid
        label="Leadership"
        title="The Team"
        members={leadershipTeam}
      />

      <section className="px-6 lg:px-12 pb-32 lg:pb-48">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProductVisuals
              primary={{ label: '600 × 400', sublabel: 'Leadership Team', aspectRatio: '600/400' }}
              bgClass="bg-background"
            />
            <ProductVisuals
              primary={{ label: '600 × 400', sublabel: 'Board Room', aspectRatio: '600/400' }}
              bgClass="bg-background"
            />
          </div>
        </div>
      </section>

      <ProductCTA
        title="Interested in Joining the Team?"
        description="We're assembling world-class talent across engineering, product, and operations."
        ctaText="View Open Positions"
        ctaHref="/company/careers"
      />
    </main>
  )
}
