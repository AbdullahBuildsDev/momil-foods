import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const HERO_BG =
  'https://images.unsplash.com/photo-1606787366850-de633012884b?auto=format&fit=crop&w=1920&q=75'

const pillars = [
  { title: 'Quality', desc: 'Consistent standards from sourcing through delivery.' },
  { title: 'Innovation', desc: 'Product development and formats that fit your market.' },
  { title: 'Service', desc: 'Responsive support for buyers and partners worldwide.' },
  { title: 'Trust', desc: 'Transparent sourcing and dependable export programs.' },
]

const services = [
  'Private Labeling',
  'Bulk Supplying',
  'USA FDA Registration',
  'Co Packing',
  'Packaging Design/Printing',
  'USA-FDA SID Registration',
]

function SectionEyebrow({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D97706]">{children}</p>
  )
}

export default function About() {
  return (
    <main className="flex min-h-0 w-full flex-1 flex-col">
      <Navbar />
      <div className="flex min-h-0 flex-1 flex-col">
        {/* —— Hero —— */}
        <section
          className="relative isolate flex min-h-[min(90dvh,820px)] flex-col justify-center overflow-hidden pt-[88px] pb-16 md:pb-24"
          aria-labelledby="about-hero-heading"
        >
          <div
            className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat blur-[2px]"
            style={{ backgroundImage: `url(${HERO_BG})` }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#102006]/95 via-[#14280a]/92 to-[#2D5016]/88"
            aria-hidden
          />
          <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 content-center items-center justify-items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-8">
            <div className="flex w-full max-w-xl flex-col items-center text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F5C518]">Momil Foods Pvt. Ltd.</p>
              <h1
                id="about-hero-heading"
                className="mt-4 text-balance text-2xl font-black leading-[1.15] text-white sm:text-3xl md:text-4xl lg:text-[2.65rem]"
              >
                Built on quality, innovation, service and trust.
              </h1>
              <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/88 sm:text-lg">
                We support local and global buyers with product development, sourcing, co-packing and export-ready food
                solutions from Lahore, Pakistan.
              </p>
            </div>
            <div className="flex w-full max-w-md justify-center md:max-w-lg">
              <div className="w-full rounded-xl border border-white/25 bg-white/12 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.35em] text-[#F5C518]">
                  About us
                </p>
                <div className="mt-6 space-y-5 text-sm leading-relaxed text-white/92">
                  <div>
                    <p className="font-bold text-[#FDE68A]">Vision</p>
                    <p className="mt-1 text-white/90">
                      To be a global quality food sourcing partner and a leading service provider through innovation.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-[#FDE68A]">Mission</p>
                    <p className="mt-1 text-white/90">
                      To provide quality food products and increase buyer profitability through swift, affordable support.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-[#FDE68A]">Our services</p>
                    <p className="mt-1 text-white/90">
                      Private labeling, bulk supply, co-packing, packaging design, and USA FDA / SID registration support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* —— Intro + watermark (only here — pillars sit below on clean white) —— */}
        <section className="relative isolate overflow-hidden bg-[#fafbf7] px-4 py-16 sm:px-6 sm:py-20 md:py-24">
          <p
            className="pointer-events-none absolute left-1/2 top-[18%] -translate-x-1/2 select-none whitespace-nowrap font-black leading-none text-[#c9a017]/[0.085] text-[clamp(2.75rem,12vw,9rem)]"
            aria-hidden
          >
            MOMIL
          </p>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#2D5016] sm:text-4xl">About Momil Foods</h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-[1.75] text-gray-600 sm:text-lg">
              Momil Foods Pvt. Ltd. believes in quality food products. Our organizational culture is built on four main
              pillars—quality, innovation, service and trust—with over thirteen years of experience in product
              development and one-window solutions for local and global buyers.
            </p>
          </div>
        </section>

        {/* —— Pillars: generous padding, aligned grid, clear gap before next section —— */}
        <section className="border-t border-[#2D5016]/10 bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-4 md:gap-6 lg:gap-8">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex h-full min-h-[148px] flex-col items-center justify-center rounded-2xl border border-gray-200/90 bg-gradient-to-b from-[#fbfcf7] to-white px-4 py-7 text-center shadow-sm sm:min-h-[160px] sm:px-5 sm:py-8 md:px-6"
              >
                <h2 className="text-base font-bold uppercase tracking-[0.12em] text-[#2D5016] sm:text-lg">
                  {p.title}
                </h2>
                <p className="mt-3 max-w-[14rem] text-xs leading-relaxed text-gray-600 sm:max-w-none sm:text-sm md:text-[0.9375rem] md:leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* —— Vision / Mission | Services / Contact —— */}
        <section className="border-t border-[#2D5016]/10 bg-[#fafbf7] px-4 py-16 sm:px-6 sm:py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-14 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 md:gap-y-0">
              {/* Left: Vision + Mission — same hierarchy, big vertical rhythm */}
              <div className="flex flex-col gap-14 md:gap-16">
                <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 md:p-10">
                  <SectionEyebrow>Vision</SectionEyebrow>
                  <h3 className="mt-3 text-2xl font-bold leading-snug tracking-tight text-gray-900 sm:text-[1.65rem] md:text-3xl">
                    To be a global quality food sourcing partner.
                  </h3>
                  <p className="mt-4 text-base leading-[1.75] text-gray-600">
                    Become a leading service provider through innovation—supporting buyers who need dependable,
                    export-ready food programs.
                  </p>
                </article>
                <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 md:p-10">
                  <SectionEyebrow>Mission</SectionEyebrow>
                  <h3 className="mt-3 text-2xl font-bold leading-snug tracking-tight text-gray-900 sm:text-[1.65rem] md:text-3xl">
                    To increase buyer profitability with swift, affordable support.
                  </h3>
                  <p className="mt-4 text-base leading-[1.75] text-gray-600">
                    Deliver quality food products and responsive end-to-end support so partners can scale with
                    confidence.
                  </p>
                </article>
              </div>

              {/* Right: Services + location — matching headline scale */}
              <div className="flex flex-col gap-10 md:pt-1">
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 md:p-10">
                  <SectionEyebrow>What we do</SectionEyebrow>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#2D5016] sm:text-[1.65rem] md:text-3xl">
                    Our Services
                  </h3>
                  <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                    {services.map((s) => (
                      <li key={s} className="flex gap-3 text-left">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#7DC232]" aria-hidden />
                        <span className="text-sm leading-relaxed text-gray-700 sm:text-base">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#2D5016]/15 bg-gradient-to-br from-[#FDE68A] to-[#F5C518] p-6 shadow-md sm:p-8 md:p-10">
                  <SectionEyebrow>Location</SectionEyebrow>
                  <h3 className="mt-2 text-xl font-bold text-[#2D5016] sm:text-2xl">Lahore, Pakistan</h3>
                  <p className="mt-4 text-sm leading-[1.7] text-[#2D5016]/95 sm:text-base">
                    House No. 171, Eden Avenue, New Airport Road, Lahore, Pakistan
                  </p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#2D5016]/80">Email</p>
                  <a
                    href="mailto:momilfoods@gmail.com"
                    className="mt-1 inline-block text-base font-medium text-[#2D5016] underline-offset-2 hover:underline"
                  >
                    momilfoods@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
