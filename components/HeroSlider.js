'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// All three frames are served from our own domain — no third-party image hosts.
const slides = [
  {
    id: 'salt',
    eyebrow: 'Himalayan Pink Salt',
    title: 'Pure by Nature',
    line: "Unrefined pink salt from Pakistan's Salt Range — supplied in retail packs, bulk and private label.",
    image: '/hero/pink-salt.webp',
  },
  {
    id: 'range',
    eyebrow: 'Quality Food & Beverages Exporter',
    title: 'Momil Foods',
    line: 'Juices, sweets, spices, salt and pantry staples — one sourcing partner for buyers in the USA, UK, Gulf and Europe.',
    image: '/hero/products.webp',
  },
  {
    id: 'dryfruit',
    eyebrow: 'Bulk Dry Fruits & Nuts',
    title: 'Naturally Dried',
    line: 'Sun-dried figs, raisins, dates and mulberries — cleaned, graded and packed to export standard.',
    image: '/hero/dry-fruits.webp',
  },
]

const HOLD = 9500 // ms each slide rests before the next crossfade

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), HOLD)
    return () => clearInterval(t)
  }, [])

  const slide = slides[current]

  return (
    <div className="relative min-h-[540px] h-[88svh] md:min-h-[720px] md:h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 1.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center bg-[#080c05]"
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover momil-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-[#2D5016]/16 mix-blend-multiply" />

          <div className="relative site-container text-white">
            <div className="max-w-3xl text-center md:text-left">
              <motion.p
                initial={{ y: -22, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                className="text-[11px] sm:text-sm md:text-base tracking-[0.32em] uppercase mb-5 text-[#F5C518] font-extrabold"
              >
                {slide.eyebrow}
              </motion.p>

              <motion.h1
                initial={{ y: 26, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.8 }}
                className="font-black uppercase leading-[0.94] tracking-[-0.015em]
                           text-[14vw] sm:text-6xl md:text-7xl lg:text-8xl
                           [text-shadow:0_4px_28px_rgba(0,0,0,0.55)]"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.8 }}
                className="mt-6 md:mt-8 max-w-xl mx-auto md:mx-0 text-base md:text-lg
                           leading-relaxed text-white/85 [text-shadow:0_2px_14px_rgba(0,0,0,0.6)]"
              >
                {slide.line}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot nav */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3">
        {slides.map((s, i) => (
          <button key={s.id} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all ${i === current ? 'bg-[#F5C518] w-3 h-8' : 'bg-white/50 w-3 h-3'}`} />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((s, i) => (
          <button key={s.id} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
            className={`h-0.5 transition-all rounded-full ${i === current ? 'w-10 bg-[#F5C518]' : 'w-4 bg-white/40'}`} />
        ))}
      </div>

      <style>{`
        .momil-kenburns {
          animation: momilKenBurns 14s ease-out forwards;
          transform-origin: center;
        }
        @keyframes momilKenBurns {
          from { transform: scale(1.04); }
          to   { transform: scale(1.13); }
        }
        @media (prefers-reduced-motion: reduce) {
          .momil-kenburns { animation: none; }
        }
      `}</style>
    </div>
  )
}
