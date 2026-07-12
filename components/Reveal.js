'use client'
import { motion } from 'framer-motion'

/**
 * Subtle scroll reveal — fades and lifts content into view once.
 */
export default function Reveal({ children, delay = 0, y = 28, className, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
