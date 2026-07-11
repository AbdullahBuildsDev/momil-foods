import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { categories, products, getCategory, getProduct, getProductsByCategory } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'

export function generateStaticParams() {
  return products.map((product) => {
    const category = categories.find((item) => item.id === product.category)
    return {
      category: category?.slug || product.category,
      product: product.slug,
    }
  })
}

export default async function ProductPage({ params }) {
  const { category: categorySlug, product: productSlug } = await params
  const product = getProduct(productSlug)
  const category = getCategory(categorySlug)
  const relatedProducts = getProductsByCategory(categorySlug).filter(p => p.id !== product?.id).slice(0, 3)

  if (!product) return <div style={{ paddingTop: '200px', textAlign: 'center', color: '#999' }}>Product not found.</div>

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero Bar */}
      <section style={{
        background: 'linear-gradient(135deg, #0d1308 0%, #1a2a0f 50%, #0d1308 100%)',
        paddingTop: '150px',
        paddingBottom: '40px',
      }}>
        <div className="site-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link href="/" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>/</span>
            <Link href="/products" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Products</Link>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>/</span>
            <Link href={`/products/${categorySlug}`} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>{category?.title}</Link>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ fontSize: '12px', color: '#E8B400', fontWeight: 700 }}>{product.title}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section style={{ background: '#faf7ec', flex: 1 }}>
        <div className="site-container" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
          <div className="product-detail-grid" style={{ display: 'grid', gap: '48px', background: '#fff', border: '1px solid #eadfae', overflow: 'hidden' }}>

            {/* Image */}
            <div style={{ background: '#f8f6f0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', minHeight: '400px' }}>
              {product.image
                ? <Image src={product.image} alt={product.title} width={500} height={500} style={{ objectFit: 'contain', maxHeight: '420px', width: 'auto', maxWidth: '100%' }} />
                : <div style={{
                    width: '100%', height: '400px',
                    background: 'linear-gradient(135deg, #102006, #2D5016, #D97706)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#E8B400', fontSize: '28px', fontWeight: 900, textTransform: 'uppercase',
                  }}>{category?.title || 'Product'}</div>
              }
            </div>

            {/* Info */}
            <div style={{ padding: '48px 40px 48px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="product-info-pad">
              <p style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#E8B400' }}>{category?.title}</p>
              <h1 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, color: '#2D5016', marginTop: '12px', lineHeight: 1.15 }}>{product.title}</h1>

              <div style={{ display: 'flex', gap: '24px', marginTop: '24px', paddingBottom: '24px', borderBottom: '1px solid #f0ead8' }}>
                {product.weight && (
                  <div>
                    <p style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#bbb', marginBottom: '4px' }}>Weight</p>
                    <p style={{ fontSize: '15px', fontWeight: 700, color: '#333' }}>{product.weight}</p>
                  </div>
                )}
                {product.origin && (
                  <div>
                    <p style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#bbb', marginBottom: '4px' }}>Origin</p>
                    <p style={{ fontSize: '15px', fontWeight: 700, color: '#333' }}>{product.origin}</p>
                  </div>
                )}
              </div>

              {product.description && (
                <p style={{ marginTop: '24px', fontSize: '15px', lineHeight: 1.9, color: '#666' }}>{product.description}</p>
              )}

              <div style={{ display: 'flex', gap: '16px', marginTop: '36px', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#E8B400', color: '#102006', padding: '16px 36px',
                  fontSize: '13px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em',
                  textDecoration: 'none', transition: 'all 0.2s',
                }}>
                  Enquire Now
                </Link>
                <a href="https://wa.me/923452211111" target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  border: '2px solid #2D5016', color: '#2D5016', padding: '14px 28px',
                  fontSize: '13px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em',
                  textDecoration: 'none',
                }}>
                  WhatsApp
                </a>
              </div>
            </div>

          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div style={{ marginTop: '72px' }}>
              <h3 style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#E8B400', marginBottom: '12px' }}>More from {category?.title}</h3>
              <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 300, textTransform: 'uppercase', color: '#3b3b3b', marginBottom: '32px' }}>
                <b>Related</b> Products
              </h2>
              <div className="related-grid" style={{ display: 'grid', gap: '20px' }}>
                {relatedProducts.map((p) => (
                  <Link key={p.id} href={`/products/${categorySlug}/${p.slug}`} style={{
                    background: '#fff', textDecoration: 'none', overflow: 'hidden',
                    border: '1px solid #eadfae', transition: 'all 0.3s',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  }}>
                    <div style={{ height: '180px', background: '#f8f6f0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
                      {p.image
                        ? <Image src={p.image} alt={p.title} width={300} height={300} style={{ objectFit: 'contain', maxHeight: '150px', width: 'auto' }} />
                        : <div style={{
                            width: '100%', height: '100%', background: 'linear-gradient(135deg, #102006, #2D5016, #D97706)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#E8B400', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase',
                          }}>{category?.title}</div>
                      }
                    </div>
                    <div style={{ padding: '16px 18px 20px' }}>
                      <h4 style={{ fontWeight: 800, color: '#2D5016', fontSize: '14px' }}>{p.title}</h4>
                      <p style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>{p.weight}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <style>{`
        .product-detail-grid { grid-template-columns: 1fr; }
        .product-info-pad { padding: 32px 24px !important; }
        @media(min-width: 768px) {
          .product-detail-grid { grid-template-columns: 1fr 1fr; }
          .product-info-pad { padding: 48px 40px 48px 0 !important; }
        }
        .related-grid { grid-template-columns: repeat(2, 1fr); }
        @media(min-width: 768px) { .related-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>

      <Footer />
    </main>
  )
}
