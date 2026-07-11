'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    data.access_key = '385c757a-19f0-4d1f-a43d-916d54f57a4a'
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) setSubmitted(true)
    } catch {}
    setLoading(false)
  }

  return (
    <main className="min-h-screen flex flex-col" style={{ background: '#faf7ec' }}>
      <Navbar />

      {/* ── Hero ── */}
      <section style={{ background: '#0d1308', paddingTop: '140px', paddingBottom: '80px', color: '#fff', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 50%, rgba(245,197,24,0.12), transparent 55%)' }} />
        <div className="site-container" style={{ position: 'relative' }}>
          <p style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#F5C518', marginBottom: '16px' }}>Momil Foods</p>
          <h1 style={{ fontSize: 'clamp(36px,6vw,64px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.05 }}>Get In Touch</h1>
          <p style={{ marginTop: '18px', fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '18px auto 0', lineHeight: 1.8 }}>
            Ready to source quality food products? We respond within 24 hours.
          </p>

          {/* Contact chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '36px' }}>
            <a href="mailto:momilfoods@gmail.com"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(245,197,24,0.4)', padding: '12px 24px', color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 600, transition: 'all 0.2s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="#F5C518" style={{ width: 18, height: 18 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              momilfoods@gmail.com
            </a>
            <a href="https://wa.me/923452211111" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#25D366', padding: '12px 24px', color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 700 }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.373 0 0 5.373 0 12a11.93 11.93 0 0 0 1.671 6.116L0 24l6.09-1.598A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.206-1.248-6.219-3.48-8.52zM12 22a9.938 9.938 0 0 1-5.07-1.385l-.364-.216-3.613.948.965-3.523-.237-.375A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm5.447-7.264c-.298-.149-1.766-.871-2.04-.97-.273-.1-.472-.149-.67.149-.198.298-.768.97-.941 1.169-.173.198-.347.223-.645.074-.298-.149-1.258-.464-2.396-1.48-.885-.79-1.482-1.764-1.656-2.062-.173-.298-.018-.459.13-.607.133-.133.298-.347.447-.521.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.612-.917-2.208-.242-.578-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Enquiry Form ── */}
      <section style={{ flex: 1, padding: '80px 0' }}>
        <div className="site-container" style={{ maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#D97706', marginBottom: '14px' }}>Send an Enquiry</p>
            <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 900, color: '#0f2205' }}>Tell Us What You Need</h2>
            <p style={{ marginTop: '12px', color: '#888', lineHeight: 1.8, fontSize: '16px' }}>
              Whether it&apos;s bulk sourcing, private labeling, or a custom product — we are here to help.
            </p>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '60px 40px', background: '#fff', border: '1px solid #e6d8a4' }}>
              <div style={{ width: '56px', height: '56px', background: '#E8B400', borderRadius: '50%', display: 'grid', placeItems: 'center', margin: '0 auto 24px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#fff" style={{ width: 26, height: 26 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#0f2205', marginBottom: '10px' }}>Message Received!</h3>
              <p style={{ color: '#888', fontSize: '16px' }}>We will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: '#fff', border: '1px solid #e6d8a4', padding: '48px 40px', display: 'flex', flexDirection: 'column', gap: '20px' }} className="contact-form">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: '8px' }}>Full Name *</label>
                  <input required type="text" name="name" placeholder="John Smith"
                    style={{ width: '100%', border: '1px solid #e0d5b3', background: '#fffdf7', padding: '12px 16px', fontSize: '14px', color: '#333', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: '8px' }}>Email Address *</label>
                  <input required type="email" name="email" placeholder="john@company.com"
                    style={{ width: '100%', border: '1px solid #e0d5b3', background: '#fffdf7', padding: '12px 16px', fontSize: '14px', color: '#333', outline: 'none' }} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: '8px' }}>Company Name</label>
                  <input type="text" name="company" placeholder="Your Company"
                    style={{ width: '100%', border: '1px solid #e0d5b3', background: '#fffdf7', padding: '12px 16px', fontSize: '14px', color: '#333', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: '8px' }}>Country</label>
                  <input type="text" name="country" placeholder="United States"
                    style={{ width: '100%', border: '1px solid #e0d5b3', background: '#fffdf7', padding: '12px 16px', fontSize: '14px', color: '#333', outline: 'none' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: '8px' }}>Your Enquiry *</label>
                <textarea required rows={5} name="message" placeholder="Tell us about the products you are looking for, quantities, packaging requirements..."
                  style={{ width: '100%', border: '1px solid #e0d5b3', background: '#fffdf7', padding: '12px 16px', fontSize: '14px', color: '#333', outline: 'none', resize: 'none' }} />
              </div>
              <button type="submit" disabled={loading}
                style={{ background: '#2D5016', color: '#fff', padding: '16px', fontWeight: 900, fontSize: '14px', letterSpacing: '0.18em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', opacity: loading ? 0.7 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                {loading ? 'Sending...' : 'Send Enquiry →'}
              </button>
              <p style={{ textAlign: 'center', fontSize: '12px', color: '#bbb' }}>We respond within 24 hours · All enquiries are confidential</p>
            </form>
          )}
        </div>
      </section>

      <style>{`
        @media(max-width:600px){.form-row{grid-template-columns:1fr!important}.contact-form{padding:32px 20px!important}}
      `}</style>
      <Footer />
    </main>
  )
}
