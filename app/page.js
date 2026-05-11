import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import Footer from '@/components/Footer'
import { categories } from '@/lib/data'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-0 w-full flex-1 flex-col">
      <Navbar />
      <div className="flex min-h-0 flex-1 flex-col">
        <HeroSlider />
        <section className="bg-white px-4 pb-16 pt-20 sm:px-6 sm:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-2xl font-black leading-tight text-[#2D5016] sm:text-3xl md:text-4xl lg:text-5xl">
              CONTINUOUS COMMITMENT IN
            </h2>
            <h2 className="text-balance mt-1 text-2xl font-black leading-tight text-[#F5C518] sm:text-3xl md:text-4xl lg:text-5xl">
              QUALITY, OPERATIONS
            </h2>
            <h2 className="text-balance mt-1 text-2xl font-black leading-tight text-[#4A8B1F] sm:text-3xl md:text-4xl lg:text-5xl">
              AND EXCELLENCE
            </h2>
          </div>
        </section>
        <section className="bg-gradient-to-b from-[#FDE68A] to-white px-4 pb-20 pt-8 sm:px-6">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
            <h3 className="mb-10 text-center text-3xl font-bold text-[#2D5016]">Our Categories</h3>
            <div className="grid w-full max-w-4xl grid-cols-2 justify-items-stretch gap-4 sm:gap-6 md:grid-cols-4 md:max-w-5xl">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products/${cat.slug}`}
                  className="flex flex-col items-center justify-center rounded-xl bg-white p-5 text-center shadow transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6"
                >
                  <div className="mb-3 text-4xl">{cat.emoji}</div>
                  <p className="font-semibold leading-snug text-[#2D5016]">{cat.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
