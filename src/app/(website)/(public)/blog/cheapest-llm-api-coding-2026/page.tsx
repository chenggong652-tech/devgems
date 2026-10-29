import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "What's the Cheapest LLM API for Coding in 2026?",
  description: "We compare the cheapest LLM APIs for developers in 2026, including free tiers, pricing per token, and which one is best for side projects.",
  canonicalUrl: `${siteConfig.url}/blog/cheapest-llm-api-coding-2026`,
});

export default function CheapestLLMPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">What's the Cheapest LLM API for Coding in 2026?</h1>
      <p className="text-muted-foreground mb-8">Published: November 5, 2026 · 2 min read</p>

      <div className="prose dark:prose-invert">
        <p className="text-lg leading-relaxed mb-6">
          Building an AI side project? We tested all the major LLM APIs and here's the cheapest option that still works great for coding tasks.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Cheapest Overall: Google Gemini Flash</h2>
        <p className="mb-4">
          <Link href="/item/gemini-api" className="text-purple-600 hover:underline">Google Gemini Flash</Link> is the cheapest option, at $0.075 per 1M input tokens, 90% cheaper than GPT-4o, with a generous free tier perfect for side projects.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Fastest: Groq</h2>
        <p className="mb-4">
          Groq runs open source models at 500 tokens/second, with a completely free tier for low-traffic apps.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Best Code Quality: DeepSeek</h2>
        <p className="mb-4">
          DeepSeek's code model is 70% cheaper than OpenAI, and matches GPT-4o on coding benchmarks, perfect for code-heavy apps.
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
