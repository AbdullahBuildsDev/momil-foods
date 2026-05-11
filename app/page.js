import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import Footer from '@/components/Footer'
import { client } from '@/lib/sanity'

async function getCategories() {
  try { return await client.fetch(`*[_type=="category"]{_id,title,slug,image}`) }
  catch { return [] }
}

export default async function Home() {
  const categories = await getCategories()
  return (
    <main>
      <Navbar categories={categories} />
      <HeroSlider />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-[#2D5016]">CONTINUOUS COMMITMENT IN</h2>
          <h2 className="text-5xl font-black text-[#F5C518]">QUALITY, OPERATIONS</h2>
          <h2 className="text-5xl font-black text-[#4A8B1F]">AND EXCELLENCE</h2>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-[#FDE68A] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-[#2D5016] text-center mb-12">Our Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.length ? categories.map((cat) => (
              <a key={cat._id} href={`/products/${cat.slug.current}`}
                className="text-center p-6 bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-3">🌿</div>
                <p className="font-semibold text-[#2D5016]">{cat.title}</p>
              </a>
            )) : ['Dry Fruits','Juices','Snacks','Sweets'].map((c) => (
              <div key={c} className="text-center p-6 bg-white rounded-xl shadow">
                <div className="text-4xl mb-3">🌿</div>
                <p className="font-semibold text-[#2D5016]">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
