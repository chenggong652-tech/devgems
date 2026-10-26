// scripts/seed-categories.mjs - 创建分类并给工具打标签
import { createClient } from "@sanity/client";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// 4 个分类
const categories = [
  {
    name: "AI Code Editors",
    slug: "ai-code-editors",
    description: "AI-first code editors and IDEs built for programming with AI.",
    priority: 10,
    tools: ["cursor", "windsurf"],
  },
  {
    name: "AI Pair Programmers",
    slug: "ai-pair-programmers",
    description: "AI coding assistants that sit inside your editor and help you write code.",
    priority: 9,
    tools: ["github-copilot", "cline", "augment-code"],
  },
  {
    name: "LLM APIs",
    slug: "llm-apis",
    description: "Top LLM APIs and models for coding, reasoning, and agentic tasks.",
    priority: 8,
    tools: ["claude-3-5-sonnet", "gpt-4o"],
  },
  {
    name: "AI App Builders",
    slug: "ai-app-builders",
    description: "AI-powered tools that generate full apps, UIs, and websites from prompts.",
    priority: 7,
    tools: ["v0-vercel", "bolt-new", "replit-agent"],
  },
];

async function main() {
  console.log("🚀 Creating categories...");

  const categoryRefs = {};

  for (const cat of categories) {
    // 检查是否已存在
    const existing = await client.fetch(
      `*[_type == "category" && slug.current == $slug][0]`,
      { slug: cat.slug }
    );

    if (existing) {
      console.log(`⏭️  Category exists: ${cat.name}`);
      categoryRefs[cat.slug] = existing._id;
      continue;
    }

    const doc = {
      _type: "category",
      name: cat.name,
      slug: { _type: "slug", current: cat.slug },
      description: cat.description,
      priority: cat.priority,
    };

    const result = await client.create(doc);
    console.log(`✅ Created category: ${cat.name} (${result._id})`);
    categoryRefs[cat.slug] = result._id;
  }

  // 给每个工具关联分类
  console.log("\n🏷️  Assigning categories to tools...");
  for (const cat of categories) {
    const catId = categoryRefs[cat.slug];
    for (const toolSlug of cat.tools) {
      const item = await client.fetch(
        `*[_type == "item" && slug.current == $slug][0]`,
        { slug: toolSlug }
      );
      if (!item) {
        console.log(`⚠️  Tool not found: ${toolSlug}`);
        continue;
      }

      // 检查是否已经关联过
      const existingCats = (item.categories || []).map((c) => c._ref);
      if (existingCats.includes(catId)) {
        console.log(`⏭️  ${item.name} already in ${cat.name}`);
        continue;
      }

      await client
        .patch(item._id)
        .setIfMissing({ categories: [] })
        .append("categories", [{ _type: "reference", _ref: catId }])
        .commit();

      console.log(`✅ ${item.name} -> ${cat.name}`);
    }
  }

  console.log("\n🎉 Done!");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
