import {sanity} from './sanity.client'

export type StockStatus = 'in_stock' | 'preorder' | 'out_of_stock'
export type ProductBadge = 'NUEVO' | 'OFERTA'

export type Product = {
  id: string
  title: string
  slug?: string
  category: string
  price: number
  compareAtPrice?: number
  badge?: ProductBadge
  stock: StockStatus
  image: string | null
}

const query = /* groq */ `
*[_type == "product" && isFeatured == true] | order(_createdAt desc) {
  "id": _id,
  title,
  "slug": slug.current,
  category,
  price,
  compareAtPrice,
  badge,
  stock,
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
