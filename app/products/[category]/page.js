import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { categories, getCategory, getProductsByCategory } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }))
}

export default async function CategoryPage({ params }) {
  const { category: categorySlug } = await params
  const category = getCategory(categorySlug)
  const products = getProductsByCategory(categorySlug)

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <div style={{ background: '#0d1308', paddingTop: '140px', paddingBottom: '64px', textAlign: 'center', color: '#fff' }}>
        <p style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#F5C518', marginBottom: '14px' }}>Momil Foods</p>
        <h1 style={{ fontSize: 'clamp(30px,6vw,64px)', fontWeight: 900, textTransform: 'uppercase' }}>{category?.title || 'Products'}</h1>
      </div>

      {/* Mobile category chips */}
      <div className="md:hidden bg-white border-b border-[#eadfae] px-4 py-3 overflow-x-auto">
        <div className="flex gap-2 whitespace-nowrap">
          <Link href="/products" className="inline-block px-4 py-2 text-xs font-black uppercase border border-[#eadfae] rounded-full text-[#2D5016] hover:bg-[#2D5016] hover:text-white transition">All</Link>
          {categories.map((cat) => (
            <Link key={cat.id} href={`/products/${cat.slug}`}
              className={`inline-block px-4 py-2 text-xs font-semibold uppercase rounded-full transition ${
                cat.slug === categorySlug
                  ? 'bg-[#2D5016] text-white'
                  : 'border border-[#eadfae] text-[#2D5016] hover:bg-[#2D5016] hover:text-white'
              }`}>
              {cat.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#faf7ec] flex-1">
        <div className="site-container py-12 md:py-16 flex gap-10">

          {/* Desktop sidebar */}
          <aside className="hidden md:block w-64 shrink-0">
            <div className="sticky top-28 bg-white p-6 shadow-sm border border-[#eadfae]">
              <h3 className="font-bold text-[#2D5016] mb-4 text-base border-b-2 border-[#F5C518] pb-2">Browse by</h3>
              <Link href="/products" className="block py-2 text-sm text-gray-500 hover:text-[#2D5016]">All products</Link>
              {categories.map((cat) => (
                <Link key={cat.id} href={`/products/${cat.slug}`}
                  className={`block py-2 text-sm leading-tight hover:text-[#2D5016] ${cat.slug === categorySlug ? 'text-[#2D5016] font-bold' : 'text-gray-500'}`}>
                  {cat.title}
                </Link>
              ))}
            </div>
          </aside>

          {/* Products grid */}
          <div className="flex-1 min-w-0">
            {products.length === 0 ? (
              <div className="bg-white border border-[#eadfae] p-10 text-center">
                <p className="text-gray-400 text-base">No products yet in this category.</p>
                <Link href="/products" className="inline-block mt-4 text-sm font-bold text-[#2D5016] underline">Browse all products</Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
                {products.map((p) => (
                  <Link key={p.id} href={`/products/${categorySlug}/${p.slug}`}
                    className="bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden border border-[#eadfae]">
                    {p.image
                      ? <Image src={p.image} alt={p.title} width={420} height={260} className="h-40 w-full object-cover" />
                      : <div className="h-40 bg-gradient-to-br from-[#102006] via-[#2D5016] to-[#D97706] flex items-center justify-center px-4 text-center text-[#F5C518] text-sm font-black uppercase tracking-wider">{category?.title || 'Product'}</div>
                    }
                    <div className="p-3 md:p-4">
                      <h3 className="font-bold text-[#2D5016] text-sm leading-snug">{p.title}</h3>
                      <p className="text-xs text-gray-400 mt-1">{p.weight}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      <Footer />
    </main>
  )
}
