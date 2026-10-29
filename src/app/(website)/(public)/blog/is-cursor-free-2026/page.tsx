import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Is Cursor Free to Use in 2026? Pricing Explained",
  description: "Wondering if the Cursor AI code editor is free? We break down the free tier limits and paid pricing plans in 2026.",
  canonicalUrl: `${siteConfig.url}/blog/is-cursor-free-2026`,
});

export default function IsCursorFreePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Is Cursor Free to Use in 2026? Pricing Explained</h1>
      <p className="text-muted-foreground mb-8">Published: November 5, 2026 · 2 min read</p>

      <div className="prose dark:prose-invert">
        <p className="text-lg leading-relaxed mb-6">
          Yes, <Link href="/item/cursor" className="text-purple-600 hover:underline">Cursor</Link> has a completely free tier for individual developers. Here's exactly what you get for free, and what requires a paid plan.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What's Free in Cursor?</h2>
        <p className="mb-4">
          The free plan gives you 2000 fast AI requests per month, unlimited slow requests, and full access to all editor features. That's enough for hobbyists, students, and anyone trying out AI coding for the first time.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">When Do You Need to Pay?</h2>
        <p className="mb-4">
          The $20/month Pro plan unlocks unlimited fast requests, higher rate limits, and priority access to new models. Most professional developers upgrade after a month, but beginners can use the free plan indefinitely.
        </p>

        <p className="text-muted-foreground mt-10 text-sm">
          *This post contains affiliate links, we may earn a commission at no extra cost to you.
        </p>

        <div className="mt-12 p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/20 border text-center">
          <h3 className="text-xl font-bold mb-2">📬 Get weekly AI coding tools in your inbox</h3>
          <p className="text-muted-foreground mb-4 text-sm">We send 5 best new AI dev tools every week, no spam.</p>
          <a href="/" className="inline-block px-6 py-2 rounded-xl bg-purple-600 text-white text-sm font-medium hover:bg-purple-700">Browse All Tools</a>
        </div>
      </div>
    </div>
  );
}
