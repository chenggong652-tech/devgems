import { siteConfig } from "@/config/site";
import { tools } from "@/lib/tools";
import type { MetadataRoute } from "next";

// RSS feed for all blog posts
export async function GET() {
  const baseUrl = siteConfig.url;
  // 我们现在的博客都是动态路由在[slug]下，先硬编码我们的19篇博客列表
  const blogSlugs = [
    "best-ai-code-editors-2026",
    "best-free-ai-coding-tools-2026",
    "best-llm-apis-for-side-projects-2026",
    "can-i-run-llms-locally-2026",
    "cheapest-llm-api-coding-2026",
    "free-alternatives-to-cursor-2026",
    "is-bolt-new-free-2026",
    "is-cursor-free-2026",
    "is-github-codespaces-free-for-students-2026",
    "is-github-copilot-free-for-students-2026",
    "is-github-copilot-worth-it-2026",
    "is-openrouter-free-2026",
    "is-replit-free-2026",
    "is-supabase-free-for-side-projects-2026",
    "is-vercel-free-for-side-projects-2026",
    "open-source-ai-coding-tools-self-host-2026",
  ];

  const items = blogSlugs.map(slug => {
    const title = slug
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return `    <item>
      <title>${title}</title>
      <link>${baseUrl}/blog/${slug}</link>
      <guid>${baseUrl}/blog/${slug}</guid>
      <description>Read our guide about ${title} for AI developers.</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>DevGems Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Curated AI coding tools and guides for developers</description>
    <language>en-us</language>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
