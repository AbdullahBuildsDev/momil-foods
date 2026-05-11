import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Momil Foods - Quality Food & Beverages Exporter',
  description: 'Momil Foods Pvt. Ltd. - Premium Pakistani food exporter. Fruit juices, dry fruits, snacks, bakery products and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
