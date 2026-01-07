import {sanity} from './sanity.client'

export type Product = {
  id: string
  name: string | null
  slug: string
  isFeatured: boolean
  image?: string | null
}

const query = /* groq */ `
*[_type == "product" && isFeatured == true] | order(_updatedAt desc) {
  "id": _id,
  "name": coalesce(name, title),
  "slug": slug.current,
  isFeatured,
  "image": image.asset->url
}
`

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    return await sanity.fetch<Product[]>(query)
  } catch (error) {
    console.error('Sanity fetch failed:', error)
    return []
  }
}
