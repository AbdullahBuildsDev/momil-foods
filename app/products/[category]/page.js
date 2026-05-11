import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { categories, getCategory, getProductsByCategory } from '@/lib/data'
import Link from 'next/link'

export default async function CategoryPage({ params }) {
  const { category: categorySlug } = await params
  const category = getCategory(categorySlug)
  const products = getProductsByCategory(categorySlug)

  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-16 bg-gradient-to-br from-[#102006] via-[#2D5016] to-[#D97706] text-white text-center">
        <h1 className="text-5xl md:text-6xl font-black drop-shadow-xl">{category?.title || 'Products'}</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex gap-8">
        <aside className="hidden md:block w-56 shrink-0">
          <h3 className="font-bold text-[#2D5016] mb-4 text-lg border-b-2 border-[#F5C518] pb-2">Browse by</h3>
          <Link href="/products" className="block py-2 text-gray-600 hover:text-[#2D5016]">All products</Link>
          {categories.map((cat) => (
            <Link key={cat.id} href={`/products/${cat.slug}`}
              className={`block py-2 hover:text-[#2D5016] ${categorySlug === cat.slug ? 'text-[#2D5016] font-bold' : 'text-gray-600'}`}>
              {cat.title}
            </Link>
          ))}
        </aside>
        <div className="flex-1">
          {products.length === 0 ? (
            <p className="text-gray-400 text-xl">No products yet in this category.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((p) => (
                <Link key={p.id} href={`/products/${categorySlug}/${p.slug}`}
                  className="bg-white rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden border border-gray-100">
                  {p.image
                    ? <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
                    : <div className="h-48 bg-gradient-to-br from-[#F5C518] via-[#FDE68A] to-[#D97706] flex items-center justify-center text-6xl">{category?.emoji || '🌿'}</div>
                  }
                  <div className="p-4">
                    <h3 className="font-bold text-[#2D5016]">{p.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{p.weight}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
