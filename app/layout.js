import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

// Self-hosted at build time — no runtime request to Google Fonts.
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

const SITE_URL = 'https://momilfoods.com'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Momil Foods — Quality Food & Beverages Exporter from Pakistan',
    template: '%s | Momil Foods',
  },
  description:
    'Momil Foods Pvt. Ltd. is a premium Pakistani food & beverages exporter — spices, dry fruits, honey, snacks, tea, Himalayan pink salt, sauces and more. Private labeling, bulk supply and export-ready packing for buyers in the USA, UK, Vietnam, Oman and beyond.',
  keywords: [
    'Pakistani food exporter', 'halal food supplier', 'spices exporter Pakistan',
    'dry fruits exporter', 'Himalayan pink salt', 'private label food', 'bulk food supply',
    'honey exporter', 'snacks exporter', 'Momil Foods',
  ],
  authors: [{ name: 'Momil Foods Pvt. Ltd.' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Momil Foods',
    title: 'Momil Foods — Quality Food & Beverages Exporter from Pakistan',
    description:
      'Premium Pakistani food & beverages exporter — spices, dry fruits, honey, snacks, tea, pink salt and more. Private labeling and bulk export.',
    url: SITE_URL,
    locale: 'en_US',
    images: [{ url: '/logo.png', width: 601, height: 715, alt: 'Momil Foods' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momil Foods — Quality Food & Beverages Exporter',
    description: 'Premium Pakistani food & beverages exporter. Private labeling and bulk export.',
    images: ['/logo.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
