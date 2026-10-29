import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Best LLM APIs for Side Projects in 2026 (Budget Friendly)",
  description: "The best cheap, reliable LLM APIs for your side project in 2026, with free tiers and pay-as-you-go pricing.",
  canonicalUrl: `${siteConfig.url}/blog/best-llm-apis-for-side-projects-2026`,
});

export default function LLMApisSideProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Best LLM APIs for Side Projects in 2026 (Budget Friendly)</h1>
      <p className="text-muted-foreground mb-8">Published: November 5, 2026 · 5 min read</p>

      <div className="prose dark:prose-invert">
        <p className="text-lg leading-relaxed mb-6">
          Building a side project? You don't need expensive enterprise LLM APIs to get started. We tested all the budget-friendly LLM APIs for indie hackers and side projects.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. Google Gemini API</h2>
        <p className="mb-4">
          <Link href="/item/gemini-api" className="text-purple-600 hover:underline">Google Gemini API</Link> is the cheapest option for side projects, with a 1M token context window and a generous free tier. You get 15 RPM free forever, perfect for launching your MVP without spending a dollar.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">2. OpenAI API</h2>
        <p className="mb-4">
          <Link href="/item/openai-api" className="text-purple-600 hover:underline">OpenAI API</Link> has the best ecosystem and documentation, and their GPT-4o Mini model is extremely cheap ($0.15 per 1M tokens), perfect for side projects that need rock-solid reliability.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Groq</h2>
        <p className="mb-4">
          Groq offers the fastest LLM inference on the market, with speeds up to 500 tokens per second. Their free tier is perfect for building chatbots and real-time AI features in your side project.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. DeepSeek</h2>
        <p className="mb-4">
          DeepSeek offers 70% cheaper pricing than OpenAI, with code and reasoning quality that matches GPT-4o. It's the best choice if you're building an AI coding side project.
        </p>

        <p className="text-muted-foreground mt-10 text-sm">
          *This post contains affiliate links, we may earn a commission at no extra cost to you.
        </p>

        <div className="mt-12 p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/20 border text-center">
          <h3 className="text-xl font-bold mb-2">📬 Get weekly AI coding tools in your inbox</h3>
          <p className="text-muted-foreground mb-4 text-sm">We send 5 best new AI dev tools every week, no spam.</p>
          <a href="/category/llm-apis" className="inline-block px-6 py-2 rounded-xl bg-purple-600 text-white text-sm font-medium hover:bg-purple-700">Browse All LLM APIs</a>
        </div>
      </div>
    </div>
  );
}
