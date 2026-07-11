import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  'Private Labeling', 'Bulk Supplying',
  'USA FDA Registration', 'Co Packing',
  'Packaging Design/Printing', 'USA-FDA SID Registration',
]

const pillars = [
  ['Quality', 'Products selected and packed with consistent standards for retail, food service and export buyers.'],
  ['Innovation', 'Product development support for buyers who want relevant, market-ready food ranges.'],
  ['Service', 'A one-window sourcing partner for packaging, registration, co-packing and supply coordination.'],
  ['Trust', 'Long-term relationships built through affordable support, swift response and dependable execution.'],
]

const stats = [
  ['13+', 'Years Experience'],
  ['100+', 'Export Products'],
  ['10+', 'Global Markets'],
  ['24h', 'Response Time'],
]

export default function About() {
  return (
    <main style={{ background: '#fff', overflowX: 'hidden' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#0d1308', paddingTop: '160px', paddingBottom: '100px', color: '#fff' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 15% 20%,rgba(245,197,24,0.28),transparent 28%), radial-gradient(circle at 75% 20%,rgba(217,119,6,0.18),transparent 26%), linear-gradient(135deg,rgba(0,0,0,0.15),rgba(16,32,6,0.95))',
        }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to top,#fff,transparent)' }} />
        <div className="site-container" style={{ position: 'relative', display: 'grid', gap: '48px', alignItems: 'center', gridTemplateColumns: '1fr' }}>
          <div>
            <p style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#F5C518', marginBottom: '20px' }}>Quality food and beverages exporter</p>
            <h1 style={{ fontSize: 'clamp(30px,5vw,60px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, maxWidth: '700px' }}>
              Built on quality, innovation, service and trust.
            </h1>
            <p style={{ marginTop: '24px', maxWidth: '560px', fontSize: '17px', lineHeight: 1.85, color: 'rgba(255,255,255,0.78)' }}>
              Momil Foods Pvt. Ltd. supports local and global buyers with product development, sourcing, co-packing and export-ready food solutions from Lahore, Pakistan.
            </p>
            <Link href="/contact" style={{
              display: 'inline-flex', marginTop: '36px', background: '#E8B400',
              padding: '16px 40px', fontSize: '12px', fontWeight: 900,
              letterSpacing: '0.2em', textTransform: 'uppercase', color: '#102006', textDecoration: 'none',
            }}>Get In Touch</Link>
          </div>

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px' }} className="about-stats">
            {stats.map(([num, label]) => (
              <div key={label} style={{ border: '1px solid rgba(245,197,24,0.25)', padding: '24px 20px', textAlign: 'center' }}>
                <p style={{ fontSize: 'clamp(28px,5vw,42px)', fontWeight: 900, color: '#F5C518', lineHeight: 1 }}>{num}</p>
                <p style={{ marginTop: '8px', fontSize: '14px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(min-width:1024px){.about-hero-inner{grid-template-columns:1fr 0.6fr!important}.about-stats{grid-template-columns:repeat(4,1fr)!important}}`}</style>
      </section>

      {/* ── ABOUT TEXT ── */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#fff', padding: '96px 0' }}>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 'clamp(80px,16vw,260px)', fontWeight: 900, color: 'rgba(232,180,0,0.13)',
          pointerEvents: 'none', userSelect: 'none', lineHeight: 1,
        }}>MOMIL</div>
        <div className="site-container" style={{ position: 'relative', display: 'grid', gap: '48px', alignItems: 'start', gridTemplateColumns: '1fr' }}>
          <div>
            <p style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#D97706', marginBottom: '16px' }}>Our Story</p>
            <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 300, textTransform: 'uppercase', lineHeight: 1.2, color: '#3c3c3c' }}>
              <b>About</b> Momil Foods
            </h2>
          </div>
          <div style={{ display: 'grid', gap: '20px', fontSize: '16px', lineHeight: 2, color: '#626262' }}>
            <p>Momil Foods Pvt. Ltd. believes in quality food products. Our organizational culture is built on four main pillars: quality, innovation, service and trust. These values have supported the success of our core brands and strengthened buyer confidence in our products.</p>
            <p>With 13 years of experience in product development, we serve local and global buyers with a one-window solution. Buyers can develop their own brands and products without investing in factory infrastructure or production lines.</p>
            <p>We produce fruit juices in PET and aseptic packaging from our Lahore-based operations, and we also supply dry fruits, fried onion, honey, sweets, local snacks and branded items according to market needs.</p>
          </div>
        </div>
        <style>{`@media(min-width:1024px){.about-text-grid{grid-template-columns:0.8fr 1.2fr!important}}`}</style>
      </section>

      {/* ── PILLARS ── */}
      <section style={{ background: '#f8f5ec', padding: '96px 0' }}>
        <div className="site-container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#D97706', marginBottom: '14px' }}>What Drives Us</p>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 300, textTransform: 'uppercase', color: '#3b3b3b' }}><b>Our</b> Four Pillars</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px' }} className="pillar-grid">
            {pillars.map(([title, text]) => (
              <div key={title} style={{ background: '#fff', border: '1px solid #e6d8a4', padding: '32px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                <div style={{ width: '32px', height: '4px', background: '#E8B400', marginBottom: '16px' }} />
                <p style={{ fontSize: '18px', fontWeight: 900, textTransform: 'uppercase', color: '#2D5016', marginBottom: '12px' }}>{title}</p>
                <p style={{ fontSize: '14px', lineHeight: 1.85, color: '#656565' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(min-width:1024px){.pillar-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
      </section>

      {/* ── VISION / MISSION / SERVICES ── */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="site-container" style={{ display: 'grid', gap: '40px' }}>
          <div style={{ display: 'grid', gap: '24px' }} className="vm-grid">
            <div style={{ border: '1px solid #eadfae', background: '#fffdf7', padding: '40px' }}>
              <p style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D97706', marginBottom: '16px' }}>Vision</p>
              <h3 style={{ fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 900, lineHeight: 1.25, color: '#172006', marginBottom: '16px' }}>
                To be a global quality food sourcing partner.
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.85, color: '#626262' }}>We aim to become a leading service provider through innovation and dependable buyer support.</p>
            </div>
            <div style={{ border: '1px solid #eadfae', background: '#fffdf7', padding: '40px' }}>
              <p style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D97706', marginBottom: '16px' }}>Mission</p>
              <h3 style={{ fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 900, lineHeight: 1.25, color: '#172006', marginBottom: '16px' }}>
                To increase buyer profitability with swift, affordable support.
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.85, color: '#626262' }}>Our mission is to provide quality food products and practical services that help buyers move faster in their own markets.</p>
            </div>
          </div>

          <div style={{ border: '1px solid #eadfae', background: '#fff', padding: '40px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <h3 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 900, color: '#2D5016', marginBottom: '32px' }}>Our Services</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1,1fr)', gap: '0' }} className="svc-grid">
              {services.map((service) => (
                <div key={service} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 0', borderBottom: '1px solid #ece2bd' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E8B400', flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, color: '#3f3f3f', fontSize: '16px' }}>{service}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '36px', borderLeft: '4px solid #F5C518', background: '#fbf8ed', padding: '28px 24px' }}>
              <p style={{ fontWeight: 900, textTransform: 'uppercase', color: '#2D5016', fontSize: '14px', letterSpacing: '0.1em' }}>Lahore, Pakistan</p>
              <p style={{ marginTop: '10px', lineHeight: 1.8, color: '#5f5f5f', fontSize: '16px' }}>momilfoods@gmail.com</p>
              <p style={{ marginTop: '4px', fontWeight: 600, color: '#2D5016', fontSize: '16px' }}>+92 345 221 1111</p>
            </div>
          </div>
        </div>
        <style>{`
          @media(min-width:1024px){.vm-grid{grid-template-columns:1fr 1fr!important;gap:24px!important}}
          @media(min-width:640px){.svc-grid{grid-template-columns:repeat(2,1fr)!important}}
        `}</style>
      </section>

      {/* ── CTA STRIP ── */}
      <section style={{ background: '#0d1308', padding: '80px 0', textAlign: 'center' }}>
        <div className="site-container">
          <p style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#F5C518', marginBottom: '20px' }}>Ready to work together?</p>
          <h2 style={{ fontSize: 'clamp(26px,4vw,46px)', fontWeight: 900, color: '#fff', marginBottom: '32px', lineHeight: 1.2 }}>
            Let&rsquo;s Build Your Food Brand
          </h2>
          <Link href="/contact" style={{
            display: 'inline-flex', border: '2px solid #F5C518',
            padding: '16px 48px', fontSize: '12px', fontWeight: 900,
            letterSpacing: '0.22em', textTransform: 'uppercase', color: '#F5C518', textDecoration: 'none',
            transition: 'all 0.2s',
          }}>Contact Us</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
