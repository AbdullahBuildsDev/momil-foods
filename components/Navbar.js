'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { categories } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#102006] shadow-xl' : 'bg-[#102006]/90 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[72px] min-h-[72px]">
        <Link href="/" className="text-white font-bold text-xl">
          <img src="/logo.svg" alt="Momil Foods" className="h-11 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-[#F5C518] transition font-semibold">HOME</Link>
          <Link href="/about" className="text-white hover:text-[#F5C518] transition font-semibold">ABOUT</Link>
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className="text-white hover:text-[#F5C518] transition font-semibold">PRODUCTS ▾</button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 bg-[#102006] min-w-56 shadow-2xl border-t-2 border-[#F5C518]">
                <Link href="/products" className="block px-4 py-3 text-[#F5C518] font-bold hover:bg-[#223B10] text-sm">All Products</Link>
                {categories.map((cat) => (
                  <Link key={cat.id} href={`/products/${cat.slug}`} className="block px-4 py-3 text-white hover:bg-[#223B10] hover:text-[#F5C518] text-sm">
                    {cat.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/blog" className="text-white hover:text-[#F5C518] transition font-semibold">BLOG</Link>
          <Link href="/contact" className="bg-[#F5C518] text-[#102006] px-4 py-2 font-bold hover:bg-[#D97706] hover:text-white transition rounded-sm">GET IN TOUCH</Link>
        </div>
      </div>
    </nav>
  )
}
