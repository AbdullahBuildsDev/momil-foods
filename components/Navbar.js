'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { categories } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = pathname === '/'

  const navLink = (href, label) => {
    const active = pathname === href || (href !== '/' && pathname.startsWith(href))
    return (
      <Link href={href}
        className={`relative text-[15px] font-semibold uppercase text-white transition-colors hover:text-[#F5C518] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#E8B400] after:transition-all ${active ? 'after:w-full text-[#F5C518]' : 'after:w-0 hover:after:w-full'}`}>
        {label}
      </Link>
    )
  }

  return (
    <nav className={`fixed top-0 w-full z-50 border-b border-white/10 transition-all duration-300 ${scrolled || mobileOpen || !isHome ? 'bg-[#070b05]/96 shadow-2xl backdrop-blur-xl' : 'bg-black/30 backdrop-blur-[2px]'}`}>
      <div className="site-container flex items-center justify-between h-[90px] md:h-[110px]">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/logo.png" alt="Momil Foods" width={180} height={90} className="h-16 md:h-20 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-9">
          {navLink('/', 'Home')}
          {navLink('/about', 'About')}

          {/* Products dropdown */}
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className={`flex items-center gap-1 text-[15px] font-semibold uppercase text-white transition-colors hover:text-[#F5C518] ${pathname.startsWith('/products') ? 'text-[#F5C518]' : ''}`}>
              Products
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 top-full pt-3 w-56">
                <div className="bg-[#080c05] border border-white/10 border-t-2 border-t-[#E8B400] shadow-2xl py-2">
                  <Link href="/products"
                    className="block px-5 py-2.5 text-xs font-black uppercase tracking-widest text-[#F5C518] border-b border-white/10 hover:bg-white/5 transition-colors">
                    All Products
                  </Link>
                  {categories.map((cat) => (
                    <Link key={cat.id} href={`/products/${cat.slug}`}
                      className="block px-5 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                      {cat.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Catalog & Certifications — PDFs the client provides in /public
              (drop momil-catalog.pdf and momil-certifications.pdf there). */}
          <a href="/momil-catalog.pdf" target="_blank" rel="noopener noreferrer"
            className="relative text-[15px] font-semibold uppercase text-white transition-colors hover:text-[#F5C518] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#E8B400] after:transition-all hover:after:w-full">
            Catalog
          </a>
          <a href="/momil-certifications.pdf" target="_blank" rel="noopener noreferrer"
            className="relative text-[15px] font-semibold uppercase text-white transition-colors hover:text-[#F5C518] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#E8B400] after:transition-all hover:after:w-full">
            Certifications
          </a>

          {/* Inline padding: the global `* { padding:0 }` reset in globals.css
              outranks Tailwind's layered px-/py- utilities, so the border would
              otherwise sit flush against the text. */}
          <Link href="/contact"
            style={{ padding: '15px 34px' }}
            className="inline-flex items-center justify-center border-2 border-[#E8B400] text-[12px] font-black uppercase tracking-[0.18em] leading-none text-white hover:bg-[#E8B400] hover:text-[#102006] transition-all duration-200 whitespace-nowrap">
            Get In Touch
          </Link>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          className="md:hidden flex h-11 w-11 flex-col items-center justify-center gap-[5px] bg-white/10"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className={`h-[2px] w-6 bg-white transition-all duration-300 origin-center ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-[2px] w-6 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`h-[2px] w-6 bg-white transition-all duration-300 origin-center ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#070b05] px-5 py-4 max-h-[80vh] overflow-y-auto"
          style={{ animation: 'momilMenuDrop 0.25s ease-out' }}>
          <div className="flex flex-col">
            {[['/', 'Home'], ['/about', 'About'], ['/products', 'All Products'], ['/contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href}
                className="py-3 text-sm font-bold uppercase text-white/85 border-b border-white/8 hover:text-[#F5C518] transition-colors"
                onClick={() => setMobileOpen(false)}>
                {label}
              </Link>
            ))}
            <a href="/momil-catalog.pdf" target="_blank" rel="noopener noreferrer"
              className="py-3 text-sm font-bold uppercase text-white/85 border-b border-white/8 hover:text-[#F5C518] transition-colors"
              onClick={() => setMobileOpen(false)}>
              Catalog
            </a>
            <a href="/momil-certifications.pdf" target="_blank" rel="noopener noreferrer"
              className="py-3 text-sm font-bold uppercase text-white/85 border-b border-white/8 hover:text-[#F5C518] transition-colors"
              onClick={() => setMobileOpen(false)}>
              Certifications
            </a>
          </div>
          <div className="mt-3 flex flex-col">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#F5C518] py-3">Categories</p>
            {categories.map((cat) => (
              <Link key={cat.id} href={`/products/${cat.slug}`}
                className="py-2.5 text-sm text-white/55 border-b border-white/5 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}>
                {cat.title}
              </Link>
            ))}
          </div>
          <Link href="/contact"
            className="mt-5 block text-center bg-[#E8B400] text-[#102006] py-3 font-black text-sm uppercase tracking-widest"
            onClick={() => setMobileOpen(false)}>
            Get In Touch
          </Link>
        </div>
      )}
      <style>{`
        @keyframes momilMenuDrop {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  )
}
