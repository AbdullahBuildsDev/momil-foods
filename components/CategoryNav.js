import Link from 'next/link'
import { categories, products } from '@/lib/data'

const counts = products.reduce((m, p) => ({ ...m, [p.category]: (m[p.category] || 0) + 1 }), {})

/**
 * Horizontal category switcher shown under the hero on product pages.
 * Replaces the old 260px sidebar, which pushed the grid — and the product
 * photography with it — into a narrow column.
 */
export default function CategoryNav({ activeSlug }) {
  const pill = (active) => ({
    display: 'inline-flex', alignItems: 'center', gap: '6px',
    padding: '9px 16px', fontSize: '13px', fontWeight: active ? 800 : 600,
    borderRadius: '999px', textDecoration: 'none', whiteSpace: 'nowrap',
    background: active ? '#2D5016' : '#fff',
    color: active ? '#fff' : '#5c5c5c',
    border: `1px solid ${active ? '#2D5016' : '#eadfae'}`,
  })

  return (
    <div style={{ background: '#fff', borderBottom: '1px solid #eadfae' }}>
      <div className="site-container" style={{ padding: '16px 0' }}>
        <div className="cat-nav-row">
          <Link href="/products" style={pill(!activeSlug)}>
            All <span style={{ opacity: 0.6 }}>{products.length}</span>
          </Link>
          {categories.map((c) => counts[c.id] ? (
            <Link key={c.id} href={`/products/${c.slug}`} style={pill(c.slug === activeSlug)}>
              {c.title} <span style={{ opacity: 0.6 }}>{counts[c.id]}</span>
            </Link>
          ) : null)}
        </div>
      </div>
      <style>{`
        .cat-nav-row { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 2px; }
        .cat-nav-row::-webkit-scrollbar { height: 0; }
        /* Wrap instead of scroll once there is room for it. */
        @media (min-width: 900px) { .cat-nav-row { flex-wrap: wrap; overflow-x: visible; } }
      `}</style>
    </div>
  )
}
