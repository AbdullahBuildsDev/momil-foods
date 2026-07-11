'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const slides = [
  {
    id: '1',
    title: 'Momil Foods',
    subtitle: 'Quality food and beverages exporter',
    image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=1920&q=80',
    href: '/products',
  },
  {
    id: '2',
    title: 'Best Spices',
    subtitle: 'Taste of Pakistan',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=80',
    href: '/products/spices',
  },
  {
    id: '3',
    title: 'Dry Fruits',
    subtitle: 'Premium selected products',
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=1920&q=80',
    href: '/products/bulk-dry-fruits-nuts',
  },
  {
    id: '4',
    title: 'Natural Honey',
    subtitle: 'Pure. Raw. Unfiltered.',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=1920&q=80',
    href: '/products/honey',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 7000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="relative min-h-[720px] h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center bg-[#080c05]"
        >
          <Image
            src={slides[current].image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/46 to-black/22" />
          <div className="absolute inset-0 bg-[#2D5016]/18 mix-blend-multiply" />
          <div className="relative site-container text-white">
            <motion.div
              initial={{ x: -35, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.18 }}
              className="max-w-3xl text-center md:text-left"
            >
              <motion.p initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                className="text-sm md:text-lg tracking-[0.34em] uppercase mb-5 text-[#F5C518] font-extrabold drop-shadow">
                {slides[current].subtitle}
              </motion.p>
              <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
                className="text-5xl sm:text-6xl md:text-8xl font-black drop-shadow-2xl leading-[0.95] uppercase">
                {slides[current].title}
              </motion.h1>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                <Link href={slides[current].href} className="mt-10 inline-flex items-center justify-center border-2 border-[#E8B400] px-16 py-[18px] pl-[4.75rem] text-[13px] font-black tracking-[0.28em] text-[#E8B400] transition hover:bg-[#E8B400] hover:text-[#102006]">
                  DISCOVER
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot nav */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`rounded-full transition-all ${i === current ? 'bg-[#F5C518] w-3 h-8' : 'bg-white/50 w-3 h-3'}`} />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`h-0.5 transition-all rounded-full ${i === current ? 'w-10 bg-[#F5C518]' : 'w-4 bg-white/40'}`} />
        ))}
      </div>
    </div>
  )
}
