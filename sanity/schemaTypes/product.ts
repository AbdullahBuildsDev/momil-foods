export const productType = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'title', title: 'Product Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule: any) => Rule.required() },
    { name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }] },
    { name: 'images', title: 'Product Images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'weight', title: 'Weight / Size', type: 'string' },
    { name: 'origin', title: 'Country of Origin', type: 'string' },
    { name: 'featured', title: 'Featured Product', type: 'boolean', initialValue: false },
  ],
}
