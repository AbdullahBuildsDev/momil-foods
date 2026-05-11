import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-12 bg-gradient-to-b from-[#2D5016] to-[#4A8B1F] text-white text-center">
        <h1 className="text-5xl font-black">Contact Us</h1>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-16 text-center text-gray-600">
        <p className="text-xl">Get in touch with us for enquiries and orders.</p>
      </div>
      <Footer />
    </main>
  )
}
