import './globals.css'

export const metadata = {
  title: 'Momil Foods - Quality Food & Beverages Exporter',
  description: 'Momil Foods Pvt. Ltd. - Premium Pakistani food exporter. Fruit juices, dry fruits, snacks, bakery products and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-dvh">
      <body className="flex min-h-dvh flex-col bg-white">
        {children}
      </body>
    </html>
  )
}
