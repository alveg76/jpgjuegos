import Papa from 'papaparse'

export type Product = {
  id: string
  name: string | null
  slug: string
  image?: string | null
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
  'Jugadores Edad': string
  Tiempo: string
  Descripcion_Corta: string
  Contenido: string
  Imagen_URL: string
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

export async function fetchProductsFromCSV(): Promise<Product[]> {
  try {
    const response = await fetch(CSV_URL)
    const csvText = await response.text()

    return new Promise((resolve, reject) => {
      Papa.parse<CSVRow>(csvText, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: false,
        complete: (results) => {
          const products: Product[] = results.data
            .filter((row: CSVRow) => row.Nombre && row.Nombre.trim()) // Filtrar filas vacías
            .map((row: CSVRow, index: number) => {
              const price = parseFloat(row.Precio) || 0
              const stock = parseInt(row.Stock, 10) || 0

              return {
                id: row.ID || `product-${index}`,
                name: row.Nombre?.trim() || null,
                slug: generateSlug(row.Nombre || `product-${index}`),
                image: row.Imagen_URL?.trim() || undefined,
                price,
                description: row.Descripcion_Corta?.trim() || null,
                stock: parseStock(stock),
                components: parseComponents(row.Contenido),
                players: row['Jugadores Edad']?.trim() || null,
                duration: row.Tiempo?.trim() || null,
                category: 'Juegos de Mesa',
              }
            })

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
