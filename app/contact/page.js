import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { client } from '@/lib/sanity'

async function getCategories() {
  try { return await client.fetch(`*[_type=="category"]{_id,title,slug}`) }
  catch { return [] }
}

export default async function Contact() {
  const categories = await getCategories()
  return (
    <main>
      <Navbar categories={categories} />
      <div className="pt-24 pb-12 bg-gradient-to-b from-[#2D5016] to-[#4A8B1F] text-white text-center">
        <h1 className="text-5xl font-black">Get In Touch</h1>
        <p className="mt-4 text-white/80">We'd love to hear from you</p>
      </div>
      <div className="max-w-5xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-[#2D5016] mb-6">Send Enquiry</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4A8B1F]" />
            <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4A8B1F]" />
            <input type="text" placeholder="Company Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4A8B1F]" />
            <textarea rows={5} placeholder="Your Message / Product Enquiry" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4A8B1F]" />
            <button className="w-full bg-[#2D5016] text-white py-3 rounded-lg font-bold hover:bg-[#4A8B1F] transition">Send Message</button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#2D5016] mb-6">Contact Info</h2>
          <div className="space-y-4">
            <div className="p-4 bg-[#FDE68A] rounded-xl"><p className="font-bold text-[#2D5016]">📍 Address</p><p className="text-[#2D5016] -1">171 Eden Avenue, New Airport Road, Lahore, Pakistan</p></div>
            <div className="p-4 bg-[#FDE68A] rounded-xl"><p className="font-bold text-[#2D5016]">📧 Email</p><p className="text-[#2D5016] mt-1">momilfoods@gmail.com</p></div>
            <div className="p-4 bg-[#FDE68A] rounded-xl"><p className="font-bold text-[#2D5016]">🌍 Export Markets</p><p className="text-[#2D5016] mt-1">USA · Vietnam · Oman · Pakistan</p></div>
          </div>
          <div className="mt-6 flex gap-4">
            {[['Facebook','#'],['Instagram','#'],['LinkedIn','#'],['WhatsApp','#']].map(([name,href])=>(
              <a key={name} href={href} className="px-4 py-2 bg-[#2D5016] text-white rounded-lg text-sm hover:bg-[#4A8B1F] transition">{name}</a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
