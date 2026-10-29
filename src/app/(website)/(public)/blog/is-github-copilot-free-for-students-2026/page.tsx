import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Is GitHub Copilot Free for Students in 2026?",
  description: "Yes, GitHub Copilot is completely free for verified students and teachers. We show you how to sign up for free in 2026.",
  canonicalUrl: `${siteConfig.url}/blog/is-github-copilot-free-for-students-2026`,
});

export default function CopilotStudentsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Is GitHub Copilot Free for Students in 2026?</h1>
      <p className="text-muted-foreground mb-8">Published: November 5, 2026 · 2 min read</p>

      <div className="prose dark:prose-invert">
        <p className="text-lg leading-relaxed mb-6">
          Yes, GitHub Copilot is 100% free for verified students, teachers, and maintainers of popular open-source projects. You don't need to pay $10/month.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">How to Get It Free?</h2>
        <p className="mb-4">
          Just sign up for the <a href="https://education.github.com/" className="text-purple-600 hover:underline" rel="sponsored noopener noreferrer">GitHub Student Developer Pack</a> with your school email, and you'll get free access to GitHub Copilot, plus dozens of other free developer tools.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What Other Free Tools Are Included?</h2>
        <p className="mb-4">
          The Student Pack gives you free access to dozens of paid tools like DigitalOcean credits, Figma Pro, and more. We've collected all the best student deals on our <Link href="/deals" className="text-purple-600 hover:underline">Student Deals page</Link>.
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
