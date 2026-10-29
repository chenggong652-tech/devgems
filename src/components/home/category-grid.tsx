import Link from "next/link";

const categories = [
  {
    name: "AI Code Editors",
    slug: "ai-code-editors",
    description: "VS Code, Cursor, Zed and more AI-powered code editors",
    gradient: "from-blue-500 to-cyan-500",
    count: 50,
  },
  {
    name: "AI Pair Programmers",
    slug: "ai-pair-programmers",
    description: "Copilot, Claude Code, Aider and more pair coding tools",
    gradient: "from-purple-500 to-pink-500",
    count: 50,
  },
  {
    name: "LLM APIs",
    slug: "llm-apis",
    description: "OpenAI, Anthropic, Gemini and more LLM APIs",
    gradient: "from-green-500 to-emerald-500",
    count: 50,
  },
  {
    name: "AI App Builders",
    slug: "ai-app-builders",
    description: "Bolt.new, v0, Lovable and more no-code AI builders",
    gradient: "from-orange-500 to-amber-500",
    count: 50,
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Browse by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="p-6 rounded-2xl border bg-card hover:shadow-xl transition-all hover:-translate-y-1 hover:border-purple-200 dark:hover:border-purple-800"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cat.gradient} mb-4 flex items-center justify-center text-white font-bold text-lg`}>
              {cat.name.charAt(0)}
            </div>
            <h3 className="font-semibold text-lg mb-2">{cat.name}</h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{cat.description}</p>
            <p className="text-xs text-purple-600 font-medium">{cat.count} tools →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
