import './globals.css'

export const metadata = {
  title: 'Momil Foods - Quality Food & Beverages Exporter',
  description: 'Momil Foods Pvt. Ltd. - Premium Pakistani food exporter. Fruit juices, dry fruits, snacks, bakery products and more.',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
