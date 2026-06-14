import type { MetadataRoute } from "next";

const BASE_URL = "https://institutopiaget.edu.mx";

const niveles = [
  "comunidad-infantil",
  "casa-de-ninos",
  "primaria",
  "secundaria",
  "preparatoria",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const nivelesEntries: MetadataRoute.Sitemap = niveles.map((slug) => ({
    url: `${BASE_URL}/niveles/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...nivelesEntries,
  ];
}
