import type { MetadataRoute } from "next";

const site_url = "https://devgems.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site_url}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${site_url}/category/ai-code-editors`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${site_url}/category/ai-pair-programmers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${site_url}/category/llm-apis`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${site_url}/category/ai-app-builders`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${site_url}/privacy`,
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: `${site_url}/terms`,
      lastModified: new Date(),
      priority: 0.3,
    },
  ];
}
