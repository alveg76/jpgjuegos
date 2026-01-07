import {sanity} from './sanity.client'

export type Product = {
  id: string
  name: string | null
  slug: string
  isFeatured: boolean
  image?: string | null
  price?: number
}

const featuredQuery = /* groq */ `
*[_type == "product" && isFeatured == true] | order(_updatedAt desc) {
  "id": _id,
  "name": coalesce(name, title),
  "slug": slug.current,
  isFeatured,
  "image": image.asset->url,
  price
}
`

const slugQuery = /* groq */ `
*[_type == "product" && slug.current == $slug][0] {
  "id": _id,
  "name": coalesce(name, title),
  "slug": slug.current,
  isFeatured,
  "image": image.asset->url,
  price
}
`

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    return await sanity.fetch<Product[]>(featuredQuery)
  } catch (error) {
    console.error('Sanity fetch failed:', error)
    return []
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    return await sanity.fetch<Product | null>(slugQuery, { slug })
  } catch (error) {
    console.error('Sanity fetch failed:', error)
    return null
  }
}
