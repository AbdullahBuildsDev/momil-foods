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
        paddingTop: '132px',
        paddingBottom: '46px',
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 'clamp(90px,15vw,220px)', fontWeight: 900, color: 'rgba(232,180,0,0.05)',
          pointerEvents: 'none', userSelect: 'none', lineHeight: 1, textTransform: 'uppercase',
        }}>Products</div>
        <div className="site-container" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
            <Link href="/" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Home</Link>
            <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.35)' }}>/</span>
            <span style={{ fontSize: '16px', color: '#E8B400', fontWeight: 700 }}>All Products</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px,3.6vw,42px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1 }}>
            Our Products
          </h1>
          <p style={{ marginTop: '14px', fontSize: '15px', color: 'rgba(255,255,255,0.55)', maxWidth: '540px', marginLeft: 'auto', marginRight: 'auto' }}>
            Selected food and beverage products with dependable quality, practical packing and buyer-ready support from Lahore, Pakistan.
          </p>
        </div>
      </section>

      {/* Main Content — full width; filtering lives in the browser toolbar */}
      <div style={{ background: '#faf7ec', flex: 1 }}>
        <div className="site-container" style={{ paddingTop: '36px', paddingBottom: '72px' }}>
          <ProductBrowser products={products} categories={categories} />
        </div>
      </div>

      <Footer />
    </main>
  )
}
