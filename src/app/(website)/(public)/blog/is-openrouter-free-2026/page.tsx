import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Is OpenRouter Free to Use in 2026? Pricing Explained",
  description: "We break down OpenRouter's free tier limits and pay-as-you-go pricing for developers in 2026.",
  canonicalUrl: `${siteConfig.url}/blog/is-openrouter-free-2026`,
});

export default function OpenRouterFreePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Is OpenRouter Free to Use in 2026? Pricing Explained</h1>
      <p className="text-muted-foreground mb-8">Published: November 5, 2026 · 2 min read</p>

      <div className="prose dark:prose-invert">
        <p className="text-lg leading-relaxed mb-6">
          <Link href="/item/openrouter" className="text-purple-600 hover:underline">OpenRouter</Link> lets you access 100+ LLMs with one API key, and it has a generous free tier for developers.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What's Free?</h2>
        <p className="mb-4">
          You get $1 of free credit when you sign up, enough to test all the available models. There are also several completely free open-source models you can run at no cost.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">When Do You Pay?</h2>
        <p className="mb-4">
          After your free credit runs out, you pay exactly what the model costs, no markup, no monthly fee. It's the cheapest way to test 100+ LLMs without signing up for each provider separately.
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
