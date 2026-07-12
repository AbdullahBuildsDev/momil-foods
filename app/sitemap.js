import { products, categories } from '@/lib/data'

export const dynamic = 'force-static'

const BASE = 'https://momilfoods.com'

export default function sitemap() {
  const now = new Date()

  const staticRoutes = ['', '/about', '/products', '/contact', '/blog'].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))

  const categoryRoutes = categories.map((c) => ({
    url: `${BASE}/products/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const productRoutes = products.map((p) => {
    const cat = categories.find((c) => c.id === p.category)
    return {
      url: `${BASE}/products/${cat?.slug || p.category}/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    }
  })

  return [...staticRoutes, ...categoryRoutes, ...productRoutes]
}
