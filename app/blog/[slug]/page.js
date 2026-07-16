import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { blogPosts, getBlogPost } from '@/lib/blogData'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div style={{ paddingTop: '160px', textAlign: 'center', flex: 1 }}>
          <p style={{ color: '#999' }}>Post not found.</p>
          <Link href="/blog" style={{ color: '#2D5016', fontWeight: 700 }}>← Back to Blog</Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen flex flex-col" style={{ background: '#faf7ec' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: '#0d1308', paddingTop: '140px', paddingBottom: '64px', color: '#fff' }}>
        <div className="site-container" style={{ maxWidth: '820px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D97706', border: '1px solid #D97706', padding: '4px 12px' }}>{post.tag}</span>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>{post.date}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, lineHeight: 1.2, maxWidth: '700px' }}>{post.title}</h1>
          <p style={{ marginTop: '16px', fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>{post.excerpt}</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ flex: 1, padding: '48px 0' }}>
        <div className="site-container" style={{ maxWidth: '820px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ background: '#fff', border: '1px solid #e6d8a4', padding: '48px 40px' }} className="blog-body">
            {post.content.map((para, i) => (
              <p key={i} style={{ fontSize: '16px', lineHeight: 2, color: '#444', marginBottom: i < post.content.length - 1 ? '24px' : 0 }}>{para}</p>
            ))}

            <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #e6d8a4', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
              <Link href="/blog"
                style={{ fontSize: '14px', fontWeight: 700, color: '#2D5016', textDecoration: 'none', letterSpacing: '0.05em' }}>
                ← Back to Blog
              </Link>
              <Link href="/contact"
                style={{ background: '#2D5016', color: '#fff', padding: '12px 32px', fontWeight: 900, fontSize: '14px', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:600px){.blog-body{padding:28px 20px!important}}`}</style>
      <Footer />
    </main>
  )
}
