import Link from "next/link";
import { tools } from "@/lib/tools";

export default function FeaturedGems() {
  // 取我们标记为featured的8个头部工具
  const featured = tools.filter(t => t.featured).slice(0, 8);

  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Featured Gems</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {featured.map((tool) => (
          <Link
            key={tool.slug}
            href={`/item/${tool.slug}`}
            className="p-5 rounded-2xl border bg-card hover:shadow-xl transition-all hover:-translate-y-1 hover:border-purple-200 dark:hover:border-purple-800 flex flex-col items-center gap-3 text-center"
          >
            <img src={tool.logo} alt={tool.name} width={48} height={48} className="rounded-xl" />
            <h3 className="font-semibold text-sm">{tool.name}</h3>
            <p className="text-xs text-muted-foreground line-clamp-2">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
