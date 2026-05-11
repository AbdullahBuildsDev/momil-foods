import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { client } from '@/lib/sanity'

async function getData(productSlug) {
  try {
    const categories = await client.fetch(`*[_type=="category"]{_id,title,slug}`)
    const product = await client.fetch(`*[_type=="product" && slug.current==$slug][0]{_id,title,description,weight,origin,images,category->{title,slug}}`, { slug: productSlug })
    return { categories, product }
  } catch { return { categories:[], product:null } }
}

export default async function ProductPage({ params }) {
  const { categories, product } = await getData(params.product)
  if (!product) return <div className="pt-32 text-center text-gray-400">Product not found.</div>
  return (
    <main>
      <Navbar categories={categories} />
      <div className="max-w-5xl mx-auto px-4 pt-28 pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-[#FDE68A] to-[#7DC232] rounded-2xl h-96 flex items-center justify-center text-9xl">🌿</div>
          <div>
            <p className="text-[#7DC232] font-semibold uppercase tracking-wider text-sm">{product.category?.title}</p>
            <h1 className="text-4xl font-black text-[#2D5016] mt-2">{product.title}</h1>
            {product.weight && <p className="mt-3 text-gray-500">Weight: {product.weight}</p>}
            {product.origin && <p className="text-gray-500">Origin: {product.origin}</p>}
            {product.description && <p className="mt-6 text-gray-600 leading-relaxed">{product.descriptn}</p>}
            <a href="/contact" className="mt-8 inline-block bg-[#2D5016] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#4A8B1F] transition">Enquire Now</a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
