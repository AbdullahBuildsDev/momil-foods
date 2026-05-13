import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import Footer from '@/components/Footer'
import { categories } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'

// Unsplash images — swap for real product photos when available
const IMG = {
  fruits:  'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800&q=80',
  spices:  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
  mangoes: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=800&q=80',
  nuts:    'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80',
  dates:   'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
  honey:   'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80',
}

const specialProducts = [
  { title: 'Fruit Juices', href: '/products/drinks-and-juices', image: IMG.fruits },
  { title: 'Dry Fruits',   href: '/products/bulk-dry-fruits-nuts', image: IMG.nuts },
  { title: 'Spices',       href: '/products/spices',               image: IMG.spices },
  { title: 'Honey',        href: '/products/honey',                image: IMG.honey },
  { title: 'Mangoes',      href: '/products/drinks-and-juices',    image: IMG.mangoes },
  { title: 'Dates',        href: '/products/bulk-dry-fruits-nuts', image: IMG.dates },
]

const categoryImages = {
  'drinks-and-juices': IMG.fruits,
  spices:              IMG.spices,
  honey:               IMG.honey,
}

const responsibilityCards = [
  ['Buyer Support',    'One-window sourcing, product development and packing support for growing food brands.',                       IMG.fruits],
  ['Export Readiness', 'Practical help for bulk supply, co-packing, packaging design and documentation needs.',                       IMG.spices],
  ['Quality Focus',    'Selected products packed with consistency for local, retail, food service and export buyers.',                 IMG.mangoes],
  ['Market Trust',     'Long-term service built around dependable response, fair dealing and repeatable standards.',                   IMG.nuts],
]

const showcaseProducts = [
  { title: 'Fruit Juices', image: IMG.fruits,   href: '/products/drinks-and-juices' },
  { title: 'Dry Fruits',   image: IMG.nuts,     href: '/products/bulk-dry-fruits-nuts' },
  { title: 'Spices',       image: IMG.spices,   href: '/products/spices' },
  { title: 'Mangoes',      image: IMG.mangoes,  href: '/products/drinks-and-juices' },
  { title: 'Honey',        image: IMG.honey,    href: '/products/honey' },
  { title: 'Dates',        image: IMG.dates,    href: '/products/bulk-dry-fruits-nuts' },
]

const testimonials = [
  ['Momil Foods helped us source practical, export-ready food products with quick communication and clear support.', 'Buyer, Middle East'],
  ['The team understands private label needs and gives dependable help from product selection to packing direction.', 'Retail Partner'],
  ['A useful sourcing partner for Pakistani food products, especially when speed and flexibility matter.', 'Food Importer'],
]

export default function Home() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <Navbar />
      <HeroSlider />

      {/* ── SPECIAL PRODUCTS ── */}
      <section style={{ background: '#ffffff', padding: '96px 0' }}>
        <div className="site-container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#D97706' }}>Special Products</p>
          <h2 style={{ marginTop: '12px', fontSize: 'clamp(30px,4vw,46px)', fontWeight: 300, textTransform: 'uppercase', color: '#3b3b3b', lineHeight: 1.2 }}>
            <b>Special</b> Products
          </h2>
          <p style={{ marginTop: '14px', fontSize: '18px', color: '#bbb', fontWeight: 300 }}>Good food, naturally!</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '40px 20px',
            maxWidth: '860px',
            margin: '64px auto 0',
            justifyItems: 'center',
          }}>
            {specialProducts.map((item) => (
              <Link key={item.title} href={item.href} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
                <span style={{ position: 'relative', width: '88px', height: '88px', display: 'block', borderRadius: '50%', overflow: 'hidden', border: '4px solid #eef0d5' }}>
                  <Image src={item.image} alt={item.title} fill sizes="88px" style={{ objectFit: 'cover' }} />
                </span>
                <span style={{ fontWeight: 800, fontSize: '13px', color: '#333', textAlign: 'center', lineHeight: 1.3 }}>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
        <style>{`@media(min-width:640px){#sp-grid{grid-template-columns:repeat(6,1fr)!important;gap:24px!important}}`}</style>
      </section>

      {/* ── COMMITMENT ── */}
      <section style={{ background: '#ffffff', paddingBottom: '96px' }}>
        <div className="site-container" style={{ textAlign: 'center' }}>
          <h2 className="commitment-text" style={{
            fontSize: 'clamp(32px,5.5vw,72px)',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 1.18,
            maxWidth: '1100px',
            margin: '0 auto',
          }}>
            Continuous commitment in quality,{' '}
            innovation, service and trust
          </h2>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ background: '#fff', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 'clamp(100px,18vw,280px)', fontWeight: 900, color: 'rgba(245,197,24,0.07)',
          pointerEvents: 'none', userSelect: 'none', lineHeight: 1,
        }}>MOMIL</div>
        <div className="site-container" style={{ position: 'relative', display: 'grid', gap: '56px', alignItems: 'center', gridTemplateColumns: '1fr' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#D97706' }}>Our Story</p>
            <h3 style={{ marginTop: '14px', fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 300, textTransform: 'uppercase', color: '#3b3b3b', lineHeight: 1.2 }}>
              <b>About</b> Momil Foods
            </h3>
            <Link href="/about" style={{
              display: 'inline-flex', marginTop: '32px', border: '2px solid #B8C63B',
              padding: '14px 36px', fontSize: '12px', fontWeight: 800,
              letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3b3b3b', textDecoration: 'none',
            }}>More About</Link>
          </div>
          <div style={{ position: 'relative', minHeight: '360px' }}>
            <div style={{ position: 'absolute', top: 20, left: 20, right: 20, bottom: 20, border: '8px solid #B8C63B' }} />
            <Image src={IMG.mangoes} alt="Momil Foods" fill sizes="(max-width:1024px) 100vw, 34vw" style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ fontSize: '15px', lineHeight: 2, color: '#646464' }}>
            <p>Momil Foods Pvt. Ltd. believes in quality food products, built on four pillars: quality, innovation, service and trust. With 13 years of product-development experience, we help local and global buyers develop brands without investing in factory and production infrastructure.</p>
            <p style={{ marginTop: '24px' }}>Our range includes fruit juices in PET and aseptic packaging, dry fruits, fried onion, honey, sweets, local snacks and branded items, supported through one-window sourcing, packing and export service.</p>
          </div>
        </div>
        <style>{`@media(min-width:1024px){.about-inner{grid-template-columns:0.8fr 1fr 1fr!important}.about-heading{text-align:left!important}}`}</style>
      </section>

      {/* ── SOCIAL RESPONSIBILITY ── */}
      <section style={{ background: '#f8f5ec', padding: '96px 0' }}>
        <div className="site-container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#D97706' }}>Corporate</p>
          <h3 style={{ marginTop: '14px', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 300, textTransform: 'uppercase', color: '#3b3b3b' }}>
            <b>Social</b> Responsibility
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '20px', marginTop: '56px' }} className="resp-grid">
            {responsibilityCards.map(([title, text, image]) => (
              <article key={title} style={{ background: '#fff', textAlign: 'left', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <Image src={image} alt="" fill sizes="(max-width:1024px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '24px 28px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 900, color: '#2D5016' }}>{title}</h4>
                  <p style={{ marginTop: '10px', fontSize: '14px', lineHeight: 1.85, color: '#666' }}>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <style>{`@media(min-width:1024px){.resp-grid{grid-template-columns:repeat(4,1fr)!important}}@media(max-width:480px){.resp-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── OUR PRODUCTS ── */}
      <section style={{ background: '#ffffff', padding: '96px 0' }}>
        <div className="site-container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#D97706' }}>What We Offer</p>
          <h3 style={{ marginTop: '14px', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 300, textTransform: 'uppercase', color: '#3b3b3b' }}>
            <b>Our</b> Products
          </h3>
          <p style={{ marginTop: '20px', maxWidth: '580px', margin: '20px auto 0', fontSize: '16px', lineHeight: 1.85, color: '#666' }}>
            Momil Foods provides selected food and beverage products with a focus on dependable quality, practical packing and buyer-ready support from Lahore, Pakistan.
          </p>
          <Link href="/products" style={{
            display: 'inline-flex', marginTop: '28px', border: '2px solid #B8C63B',
            padding: '14px 36px', fontSize: '12px', fontWeight: 900,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2D5016', textDecoration: 'none',
          }}>All Products</Link>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginTop: '48px', maxWidth: '980px', marginLeft: 'auto', marginRight: 'auto' }} className="prod-grid">
            {showcaseProducts.map((item) => (
              <Link key={item.title} href={item.href}
                style={{ position: 'relative', minHeight: '200px', overflow: 'hidden', background: '#102006', display: 'block', textDecoration: 'none' }}>
                <Image src={item.image} alt={item.title} fill sizes="(max-width:768px) 50vw, 33vw" style={{ objectFit: 'cover', opacity: 0.8 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.7) 0%,transparent 60%)' }} />
                <h4 style={{ position: 'absolute', bottom: '18px', left: '18px', right: '18px', color: '#fff', fontWeight: 900, fontSize: '14px', textTransform: 'uppercase' }}>{item.title}</h4>
              </Link>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){.prod-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
      </section>

      {/* ── CATEGORIES ── */}
      <section style={{ background: '#faf7ec', padding: '96px 0' }}>
        <div className="site-container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#D97706' }}>Browse</p>
          <h3 style={{ marginTop: '14px', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 300, textTransform: 'uppercase', color: '#3b3b3b' }}>
            <b>Our</b> Categories
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginTop: '48px', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto' }}>
            {categories.map((cat) => (
              <Link key={cat.id} href={`/products/${cat.slug}`}
                style={{
                  width: 'calc(50% - 8px)', maxWidth: '240px', background: '#fff',
                  border: '1px solid #eadfae', overflow: 'hidden', textDecoration: 'none',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.05)', flexShrink: 0,
                }}>
                <div style={{ position: 'relative', height: '130px', background: 'linear-gradient(135deg,#102006,#2D5016,#D97706)' }}>
                  {categoryImages[cat.id] && (
                    <Image src={categoryImages[cat.id]} alt={cat.title} fill sizes="240px" style={{ objectFit: 'cover', opacity: 0.55, mixBlendMode: 'screen' }} />
                  )}
                </div>
                <div style={{ padding: '14px 12px', textAlign: 'center' }}>
                  <p style={{ fontWeight: 900, color: '#2D5016', fontSize: '13px' }}>{cat.title}</p>
                  <p style={{ marginTop: '5px', fontSize: '11px', color: '#999', lineHeight: 1.5 }}>{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: '#ffffff', padding: '96px 0' }}>
        <div className="site-container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#D97706' }}>Client Feedback</p>
          <h3 style={{ marginTop: '14px', fontSize: 'clamp(22px,3.5vw,38px)', fontWeight: 900, textTransform: 'uppercase', color: '#2D5016', lineHeight: 1.2 }}>
            People Say About Momil Foods
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1,1fr)', gap: '20px', marginTop: '48px', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto' }} className="testi-grid">
            {testimonials.map(([quote, name]) => (
              <article key={name} style={{
                border: '1px solid #eadfae', background: '#fffdf7',
                padding: '36px 28px', textAlign: 'center',
                display: 'flex', flexDirection: 'column', gap: '20px',
              }}>
                <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#555' }}>&ldquo;{quote}&rdquo;</p>
                <p style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D97706' }}>{name}</p>
              </article>
            ))}
          </div>
        </div>
        <style>{`@media(min-width:768px){.testi-grid{grid-template-columns:repeat(3,1fr)!important}}`}</style>
      </section>

      {/* ── SERVICE STRIP ── */}
      <section style={{ background: '#f8f5ec', padding: '60px 0' }}>
        <div className="site-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '14px' }} className="strip-grid">
            {['Quality Food', 'Private Label', 'Bulk Supply', 'Export Support'].map((item) => (
              <div key={item} style={{
                background: '#fff', border: '1px solid #e6d8a4',
                padding: '28px 12px', textAlign: 'center',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
              }}>
                <div style={{ width: '28px', height: '3px', background: '#B8C63B' }} />
                <span style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2D5016' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(min-width:640px){.strip-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
      </section>

      <Footer />
    </main>
  )
}
