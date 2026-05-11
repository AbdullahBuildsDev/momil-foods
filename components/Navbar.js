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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#2D5016] shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/">
          <img src="/logo.svg" alt="Momil Foods" style={{height:"40px"}} />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-[#F5C518] transition">HOME</Link>
          <Link href="/about" className="text-white hover:text-[#F5C518] transition">ABOUT</Link>
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className="text-white hover:text-[#F5C518] transition">PRODUCTS ▾</button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 bg-[#2D5016] min-w-48 shadow-xl">
                <Link href="/products" className="block px-4 py-2 text-white hover:bg-[#4A8B1F] text-sm">All Products</Link>
                {categories.map((cat) => (
                  <Link key={cat.id} href={`/products/${cat.slug}`} className="block px-4 py-2 text-white hover:bg-[#4A8B1F] text-sm">
                    {cat.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/blog" className="text-white hover:text-[#F5C518] transition">BLOG</Link>
          <Link href="/contact" className="bg-[#F518] text-[#2D5016] px-4 py-2 font-bold hover:bg-[#D97706] transition">GET IN TOUCH</Link>
        </div>
      </div>
    </nav>
  )
}
