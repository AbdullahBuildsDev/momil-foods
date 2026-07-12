import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { blogPosts as posts } from '@/lib/blogData'

export const metadata = {
  title: 'Blog',
  description: 'News, insights and updates from Momil Foods on Pakistani food exports, sourcing, private labeling and quality.',
  alternates: { canonical: '/blog' },
}

export default function Blog() {
  return (
    <main className="min-h-screen flex flex-col bg-[#faf7ec]">
      <Navbar />

      {/* ── Hero ── */}
      <section style={{ background: '#0d1308', paddingTop: '140px', paddingBottom: '80px', color: '#fff', textAlign: 'center' }}>
        <div className="site-container">
          <p style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#F5C518', marginBottom: '16px' }}>Momil Foods</p>
          <h1 style={{ fontSize: 'clamp(36px,6vw,64px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.05 }}>Blog</h1>
          <p style={{ marginTop: '18px', fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '18px auto 0', lineHeight: 1.8 }}>
            Industry insights, export updates, and product news from Momil Foods.
          </p>
        </div>
      </section>

      {/* ── Posts grid ── */}
      <section style={{ flex: 1, padding: '80px 0' }}>
        <div className="site-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1,1fr)', gap: '24px' }} className="blog-grid">
            {posts.map((post) => (
              <article key={post.title} style={{ background: '#fff', border: '1px solid #e6d8a4', overflow: 'hidden' }}>
                <div style={{ height: '6px', background: 'linear-gradient(90deg,#2D5016,#E8B400,#F5C518)' }} />
                <div style={{ padding: '36px 40px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D97706', border: '1px solid #D97706', padding: '4px 10px' }}>{post.tag}</span>
                    <span style={{ fontSize: '12px', color: '#aaa' }}>{post.date}</span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(18px,2.5vw,24px)', fontWeight: 900, color: '#2D5016', lineHeight: 1.3, marginBottom: '14px' }}>{post.title}</h2>
                  <p style={{ fontSize: '16px', lineHeight: 1.85, color: '#666' }}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} style={{
                    display: 'inline-flex', marginTop: '24px', borderBottom: '2px solid #E8B400',
                    paddingBottom: '2px', fontSize: '12px', fontWeight: 900,
                    letterSpacing: '0.15em', textTransform: 'uppercase', color: '#2D5016', textDecoration: 'none',
                  }}>Read More</Link>
                </div>
              </article>
            ))}
          </div>

          {/* Coming soon note */}
          <div style={{ marginTop: '48px', textAlign: 'center', padding: '40px', border: '1px dashed #d6c98a', background: '#fffdf5' }}>
            <p style={{ fontSize: '14px', color: '#aaa', letterSpacing: '0.1em' }}>More articles coming soon. Subscribe via email or follow us on WhatsApp for updates.</p>
            <a href="https://wa.me/923452211111" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', marginTop: '16px', background: '#25D366', color: '#fff', padding: '12px 32px', fontWeight: 800, fontSize: '14px', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase', gap: '8px', alignItems: 'center' }}>
              WhatsApp Updates
            </a>
          </div>
        </div>
      </section>

      <style>{`@media(min-width:768px){.blog-grid{grid-template-columns:repeat(3,1fr)!important}}`}</style>
      <Footer />
    </main>
  )
}
