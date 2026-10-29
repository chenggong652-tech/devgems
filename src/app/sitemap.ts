import type { MetadataRoute } from "next";
import { tools } from "@/lib/tools";

const site_url = "https://devgems.io";

export default function sitemap(): MetadataRoute.Sitemap {
  // 基础页面
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${site_url}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${site_url}/deals`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site_url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${site_url}/blog/cursor-vs-copilot-vs-claude-code`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site_url}/blog/bolt-vs-v0-vs-replit`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site_url}/blog/openai-vs-anthropic-vs-gemini`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site_url}/blog/best-ai-code-editors-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site_url}/blog/best-free-ai-coding-tools-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site_url}/blog/best-llm-apis-for-side-projects-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site_url}/blog/is-cursor-free-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${site_url}/blog/is-github-copilot-free-for-students-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${site_url}/blog/open-source-ai-coding-tools-self-host-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site_url}/blog/cheapest-llm-api-coding-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${site_url}/blog/is-replit-free-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${site_url}/blog/is-bolt-new-free-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${site_url}/blog/free-alternatives-to-cursor-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site_url}/blog/is-github-copilot-worth-it-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${site_url}/blog/is-openrouter-free-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${site_url}/blog/can-i-run-llms-locally-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${site_url}/blog/is-github-codespaces-free-for-students-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${site_url}/blog/is-vercel-free-for-side-projects-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${site_url}/blog/is-supabase-free-for-side-projects-2026`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
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

  // 自动加所有工具详情页
  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${site_url}/item/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...toolPages];
}
