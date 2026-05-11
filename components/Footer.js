import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#102006] text-white pt-12 pb-6 border-t-4 border-[#F5C518]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-[#F5C518] font-bold text-lg mb-4">Momil Foods</h3>
          <p className="text-sm text-white/70">Quality Food & Beverages Exporter. Lahore, Pakistan.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-[#F5C518]">Quick Links</h4>
          {['/', '/about', '/products', '/blog', '/contact'].map((href, i) => (
            <Link key={i} href={href} className="block text-sm text-white/70 hover:text-[#F5C518] mb-2">
              {['Home','About','Products','Blog','Contact'][i]}
            </Link>
          ))}
        </div>
        <div>
          <h4 className="font-bold mb-4 text-[#F5C518]">Contact</h4>
          <p className="text-sm text-white/70">171 Eden Avenue, New Airport Road, Lahore</p>
          <p className="text-sm text-white/70 mt-2">momilfoods@gmail.com</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-[#F5C518]">Follow Us</h4>
          <div className="flex gap-4">
            {['Facebook','Instagram','LinkedIn','WhatsApp'].map((s) => (
              <a key={s} href="#" className="text-sm text-white/70 hover:text-[#F5C518]">{s[0]}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-white/50 text-sm mt-8 border-t border-white/10 pt-6">© 2025 Momil Foods Pvt. Ltd.</div>
    </footer>
  )
}
