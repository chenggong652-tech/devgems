import ItemGrid from "@/components/item/item-grid";
import EmptyGrid from "@/components/shared/empty-grid";
import CustomPagination from "@/components/shared/pagination";
import { siteConfig } from "@/config/site";
import { getItems } from "@/data/item";
import {
  DEFAULT_SORT,
  ITEMS_PER_PAGE,
} from "@/lib/constants";
import { constructMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// 分类slug和名称对应表
const categoryMap: Record<string, { name: string; description: string; count: number }> = {
  "ai-code-editors": {
    name: "AI Code Editors",
    description: "AI-powered code editors like VS Code, Cursor, Zed and more",
    count: 50,
  },
  "ai-pair-programmers": {
    name: "AI Pair Programmers",
    description: "AI coding assistants like Copilot, Claude Code, Aider and more",
    count: 50,
  },
  "llm-apis": {
    name: "LLM APIs",
    description: "LLM APIs from OpenAI, Anthropic, Google, Together AI and more",
    count: 50,
  },
  "ai-app-builders": {
    name: "AI App Builders",
    description: "No-code AI app builders like Bolt.new, v0, Lovable and more",
    count: 50,
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const cat = categoryMap[params.slug];
  if (!cat) return;

  return constructMetadata({
    title: `${cat.name} - AI Developer Tools`,
    description: cat.description,
    canonicalUrl: `${siteConfig.url}/category/${params.slug}`,
  });
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const cat = categoryMap[params.slug];
  if (!cat) notFound();

  const { page } = searchParams as { [key: string]: string };
  const currentPage = page ? Number(page) : 1;
  const { items, totalCount } = await getItems({
    category: params.slug,
    currentPage,
    hasSponsorItem: false,
  });
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* 分类标题 */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">{cat.name}</h1>
        <p className="text-lg text-muted-foreground">{cat.description}</p>
        <p className="text-sm text-purple-600 mt-4">{totalCount} tools in this category</p>
      </div>

      {items?.length === 0 && <EmptyGrid />}

      {items && items.length > 0 && (
        <section>
          <ItemGrid
            items={items}
            sponsorItems={[]}
            showSponsor={false}
          />

          <div className="mt-8 flex items-center justify-center">
            <CustomPagination
              routePrefix={`/category/${params.slug}`}
              totalPages={totalPages}
            />
          </div>
        </section>
      )}
    </div>
  );
}
