export const categories = [
  { id: 'dry-fruits',  title: 'Dry Fruits',  slug: 'dry-fruits',  emoji: '🥜', description: 'Premium quality dry fruits' },
  { id: 'juices',     title: 'Juices',       slug: 'juices',      emoji: '🥤', description: 'Fresh & natural juices' },
  { id: 'snacks',     title: 'Snacks',       slug: 'snacks',      emoji: '🍿', description: 'Tasty Pakistani snacks' },
  { id: 'sweets',     title: 'Sweets',       slug: 'sweets',      emoji: '🍬', description: 'Traditional desi sweets' },
]

export const products = [
  {
    id: 'medjool-dates',
    title: 'Medjool Dates',
    slug: 'medjool-dates',
    category: 'dry-fruits',
    image: null,          // put filename here e.g. '/products/medjool-dates.jpg'
    description: 'Premium Medjool dates, soft and sweet.',
    weight: '1kg',
    origin: 'Saudi Arabia',
    featured: true,
  },
  {
    id: 'mixed-nuts',
    title: 'Mixed Nuts',
    slug: 'mixed-nuts',
    category: 'dry-fruits',
    image: null,
    description: 'Hand-picked assorted nuts blend.',
    weight: '750g',
    origin: 'Various',
    featured: false,
  },
  {
    id: 'mango-juice',
    title: 'Mango Juice',
    slug: 'mango-juice',
    category: 'juices',
    image: null,
    description: 'Pure mango juice, no preservatives.',
    weight: '3 Liter',
    origin: 'Pakistan',
    featured: true,
  },
  {
    id: 'chana-chaat',
    title: 'Chana Chaat',
    slug: 'chana-chaat',
    category: 'snacks',
    image: null,
    description: 'Spicy and tangy chana chaat snack.',
    weight: '200g',
    origin: 'Pakistan',
    featured: false,
  },
  {
    id: 'desi-sweets-box',
    title: 'Desi Sweets Box',
    slug: 'desi-sweets-box',
    category: 'sweets',
    image: null,
    description: 'Assorted traditional Pakistani sweets.',
    weight: '500g',
    origin: 'Pakistan',
    featured: false,
  },
]

export function getCategory(slug) {
  return categories.find(c => c.slug === slug) || null
}

export function getProductsByCategory(slug) {
  const category = getCategory(slug)
  return products.filter(p => p.category === slug || p.category === category?.id)
}

export function getProduct(slug) {
  return products.find(p => p.slug === slug) || null
}
