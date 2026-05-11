import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { client } from '@/lib/sanity'
import Link from 'next/link'

async function getData(categorySlug) {
  try {
    const categories = await client.fetch(`*[_type=="category"]{_id,title,slug}`)
    const category = await client.fetch(`*[_type=="category" && slug.current==$slug][0]`, { slug: categorySlug })
    const products = await client.fetch(`*[_type=="product" && category->slug.current==$slug]{_id,title,slug,images,weight}`, { slug: categorySlug })
    return { categories, category, products }
  } catch { return { categories:[], category:null, products:[] } }
}

export default async function CategoryPage({ params }) {
  const { categories, category, products } = await getData(params.category)
  return (
    <main>
      <Navbar categories={categories} />
      <div className="pt-24 pb-12 bg-gradient-to-b from-[#2D5016] to-[#4A8B1F] text-white text-center">
        <h1 className="text-5xl font-black">{category?.title || 'Products'}</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 flex gap-8">
        <aside className="hidden md:block w-56 shrink-0">
          <h3 className="font-bold text-[#2D5016] mb-4 text-lg border-b-2 border-[#F5C518] pb-2">Browse by</h3>
          <Link href="/products" className="block py-2 text-gray-600 hover:text-[#2D5016]">All products</Link>
          {categories.map((cat) => (
            <Link key={cat._id} href={`/products/${cat.slug.current}`} className={`block py-2 hover:text-[#2D5016] ${params.category===cat.slug.current?'text-[#2D5016] font-bold':'text-gray-600'}`}>{cat.title}</Link>
          ))}
        </aside>
        <div className="flex-1">
          {products.length === 0 ? (
            <p className="text-gray-400 text-xl">No products yet in this category.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((p) => (
                <Link key={p._id} href={`/products/${params.category}/${p.slug.current}`} className="bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-[#FDE68A] to-[#7DC232] flex items-center justify-center text-6xl">🌿</div>
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
