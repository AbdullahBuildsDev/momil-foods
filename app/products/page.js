import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { categories, products } from '@/lib/data'
import Link from 'next/link'

export default function Products() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-12 bg-gradient-to-b from-[#2D5016] to-[#4A8B1F] text-white text-center">
        <h1 className="text-5xl font-black">Our Products</h1>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-12 flex gap-8">
        <aside className="hidden md:block w-56 shrink-0">
          <h3 className="font-bold text-[#2D5016] mb-4 text-lg border-b-2 border-[#F5C518] pb-2">Browse by</h3>
          <Link href="/products" className="block py-2 text-[#2D5016] hover:text-[#7DC232] font-semibold">All products</Link>
          {categories.map((cat) => (
            <Link key={cat.id} href={`/products/${cat.slug}`} className="block py-2 text-gray-600 hover:text-[#2D5016]">{cat.title}</Link>
          ))}
        </aside>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#2D5016] mb-8">All Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p) => {
              const cat = categories.find((c) => c.id === p.category)
              return (
                <Link key={p.id} href={`/products/${cat?.slug}/${p.slug}`} className="bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden">
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-[#FDE68A] to-[#7DC232] flex items-center justify-center text-6xl">{cat?.emoji || '🌿'}</div>
                  )}
                  <div className="p-4">
                    <p className="text-xs text-[#7DC232] font-semibold uppercase">{cat?.title}</p>
                    <h3 className="font-bold text-[#2D5016mt-1">{p.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{p.weight}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
