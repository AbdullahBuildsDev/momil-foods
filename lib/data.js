export const categories = [
  { id: '1', title: 'Drinks and Juices', slug: 'drinks-and-juices', description: 'Fresh and natural drinks and juices' },
  { id: '2', title: 'Bulk Dry Fruits/Nuts', slug: 'bulk-dry-fruits-nuts', description: 'Premium bulk dry fruits and nuts' },
  { id: '3', title: 'Spices', slug: 'spices', description: 'Aromatic spices' },
  { id: '4', title: 'Vermicellis', slug: 'vermicellis', description: 'Quality vermicellis' },
  { id: '5', title: 'Tea', slug: 'tea', description: 'Premium teas' },
  { id: '6', title: 'Snacks', slug: 'snacks', description: 'Tasty snacks' },
  { id: '7', title: 'Honey', slug: 'honey', description: 'Pure natural honey' },
  { id: '8', title: 'Arqiyaat', slug: 'arqiyaat', description: 'Traditional arqiyaat' },
  { id: '9', title: 'Miscellaneous', slug: 'miscellaneous', description: 'Miscellaneous products' },
  { id: '10', title: 'Exclusive Products Saag/Halwa', slug: 'exclusive-products', description: 'Exclusive saag and halwa products' },
  { id: '11', title: 'Utensils & Kitchenware', slug: 'utensils-kitchenware', description: 'Quality kitchen essentials' },
  { id: '12', title: 'Pickle/Achar', slug: 'pickle-achar', description: 'Traditional pickles and achar' },
  { id: '13', title: 'Sauces', slug: 'sauces', description: 'Flavorful sauces' },
]

export const products = [
  { id: '1', title: 'Sample Product', slug: 'sample-product', category: '1', image: null, description: 'Sample description.', weight: '500g', origin: 'Pakistan', featured: true },
]

export const getCategory = (slug) => categories.find((c) => c.slug === slug)
export const getProductsByCategory = (slug) => { const cat = getCategory(slug); return cat ? products.filter((p) => p.category === cat.id) : [] }
export const getProduct = (slug) => products.find((p) => p.slug === slug)
