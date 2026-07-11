import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="momil-footer text-white">

      {/* breathing gap between page content and footer */}
      <div style={{ height: '1px', background: 'rgba(184,198,59,0.35)' }} />

      {/* ── Main 3-column body ── */}
      <div className="site-container grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1.2fr] md:gap-16 lg:gap-24 items-start" style={{ paddingTop: '80px', paddingBottom: '80px' }}>

        {/* Brand */}
        <div>
          <Image src="/logo.png" alt="Momil Foods" width={160} height={80} className="h-16 w-auto mb-5" />
          <p className="text-base leading-8 text-white/65 max-w-sm">
            Momil Foods Pvt. Ltd. has established its legacy over 13 years and continues to grow as a leading food export brand from Pakistan.
          </p>
          <div className="mt-6 flex flex-col gap-2">
            <a href="mailto:momilfoods@gmail.com" className="text-base text-white/80 hover:text-[#F5C518] transition-colors">
              momilfoods@gmail.com
            </a>
            <a href="https://wa.me/923452211111" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base text-white/80 hover:text-[#F5C518] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-green-400 shrink-0">
                <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.373 0 0 5.373 0 12a11.93 11.93 0 0 0 1.671 6.116L0 24l6.09-1.598A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.206-1.248-6.219-3.48-8.52zM12 22a9.938 9.938 0 0 1-5.07-1.385l-.364-.216-3.613.948.965-3.523-.237-.375A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm5.447-7.264c-.298-.149-1.766-.871-2.04-.97-.273-.1-.472-.149-.67.149-.198.298-.768.97-.941 1.169-.173.198-.347.223-.645.074-.298-.149-1.258-.464-2.396-1.48-.885-.79-1.482-1.764-1.656-2.062-.173-.298-.018-.459.13-.607.133-.133.298-.347.447-.521.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.612-.917-2.208-.242-.578-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              +92 345 221 1111
            </a>
          </div>

          {/* Social links */}
          <div className="mt-6 flex items-center gap-3">
            <a href="#" aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 hover:border-[#F5C518] hover:text-[#F5C518] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 hover:border-[#F5C518] hover:text-[#F5C518] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base font-black uppercase tracking-[0.22em] text-[#F5C518] mb-6">Quick Links</h4>
          <nav className="flex flex-col">
            {[['/', 'Home'], ['/about', 'About'], ['/products', 'Products'], ['/blog', 'Blog'], ['/contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href}
                className="py-3 text-base text-white/65 hover:text-[#F5C518] border-b border-white/8 transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-base font-black uppercase tracking-[0.22em] text-[#F5C518] mb-6">Contact Info</h4>
          <div className="flex flex-col gap-5 text-base text-white/65 leading-8">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Email</p>
              <a href="mailto:momilfoods@gmail.com" className="hover:text-[#F5C518] transition-colors">momilfoods@gmail.com</a>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Phone / WhatsApp</p>
              <a href="https://wa.me/923452211111" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C518] transition-colors">+92 345 221 1111</a>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Services</p>
              <p>Private Labeling · Bulk Supplying</p>
              <p>Co-Packing · USA-FDA Registration</p>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Export Markets</p>
              <p>USA · UK · Vietnam · Oman · Pakistan</p>
            </div>
          </div>
        </div>

      </div>

      {/* ── Copyright ── */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/40 tracking-wide">
        © {new Date().getFullYear()} Momil Foods Pvt. Ltd. All rights reserved.
      </div>

    </footer>
  )
}
