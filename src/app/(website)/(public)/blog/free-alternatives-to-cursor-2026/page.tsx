import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "5 Free Alternatives to Cursor in 2026 (No $20/Month)",
  description: "Don't want to pay $20/month for Cursor? These 5 free AI code editors work just as well for most developers.",
  canonicalUrl: `${siteConfig.url}/blog/free-alternatives-to-cursor-2026`,
});

export default function CursorAlternativesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">5 Free Alternatives to Cursor in 2026 (No $20/Month)</h1>
      <p className="text-muted-foreground mb-8">Published: November 5, 2026 · 3 min read</p>

      <div className="prose dark:prose-invert">
        <p className="text-lg leading-relaxed mb-6">
          Love the AI coding features in Cursor but don't want to pay $20/month? These 5 free alternatives give you the same AI coding experience without the price tag.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. VS Code + GitHub Copilot Free</h2>
        <p className="mb-4">
          <Link href="/item/github-copilot" className="text-purple-600 hover:underline">GitHub Copilot Free</Link> gives you 2000 completions/month completely free, with all the core AI coding features.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">2. PearAI</h2>
        <p className="mb-4">
          <Link href="/item/pearai" className="text-purple-600 hover:underline">PearAI</Link> is an open-source Cursor clone, completely free, with all the same AI features.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Continue.dev</h2>
        <p className="mb-4">
          <Link href="/item/continue" className="text-purple-600 hover:underline">Continue.dev</Link> runs right inside VS Code, completely open source, free to use.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Zed Editor</h2>
        <p className="mb-4">
          <Link href="/item/zed" className="text-purple-600 hover:underline">Zed</Link> is a fast open-source code editor with native AI features, 100% free.
        </p>

        <p className="text-muted-foreground mt-10 text-sm">
          *This post contains affiliate links, we may earn a commission at no extra cost to you.
        </p>

        <div className="mt-12 p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/20 border text-center">
          <h3 className="text-xl font-bold mb-2">📬 Get weekly AI coding tools in your inbox</h3>
          <p className="text-muted-foreground mb-4 text-sm">We send 5 best new AI dev tools every week, no spam.</p>
          <a href="/" className="inline-block px-6 py-2 rounded-xl bg-purple-600 text-white text-sm font-medium hover:bg-purple-700">Browse All Free Tools</a>
        </div>
      </div>
    </div>
  );
}
