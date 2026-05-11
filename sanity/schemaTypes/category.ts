export const categoryType = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule: any) => Rule.required() },
    { name: 'image', title: 'Category Image', type: 'image', options: { hotspot: true } },
    { name: 'description', title: 'Description', type: 'text' },
  ],
}
