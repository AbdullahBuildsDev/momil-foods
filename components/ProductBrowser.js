'use client'
import { useState, useMemo } from 'react'
import { Search, X, SlidersHorizontal } from 'lucide-react'
import ProductCard, { ProductGrid } from './ProductCard'

/**
 * Client-side search + category filter over the full product list.
 * Filters live as the user types / picks a category.
 */
export default function ProductBrowser({ products, categories }) {
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('all')

  const catTitle = (id) => categories.find((c) => c.id === id || c.slug === id)?.title
  const catSlug = (id) => categories.find((c) => c.id === id)?.slug || id

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) => {
      const matchCat = cat === 'all' || p.category === cat
      const matchText = !q ||
        p.title.toLowerCase().includes(q) ||
        (catTitle(p.category) || '').toLowerCase().includes(q)
      return matchCat && matchText
    })
  }, [products, query, cat])

  return (
    <div>
      {/* Controls */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
        {/* Search */}
        <div style={{ position: 'relative', flex: '1 1 260px', minWidth: 0 }}>
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

        {/* Category filter */}
        <div style={{ position: 'relative', flex: '0 1 240px' }}>
          <SlidersHorizontal size={16} color="#9a9a7a" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            style={{
              width: '100%', padding: '13px 14px 13px 40px', fontSize: '15px',
              border: '1px solid #eadfae', background: '#fff', color: '#2D5016',
              outline: 'none', appearance: 'none', cursor: 'pointer',
            }}
          >
            <option value="all">All categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.title}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Count */}
      <p style={{ fontSize: '14px', color: '#999', marginBottom: '20px' }}>
        {filtered.length} product{filtered.length !== 1 ? 's' : ''}
        {cat !== 'all' && <> in <b style={{ color: '#2D5016' }}>{catTitle(cat)}</b></>}
        {query && <> for “<b style={{ color: '#2D5016' }}>{query}</b>”</>}
      </p>

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
        <ProductGrid>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} categorySlug={catSlug(p.category)} categoryTitle={catTitle(p.category)} />
          ))}
        </ProductGrid>
      )}
    </div>
  )
}
