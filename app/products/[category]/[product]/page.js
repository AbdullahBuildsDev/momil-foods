import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getCategory, getProduct } from '@/lib/data'

export default function ProductPage({ params }) {
  const product = getProduct(params.product)
  const category = getCategory(params.category)
  if (!product) return <div className="pt-32 text-center text-gray-400">Product not found.</div>
  return (
    <main>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 pt-28 pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {product.image ? (
            <img src={product.image} alt={product.title} className="rounded-2xl h-96 w-full object-cover" />
          ) : (
            <div className="bg-gradient-to-br from-[#FDE68A] to-[#7DC232] rounded-2xl h-96 flex items-center justify-center text-9xl">{category?.emoji || '🌿'}</div>
          )}
          <div>
            <p className="text-[#7DC232] font-semibold uppercase tracking-wider xt-sm">{category?.title}</p>
            <h1 className="text-4xl font-black text-[#2D5016] mt-2">{product.title}</h1>
            {product.weight && <p className="mt-3 text-gray-500">Weight: {product.weight}</p>}
            {product.origin && <p className="text-gray-500">Origin: {product.origin}</p>}
            {product.description && <p className="mt-6 text-gray-600 leading-relaxed">{product.description}</p>}
            <a href="/contact" className="mt-8 inline-block bg-[#2D5016] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#4A8B1F] transition">Enquire Now</a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
