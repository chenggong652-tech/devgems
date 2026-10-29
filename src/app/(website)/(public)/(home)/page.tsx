import ItemGrid from "@/components/item/item-grid";
import EmptyGrid from "@/components/shared/empty-grid";
import CustomPagination from "@/components/shared/pagination";
import CategoryGrid from "@/components/home/category-grid";
import FeaturedGems from "@/components/home/featured-gems";
import SearchBox from "@/components/home/search-box";
import { siteConfig } from "@/config/site";
import { getItems } from "@/data/item";
import Link from "next/link";
import {
  DEFAULT_SORT,
  ITEMS_PER_PAGE,
  SORT_FILTER_LIST,
} from "@/lib/constants";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "",
  canonicalUrl: `${siteConfig.url}/`,
});

export default async function HomePage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  console.log("HomePage, searchParams", searchParams);

  const sponsorItems: any[] = [];
  const showSponsor = false;
  const hasSponsorItem = false;

  const {
    category,
    tag,
    sort,
    page,
    q: query,
    f: filter,
  } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    SORT_FILTER_LIST.find((item) => item.slug === sort) || DEFAULT_SORT;
  const currentPage = page ? Number(page) : 1;
  const { items, totalCount } = await getItems({
    category,
    tag,
    sortKey,
    reverse,
    query,
    filter,
    currentPage,
    hasSponsorItem,
  });
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  console.log("HomePage, totalCount", totalCount, ", totalPages", totalPages);

  return (
    <div>
      {/* Hero大标题区域 居中 渐变+CTA按钮 */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4">
        <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-600 text-sm font-medium mb-6">
          ✨ 200+ Curated AI Coding Tools for Developers
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Find the Perfect <br />
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI Tool for Your Next Project
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Discover and compare the best AI-powered development tools to write better code, ship faster, and boost your productivity.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#tools" className="px-8 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors">
            Browse All Tools
          </a>
          <a href="/category/ai-code-editors" className="px-8 py-3 rounded-full border border-border font-medium hover:bg-accent transition-colors">
            Browse Categories
          </a>
        </div>
      </section>

      {/* 学生优惠横幅 */}
      <div className="max-w-4xl mx-auto px-4 -mt-4 mb-8">
        <Link href="/deals" className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-sm hover:shadow-md transition-all">
          <span>🎓 Students: Get free Cursor, Copilot & more credits</span>
          <span>→</span>
        </Link>
      </div>

      {/* 搜索框 - 打开页面就能看到 */}
      <SearchBox />

      {/* 分类展示卡片 */}
      <CategoryGrid />

      {/* 特色工具 */}
      <FeaturedGems />

      {/* when no items are found */}
      {items?.length === 0 && <EmptyGrid />}

      {/* when items are found */}
      {items && items.length > 0 && (
        <section id="tools" className="max-w-7xl mx-auto px-4">
          <ItemGrid
            items={items as any}
            sponsorItems={sponsorItems as any}
            showSponsor={showSponsor}
          />

          <div className="mt-8 flex items-center justify-center">
            <CustomPagination routePrefix="/" totalPages={totalPages} />
          </div>
        </section>
      )}
    </div>
  );
}
