import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/metadata";
import { tools } from "@/lib/tools";
import { GlobeIcon, ArrowLeft, Tag, Building2, Calendar, Check, Users, DollarSign, Zap } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import StarRating from "@/components/item/star-rating";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const item = tools.find(t => t.slug === params.slug);
  if (!item) return;

  return constructMetadata({
    title: `${item.name} - AI Developer Tool Review & Details`,
    description: item.description,
    canonicalUrl: `${siteConfig.url}/item/${params.slug}`,
  });
}

interface ItemPageProps {
  params: { slug: string };
}

export default async function ItemPage({ params }: ItemPageProps) {
  const item = tools.find(t => t.slug === params.slug);

  if (!item) {
    return notFound();
  }

  // 找同分类的其他工具作为推荐
  const related = tools
    .filter(t => t.category === item.category && t.slug !== item.slug)
    .slice(0, 4);

  // 根据分类生成通用功能介绍
  const categoryFeatures: Record<string, string[]> = {
    "AI Code Editors": [
      "AI-powered code completion and inline suggestions",
      "Built-in chat and refactoring assistance",
      "Works with your existing workflow and extensions",
      "Supports all major programming languages"
    ],
    "AI Pair Programmers": [
      "Conversational AI pair programming assistant",
      "Can debug, explain code and suggest improvements",
      "Integrates directly with your terminal or IDE",
      "Supports long context windows for large codebases"
    ],
    "LLM APIs": [
      "Pay-as-you-go pricing with no upfront costs",
      "REST API endpoints for easy integration",
      "High throughput and low latency",
      "Comprehensive documentation and SDKs"
    ],
    "AI App Builders": [
      "Build full-stack apps from natural language prompts",
      "Instant preview and one-click deploy",
      "No boilerplate, start shipping immediately",
      "Fully customizable and exportable code"
    ]
  };

  const features = categoryFeatures[item.category] || [
    "Boosts developer productivity by 30%+",
    "Easy to get started, no complex setup",
    "Trusted by thousands of developers worldwide",
    "Regular updates with new AI capabilities"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left main content */}
        <div className="lg:col-span-2">
          {/* Header with gradient background */}
          <div className="rounded-2xl p-8 mb-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-border">
            <div className="flex items-center gap-6">
              <Image
                src={item.logo}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-2xl shadow-lg"
              />
              <div>
                <h1 className="text-4xl font-bold mb-2">{item.name}</h1>
                <p className="text-muted-foreground text-lg">{item.description}</p>
              </div>
            </div>
          </div>

          {/* Visit Button */}
          <div className="flex flex-col gap-1 mb-12">
            <Button size="lg" asChild className="w-fit text-lg px-8 py-6 rounded-xl">
              <Link
                href={item.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-2"
              >
                <GlobeIcon className="w-5 h-5" />
                Visit Official Website
              </Link>
            </Button>
            <p className="text-[10px] text-gray-400 mt-1">
              *This is an affiliate link, we may earn a commission at no extra cost to you.
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-purple-500" />
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who is it for */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-500" />
              Who Is It For?
            </h2>
            <div className="p-6 rounded-lg border bg-card">
              {item.category === "AI Code Editors" && (
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {item.name} is perfect for developers who want a full, integrated code editor with AI capabilities built right in. If you're tired of switching between VS Code and separate AI chat windows, this tool will fit right into your daily workflow — whether you're building a side project or working on a production codebase.
                </p>
              )}
              {item.category === "AI Pair Programmers" && (
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {item.name} is perfect for developers who already love their current editor (VS Code, JetBrains, Neovim) and just want AI autocomplete and chat built in. It's great for solo devs who want to speed up repetitive coding tasks, and teams that need consistent AI assistance across the whole organization.
                </p>
              )}
              {item.category === "LLM APIs" && (
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {item.name} is built for developers who are building AI-powered applications. If you need a reliable, scalable API to call LLMs directly from your code, this service gives you pay-as-you-go pricing, low latency, and all the SDKs you need to integrate AI into your product.
                </p>
              )}
              {item.category === "AI App Builders" && (
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {item.name} is for indie hackers, founders, and non-technical builders who want to launch a full web app without writing code. If you have an idea but don't want to spend months learning React or setting up a backend, this tool lets you turn a prompt into a working app in minutes.
                </p>
              )}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-green-500" />
              Pricing
            </h2>
            <div className="p-6 rounded-lg border bg-card">
              {item.pricingModel === "open-source" ? (
                <>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-3">
                    {item.name} is 100% free and open source. You can use it completely free, self-host it on your own server, or use the hosted free tier with no credit card required.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Free forever, no hidden fees.
                  </p>
                </>
              ) : item.pricingModel === "paid" ? (
                <>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-3">
                    {item.name} is a paid tool with no permanent free tier. Paid plans start at around $10-$20 per month for individual developers, with enterprise plans available for teams.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Free trials available on the official website.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-3">
                    {item.name} offers a generous free tier to get started, with paid plans starting at just $10-$20 per month for individual developers. Team and enterprise plans are available for organizations that need advanced features and shared workspaces.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    No credit card required to try the free tier, cancel anytime.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* 星级评分 */}
          <div className="mb-12">
            <StarRating toolSlug={item.slug} />
          </div>

          {/* 邮箱订阅框 */}
          <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border text-center">
            <h3 className="text-2xl font-bold mb-3">📬 Get Weekly AI Coding Tools</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Every week, we send you the 5 best new AI development tools. No spam, unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl border bg-card focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
              <button className="px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 whitespace-nowrap">
                Subscribe Free
              </button>
            </div>
          </div>

          {/* Related Tools */}
          {related.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Similar Tools You Might Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {related.map(rel => (
                  <Link
                    key={rel.slug}
                    href={`/item/${rel.slug}`}
                    className="p-4 rounded-lg border hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img src={rel.logo} alt={rel.name} width={32} height={32} className="rounded-md" />
                      <div>
                        <h3 className="font-medium">{rel.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">{rel.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12">
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to all tools
            </Link>
          </div>
        </div>

        {/* Right Sidebar Info */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl border bg-card sticky top-24">
            <h3 className="font-semibold text-lg mb-4">Tool Information</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="w-4 h-4" /> Official Website
                </span>
                <Link href={item.url} target="_blank" className="text-purple-500 hover:underline font-medium">
                  {new URL(item.url).hostname}
                </Link>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Tag className="w-4 h-4" /> Category
                </span>
                <span className="font-medium">{item.category}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" /> Listed On
                </span>
                <span className="font-medium">Today</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
