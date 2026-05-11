export const blogPostType = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule: any) => Rule.required() },
    { name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
  ],
}
