import Link from "next/link";

const featured = [
  {
    name: "Cursor",
    slug: "cursor",
    description: "AI-first code editor, built for the 10x developer.",
    gradient: "from-blue-50 to-indigo-50",
  },
  {
    name: "GitHub Copilot",
    slug: "github-copilot",
    description: "AI pair programmer that helps you write code faster.",
    gradient: "from-green-50 to-emerald-50",
  },
  {
    name: "Claude Code",
    slug: "claude-code",
    description: "Agentic coding assistant from Anthropic.",
    gradient: "from-orange-50 to-amber-50",
  },
  {
    name: "Aider",
    slug: "aider",
    description: "AI pair programming in your terminal.",
    gradient: "from-purple-50 to-violet-50",
  },
  {
    name: "Lovable",
    slug: "lovable",
    description: "Build full-stack apps with prompts.",
    gradient: "from-pink-50 to-rose-50",
  },
];

export default function FeaturedGems() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">
        Featured Gems
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto px-4">
        {featured.map((tool) => (
          <Link
            key={tool.slug}
            href={`/item/${tool.slug}`}
            className={`group rounded-xl border bg-gradient-to-br ${tool.gradient} p-6 transition-all hover:shadow-lg`}
          >
            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
              {tool.name}
            </h3>
            <p className="text-sm text-muted-foreground">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
