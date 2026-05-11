'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const placeholderSlides = [
  { id: '1', title: 'Premium', subtitle: 'Dry Fruits & Nuts', bg: 'from-[#102006] via-[#2D5016] to-[#1a1a1a]' },
  { id: '2', title: 'Fresh', subtitle: 'Fruit Juices', bg: 'from-[#1a1a1a] via-[#4A8B1F] to-[#D97706]' },
  { id: '3', title: 'Authentic', subtitle: 'Pakistani Snacks', bg: 'from-[#2d1a0a] via-[#D97706] to-[#102006]' },
]

export default function HeroSlider({ slides = [] }) {
  const data = slides.length ? slides : placeholderSlides
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % data.length), 7000)
    return () => clearInterval(t)
  }, [data.length])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={data[current].id || data[current]._id}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 bg-gradient-to-br ${data[current].bg} flex items-center justify-center`}
        >
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative text-center text-white px-4">
            <motion.p initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-2xl tracking-widest uppercase mb-2 text-[#F5C518] font-semibold drop-shadow">{data[current].subtitle}</motion.p>
            <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
              className="text-6xl md:text-7xl font-black drop-shadow-2xl">{data[current].title}</motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <Link href="/products" className="mt-8 inline-block border-2 border-[#F5C518] text-[#F5C518] px-8 py-3 tracking-widest hover:bg-[#F5C518] hover:text-[#102006] transition font-bold">
                DISCOVER
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {data.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`rounded-full transition-all ${i === current ? 'bg-[#F5C518] w-3 h-8' : 'bg-white/50 w-3 h-3'}`} />
        ))}
      </div>
    </div>
  )
}
