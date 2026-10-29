import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "7 Open Source AI Coding Tools You Can Self-Host in 2026",
  description: "The best open source AI coding tools you can run on your own server, no vendor lock-in, completely free to use.",
  canonicalUrl: `${siteConfig.url}/blog/open-source-ai-coding-tools-self-host-2026`,
});

export default function OpenSourceToolsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">7 Open Source AI Coding Tools You Can Self-Host in 2026</h1>
      <p className="text-muted-foreground mb-8">Published: November 5, 2026 · 4 min read</p>

      <div className="prose dark:prose-invert">
        <p className="text-lg leading-relaxed mb-6">
          Don't want to send your code to closed AI providers? These 7 open source AI coding tools are completely free, and you can self-host them on your own server.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. Continue.dev</h2>
        <p className="mb-4">
          <Link href="/item/continue" className="text-purple-600 hover:underline">Continue.dev</Link> is the most popular open source AI coding assistant for VS Code, fully customizable and self-hostable.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">2. Cline</h2>
        <p className="mb-4">
          <Link href="/item/cline" className="text-purple-600 hover:underline">Cline</Link> is an autonomous open source coding agent that runs in your editor, with no telemetry sent to third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Aider</h2>
        <p className="mb-4">
          <Link href="/item/aider" className="text-purple-600 hover:underline">Aider</Link> is a terminal-based AI coding assistant that works with any LLM you want to connect, completely open source.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Open WebUI</h2>
        <p className="mb-4">
          <Link href="/item/openwebui" className="text-purple-600 hover:underline">Open WebUI</Link> lets you run a ChatGPT-style interface on your own server, connected to local or cloud LLMs.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">5. n8n</h2>
        <p className="mb-4">
          <Link href="/item/n8n" className="text-purple-600 hover:underline">n8n</Link> is open source workflow automation with built-in AI agent nodes, you can self-host it for free.
        </p>

        <p className="text-muted-foreground mt-10 text-sm">
          *This post contains affiliate links, we may earn a commission at no extra cost to you.
        </p>

        <div className="mt-12 p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/20 border text-center">
          <h3 className="text-xl font-bold mb-2">📬 Get weekly AI coding tools in your inbox</h3>
          <p className="text-muted-foreground mb-4 text-sm">We send 5 best new AI dev tools every week, no spam.</p>
          <a href="/category/open-source" className="inline-block px-6 py-2 rounded-xl bg-purple-600 text-white text-sm font-medium hover:bg-purple-700">Browse All Open Source Tools</a>
        </div>
      </div>
    </div>
  );
}
