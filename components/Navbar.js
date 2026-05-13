'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { categories, products } from '@/lib/data'

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

  const navLinkClass = (href) => {
    const active = pathname === href
    return `relative text-[13px] font-semibold uppercase text-white transition hover:text-[#F5C518] after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:bg-[#B8C63B] after:transition-all ${active ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`
  }

  const menuCategories = categories.slice(0, 9).map((cat) => ({
    ...cat,
    items: products.filter((product) => product.category === cat.id).slice(0, 3),
  }))

  const isHome = pathname === '/'

  return (
    <nav className={`fixed top-0 w-full z-50 border-b border-white/10 transition-all duration-300 ${scrolled || mobileOpen || !isHome ? 'bg-[#070b05]/95 shadow-2xl backdrop-blur-xl' : 'bg-black/30 backdrop-blur-[2px]'}`}>
      <div className="site-container flex items-center justify-between h-[86px] md:h-[96px]">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Momil Foods" width={150} height={76} className="h-14 md:h-16 w-auto" priority />
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className={navLinkClass('/')}>Home</Link>
          <Link href="/about" className={navLinkClass('/about')}>About</Link>
          <div className="relative py-8 -my-8" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className={navLinkClass('/products')} aria-expanded={dropdownOpen}>Products <span className="text-[#B8C63B]">⌄</span></button>
            {dropdownOpen && (
              <div className="absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-4">
                <div className="bg-[#080c05]/98 shadow-2xl border-t-2 border-[#B8C63B] p-7 backdrop-blur-xl">
                  <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-[#F5C518]">Browse Products</p>
                    <Link href="/products" className="text-xs font-black uppercase tracking-[0.18em] text-white hover:text-[#F5C518]">All Products</Link>
                  </div>
                  <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                    {menuCategories.map((cat) => (
                      <div key={cat.id}>
                        <Link href={`/products/${cat.slug}`} className="block text-sm font-black uppercase leading-tight text-white hover:text-[#F5C518]">
                          {cat.title}
                        </Link>
                        <div className="mt-2 grid gap-1.5">
                          {cat.items.length > 0 ? cat.items.map((product) => (
                            <Link key={product.id} href={`/products/${cat.slug}/${product.slug}`} className="block text-xs leading-5 text-white/58 hover:text-[#B8C63B]">
                              {product.title}
                            </Link>
                          )) : (
                            <span className="text-xs leading-5 text-white/38">Coming soon</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/blog" className={navLinkClass('/blog')}>Blog</Link>
          <Link href="/contact" className="rounded-full bg-[#B8C63B] px-8 py-4 text-[13px] font-extrabold uppercase text-[#172006] transition hover:bg-[#F5C518] hover:shadow-lg">Get in touch</Link>
        </div>
        <button
          type="button"
          className="md:hidden flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/25 text-white"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#070b05]/98 px-5 py-5 shadow-2xl">
          <div className="flex flex-col gap-1">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Products', '/products'],
              ['Blog', '/blog'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="py-3 text-sm font-semibold uppercase text-white/90" onClick={() => setMobileOpen(false)}>
                {label}
              </Link>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-1 gap-1 border-t border-white/10 pt-3">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/products/${cat.slug}`} className="py-2 text-sm text-white/65" onClick={() => setMobileOpen(false)}>
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
