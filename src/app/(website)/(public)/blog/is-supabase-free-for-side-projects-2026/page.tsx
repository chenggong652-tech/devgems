import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Is Supabase Free for Side Projects in 2026?",
  description: "Yes, Supabase has a generous free tier for side projects. We break down the limits and when you need to upgrade.",
  canonicalUrl: `${siteConfig.url}/blog/is-supabase-free-for-side-projects-2026`,
});

export default function SupabaseFreePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Is Supabase Free for Side Projects in 2026?</h1>
      <p className="text-muted-foreground mb-8">Published: November 5, 2026 · 2 min read</p>

      <div className="prose dark:prose-invert">
        <p className="text-lg leading-relaxed mb-6">
          Yes, <Link href="/item/supabase" className="text-purple-600 hover:underline">Supabase</Link> has a free tier that's more than enough for most side projects and MVPs, and it's open source.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What's Free?</h2>
        <p className="mb-4">
          The free plan gives you 500MB database storage, 50,000 monthly active users, and all the core features: auth, realtime, and storage. It's perfect for launching your MVP without paying for backend hosting.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">When Do You Need to Pay?</h2>
        <p className="mb-4">
          You upgrade to the $25/month Pro plan when you need more database space, automated backups, or higher traffic limits. Most hobby projects run on the free plan indefinitely.
        </p>

        <p className="text-muted-foreground mt-10 text-sm">
          *This post contains affiliate links, we may earn a commission at no extra cost to you.
        </p>

        <div className="mt-12 p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/20 border text-center">
          <h3 className="text-xl font-bold mb-2">📬 Get weekly AI coding tools in your inbox</h3>
          <p className="text-muted-foreground mb-4 text-sm">We send 5 best new AI dev tools every week, no spam.</p>
          <a href="/category/ai-app-builders" className="inline-block px-6 py-2 rounded-xl bg-purple-600 text-white text-sm font-medium hover:bg-purple-700">Browse All App Builders</a>
        </div>
      </div>
    </div>
  );
}
