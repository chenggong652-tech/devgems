import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Is Replit Free to Use in 2026? Pricing Explained",
  description: "Wondering if Replit is free? We break down Replit's free tier limits and paid pricing plans for developers in 2026.",
  canonicalUrl: `${siteConfig.url}/blog/is-replit-free-2026`,
});

export default function IsReplitFreePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Is Replit Free to Use in 2026? Pricing Explained</h1>
      <p className="text-muted-foreground mb-8">Published: November 5, 2026 · 2 min read</p>

      <div className="prose dark:prose-invert">
        <p className="text-lg leading-relaxed mb-6">
          Yes, <Link href="/item/replit" className="text-purple-600 hover:underline" rel="sponsored noopener noreferrer">Replit</Link> has a generous free tier that lets you build and host apps right in your browser, no credit card required.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What's Free?</h2>
        <p className="mb-4">
          The free plan gives you 500 MB of storage, 0.5 vCPU and 512 MB RAM for your apps, plus built-in AI coding assistance. It's perfect for students and hobbyists building small side projects.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">When Do You Need to Pay?</h2>
        <p className="mb-4">
          The $7/month Core plan unlocks more RAM/CPU, always-on private apps, and more AI requests. Most hobbyists can stay on the free plan forever.
        </p>

        <p className="text-muted-foreground mt-10 text-sm">
          *This post contains affiliate links, we may earn a commission at no extra cost to you.
        </p>

        <div className="mt-12 p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/20 border text-center">
          <h3 className="text-xl font-bold mb-2">📬 Get weekly AI coding tools in your inbox</h3>
          <p className="text-muted-foreground mb-4 text-sm">We send 5 best new AI dev tools every week, no spam.</p>
          <a href="/item/replit" className="inline-block px-6 py-2 rounded-xl bg-purple-600 text-white text-sm font-medium hover:bg-purple-700" rel="sponsored noopener noreferrer">Try Replit Free</a>
        </div>
      </div>
    </div>
  );
}
