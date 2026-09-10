'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// These three are finished promotional banners — each already carries its own
// headline, branding and product art. So the hero shows them whole (16:9, no
// crop) with no text overlaid on top, which would only fight the baked-in
// design. The stage matches their 16:9 ratio so nothing is cut on any screen,
// and it sits just below the fixed navbar so the banners' own top text is
// never hidden behind it.
const slides = [
  { id: 'juices', image: '/hero/hero-1.webp', alt: 'Momil fruit drinks — mango and guava, made with 100% real fruit' },
  { id: 'range',  image: '/hero/hero-2.webp', alt: 'Momil Foods — quality food & beverages exporter' },
  { id: 'brand',  image: '/hero/hero-3.webp', alt: 'Momil Foods' },
]

const HOLD = 6000 // ms each slide rests before the next crossfade

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), HOLD)
    return () => clearInterval(t)
  }, [])

  const slide = slides[current]

  return (
    <div className="bg-[#0d1308]">
      {/* Spacer the height of the fixed navbar, so the banner starts below it.
          (Height utilities are safe here; the global reset only kills padding.) */}
      <div className="h-[90px] md:h-[110px]" />

      {/* Pure 16:9 box (no max-height): the image ratio matches it exactly, so
          object-cover shows the whole banner with zero crop on any width. A
          max-height would make the box shorter than 16:9 on a short window and
          clip the banners' own top/bottom text. */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0d1308]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Slide indicator — bottom centre, works on every screen size */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((s, i) => (
            <button key={s.id} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-[#F5C518]' : 'w-3 bg-white/70 hover:bg-white'}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
