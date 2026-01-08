import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getFeaturedProducts } from "@/lib/products";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const sectionAnchors: Array<{ hash: string; priority: number }> = [
    { hash: "#familiares", priority: 0.8 },
    { hash: "#estrategia", priority: 0.8 },
    { hash: "#didacticos", priority: 0.7 },
    { hash: "#ofertas", priority: 0.7 },
    { hash: "#preventas", priority: 0.8 },
    { hash: "#contacto", priority: 0.9 },
  ];
  const sectionEntries = sectionAnchors.map(({ hash, priority }) => ({
    url: `${SITE_URL}${hash}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));

  // Productos dinámicos de Sanity
  let productEntries: MetadataRoute.Sitemap = [];
  try {
    const products = await getFeaturedProducts();
    productEntries = products.map((product) => ({
      url: `${SITE_URL}/producto/${product.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error fetching products for sitemap:", error);
  }

  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly" as const, priority: 1 },
    ...sectionEntries,
    ...productEntries,
    {
      url: `${SITE_URL}/privacidad`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
  ];
}
