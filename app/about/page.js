import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-12 bg-gradient-to-b from-[#2D5016] to-[#4A8B1F] text-white text-center">
        <h1 className="text-5xl font-black">About Us</h1>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-16 text-gray-600 text-lg leading-relaxed">
        <p>Momil Foods is dedicated to bringing you the finest quality food products sourced from around the world.</p>
      </div>
      <Footer />
    </main>
  )
}
