import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Is GitHub Codespaces Free for Students in 2026?",
  description: "Yes, GitHub Codespaces is completely free for verified students through the GitHub Student Developer Pack. We show you how to get it.",
  canonicalUrl: `${siteConfig.url}/blog/is-github-codespaces-free-for-students-2026`,
});

export default function CodespacesStudentsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Is GitHub Codespaces Free for Students in 2026?</h1>
      <p className="text-muted-foreground mb-8">Published: November 5, 2026 · 2 min read</p>

      <div className="prose dark:prose-invert">
        <p className="text-lg leading-relaxed mb-6">
          Yes, GitHub Codespaces is completely free for verified students through the GitHub Student Developer Pack, just like GitHub Copilot.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What You Get Free</h2>
        <p className="mb-4">
          You get 180 hours per month of free Codespaces usage, enough for full-time student development work, plus all the other student benefits like free cloud credits and tools.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">More Free Tools for Students</h2>
        <p className="mb-4">
          We've collected all the best free student deals for AI coding tools on our <Link href="/deals" className="text-purple-600 hover:underline">Student Deals page</Link>, all completely free to verify and use.
        </p>

        <p className="text-muted-foreground mt-10 text-sm">
          *This post contains affiliate links, we may earn a commission at no extra cost to you.
        </p>

        <div className="mt-12 p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/20 border text-center">
          <h3 className="text-xl font-bold mb-2">📬 Get weekly AI coding tools in your inbox</h3>
          <p className="text-muted-foreground mb-4 text-sm">We send 5 best new AI dev tools every week, no spam.</p>
          <a href="/deals" className="inline-block px-6 py-2 rounded-xl bg-purple-600 text-white text-sm font-medium hover:bg-purple-700">See All Student Deals</a>
        </div>
      </div>
    </div>
  );
}
