'use client'

import React, { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import ProductHero from '@/components/sections/product/ProductHero'
import ProductVisuals from '@/components/sections/product/ProductVisuals'
import TechnicalPlaceholder from '@/components/ui/TechnicalPlaceholder'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry. Our team will get back to you shortly.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <main className="flex-1 bg-background">
      <ProductHero 
        label="Contact"
        title="Get in Touch"
        description="Let's discuss how ULTRAVERSE can power your next initiative."
        hideCtas={true}
      />

      <ProductVisuals 
        primary={{ label: '1400 × 600', sublabel: 'Office Location' }}
        bgClass="bg-background"
      />

      <section className="py-32 lg:py-48 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Form Section */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block editorial-uppercase text-text-primary text-[10px] tracking-[0.15em] font-bold mb-3">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-black/10 text-text-primary text-sm focus:outline-none focus:border-accent-teal transition-colors duration-700 placeholder:text-text-secondary/40"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block editorial-uppercase text-text-primary text-[10px] tracking-[0.15em] font-bold mb-3">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-black/10 text-text-primary text-sm focus:outline-none focus:border-accent-teal transition-colors duration-700 placeholder:text-text-secondary/40"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="company" className="block editorial-uppercase text-text-primary text-[10px] tracking-[0.15em] font-bold mb-3">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-black/10 text-text-primary text-sm focus:outline-none focus:border-accent-teal transition-colors duration-700 placeholder:text-text-secondary/40"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block editorial-uppercase text-text-primary text-[10px] tracking-[0.15em] font-bold mb-3">Role</label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-black/10 text-text-primary text-sm focus:outline-none focus:border-accent-teal transition-colors duration-700 placeholder:text-text-secondary/40"
                        placeholder="Your role"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block editorial-uppercase text-text-primary text-[10px] tracking-[0.15em] font-bold mb-3">Interest Area</label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-black/10 text-text-primary text-sm focus:outline-none focus:border-accent-teal transition-colors duration-700 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select an area of interest</option>
                      <option value="Streaming Infrastructure">Streaming Infrastructure</option>
                      <option value="Privacy & Compliance">Privacy & Compliance</option>
                      <option value="Enterprise Solutions">Enterprise Solutions</option>
                      <option value="Gaming & IP">Gaming & IP</option>
                      <option value="Partnership Opportunities">Partnership Opportunities</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block editorial-uppercase text-text-primary text-[10px] tracking-[0.15em] font-bold mb-3">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-black/10 text-text-primary text-sm focus:outline-none focus:border-accent-teal transition-colors duration-700 resize-none placeholder:text-text-secondary/40"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 editorial-uppercase text-[11px] tracking-[0.15em] font-bold text-text-primary border border-black/20 px-8 py-4 hover:bg-black hover:text-white transition-all duration-700"
                  >
                    Send Message <span aria-hidden="true">→</span>
                  </button>
                </form>
              </ScrollReveal>
            </div>

            {/* Info Section */}
            <div className="lg:col-span-4 lg:col-start-9">
              <ScrollReveal delay={0.1}>
                <p className="editorial-uppercase text-accent-teal text-xs font-bold tracking-[0.2em] mb-8">Contact Information</p>
              </ScrollReveal>

              <div className="space-y-0">
                <ScrollReveal delay={0.15}>
                  <div className="border-t border-black/10 py-6">
                    <p className="editorial-uppercase text-text-secondary text-[10px] tracking-[0.15em] mb-2">General Inquiries</p>
                    <a href="mailto:hello@ultraverse.games" className="text-text-primary font-medium text-base hover:text-accent-teal transition-colors duration-700">hello@ultraverse.games</a>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.23}>
                  <div className="border-t border-black/10 py-6">
                    <p className="editorial-uppercase text-text-secondary text-[10px] tracking-[0.15em] mb-2">Partnerships</p>
                    <a href="mailto:partners@ultraverse.games" className="text-text-primary font-medium text-base hover:text-accent-teal transition-colors duration-700">partners@ultraverse.games</a>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.31}>
                  <div className="border-t border-black/10 py-6">
                    <p className="editorial-uppercase text-text-secondary text-[10px] tracking-[0.15em] mb-2">Location</p>
                    <p className="text-text-primary font-medium text-base">Australia</p>
                  </div>
                </ScrollReveal>
                <div className="border-t border-black/10"></div>
              </div>

              <ScrollReveal delay={0.4}>
                <div className="mt-10">
                  <p className="editorial-uppercase text-accent-teal text-[10px] tracking-[0.15em] font-bold mb-3">Response Time</p>
                  <p className="text-text-secondary text-sm leading-relaxed">We aim to respond to all inquiries within two business days. For urgent partnership or enterprise inquiries, please indicate so in your message.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <div className="border-t border-black/10 mt-8 pt-8">
                  <p className="editorial-uppercase text-accent-teal text-[10px] tracking-[0.15em] font-bold mb-3">Press Inquiries</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3">For media and press inquiries, please contact our communications team directly.</p>
                  <a href="mailto:press@ultraverse.games" className="text-text-primary text-sm font-medium hover:text-accent-teal transition-colors duration-700">press@ultraverse.games</a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <div className="mt-10">
                  <TechnicalPlaceholder 
                    label="600 × 400" 
                    sublabel="Contact Team" 
                    aspectRatio="600/400"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
