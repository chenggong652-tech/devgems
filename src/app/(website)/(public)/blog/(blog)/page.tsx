import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Blog",
  description: "Read our latest in-depth comparisons and guides about AI development tools",
  canonicalUrl: `${siteConfig.url}/blog`,
});

const posts = [
  {
    slug: "cursor-vs-copilot-vs-claude-code",
    title: "Cursor vs GitHub Copilot vs Claude Code: Which AI Coding Tool Is Best in 2026?",
    excerpt: "We compare the top 3 AI coding assistants on price, features, performance and who each tool is best for.",
    date: "Nov 1, 2026",
  },
  {
    slug: "bolt-vs-v0-vs-replit",
    title: "Bolt.new vs v0 vs Replit: Best AI App Builder in 2026?",
    excerpt: "We compare the top no-code AI app builders to see which one is best for building and launching full apps fast.",
    date: "Nov 1, 2026",
  },
  {
    slug: "openai-vs-anthropic-vs-gemini",
    title: "OpenAI vs Anthropic vs Google Gemini: Best LLM API in 2026?",
    excerpt: "Compare the top 3 LLM API providers on price, speed, quality and use cases for developers.",
    date: "Nov 1, 2026",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-muted-foreground mb-12">In-depth comparisons and guides about AI development tools</p>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 rounded-2xl border bg-card hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium">Comparison</span>
              <p className="text-sm text-muted-foreground">{post.date}</p>
            </div>
            <h2 className="text-xl font-bold mb-2 hover:text-purple-500">{post.title}</h2>
            <p className="text-muted-foreground">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
