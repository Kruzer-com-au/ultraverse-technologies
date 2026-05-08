import Link from 'next/link';
import Image from 'next/image';

const footerNavigation = {
  products: [
    { name: 'ULTRASTREAM', href: '/products/ultrastream' },
    { name: 'ULTRADATA', href: '/products/ultradata' },
    { name: 'ULTRAVERSE', href: '/products/ultraverse' },
  ],
  solutions: [
    { name: 'White-Label Streaming', href: '/solutions/white-label-streaming' },
    { name: 'City Data & Digital Twins', href: '/solutions/city-data' },
    { name: 'Privacy', href: '/solutions/privacy-compliance' },
    { name: 'Creator Economy', href: '/solutions/creator-economy' },
    { name: 'Secure Communications', href: '/solutions/secure-communications' },
    { name: 'Community SDK', href: '/solutions/community-sdk' },
  ],
  industries: [
    { name: 'Smart Cities', href: '/industries/smart-cities' },
    { name: 'Gaming', href: '/industries/gaming' },
    { name: 'Entertainment', href: '/industries/entertainment' },
    { name: 'Tourism', href: '/industries/tourism' },
    { name: 'Enterprise', href: '/industries/enterprise' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Financial', href: '/industries/financial' },
  ],
  company: [
    { name: 'About', href: '/company' },
    { name: 'Leadership', href: '/company/leadership' },
    { name: 'Careers', href: '/company/careers' },
    { name: 'Press & Media', href: '/company/press' },
    { name: 'Partners', href: '/company/partners' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#d4d4d4]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10 md:py-16 lg:py-20">

        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10 md:mb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link className="flex items-center gap-3 mb-4" href="/">
              <Image src="/images/logo.png" width={28} height={28} alt="Ultraverse Logo" />
              <span className="font-bold text-base uppercase text-text-primary">
                ULTRAVERSE
                <span className="text-[10px] opacity-60 ml-1">TECHNOLOGIES</span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
              Real-time city data for digital twin models, privacy-first streaming infrastructure, and enterprise technology solutions.
            </p>
            <p className="text-xs text-text-muted mb-4">Kruzer Ultraverse Pty Ltd</p>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-muted hover:text-teal-deep transition-all group inline-block"
              aria-label="Follow us on LinkedIn"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:scale-110 transition-transform"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-normal !text-[18px] uppercase mb-4 text-text-primary leading-[16px] !tracking-[0.30px]">Products</h3>
            <ul className="space-y-2">
              {footerNavigation.products.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-text-secondary hover:text-teal-deep transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-normal !text-[18px] uppercase mb-4 text-text-primary leading-[16px] !tracking-[0.30px]">Solutions</h3>
            <ul className="space-y-2">
              {footerNavigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-text-secondary hover:text-teal-deep transition-colors">
                    {item.name}



                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-normal !text-[18px] uppercase mb-4 text-text-primary leading-[16px] !tracking-[0.30px]">Industries</h3>
            <ul className="space-y-2">
              {footerNavigation.industries.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-text-secondary hover:text-teal-deep transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-normal !text-[18px] uppercase mb-4 text-text-primary leading-[16px] !tracking-[0.30px]">Company</h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-text-secondary hover:text-teal-deep transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="h-px bg-black/10 mb-8"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-text-secondary">
          <p className="text-xs">© {new Date().getFullYear()} Kruzer Ultraverse Pty Ltd. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <Link href="/privacy" className="hover:text-teal-deep transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-teal-deep transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
