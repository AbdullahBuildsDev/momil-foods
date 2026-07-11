import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { categories, products } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'

export default function Products() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div style={{ background: '#0d1308', paddingTop: '140px', paddingBottom: '64px', textAlign: 'center', color: '#fff' }}>
        <p style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#F5C518', marginBottom: '14px' }}>Momil Foods</p>
        <h1 style={{ fontSize: 'clamp(36px,6vw,64px)', fontWeight: 900, textTransform: 'uppercase' }}>Our Products</h1>
      </div>
      <div className="md:hidden bg-white border-b border-[#eadfae] px-4 py-3 overflow-x-auto">
        <div className="flex gap-2 whitespace-nowrap">
          <a href="/products" className="inline-block px-4 py-2 text-xs font-black uppercase bg-[#2D5016] text-white rounded-full">All</a>
          {categories.map((cat) => (
            <a key={cat.id} href={`/products/${cat.slug}`} className="inline-block px-4 py-2 text-xs font-semibold uppercase border border-[#eadfae] rounded-full text-[#2D5016] hover:bg-[#2D5016] hover:text-white transition">{cat.title}</a>
          ))}
        </div>
      </div>
      <div className="bg-[#faf7ec] flex-1">
      <div className="site-container py-12 md:py-16 flex gap-10">
        <aside className="hidden md:block w-72 shrink-0">
          <div className="sticky top-28 bg-white p-6 shadow-sm border border-[#eadfae]">
          <h3 className="font-bold text-[#2D5016] mb-4 text-lg border-b-2 border-[#F5C518] pb-2">Browse by</h3>
          <Link href="/products" className="block py-2 text-[#2D5016] hover:text-[#D97706] font-semibold">All products</Link>
          {categories.map((cat) => (
            <Link key={cat.id} href={`/products/${cat.slug}`} className="block py-2 text-gray-600 hover:text-[#2D5016] leading-tight">{cat.title}</Link>
          ))}
          </div>
        </aside>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#2D5016] mb-8">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((p) => {
              const cat = categories.find(c => c.id === p.category)
              return (
                <Link key={p.id} href={`/products/${cat?.slug || p.category}/${p.slug}`}
                  className="bg-white rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden border border-[#eadfae]">
                  {p.image
                    ? <Image src={p.image} alt={p.title} width={420} height={260} className="h-48 w-full object-cover" />
                    : <div className="h-52 bg-gradient-to-br from-[#102006] via-[#2D5016] to-[#D97706] flex items-center justify-center px-6 text-center text-[#F5C518] text-xl font-black uppercase tracking-widest">{cat?.title || 'Product'}</div>
                  }
                  <div className="p-4">
                    <p className="text-xs text-[#D97706] font-semibold uppercase">{cat?.title}</p>
                    <h3 className="font-bold text-[#2D5016] mt-1">{p.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{p.weight}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </main>
  )
}
