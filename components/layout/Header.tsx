'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { navItems } from '@/data/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  // Order: PRODUCTS, SOLUTIONS, INDUSTRIES, TECHNOLOGY, COMPANY
  const orderedNavItems = [
    navItems.find(item => item.label === 'Products'),
    navItems.find(item => item.label === 'Solutions'),
    navItems.find(item => item.label === 'Industries'),
    navItems.find(item => item.label === 'Technology'),
    navItems.find(item => item.label === 'Company'),
  ].filter(Boolean) as typeof navItems

  const dropdownLabels = ['Products', 'Solutions', 'Industries']

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--glass-bg)] backdrop-blur-xl' : 'bg-[var(--background)]'
        } border-b border-[var(--border)]`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 xl:px-16">
        <div className="flex items-center justify-between h-[72px]">

          {/* ── Logo ── */}
          <Link href="/" className="glitch-logo flex items-center gap-2 lg:gap-1 xl:gap-3 shrink-0 group">
            <Image
              src="/images/logo.png"
              alt="Ultraverse"
              width={28}
              height={28}
              className="object-contain"
            />
            <div className="flex items-center lg:gap-1 xl:gap-2">
              <span
                className="glitch-text font-bold text-lg tracking-[0.08em] uppercase text-text-primary"
                data-text="ULTRAVERSE TECHNOLOGIES"
              >
                ULTRAVERSE{" "}
                <span className="hidden xl:inline text-xs font-semibold tracking-[0.12em] opacity-60">
                  TECHNOLOGIES
                </span>
              </span>
            </div>
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden lg:flex items-center lg:gap-0 xl:gap-1" aria-label="Main navigation">
            {orderedNavItems.map((item) => {
              const hasDropdown = dropdownLabels.includes(item.label)
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')

              return (
                <div key={item.href} className="relative group/nav">
                  {/* Hover indicator ring: shown above the label */}
                  {/* <div
                    aria-hidden="true"
                    className="
                      absolute -top-[22px] left-1/2 -translate-x-1/2
                      w-[38px] h-[38px] rounded-full
                      border border-[var(--accent-teal)]
                      opacity-0 scale-75
                      group-hover/nav:opacity-100 group-hover/nav:scale-100
                      transition-all duration-300 pointer-events-none
                    "
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-black rounded-full mt-[-9px]" />
                  </div> */}

                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-1 px-2.5 lg:px-3 xl:px-4 py-2
                      text-[12px] font-semibold uppercase tracking-[0.1em]
                      transition-colors duration-200
                      ${isActive ? 'text-black' : 'text-black/55 hover:text-[var(--accent-teal-deep)]'}
                    `}
                  >
                    {item.label}
                    {hasDropdown && (
                      <svg
                        className="w-[10px] h-[10px] opacity-60 group-hover/nav:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.subItems && (
                    <div
                      className="
                        absolute top-full left-0
                        min-w-[300px]
                        bg-[#d9d9d9]
                        border border-[var(--glass-border)]
                        shadow-[var(--glass-shadow)]
                        rounded-[32px]
                        opacity-0 translate-y-2 pointer-events-none
                        group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto
                        transition-all duration-250 ease-out
                        z-50
                      "
                    >
                      <div className="p-3">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="
                              group/item flex items-center justify-between px-6 py-4 
                              hover:bg-[var(--surface-elevated)] rounded-2xl 
                              transition-all duration-200
                            "
                          >
                            <div className="flex flex-col gap-[2px]">
                              <span className="text-[14px] font-bold text-black leading-tight">
                                {sub.label}
                              </span>
                              {sub.description && (
                                <span className="text-[12px] text-black/45 leading-tight font-normal">
                                  {sub.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* ── CTA + Mobile toggle ── */}
          <div className="flex items-center gap-2 lg:gap-1 xl:gap-3">
            <Link
              href="/contact"
              className="
                hidden lg:inline-flex items-center
                px-7 py-[10px]
                border border-black
                text-[11px] font-bold uppercase tracking-[0.15em]
                text-black
                hover:bg-black hover:text-[#E5E3DB]
                transition-all duration-250
              "
            >
              Contact Us
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="lg:hidden flex items-center justify-center w-9 h-9 text-black"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" strokeLinecap="round" />
                    <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" strokeLinecap="round" />
                    <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] w-full h-[calc(100vh-72px)] bg-[#E5E3DB] z-[100] overflow-y-auto transition-transform duration-400 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
          } border-t border-black/8`}
      >
        <div className="p-8">
          <nav className="flex flex-col">
            {orderedNavItems.map((item) => {
              const hasDropdown = dropdownLabels.includes(item.label)
              const isExpanded = mobileExpanded === item.label

              return (
                <div key={item.href} className="border-b border-black/8">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex-1 py-5 text-[16px] font-bold uppercase tracking-[0.1em] text-black"
                    >
                      {item.label}
                    </Link>
                    {hasDropdown && (
                      <button
                        onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                        className="w-10 h-10 flex items-center justify-center text-black/50"
                        aria-label={`Expand ${item.label}`}
                      >
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {item.subItems && isExpanded && (
                    <div className="pb-4 flex flex-col gap-1">
                      {item.subItems.map(sub => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="flex flex-col gap-[2px] px-4 py-3 hover:bg-black/5 rounded-sm"
                        >
                          <span className="text-[14px] font-bold text-black/80">{sub.label}</span>
                          {sub.description && (
                            <span className="text-[11px] text-black/40">{sub.description}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}

            <Link
              href="/contact"
              className="mt-8 flex items-center justify-center px-8 py-4 border border-black text-[12px] font-bold uppercase tracking-[0.15em] text-black"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
