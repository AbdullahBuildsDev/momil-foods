import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductBrowser from '@/components/ProductBrowser'
import { categories, products } from '@/lib/data'
import Link from 'next/link'

export const metadata = {
  title: 'Products',
  description: 'Browse Momil Foods’ export product range — spices, dry fruits & nuts, honey, tea, snacks, Himalayan pink salt, sauces, pickles and more. Search and filter our full catalog.',
  alternates: { canonical: '/products' },
}

export default function Products() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0d1308 0%, #1a2a0f 50%, #0d1308 100%)',
        paddingTop: '160px',
        paddingBottom: '80px',
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 'clamp(120px,20vw,320px)', fontWeight: 900, color: 'rgba(232,180,0,0.04)',
          pointerEvents: 'none', userSelect: 'none', lineHeight: 1, textTransform: 'uppercase',
        }}>Products</div>
        <div className="site-container" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
            <Link href="/" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Home</Link>
            <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.35)' }}>/</span>
            <span style={{ fontSize: '16px', color: '#E8B400', fontWeight: 700 }}>All Products</span>
          </div>
          <h1 style={{ fontSize: 'clamp(36px,6vw,72px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1 }}>
            Our Products
          </h1>
          <p style={{ marginTop: '16px', fontSize: '16px', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
            Selected food and beverage products with dependable quality, practical packing and buyer-ready support from Lahore, Pakistan.
          </p>
        </div>
      </section>

      {/* Category Chips - Mobile */}
      <div className="md:hidden" style={{ background: '#fff', borderBottom: '1px solid #eadfae', padding: '16px', overflowX: 'auto' }}>
        <div style={{ display: 'flex', gap: '8px', whiteSpace: 'nowrap' }}>
          <Link href="/products" style={{
            display: 'inline-block', padding: '8px 16px', fontSize: '14px', fontWeight: 800,
            textTransform: 'uppercase', borderRadius: '999px', textDecoration: 'none',
            background: '#2D5016', color: '#fff', border: '1px solid #2D5016',
          }}>All</Link>
          {categories.map((cat) => (
            <Link key={cat.id} href={`/products/${cat.slug}`} style={{
              display: 'inline-block', padding: '8px 16px', fontSize: '14px', fontWeight: 600,
              textTransform: 'uppercase', borderRadius: '999px', textDecoration: 'none',
              color: '#2D5016', border: '1px solid #eadfae',
            }}>
              {cat.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ background: '#faf7ec', flex: 1 }}>
        <div className="site-container" style={{ paddingTop: '48px', paddingBottom: '80px', display: 'flex', gap: '48px' }}>

          {/* Desktop Sidebar */}
          <aside className="hidden md:block" style={{ width: '260px', flexShrink: 0 }}>
            <div style={{
              position: 'sticky', top: '130px',
              background: '#fff', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              border: '1px solid #eadfae',
            }}>
              <h3 style={{ fontWeight: 900, color: '#2D5016', fontSize: '16px', borderBottom: '2px solid #E8B400', paddingBottom: '12px', marginBottom: '16px' }}>Browse by</h3>
              <Link href="/products" style={{ display: 'block', padding: '10px 0', fontSize: '14px', color: '#2D5016', fontWeight: 800, textDecoration: 'none', borderBottom: '1px solid #f0ead8' }}>
                All products
              </Link>
              {categories.map((cat) => (
                <Link key={cat.id} href={`/products/${cat.slug}`} style={{
                  display: 'block', padding: '10px 0', fontSize: '14px', textDecoration: 'none',
                  borderBottom: '1px solid #f0ead8', color: '#888', fontWeight: 400,
                }}>
                  {cat.title}
                </Link>
              ))}
            </div>
          </aside>

          {/* Products Grid */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2 style={{ fontSize: 'clamp(22px,3vw,30px)', fontWeight: 900, color: '#2D5016', marginBottom: '20px' }}>All Products</h2>
            <ProductBrowser products={products} categories={categories} />
          </div>

        </div>
      </div>

      <Footer />
    </main>
  )
}
