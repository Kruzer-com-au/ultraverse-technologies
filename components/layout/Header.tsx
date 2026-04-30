'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { navItems } from '@/data/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[80px]">

          {/* Logo */}
          <Link 
            className="glitch-logo flex items-center gap-3 shrink-0 group" 
            href="/"
          >
            <Image 
              src="/images/logo-icon.png" 
              alt="Ultraverse" 
              width={36} 
              height={36} 
              className="group-hover:opacity-80 transition-opacity"
            />
            <span 
              className="glitch-text font-bold text-lg tracking-[0.08em] uppercase text-text-primary"
              data-text="ULTRAVERSE"
            >
              ULTRAVERSE 
              <span className="hidden sm:inline text-xs font-semibold tracking-[0.12em] opacity-60 ml-2">
                TECHNOLOGIES
              </span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.filter(item => item.label !== 'Contact').map((item) => (
              <Link 
                key={item.href}
                className={`px-4 py-2 text-[13px] font-semibold uppercase transition-colors ${
                  pathname === item.href ? 'text-teal-deep' : 'text-text-secondary hover:text-accent-teal-deep'
                }`} 
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link 
              className="hidden lg:inline-flex btn-outline text-xs" 
              href="/contact"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-text-primary"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="3" y1="7" x2="21" y2="7" strokeWidth="2" strokeLinecap="round"></line>
                <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" strokeLinecap="round"></line>
                <line x1="3" y1="17" x2="21" y2="17" strokeWidth="2" strokeLinecap="round"></line>
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay (Simplified for structure) */}
      <div 
        className={`lg:hidden fixed inset-0 top-[80px] bg-white z-40 transition-transform duration-500 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8">
          <nav className="flex flex-col gap-6">
             {navItems.map((item) => (
              <Link 
                key={item.href}
                className="text-lg font-bold uppercase text-text-primary"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
