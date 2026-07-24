import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductCard, { ProductGrid } from '@/components/ProductCard'
import CategoryNav from '@/components/CategoryNav'
import { categories, getCategory, getProductsByCategory } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { category: categorySlug } = await params
  const category = getCategory(categorySlug)
  if (!category) return { title: 'Products' }
  return {
    title: category.title,
    description: `${category.title} from Momil Foods — ${category.description}. Export-quality Pakistani food products with bulk supply and private labeling.`,
    alternates: { canonical: `/products/${category.slug}` },
  }
}

export default async function CategoryPage({ params }) {
  const { category: categorySlug } = await params
  const category = getCategory(categorySlug)
  // Products still awaiting a photo sink to the end, so a placeholder tile never
  // opens the grid. Matches the ordering on /products.
  const products = [...getProductsByCategory(categorySlug)]
    .sort((a, b) => (a.image ? 0 : 1) - (b.image ? 0 : 1))

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero — carries this category's own product banner behind the title */}
      <section style={{
        background: 'linear-gradient(135deg, #0d1308 0%, #1a2a0f 50%, #0d1308 100%)',
        paddingTop: '132px',
        paddingBottom: '52px',
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {category && (
          <Image
            src={`/categories/${category.id}.webp`}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', opacity: 0.3 }}
          />
        )}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(6,10,4,0.86) 0%, rgba(6,10,4,0.62) 45%, rgba(6,10,4,0.92) 100%)',
        }} />
        <div className="site-container" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
            <Link href="/" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Home</Link>
            <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.35)' }}>/</span>
            <Link href="/products" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Products</Link>
            <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.35)' }}>/</span>
            <span style={{ fontSize: '16px', color: '#E8B400', fontWeight: 700 }}>{category?.title}</span>
          </div>
          <h1 style={{
            fontSize: 'clamp(30px,4vw,46px)',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            lineHeight: 1,
            textShadow: '0 3px 22px rgba(0,0,0,0.5)',
          }}>{category?.title || 'Products'}</h1>
          <p style={{ marginTop: '14px', fontSize: '16px', color: 'rgba(255,255,255,0.72)', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
            {category?.description}
          </p>
          <p style={{ marginTop: '18px', fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F5C518' }}>
            {products.length} product{products.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      <CategoryNav activeSlug={categorySlug} />

      {/* Main Content — full width, no sidebar squeezing the photography */}
      <div style={{ background: '#faf7ec', flex: 1 }}>
        <div className="site-container" style={{ paddingTop: '40px', paddingBottom: '72px' }}>
          {products.length === 0 ? (
            <div style={{ background: '#fff', border: '1px solid #eadfae', padding: '60px 20px', textAlign: 'center' }}>
              <p style={{ color: '#bbb', fontSize: '16px' }}>No products yet in this category.</p>
              <Link href="/products" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', fontWeight: 700, color: '#2D5016', textDecoration: 'underline' }}>Browse all products</Link>
            </div>
          ) : (
            <ProductGrid max={products.length <= 6 ? 3 : 4}>
              {products.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  categorySlug={categorySlug}
                  categoryTitle={category?.title}
                />
              ))}
            </ProductGrid>
          )}

          {/* Close the page with a next step rather than dead space */}
          <div style={{
            marginTop: '48px', background: '#0d1308', padding: 'clamp(28px,4vw,44px)',
            textAlign: 'center', border: '1px solid rgba(232,180,0,0.25)',
          }}>
            <p style={{ fontSize: '12px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#F5C518' }}>
              Bulk & Private Label
            </p>
            <h2 style={{ marginTop: '12px', fontSize: 'clamp(20px,2.4vw,28px)', fontWeight: 900, color: '#fff', lineHeight: 1.25 }}>
              Need {category?.title} in export quantities?
            </h2>
            <p style={{ marginTop: '10px', fontSize: '15px', color: 'rgba(255,255,255,0.6)', maxWidth: '520px', margin: '10px auto 0' }}>
              Tell us your packing, quantity and destination — we will come back with options and pricing.
            </p>
            <Link href="/contact" style={{
              display: 'inline-flex', marginTop: '24px', background: '#E8B400', color: '#102006',
              padding: '15px 42px', fontSize: '13px', fontWeight: 900,
              letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none',
            }}>Request a Quote</Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
