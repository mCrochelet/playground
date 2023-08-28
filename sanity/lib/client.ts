import { createClient } from '@sanity/client'

export const SanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: (new Date()).toISOString().split('T')[0],
})
