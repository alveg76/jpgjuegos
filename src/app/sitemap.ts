import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mjgbiologa.com";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/#sobre-mi`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/#servicios`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/#experiencia`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/#proyectos`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/#contacto`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
  ];
}
