import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Is Vercel Free for Side Projects in 2026?",
  description: "Yes, Vercel has a generous free tier for hobbyists and side projects. We break down the limits in 2026.",
  canonicalUrl: `${siteConfig.url}/blog/is-vercel-free-for-side-projects-2026`,
});

export default function VercelFreePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Is Vercel Free for Side Projects in 2026?</h1>
      <p className="text-muted-foreground mb-8">Published: November 5, 2026 · 2 min read</p>

      <div className="prose dark:prose-invert">
        <p className="text-lg leading-relaxed mb-6">
          Yes, <Link href="/item/vercel" className="text-purple-600 hover:underline">Vercel</Link> has a completely free hobby tier that's more than enough for most side projects and MVPs.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What's Free?</h2>
        <p className="mb-4">
          The free plan gives you 100GB bandwidth per month, automatic HTTPS, and unlimited static sites. You can deploy Next.js apps completely free, just like our site is hosted on Vercel right now.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">When Do You Need to Pay?</h2>
        <p className="mb-4">
          You only need to upgrade to the $20/month Pro plan when you have real production traffic or need team features. Most hobbyists can run their entire side project on the free plan forever.
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
