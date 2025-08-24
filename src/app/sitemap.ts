import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mjgbiologa.com";
  const now = new Date();

  // Si luego creas rutas extra (ej.: /privacidad, /terminos), agrégalas aquí.
  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
