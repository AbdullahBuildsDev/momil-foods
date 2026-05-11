import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { client } from '@/lib/sanity'

async function getCategories() {
  try { return await client.fetch(`*[_type=="category"]{_id,title,slug}`) }
  catch { return [] }
}

export default async function About() {
  const categories = await getCategories()
  return (
    <main>
      <Navbar categories={categories} />
      <div className="pt-24 pb-16 bg-gradient-to-b from-[#2D5016] to-[#7DC232] text-white text-center">
        <h1 className="text-5xl font-black">About Momil Foods</h1>
        <p className="mt-4 text-xl text-white/80">Quality Food & Beverages Exporter</p>
      </div>
      <section className="max-w-5xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-[#2D5016] mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">Momil Foods Pvt. Ltd. believes in Quality Food products. Our organizational culture is built on 4 main pillars: Quality, Innovation, Service and Trust. With 13 years of experience in Product development, we serve local and global buyers with one window solution.</p>
          <h3 className="text-xl font-bold text-[#2D5016] mt-8 mb-2">Vision</h3>
          <p className="text-gray-600">To be a global quality food sourcing partner and become a leading service provider through innovation.</p>
          <h3 className="text-xl font-bold text-[#2D5016] mt-6 mb-2">Mission</h3>
          <p className="text-gray-600">To provide Quality food products to buyers and increase their profitability through swift and affordable support.</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#2D5016] mb-4">Our Services</h2>
          {['Private Labeling','Bulk Suppling','USA FDA Registration','Co Packing','Packaging Design/Printing','USA-FDA SID Registration'].map((s) => (
            <div key={s} className="flex items-center gap-3 mb-3">
              <span className="w-3 h-3 bg-[#7DC232] rounded-full"></span>
              <span className="text-gray-700">{s}</span>
            </div>
          ))}
          <div className="mt-8 p-6 bg-gradient-to-br from-[#FDE68A] to-[#F5C518] rounded-xl">
            <h3 className="font-bold text-[#2D5016] mb-2">📍 Location</h3>
            <p className="text-[#2D5016]">House No. 171, Eden Avenue, New Airport Road, Lahore, Pakistan</p>
            <h3 className="font-bold text-[#2D5016] mt-4 mb-2">📧 Email</h3>
            <p className="text-[#2D5016]">momilfoods@gmail.com</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
