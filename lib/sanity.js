import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
  ignoreBrowserTokenWarning: true,
})

const builder = createImageUrlBuilder({ projectId, dataset })
export const urlFor = (source) => builder.image(source)
export const isSanityConfigured = projectId !== 'placeholder'
