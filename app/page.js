import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import Footer from '@/components/Footer'
import TrustBadges from '@/components/TrustBadges'
import Reveal from '@/components/Reveal'
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

// Real Momil packs / produce — square-cropped so nothing clips inside the circle.
const specialProducts = [
  { title: 'Juices',              href: '/products/drinks-and-juices',             image: '/specials/juices.webp' },
  { title: 'Himalayan Pink Salt', href: '/products/salts',                         image: '/specials/pink-salt.webp' },
  { title: 'Dry Fruits',          href: '/products/bulk-dry-fruits-nuts',          image: '/specials/dry-fruits.webp' },
  { title: 'Saag',                href: '/products/exclusive-products-saag-halwa', image: '/specials/saag.webp' },
  { title: 'Fried Onion',         href: '/products/fried-onion',                   image: '/specials/fried-onion.webp' },
  { title: 'Confectionery',       href: '/products/sweets-and-confectionery',      image: '/specials/confectionery.webp' },
]

const categoryImages = {
  'drinks-and-juices': IMG.fruits,
  spices:              IMG.spices,
  honey:               IMG.honey,
}

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
      <TrustBadges />

      {/* ── SPECIAL PRODUCTS ── */}
      <Reveal><section style={{ background: '#ffffff', padding: 'clamp(34px, 5vw, 58px) 0' }}>
        <div className="site-container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#D97706' }}>Special Products</p>
          <h2 style={{ marginTop: '12px', fontSize: 'clamp(26px,3vw,36px)', fontWeight: 300, textTransform: 'uppercase', color: '#3b3b3b', lineHeight: 1.2 }}>
            <b>Special</b> Products
          </h2>
          <p style={{ marginTop: '14px', fontSize: '18px', color: '#bbb', fontWeight: 300 }}>Good food, naturally!</p>
          <div className="sp-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 'clamp(28px,6vw,40px) 16px',
            maxWidth: '900px',
            margin: 'clamp(40px,7vw,64px) auto 0',
            justifyItems: 'center',
          }}>
            {specialProducts.map((item) => (
              <Link key={item.title} href={item.href} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <span style={{ position: 'relative', width: 'clamp(92px,25vw,116px)', height: 'clamp(92px,25vw,116px)', display: 'block', borderRadius: '50%', overflow: 'hidden', border: '4px solid #eef0d5' }}>
                  <Image src={item.image} alt={item.title} fill sizes="116px" style={{ objectFit: 'cover' }} />
                </span>
                <span style={{ fontWeight: 800, fontSize: 'clamp(12px,3.4vw,14px)', color: '#333', textAlign: 'center', lineHeight: 1.3 }}>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
        <style>{`@media(min-width:768px){.sp-grid{grid-template-columns:repeat(6,1fr)!important}}`}</style>
      </section></Reveal>

      {/* ── COMMITMENT ── */}
      <section style={{ background: '#ffffff', paddingBottom: 'clamp(34px, 5vw, 58px)' }}>
        <div className="site-container" style={{ textAlign: 'center' }}>
          <h2 className="commitment-text" style={{
            fontSize: 'clamp(28px,4.4vw,52px)',
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
      <section style={{ background: '#fff', padding: 'clamp(38px, 6vw, 68px) 0', position: 'relative', overflow: 'hidden' }}>
        {/* Animated watermark */}
        <div className="about-watermark" style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          fontSize: 'clamp(72px,15vw,240px)', fontWeight: 900, color: 'rgba(232,180,0,0.11)',
          pointerEvents: 'none', userSelect: 'none', lineHeight: 1, whiteSpace: 'nowrap', textTransform: 'uppercase',
        }}>MOMIL FOODS</div>

        <div className="site-container" style={{ position: 'relative' }}>
          <div className="about-home-grid" style={{ display: 'grid', gap: '40px', alignItems: 'center', gridTemplateColumns: '1fr' }}>
            <div>
              <p style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#D97706' }}>Our Story</p>
              <h3 style={{ marginTop: '16px', fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 300, textTransform: 'uppercase', color: '#3b3b3b', lineHeight: 1.15 }}>
                <b>About</b> Momil Foods
              </h3>
              <Link href="/about" style={{
                display: 'inline-flex', marginTop: '32px', border: '2px solid #E8B400',
                padding: '15px 40px', fontSize: '13px', fontWeight: 800,
                letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3b3b3b', textDecoration: 'none',
              }}>More About</Link>
            </div>
            <div style={{ fontSize: '16px', lineHeight: 2, color: '#646464' }}>
              <p>Momil Foods Pvt. Ltd. believes in quality food products, built on four pillars: quality, innovation, service and trust. With 13 years of product-development experience, we help local and global buyers develop brands without investing in factory and production infrastructure.</p>
              <p style={{ marginTop: '24px' }}>Our range includes fruit juices in PET and aseptic packaging, dry fruits, fried onion, honey, sweets, local snacks and branded items, supported through one-window sourcing, packing and export service.</p>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes momilDrift {
            0%   { transform: translate(-50%,-50%) translateX(-2.5%); }
            50%  { transform: translate(-50%,-50%) translateX(2.5%); }
            100% { transform: translate(-50%,-50%) translateX(-2.5%); }
          }
          .about-watermark { animation: momilDrift 16s ease-in-out infinite; }
          @media(min-width:1024px){ .about-home-grid { grid-template-columns: 0.9fr 1.1fr !important; } }
        `}</style>
      </section>

      {/* ── CATEGORIES ── */}
      <Reveal><section style={{ background: '#faf7ec', padding: 'clamp(34px, 5vw, 58px) 0' }}>
        <div className="site-container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#E8B400' }}>Browse</p>
          <h3 style={{ marginTop: '14px', fontSize: 'clamp(24px,3vw,34px)', fontWeight: 300, textTransform: 'uppercase', color: '#3b3b3b' }}>
            <b>Our</b> Categories
          </h3>
          <div className="cat-home-grid" style={{ display: 'grid', gap: '18px', marginTop: '34px' }}>
            {categories.map((cat) => (
              <Link key={cat.id} href={`/products/${cat.slug}`}
                className="cat-home-card"
                style={{
                  background: '#fff', overflow: 'hidden', textDecoration: 'none',
                  border: '1px solid #eadfae', boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                }}>
                <div style={{ position: 'relative', height: '150px', background: 'linear-gradient(135deg,#0d1308,#2D5016,#1a3a0a)' }}>
                  {categoryImages[cat.id] && (
                    <Image src={categoryImages[cat.id]} alt={cat.title} fill sizes="(max-width:768px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
                  )}
                </div>
                <div style={{ padding: '14px 12px', textAlign: 'center' }}>
                  <p style={{ fontWeight: 900, color: '#2D5016', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{cat.title}</p>
                  <p style={{ marginTop: '5px', fontSize: '11px', color: '#999', lineHeight: 1.55 }}>{cat.description}</p>
                  <span style={{ display: 'inline-block', marginTop: '9px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#E8B400' }}>Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          .cat-home-grid { grid-template-columns: repeat(2, 1fr); }
          @media(min-width: 768px) { .cat-home-grid { grid-template-columns: repeat(3, 1fr); } }
          @media(min-width: 1024px) { .cat-home-grid { grid-template-columns: repeat(4, 1fr); } }
          .cat-home-card:hover { transform: translateY(-6px); box-shadow: 0 12px 36px rgba(0,0,0,0.12) !important; }
        `}</style>
      </section></Reveal>

      {/* ── TESTIMONIALS ── */}
      <Reveal><section style={{ background: '#ffffff', padding: 'clamp(34px, 5vw, 58px) 0' }}>
        <div className="site-container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#D97706' }}>Client Feedback</p>
          <h3 style={{ marginTop: '14px', fontSize: 'clamp(20px,2.7vw,31px)', fontWeight: 900, textTransform: 'uppercase', color: '#2D5016', lineHeight: 1.2 }}>
            People Say About Momil Foods
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1,1fr)', gap: '18px', marginTop: '32px', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto' }} className="testi-grid">
            {testimonials.map(([quote, name]) => (
              <article key={name} style={{
                border: '1px solid #eadfae', background: '#fffdf7',
                padding: '36px 28px', textAlign: 'center',
                display: 'flex', flexDirection: 'column', gap: '20px',
              }}>
                <p style={{ fontSize: '16px', lineHeight: 1.9, color: '#555' }}>&ldquo;{quote}&rdquo;</p>
                <p style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D97706' }}>{name}</p>
              </article>
            ))}
          </div>
        </div>
        <style>{`@media(min-width:768px){.testi-grid{grid-template-columns:repeat(3,1fr)!important}}`}</style>
      </section></Reveal>

      {/* ── SERVICE STRIP ── */}
      <section style={{ background: '#f8f5ec', padding: '40px 0' }}>
        <div className="site-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '14px' }} className="strip-grid">
            {['Quality Food', 'Private Label', 'Bulk Supply', 'Export Support'].map((item) => (
              <div key={item} style={{
                background: '#fff', border: '1px solid #e6d8a4',
                padding: '28px 12px', textAlign: 'center',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
              }}>
                <div style={{ width: '28px', height: '3px', background: '#E8B400' }} />
                <span style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2D5016' }}>{item}</span>
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
