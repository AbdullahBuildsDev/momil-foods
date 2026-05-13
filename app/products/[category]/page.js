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
      <div style={{ background: '#0d1308', paddingTop: '140px', paddingBottom: '64px', textAlign: 'center', color: '#fff' }}>
        <p style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#F5C518', marginBottom: '14px' }}>Momil Foods</p>
        <h1 style={{ fontSize: 'clamp(36px,6vw,64px)', fontWeight: 900, textTransform: 'uppercase' }}>{category?.title || 'Products'}</h1>
      </div>
      <div className="bg-[#faf7ec] flex-1">
        <div className="site-container py-12 md:py-16 flex gap-10">
          <aside className="hidden md:block w-72 shrink-0">
            <div className="sticky top-28 bg-white p-6 shadow-sm border border-[#eadfae]">
              <h3 className="font-bold text-[#2D5016] mb-4 text-lg border-b-2 border-[#F5C518] pb-2">Browse by</h3>
              <Link href="/products" className="block py-2 text-gray-600 hover:text-[#2D5016]">All products</Link>
              {categories.map((cat) => (
                <Link key={cat.id} href={`/products/${cat.slug}`}
                  className={`block py-2 hover:text-[#2D5016] ${categorySlug === cat.slug ? 'text-[#2D5016] font-bold' : 'text-gray-600'}`}>
                  {cat.title}
                </Link>
              ))}
            </div>
          </aside>
          <div className="flex-1">
            {products.length === 0 ? (
              <p className="bg-white border border-[#eadfae] p-8 text-gray-500 text-xl">No products yet in this category.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {products.map((p) => (
                  <Link key={p.id} href={`/products/${categorySlug}/${p.slug}`}
                    className="bg-white rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden border border-[#eadfae]">
                    {p.image
                      ? <Image src={p.image} alt={p.title} width={420} height={260} className="h-48 w-full object-cover" />
                      : <div className="h-52 bg-gradient-to-br from-[#102006] via-[#2D5016] to-[#D97706] flex items-center justify-center px-6 text-center text-[#F5C518] text-xl font-black uppercase tracking-widest">{category?.title || 'Product'}</div>
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
      </div>
      <div className="h-14 md:h-20 bg-[#faf7ec]" />
      <Footer />
    </main>
  )
}
