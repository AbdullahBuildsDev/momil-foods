'use client'
import { useState, useMemo, useEffect } from 'react'
import { Search, X, ArrowDownUp } from 'lucide-react'
import ProductCard, { ProductGrid } from './ProductCard'

const PAGE = 24 // products shown before "Load more"

// Category is the default: it reads as an organised catalogue, and it keeps the
// "Featured" badge meaningful by scattering those products instead of stacking
// every one of them into the first screen.
const SORTS = [
  { id: 'category', label: 'Category' },
  { id: 'featured', label: 'Featured first' },
  { id: 'az', label: 'Name A–Z' },
  { id: 'za', label: 'Name Z–A' },
]

/**
 * Client-side search, category chips and sorting over the full product list.
 * Results are paged so the page stays short instead of rendering all ~96 cards.
 */
export default function ProductBrowser({ products, categories }) {
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('all')
  const [sort, setSort] = useState('category')
  const [shown, setShown] = useState(PAGE)

  const catTitle = (id) => categories.find((c) => c.id === id || c.slug === id)?.title
  const catSlug = (id) => categories.find((c) => c.id === id)?.slug || id

  // How many products sit in each category — shown on the chips.
  const counts = useMemo(() => {
    const m = {}
    for (const p of products) m[p.category] = (m[p.category] || 0) + 1
    return m
  }, [products])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const list = products.filter((p) => {
      const matchCat = cat === 'all' || p.category === cat
      const matchText = !q ||
        p.title.toLowerCase().includes(q) ||
        (catTitle(p.category) || '').toLowerCase().includes(q)
      return matchCat && matchText
    })
    const byTitle = (a, b) => a.title.localeCompare(b.title)
    // Products still awaiting a photo always sink below the ones that have one,
    // so a visitor never lands on a placeholder tile first.
    const byPhoto = (a, b) => (a.image ? 0 : 1) - (b.image ? 0 : 1)
    const order = {
      az: byTitle,
      za: (a, b) => byTitle(b, a),
      category: (a, b) => (catTitle(a.category) || '').localeCompare(catTitle(b.category) || '') || byTitle(a, b),
      featured: (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0),
    }[sort] || byTitle
    return [...list].sort((a, b) => byPhoto(a, b) || order(a, b))
  }, [products, query, cat, sort])

  // Any change to the filters starts the list again from the first page.
  useEffect(() => { setShown(PAGE) }, [query, cat, sort])

  const visible = filtered.slice(0, shown)
  const chip = (active) => ({
    padding: '9px 15px', fontSize: '13px', fontWeight: active ? 800 : 600,
    borderRadius: '999px', cursor: 'pointer', whiteSpace: 'nowrap',
    background: active ? '#2D5016' : '#fff',
    color: active ? '#fff' : '#5c5c5c',
    border: `1px solid ${active ? '#2D5016' : '#eadfae'}`,
    transition: 'all .18s ease',
  })

  return (
    <div>
      {/* Search + sort */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: '1 1 280px', minWidth: 0 }}>
          <Search size={18} color="#9a9a7a" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            style={{
              width: '100%', padding: '13px 40px 13px 42px', fontSize: '15px',
              border: '1px solid #eadfae', background: '#fff', color: '#2D5016', outline: 'none',
            }}
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} aria-label="Clear search"
              style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}>
              <X size={18} color="#bbb" />
            </button>
          )}
        </div>

        <div style={{ position: 'relative', flex: '0 1 220px' }}>
          <ArrowDownUp size={16} color="#9a9a7a" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort products"
            style={{
              width: '100%', padding: '13px 14px 13px 40px', fontSize: '15px',
              border: '1px solid #eadfae', background: '#fff', color: '#2D5016',
              outline: 'none', appearance: 'none', cursor: 'pointer',
            }}
          >
            {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>
        </div>
      </div>

      {/* Category chips — with counts, so buyers can see where the depth is */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '18px' }}>
        <button type="button" onClick={() => setCat('all')} style={chip(cat === 'all')}>
          All <span style={{ opacity: 0.65 }}>{products.length}</span>
        </button>
        {categories.map((c) => counts[c.id] ? (
          <button key={c.id} type="button" onClick={() => setCat(c.id)} style={chip(cat === c.id)}>
            {c.title} <span style={{ opacity: 0.65 }}>{counts[c.id]}</span>
          </button>
        ) : null)}
      </div>

      {/* Count + active filter summary */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', margin: '22px 0 18px' }}>
        <p style={{ fontSize: '14px', color: '#8a8a8a' }}>
          Showing <b style={{ color: '#2D5016' }}>{visible.length}</b> of{' '}
          <b style={{ color: '#2D5016' }}>{filtered.length}</b> product{filtered.length !== 1 ? 's' : ''}
          {cat !== 'all' && <> in <b style={{ color: '#2D5016' }}>{catTitle(cat)}</b></>}
          {query && <> for “<b style={{ color: '#2D5016' }}>{query}</b>”</>}
        </p>
        {(cat !== 'all' || query) && (
          <button type="button" onClick={() => { setQuery(''); setCat('all') }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'none',
              border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 700, color: '#B8860B',
            }}>
            <X size={14} /> Clear filters
          </button>
        )}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div style={{ background: '#fff', border: '1px solid #eadfae', padding: '60px 20px', textAlign: 'center' }}>
          <p style={{ color: '#bbb', fontSize: '16px' }}>No products match your search.</p>
          <button type="button" onClick={() => { setQuery(''); setCat('all') }}
            style={{ marginTop: '16px', fontSize: '14px', fontWeight: 700, color: '#2D5016', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}>
            Clear filters
          </button>
        </div>
      ) : (
        <>
          <ProductGrid>
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} categorySlug={catSlug(p.category)} categoryTitle={catTitle(p.category)} />
            ))}
          </ProductGrid>

          {shown < filtered.length && (
            <div style={{ textAlign: 'center', marginTop: '36px' }}>
              <button type="button" onClick={() => setShown((n) => n + PAGE)}
                style={{
                  background: '#E8B400', color: '#102006', border: 'none', cursor: 'pointer',
                  padding: '15px 44px', fontSize: '13px', fontWeight: 900,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                }}>
                Load more ({filtered.length - shown} left)
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
