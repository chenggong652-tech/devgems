import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "OpenAI vs Anthropic vs Google Gemini: Best LLM API in 2026?",
  description: "Compare the top 3 LLM API providers (OpenAI GPT, Anthropic Claude, Google Gemini) on price, speed, quality and use cases for developers.",
  canonicalUrl: `${siteConfig.url}/blog/openai-vs-anthropic-vs-gemini`,
});

export default function OpenAIVsClaudePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">OpenAI vs Anthropic vs Google Gemini: Which LLM API Is Best?</h1>
      <p className="text-muted-foreground mb-8">Published: November 1, 2026 · 6 min read</p>

      <div className="prose dark:prose-invert">
        <p className="text-lg leading-relaxed mb-6">
          If you're building an AI app, choosing the right LLM API is one of the biggest decisions you'll make. We tested GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro on coding, reasoning, and cost, here's what we found.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Quick Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Feature</th>
                <th className="border p-3 text-left">OpenAI GPT-4o</th>
                <th className="border p-3 text-left">Anthropic Claude 3.5</th>
                <th className="border p-3 text-left">Google Gemini 1.5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Input Price (1M tokens)</td>
                <td className="border p-3">$2.50</td>
                <td className="border p-3">$3.00</td>
                <td className="border p-3">$1.25</td>
              </tr>
              <tr>
                <td className="border p-3">Output Price (1M tokens)</td>
                <td className="border p-3">$10.00</td>
                <td className="border p-3">$15.00</td>
                <td className="border p-3">$5.00</td>
              </tr>
              <tr>
                <td className="border p-3">Context Window</td>
                <td className="border p-3">128k tokens</td>
                <td className="border p-3">200k tokens</td>
                <td className="border p-3">1M tokens</td>
              </tr>
              <tr>
                <td className="border p-3">Best At</td>
                <td className="border p-3">General purpose, fast</td>
                <td className="border p-3">Writing, code, long context</td>
                <td className="border p-3">Cheap, very long context</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">OpenAI GPT-4o: The Safe Default</h2>
        <p className="mb-4">
          GPT-4o is still the most widely used LLM API, and for good reason: it's fast, well-documented, and works for almost every use case. The ecosystem of SDKs, tutorials, and third-party tools around OpenAI is unmatched.
        </p>
        <p className="mb-4">
          <strong>Pros:</strong> Best tool calling, fastest ecosystem, great out-of-the-box results.
        </p>
        <p className="mb-4">
          <strong>Cons:</strong> Not the cheapest, and context window is smaller than competitors.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Anthropic Claude 3.5: Best for Code & Writing</h2>
        <p className="mb-4">
          Claude 3.5 Sonnet has the best coding and long-form writing performance of any LLM right now. If you're building a code assistant, writing long documents, or working with 100k+ token context, Claude is the best choice.
        </p>
        <p className="mb-4">
          <strong>Pros:</strong> Best code quality, long context, very reliable.
        </p>
        <p className="mb-4">
          <strong>Cons:</strong> Most expensive of the three.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Google Gemini 1.5: Best Cheap Long Context</h2>
        <p className="mb-4">
          Gemini 1.5 Pro offers a 1M token context window at half the price of OpenAI. If you need to process huge documents, entire codebases, or video/audio inputs, Gemini is the clear value choice.
        </p>
        <p className="mb-4">
          <strong>Pros:</strong> Cheapest, 1M token context, great for multimodal.
        </p>
        <p className="mb-4">
          <strong>Cons:</strong> Code quality is slightly behind GPT and Claude.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Who Should Pick Which?</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>If you want the safe, well-documented default: <strong>Choose OpenAI</strong></li>
          <li>If you build coding/writing apps and want the best quality: <strong>Choose Anthropic Claude</strong></li>
          <li>If you need long context on a budget: <strong>Choose Google Gemini</strong></li>
        </ul>

        <p className="text-muted-foreground mt-10 text-sm">
          *This post contains affiliate links, we may earn a commission at no extra cost to you.
        </p>

        <div className="mt-12 p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/20 border text-center">
          <h3 className="text-xl font-bold mb-2">📬 Get weekly AI coding tools in your inbox</h3>
          <p className="text-muted-foreground mb-4 text-sm">We send 5 best new AI dev tools every week, no spam.</p>
          <a href="#tools" className="inline-block px-6 py-2 rounded-xl bg-purple-600 text-white text-sm font-medium hover:bg-purple-700">Browse Tools</a>
        </div>
      </div>
    </div>
  );
}
