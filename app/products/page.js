import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { client } from '@/lib/sanity'
import Link from 'next/link'

async function getData() {
  try {
    const categories = await client.fetch(`*[_type=="category"]{_id,title,slug,image}`)
    const products = await client.fetch(`*[_type=="product"]{_id,title,slug,images,category->{title,slug}}`)
    return { categories, products }
  } catch { return { categories: [], products: [] } }
}

export default async function Products() {
  const { categories, products } = await getData()
  const placeholderProducts = [
    { _id:'1', title:'Himalayan Pink Salt', category:'Specialty Items', weight:'500g' },
    { _id:'2', title:'Medjool Dates', category:'Dry Fruits', weight:'1kg' },
    { _id:'3', title:'Mango Juice 3L', category:'Juices', weight:'3 Liter' },
    { _id:'4', title:'Mixed Nuts', category:'Dry Fruits', weight:'750g' },
    { _id:'5', title:'Chana Chaat', category:'Snacks', weight:'200g' },
    { _id:'6', title:'Desi Sweets Box', category:'Sweets', weight:'500g' },
  ]
  const displayProducts = products.length ? products : placeholderProducts

  return (
    <main>
      <Navbar categories={categories} />
      <div className="pt-24 pb-12 bg-gradient-to-b from-[#2D5016] to-[#4A8B1F] text-white text-center">
        <h1 className="text-5xl font-black">Our Products</h1>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-12 flex gap-8">
        <aside className="hidden md:block w-56 shrink-0">
          <h3 className="font-bold text-[#2D5016] mb-4 text-lg border-b-2 border-[#F5C518] pb-2">Browse by</h3>
          <Link href="/products" className="block py-2 text-[#2D5016] hover:text-[#7DC232] font-semibold">All products</Link>
          {categories.map((cat) => (
            <Link key={cat._id} href={`/products/${cat.slug.current}`} className="block py-2 text-gray-600 hover:text-[#2D5016]">{cat.title}</Link>
          ))}
        </aside>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#2D5016] mb-8">All Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {displayProducts.map((p) => (
              <div key={p._id} className="bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-[#FDE68A] to-[#7DC232] flex items-center justify-center text-6xl">🌿</div>
                <div className="p-4">
                  <p className="text-xs text-[#7DC232] font-semibold uppercase">{p.category?.title || p.category}</p>
                  <h3 className="font-bold text-[#2D5016] mt-1">{p.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{p.weight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
