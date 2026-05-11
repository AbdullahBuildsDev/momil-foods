import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Blog() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-12 bg-gradient-to-b from-[#2D5016] to-[#4A8B1F] text-white text-center">
        <h1 className="text-5xl font-black">Blog</h1>
        <p className="mt-4 text-white/80">News & Updates from Momil Foods</p>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-16 text-center text-gray-400">
        <p className="text-xl">Blog posts coming soon...</p>
      </div>
      <Footer />
    </main>
  )
}
