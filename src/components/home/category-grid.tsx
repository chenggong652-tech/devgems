import Link from "next/link";

const categories = [
  {
    name: "AI Code Editors",
    slug: "ai-code-editors",
    count: 17,
    icon: "⌨️",
    description: "AI-first code editors",
  },
  {
    name: "AI Pair Programmers",
    slug: "ai-pair-programmers",
    count: 33,
    icon: "🤖",
    description: "AI assistants in your editor",
  },
  {
    name: "LLM APIs",
    slug: "llm-apis",
    count: 30,
    icon: "⚡",
    description: "Best coding LLMs",
  },
  {
    name: "AI App Builders",
    slug: "ai-app-builders",
    count: 26,
    icon: "🚀",
    description: "Build apps with prompts",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">
        Browse by Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="group rounded-xl border bg-card p-6 text-center transition-all hover:shadow-lg hover:border-primary/50"
          >
            <div className="text-4xl mb-3">{cat.icon}</div>
            <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
              {cat.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">{cat.description}</p>
            <p className="text-sm font-medium text-primary">{cat.count} Tools</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
