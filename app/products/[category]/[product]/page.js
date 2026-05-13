import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { categories, products, getCategory, getProduct } from '@/lib/data'
import Image from 'next/image'

export function generateStaticParams() {
  return products.map((product) => {
    const category = categories.find((item) => item.id === product.category)
    return {
      category: category?.slug || product.category,
      product: product.slug,
    }
  })
}

export default async function ProductPage({ params }) {
  const { category: categorySlug, product: productSlug } = await params
  const product = getProduct(productSlug)
  const category = getCategory(categorySlug)

  if (!product) return <div className="pt-48 text-center text-gray-400">Product not found.</div>

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-[#faf7ec] flex-1" style={{ paddingTop: '140px', paddingBottom: '64px' }}>
        <div className="site-container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 bg-white p-6 md:p-8 border border-[#eadfae] shadow-sm">
            {product.image
              ? <Image src={product.image} alt={product.title} width={560} height={460} className="rounded-2xl w-full h-96 object-cover" />
              : <div className="bg-gradient-to-br from-[#102006] via-[#2D5016] to-[#D97706] h-96 flex items-center justify-center px-8 text-center text-[#F5C518] text-3xl font-black uppercase tracking-widest">{category?.title || 'Product'}</div>
            }
            <div>
              <p className="text-[#7DC232] font-semibold uppercase tracking-wider text-sm">{category?.title}</p>
              <h1 className="text-4xl font-black text-[#2D5016] mt-2">{product.title}</h1>
              {product.weight && <p className="mt-3 text-gray-500">Weight: {product.weight}</p>}
              {product.origin && <p className="text-gray-500">Origin: {product.origin}</p>}
              {product.description && <p className="mt-6 text-gray-600 leading-relaxed">{product.description}</p>}
              <a href="/contact" className="mt-8 inline-block bg-[#2D5016] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#4A8B1F] transition">Enquire Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-14 md:h-20 bg-[#faf7ec]" />
      <Footer />
    </main>
  )
}
