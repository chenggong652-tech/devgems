import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Is GitHub Copilot Worth It in 2026? Honest Review",
  description: "We break down if GitHub Copilot is worth the $10/month price tag in 2026, who should buy it, and who can skip it.",
  canonicalUrl: `${siteConfig.url}/blog/is-github-copilot-worth-it-2026`,
});

export default function CopilotWorthItPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Is GitHub Copilot Worth It in 2026? Honest Review</h1>
      <p className="text-muted-foreground mb-8">Published: November 5, 2026 · 2 min read</p>

      <div className="prose dark:prose-invert">
        <p className="text-lg leading-relaxed mb-6">
          After using <Link href="/item/github-copilot" className="text-purple-600 hover:underline">GitHub Copilot</Link> for 6 months, here's our honest take on if it's worth $10/month in 2026.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Who Should Buy It?</h2>
        <p className="mb-4">
          If you write code every day for work, Copilot will save you hours every week by auto-completing boilerplate code, writing tests, and explaining errors. It easily pays for itself.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Who Can Skip It?</h2>
        <p className="mb-4">
          If you're a hobbyist or student, the free tier or free alternatives like Continue.dev are more than enough, and you don't need to pay.
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
