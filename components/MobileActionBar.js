'use client'
import Link from 'next/link'

/**
 * Sticky bottom action bar shown only on mobile product pages.
 * Reusable — pass the product title for a prefilled WhatsApp enquiry.
 */
export default function MobileActionBar({ productTitle }) {
  const wa = 'https://wa.me/923452211111?text=' +
    encodeURIComponent(`Hello Momil Foods, I'm interested in ${productTitle || 'your products'}. Please share details.`)

  return (
    <div
      className="momil-mobilebar"
      style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
        gap: '10px', padding: '10px 14px',
        background: '#fff', borderTop: '1px solid #eadfae',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
      }}
    >
      <style>{`
        .momil-mobilebar { display: flex; }
        @media (min-width: 768px) { .momil-mobilebar { display: none !important; } }
      `}</style>
      <Link
        href="/contact"
        style={{
          flex: 1, textAlign: 'center', background: '#E8B400', color: '#102006',
          padding: '15px', fontSize: '13px', fontWeight: 900, textTransform: 'uppercase',
          letterSpacing: '0.12em', textDecoration: 'none',
        }}
      >
        Enquire Now
      </Link>
      <a
        href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp enquiry"
        style={{
          flexShrink: 0, width: '54px', display: 'flex', alignItems: 'center',
          justifyContent: 'center', background: '#25D366', color: '#fff',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: 26, height: 26 }}>
          <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.373 0 0 5.373 0 12a11.93 11.93 0 0 0 1.671 6.116L0 24l6.09-1.598A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.206-1.248-6.219-3.48-8.52zM12 22a9.938 9.938 0 0 1-5.07-1.385l-.364-.216-3.613.948.965-3.523-.237-.375A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm5.447-7.264c-.298-.149-1.766-.871-2.04-.97-.273-.1-.472-.149-.67.149-.198.298-.768.97-.941 1.169-.173.198-.347.223-.645.074-.298-.149-1.258-.464-2.396-1.48-.885-.79-1.482-1.764-1.656-2.062-.173-.298-.018-.459.13-.607.133-.133.298-.347.447-.521.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.612-.917-2.208-.242-.578-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      </a>
    </div>
  )
}
