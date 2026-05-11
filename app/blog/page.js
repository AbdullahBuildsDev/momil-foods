import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Blog() {
  return (
    <main className="flex min-h-0 w-full flex-1 flex-col">
      <Navbar />
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="shrink-0 bg-gradient-to-br from-[#102006] via-[#2D5016] to-[#D97706] px-4 pb-16 pt-32 text-center text-white">
          <h1 className="text-5xl font-black drop-shadow-xl md:text-6xl">Blog</h1>
          <p className="mt-4 text-white/80">News & Updates from Momil Foods</p>
        </div>
        <div className="mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 py-20 text-center text-gray-500 sm:py-24">
          <p className="text-xl sm:text-2xl">Blog posts coming soon...</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
