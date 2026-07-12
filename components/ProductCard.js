import Link from 'next/link'
import Image from 'next/image'

/**
 * Reusable product card — fully self-contained inline styles (no globals.css
 * dependency) so it always renders correctly. Pair with <ProductGrid> which
 * auto-fits 4-per-row on desktop and fewer on narrow screens for any count.
 */
export default function ProductCard({ product, categorySlug, categoryTitle, showDesc = false }) {
  return (
    <Link
      href={`/products/${categorySlug}/${product.slug}`}
      style={{
        display: 'flex', flexDirection: 'column', background: '#fff',
        border: '1px solid #eadfae', boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
        textDecoration: 'none', overflow: 'hidden', height: '100%',
      }}
    >
      {/* Media — product image made prominent (fills the box) */}
      <div style={{
        position: 'relative', height: '280px', background: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', overflow: 'hidden',
      }}>
        {product.image
          ? <Image src={product.image} alt={product.title} width={500} height={500}
              sizes="(max-width:640px) 90vw, (max-width:1024px) 45vw, 24vw"
              style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%', width: 'auto', height: 'auto' }} />
          : <div style={{
              width: '100%', height: '100%',
              background: 'linear-gradient(135deg, #102006, #2D5016, #D97706)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
              textAlign: 'center', color: '#E8B400', fontSize: '14px', fontWeight: 900,
              textTransform: 'uppercase', letterSpacing: '0.15em',
            }}>{categoryTitle || 'Product'}</div>
        }
      </div>

      {/* Body — name + weight only (clean catalog look) */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '18px 18px 20px', borderTop: '1px solid #f0ead8' }}>
        {categoryTitle && (
          <p style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#D97706' }}>{categoryTitle}</p>
        )}
        <h3 style={{ marginTop: '6px', fontSize: '16px', fontWeight: 800, lineHeight: 1.3, color: '#2D5016' }}>{product.title}</h3>
        {product.weight && (
          <p style={{ marginTop: '4px', fontSize: '13px', color: '#999' }}>{product.weight}</p>
        )}
        {showDesc && product.description && (
          <p style={{
            marginTop: '10px', fontSize: '14px', lineHeight: 1.7, color: '#777',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>{product.description}</p>
        )}
        <span style={{
          marginTop: 'auto', paddingTop: '14px', fontSize: '11px', fontWeight: 800,
          textTransform: 'uppercase', letterSpacing: '0.15em', color: '#E8B400',
        }}>View Details →</span>
      </div>
    </Link>
  )
}

/**
 * Responsive product grid. auto-fill + minmax => 4 columns on a normal content
 * area, dropping to 3 / 2 / 1 on narrower screens automatically, for any number
 * of products — so adding products never breaks the layout.
 */
export function ProductGrid({ children }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '20px',
      alignItems: 'stretch',
    }}>
      {children}
    </div>
  )
}
