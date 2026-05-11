import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 shrink-0 border-t-4 border-[#F5C518] bg-[#102006] pb-8 pt-12 text-white md:mt-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-4 md:gap-8 md:text-left">
        <div className="text-center md:text-left">
          <h3 className="mb-4 text-lg font-bold text-[#F5C518]">Momil Foods</h3>
          <p className="text-sm leading-relaxed text-white/70">Quality Food & Beverages Exporter. Lahore, Pakistan.</p>
        </div>
        <div className="text-center md:text-left">
          <h4 className="mb-4 font-bold text-[#F5C518]">Quick Links</h4>
          <nav className="flex flex-col items-center gap-2 md:items-start">
            {['/', '/about', '/products', '/blog', '/contact'].map((href, i) => (
              <Link key={i} href={href} className="text-sm text-white/70 hover:text-[#F5C518]">
                {['Home', 'About', 'Products', 'Blog', 'Contact'][i]}
              </Link>
            ))}
          </nav>
        </div>
        <div className="text-center md:text-left">
          <h4 className="mb-4 font-bold text-[#F5C518]">Contact</h4>
          <p className="text-sm leading-relaxed text-white/70">171 Eden Avenue, New Airport Road, Lahore</p>
          <p className="mt-2 text-sm text-white/70">momilfoods@gmail.com</p>
        </div>
        <div className="text-center md:text-left">
          <h4 className="mb-4 font-bold text-[#F5C518]">Follow Us</h4>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            {['Facebook', 'Instagram', 'LinkedIn', 'WhatsApp'].map((s) => (
              <a key={s} href="#" className="text-sm text-white/70 hover:text-[#F5C518]">
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-sm text-white/50 sm:px-6">
        © 2026 Momil Foods Pvt. Ltd.
      </div>
    </footer>
  )
}
