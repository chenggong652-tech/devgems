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
  {
    slug: "best-ai-code-editors-2026",
    title: "Best AI Code Editors in 2026: Which One Should You Use?",
    excerpt: "We compare the top AI code editors (VS Code, Cursor, Zed, Neovim) to help you pick the right one for your workflow.",
    date: "Nov 5, 2026",
  },
  {
    slug: "best-free-ai-coding-tools-2026",
    title: "Best Free AI Coding Tools in 2026: No Credit Card Required",
    excerpt: "The best 100% free AI coding tools you can use right now, no credit card required. Open-source and freemium tools for every developer.",
    date: "Nov 5, 2026",
  },
  {
    slug: "best-llm-apis-for-side-projects-2026",
    title: "Best LLM APIs for Side Projects in 2026 (Budget Friendly)",
    excerpt: "The best cheap, reliable LLM APIs for your side project in 2026, with free tiers and pay-as-you-go pricing.",
    date: "Nov 5, 2026",
  },
  {
    slug: "is-cursor-free-2026",
    title: "Is Cursor Free to Use in 2026? Pricing Explained",
    excerpt: "Wondering if the Cursor AI code editor is free? We break down the free tier limits and paid pricing plans in 2026.",
    date: "Nov 5, 2026",
  },
  {
    slug: "is-github-copilot-free-for-students-2026",
    title: "Is GitHub Copilot Free for Students in 2026?",
    excerpt: "Yes, GitHub Copilot is completely free for verified students and teachers. We show you how to sign up for free in 2026.",
    date: "Nov 5, 2026",
  },
  {
    slug: "open-source-ai-coding-tools-self-host-2026",
    title: "7 Open Source AI Coding Tools You Can Self-Host in 2026",
    excerpt: "The best open source AI coding tools you can run on your own server, no vendor lock-in, completely free to use.",
    date: "Nov 5, 2026",
  },
  {
    slug: "cheapest-llm-api-coding-2026",
    title: "What's the Cheapest LLM API for Coding in 2026?",
    excerpt: "We compare the cheapest LLM APIs for developers in 2026, including free tiers, pricing per token, and which one is best for side projects.",
    date: "Nov 5, 2026",
  },
  {
    slug: "is-replit-free-2026",
    title: "Is Replit Free to Use in 2026? Pricing Explained",
    excerpt: "Wondering if Replit is free? We break down Replit's free tier limits and paid pricing plans for developers in 2026.",
    date: "Nov 5, 2026",
  },
  {
    slug: "is-bolt-new-free-2026",
    title: "Is Bolt.new Free to Use in 2026? Pricing Explained",
    excerpt: "Wondering if Bolt.new is free? We break down Bolt.new's free tier limits and paid pricing plans for app builders in 2026.",
    date: "Nov 5, 2026",
  },
  {
    slug: "free-alternatives-to-cursor-2026",
    title: "5 Free Alternatives to Cursor in 2026 (No $20/Month)",
    excerpt: "Don't want to pay $20/month for Cursor? These 5 free AI code editors work just as well for most developers.",
    date: "Nov 5, 2026",
  },
  {
    slug: "is-github-copilot-worth-it-2026",
    title: "Is GitHub Copilot Worth It in 2026? Honest Review",
    excerpt: "We break down if GitHub Copilot is worth the $10/month price tag in 2026, who should buy it, and who can skip it.",
    date: "Nov 5, 2026",
  },
  {
    slug: "is-openrouter-free-2026",
    title: "Is OpenRouter Free to Use in 2026? Pricing Explained",
    excerpt: "We break down OpenRouter's free tier limits and pay-as-you-go pricing for developers in 2026.",
    date: "Nov 5, 2026",
  },
  {
    slug: "can-i-run-llms-locally-2026",
    title: "Can I Run LLMs Locally on My Computer in 2026?",
    excerpt: "Yes, you can run large language models locally on your own computer with Ollama. We explain how it works and what you need.",
    date: "Nov 5, 2026",
  },
  {
    slug: "is-github-codespaces-free-for-students-2026",
    title: "Is GitHub Codespaces Free for Students in 2026?",
    excerpt: "Yes, GitHub Codespaces is completely free for verified students through the GitHub Student Developer Pack. We show you how to get it.",
    date: "Nov 5, 2026",
  },
  {
    slug: "is-vercel-free-for-side-projects-2026",
    title: "Is Vercel Free for Side Projects in 2026?",
    excerpt: "Yes, Vercel has a generous free tier for hobbyists and side projects. We break down the limits in 2026.",
    date: "Nov 5, 2026",
  },
  {
    slug: "is-supabase-free-for-side-projects-2026",
    title: "Is Supabase Free for Side Projects in 2026?",
    excerpt: "Yes, Supabase has a generous free tier for side projects. We break down the limits and when you need to upgrade.",
    date: "Nov 5, 2026",
  },
  // 最新文章排在最前面
].reverse();

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
