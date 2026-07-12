'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Counts up to a numeric value when scrolled into view.
 * Accepts strings like "13+", "100+", "24h" — keeps the suffix.
 */
export default function CountUp({ value, duration = 1.6 }) {
  const match = String(value).match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - start) / (duration * 1000))
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])

  return <span ref={ref}>{n}{suffix}</span>
}
