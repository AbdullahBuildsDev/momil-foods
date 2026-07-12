'use client'
import { useState, useRef } from 'react'

/**
 * Product image viewer with zoom in / zoom out controls.
 * When zoomed past 1x, the image can be dragged to pan around.
 */
export default function ProductImageZoom({ src, alt }) {
  const [scale, setScale] = useState(1)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const dragging = useRef(false)
  const last = useRef({ x: 0, y: 0 })

  const zoomIn = () => setScale((s) => Math.min(3, +(s + 0.5).toFixed(1)))
  const zoomOut = () =>
    setScale((s) => {
      const n = Math.max(1, +(s - 0.5).toFixed(1))
      if (n === 1) setPos({ x: 0, y: 0 })
      return n
    })
  const reset = () => { setScale(1); setPos({ x: 0, y: 0 }) }

  const onDown = (e) => {
    if (scale === 1) return
    dragging.current = true
    last.current = { x: e.clientX, y: e.clientY }
  }
  const onMove = (e) => {
    if (!dragging.current) return
    const dx = e.clientX - last.current.x
    const dy = e.clientY - last.current.y
    last.current = { x: e.clientX, y: e.clientY }
    setPos((p) => ({ x: p.x + dx, y: p.y + dy }))
  }
  const onUp = () => { dragging.current = false }

  const btn = {
    width: 40, height: 40, borderRadius: '50%', border: '1px solid #eadfae',
    background: '#fff', color: '#2D5016', fontSize: 20, fontWeight: 700,
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.12)', lineHeight: 1,
  }

  return (
    <div
      style={{
        position: 'relative', width: '100%', height: '100%', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: scale > 1 ? (dragging.current ? 'grabbing' : 'grab') : 'default',
        touchAction: 'none',
      }}
      onMouseDown={onDown}
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        style={{
          maxHeight: '100%', maxWidth: '100%', objectFit: 'contain',
          transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
          transition: dragging.current ? 'none' : 'transform 0.2s ease',
          userSelect: 'none',
        }}
      />

      {/* Controls */}
      <div style={{ position: 'absolute', bottom: 16, right: 16, display: 'flex', gap: 10 }}>
        <button type="button" onClick={zoomOut} aria-label="Zoom out" style={btn}>−</button>
        <button type="button" onClick={zoomIn} aria-label="Zoom in" style={btn}>+</button>
      </div>

      {scale > 1 && (
        <button type="button" onClick={reset} aria-label="Reset zoom"
          style={{
            position: 'absolute', top: 16, right: 16, padding: '6px 14px',
            borderRadius: 999, border: '1px solid #eadfae', background: '#fff',
            color: '#666', fontSize: 11, fontWeight: 800, letterSpacing: '0.1em',
            textTransform: 'uppercase', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          }}>
          Reset
        </button>
      )}
    </div>
  )
}
