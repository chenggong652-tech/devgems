import { ITEMS_PER_PAGE } from "@/lib/constants";
import { tools } from "@/lib/tools";

/**
 * get item by id - 直接从本地数组找
 */
export async function getItemById(id: string) {
  return tools.find(t => t.slug === id) || null;
}

/**
 * get item info by id - 直接从本地数组找
 */
export async function getItemInfoById(id: string) {
  return tools.find(t => t.slug === id) || null;
}

/**
 * get items - 直接从本地200个工具数组返回，支持分页、分类筛选、搜索
 */
export async function getItems({
  category,
  tag,
  sortKey,
  reverse,
  query,
  filter,
  currentPage,
  hasSponsorItem,
}: {
  collection?: string;
  category?: string;
  tag?: string;
  sortKey?: string;
  reverse?: boolean;
  query?: string;
  filter?: string;
  currentPage: number;
  hasSponsorItem?: boolean;
}) {
  const itemsPerPage = hasSponsorItem ? ITEMS_PER_PAGE - 1 : ITEMS_PER_PAGE;

  // 筛选：搜索关键词
  let filtered = [...tools];
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(t => 
      t.name.toLowerCase().includes(q) || 
      t.description.toLowerCase().includes(q)
    );
  }

  // 筛选：分类
  if (category) {
    const categoryMap: Record<string, string> = {
      "ai-code-editors": "AI Code Editors",
      "ai-pair-programmers": "AI Pair Programmers",
      "llm-apis": "LLM APIs",
      "ai-app-builders": "AI App Builders",
    };
    const catName = categoryMap[category];
    if (catName) filtered = filtered.filter(t => t.category === catName);
  }

  // 筛选：定价类型
  if (filter) {
    filtered = filtered.filter(t => (t.pricingModel || "freemium") === filter);
  }

  // 排序：featured优先
  filtered.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const totalCount = filtered.length;
  const offsetStart = (currentPage - 1) * itemsPerPage;
  const items = filtered.slice(offsetStart, offsetStart + itemsPerPage);

  // 转换成前端需要的格式
  const formattedItems = items.map(t => {
    const categorySlugMap: Record<string, string> = {
      "AI Code Editors": "ai-code-editors",
      "AI Pair Programmers": "ai-pair-programmers",
      "LLM APIs": "llm-apis",
      "AI App Builders": "ai-app-builders",
    };
    return {
      _id: t.slug,
      name: t.name,
      slug: { current: t.slug },
      link: t.url,
      description: t.description,
      icon: { asset: { url: t.logo }, alt: t.name, blurDataURL: "" },
      categories: [{ 
        _id: t.category,
        name: t.category,
        slug: { current: categorySlugMap[t.category] }
      }],
      featured: t.featured || false,
      publishDate: new Date().toISOString(),
      pricePlan: "free",
      pricingModel: t.pricingModel || "freemium",
      sponsorPlanStatus: "none",
      sponsorStartDate: null,
      sponsorEndDate: null,
      tags: [],
    };
  });

  return { items: formattedItems, totalCount };
}
