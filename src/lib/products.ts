import Papa from 'papaparse'

// Last updated: April 7 2026 - Gallery + Video support
export type Product = {
  id: string
  name: string | null
  slug: string
  image?: string | null
  gallery: string[]          // extra images (excluding main image)
  youtubeUrl: string | null  // YouTube video URL
  price?: number
  description?: string | null
  stock: 'in_stock' | 'out_of_stock'
  components: string[]
  players?: string | null
  duration?: string | null
  category?: string | null
}

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQb5kakxhsG07GTrj2L9kLU3pngpqwjQtjmkVgm-sUISjGQRqOAu1pT70pUc581Qg/pub?output=csv'

// Mapear encabezados del CSV a propiedades del producto
interface CSVRow {
  ID: string
  Nombre: string
  Precio: string
  Stock: string
  Jugadores?: string
  Edad?: string
  Tiempo: string
  Descripcion_Corta: string
  Contenido: string
  Imagen_URL: string
  Imagenes_Extra?: string   // comma-separated Drive URLs
  Video_URL?: string        // YouTube URL
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/-+/g, '-')
}

function parseComponents(content: string): string[] {
  if (!content || typeof content !== 'string') return []
  return content
    .split(/[,\n]/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
}

function parseStock(stockValue: string | number): 'in_stock' | 'out_of_stock' {
  const num = typeof stockValue === 'string' ? parseInt(stockValue, 10) : stockValue
  return num > 0 ? 'in_stock' : 'out_of_stock'
}

function transformDriveImageUrl(url: string): string {
  if (!url) return ''

  let fileId = ''

  // Try to extract from ?id= parameter (uc?export=view&id=FILE_ID)
  const idMatch = url.match(/[?&]id=([a-zA-Z0-9-_]+)/)
  if (idMatch) fileId = idMatch[1]

  // Try to extract from /d/FILE_ID/ pattern (file/d/FILE_ID/view)
  if (!fileId) {
    const pathMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/)
    if (pathMatch) fileId = pathMatch[1]
  }

  // Use /thumbnail endpoint — returns image directly without redirects or cookies
  // This works cross-origin from Vercel without being blocked by the browser
  if (fileId) {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`
  }

  return url
}

export async function fetchProductsFromCSV(): Promise<Product[]> {
  try {
    console.log('Fetching CSV from:', CSV_URL)
    const response = await fetch(CSV_URL)
    const csvText = await response.text()
    console.log('CSV fetched, length:', csvText.length)
    
    // Remove leading empty lines before parsing
    const cleanedCSV = csvText.split('\n').filter((line, idx) => {
      // Skip the first empty lines but keep data
      return line.trim().length > 0 || idx > 10
    }).join('\n')
    
    console.log('Cleaned CSV length:', cleanedCSV.length)

    return new Promise((resolve, reject) => {
      Papa.parse<CSVRow>(cleanedCSV, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: false,
        complete: (results) => {
          console.log('CSV parsed, raw rows:', results.data.length)
          console.log('First row sample:', results.data[0])
          
          const products: Product[] = results.data
            .filter((row: CSVRow) => {
              // Only keep rows that have a Nombre field with actual content
              const hasName = row.Nombre && typeof row.Nombre === 'string' && row.Nombre.trim().length > 0
              if (!hasName) {
                console.log('Skipping row without name:', row)
              }
              return hasName
            })
            .map((row: CSVRow, index: number) => {
              const price = parseFloat(row.Precio) || 0
              const stock = parseInt(row.Stock, 10) || 0
              
              // Combine Jugadores and Edad fields
              const players = [row.Jugadores, row.Edad]
                .filter((val) => val && val.trim())
                .join(' ')
              
              console.log(`Processing product ${index + 1}:`, row.Nombre, 'Price:', price, 'Stock:', stock, 'Players:', players)

              // Parse extra images from comma-separated Drive URLs
              const extraImages = (row.Imagenes_Extra || '')
                .split(',')
                .map((u) => transformDriveImageUrl(u.trim()))
                .filter((u) => u.length > 0)

              return {
                id: row.ID || `product-${index}`,
                name: row.Nombre?.trim() || null,
                slug: generateSlug(row.Nombre || `product-${index}`),
                image: transformDriveImageUrl(row.Imagen_URL?.trim() || ''),
                gallery: extraImages,
                youtubeUrl: row.Video_URL?.trim() || null,
                price,
                description: row.Descripcion_Corta?.trim() || null,
                stock: parseStock(stock),
                components: parseComponents(row.Contenido),
                players: players || null,
                duration: row.Tiempo?.trim() || null,
                category: 'Juegos de Mesa',
              }
            })

          console.log('Products processed:', products.length)
          if (products.length === 0) {
            console.warn('No products found after filtering!')
          }
          resolve(products)
        },
        error: (error: Error) => {
          console.error('Error parsing CSV:', error)
          reject(error)
        },
      })
    })
  } catch (error) {
    console.error('Error fetching CSV:', error)
    return []
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await fetchProductsFromCSV()
  return products.slice(0, 6)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await fetchProductsFromCSV()
  return products.find((p) => p.slug === slug) || null
}

export async function getAllProducts(): Promise<Product[]> {
  return fetchProductsFromCSV()
}
