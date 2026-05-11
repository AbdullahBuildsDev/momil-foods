export const heroSlideType = {
  name: 'heroSlide',
  title: 'Hero Slide',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'image', title: 'Background Image', type: 'image', options: { hotspot: true }, validation: (Rule: any) => Rule.required() },
    { name: 'order', title: 'Order', type: 'number' },
  ],
}
