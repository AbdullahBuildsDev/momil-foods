import Link from 'next/link'
import Image from 'next/image'

/**
 * Reusable product card — fully self-contained inline styles (no globals.css
 * dependency) so it always renders correctly. Pair with <ProductGrid> which is
 * responsive: 2-per-row (mobile), 3 (tablet), 4 (desktop) for any product count.
 */
export default function ProductCard({ product, categorySlug, categoryTitle, showDesc = false }) {
  return (
    <Link
      href={`/products/${categorySlug}/${product.slug}`}
      className="momil-pcard"
      style={{
        display: 'flex', flexDirection: 'column', background: '#fff',
        border: '1px solid #eadfae', boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
        textDecoration: 'none', overflow: 'hidden', height: '100%',
      }}
    >
      {/* Media — square box that scales with card width (prominent image) */}
      <div style={{
        position: 'relative', width: '100%', aspectRatio: '1 / 1', background: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px', overflow: 'hidden',
      }}>
        {product.featured && (
          <span style={{
            position: 'absolute', top: '10px', left: '10px', zIndex: 2,
            background: '#E8B400', color: '#102006', fontSize: '9px', fontWeight: 900,
            letterSpacing: '0.14em', textTransform: 'uppercase', padding: '4px 9px',
          }}>Featured</span>
        )}
        {product.image
          ? <Image src={product.image} alt={product.title} width={500} height={500}
              sizes="(max-width:640px) 45vw, (max-width:1024px) 30vw, 22vw"
              style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%', width: 'auto', height: 'auto' }} />
          : <div style={{
              width: '100%', height: '100%',
              background: 'linear-gradient(135deg, #102006, #2D5016, #D97706)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
              textAlign: 'center', color: '#E8B400', fontSize: '13px', fontWeight: 900,
              textTransform: 'uppercase', letterSpacing: '0.12em',
            }}>{categoryTitle || 'Product'}</div>
        }
      </div>

      {/* Body — name + weight (clean catalog look) */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '14px 14px 16px', borderTop: '1px solid #f0ead8' }}>
        {categoryTitle && (
          <p style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#D97706' }}>{categoryTitle}</p>
        )}
        <h3 style={{ marginTop: '5px', fontSize: '15px', fontWeight: 800, lineHeight: 1.3, color: '#2D5016' }}>{product.title}</h3>
        {product.weight && (
          <p style={{ marginTop: '3px', fontSize: '12px', color: '#999' }}>{product.weight}</p>
        )}
        {showDesc && product.description && (
          <p style={{
            marginTop: '9px', fontSize: '13px', lineHeight: 1.6, color: '#777',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>{product.description}</p>
        )}
      </div>
    </Link>
  )
}

/**
 * Responsive product grid — 2 columns on mobile, 3 on tablet, 4 on desktop,
 * for any number of products. Reusable across all product listings.
 */
export function ProductGrid({ children, max = 4 }) {
  // A short category looks better in fewer, larger columns than in a 4-wide row
  // that trails off into empty space.
  const wide = Math.min(max, 4)
  const mid = Math.min(max, 3)
  return (
    <div className="momil-pgrid" data-max={wide}>
      {children}
      <style>{`
        .momil-pgrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          align-items: stretch;
        }
        @media (min-width: 640px) {
          .momil-pgrid { gap: 20px; grid-template-columns: repeat(${mid}, minmax(0, 1fr)); }
        }
        @media (min-width: 1024px) {
          .momil-pgrid { grid-template-columns: repeat(${wide}, minmax(0, 1fr)); }
        }
        .momil-pcard { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .momil-pcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 34px rgba(0,0,0,0.12) !important;
          border-color: #E8B400 !important;
        }
        .momil-pcard:hover img { transform: scale(1.04); }
        .momil-pcard img { transition: transform 0.4s ease; }
      `}</style>
    </div>
  )
}
