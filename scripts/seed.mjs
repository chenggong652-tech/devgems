// scripts/seed.mjs - 批量灌入第一批 AI 编程工具数据
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

const tools = [
  {
    name: "Cursor",
    slug: "cursor",
    link: "https://cursor.sh",
    description: "AI-first code editor built for programming with AI. Fork of VS Code.",
    featured: true,
  },
  {
    name: "GitHub Copilot",
    slug: "github-copilot",
    link: "https://github.com/features/copilot",
    description: "AI pair programmer that helps you write code faster and with less work.",
    featured: true,
  },
  {
    name: "Windsurf",
    slug: "windsurf",
    link: "https://windsurf.com",
    description: "The $10 AI editor from Codeium. Full-agentic coding in your editor.",
    featured: true,
  },
  {
    name: "Claude 3.5 Sonnet",
    slug: "claude-3-5-sonnet",
    link: "https://www.anthropic.com/claude",
    description: "Anthropic's flagship LLM, excellent at reasoning, coding and agentic tasks.",
    featured: false,
  },
  {
    name: "GPT-4o",
    slug: "gpt-4o",
    link: "https://openai.com/index/gpt-4o/",
    description: "OpenAI's most advanced multimodal model, great for coding and general tasks.",
    featured: false,
  },
  {
    name: "v0 by Vercel",
    slug: "v0-vercel",
    link: "https://v0.dev",
    description: "AI-powered front-end generation. Prompt, edit, and ship UI components in seconds.",
    featured: false,
  },
  {
    name: "Bolt.new",
    slug: "bolt-new",
    link: "https://bolt.new",
    description: "Prompt, run, deploy full-stack web apps directly in your browser with AI.",
    featured: false,
  },
  {
    name: "Replit Agent",
    slug: "replit-agent",
    link: "https://replit.com",
    description: "An AI programmer that builds full apps for you directly in the browser.",
    featured: false,
  },
  {
    name: "Cline",
    slug: "cline",
    link: "https://cline.bot",
    description: "Autonomous coding agent right in your editor. VS Code extension.",
    featured: false,
  },
  {
    name: "Augment Code",
    slug: "augment-code",
    link: "https://www.augmentcode.com",
    description: "AI coding assistant that understands your entire codebase. Enterprise-grade.",
    featured: false,
  },
];

const today = new Date().toISOString();

async function seed() {
  console.log("🚀 Starting seed...");

  for (const tool of tools) {
    // 先检查是否已存在
    const existing = await client.fetch(`*[_type == "item" && slug.current == $slug][0]`, {
      slug: tool.slug,
    });

    if (existing) {
      console.log(`⏭️  ${tool.name} already exists, skipping`);
      continue;
    }

    const doc = {
      _type: "item",
      name: tool.name,
      slug: { _type: "slug", current: tool.slug },
      link: tool.link,
      description: tool.description,
      featured: tool.featured,
      publishDate: today,
      pricePlan: "free",
      freePlanStatus: "approved",
      forceHidden: false,
      introduction: `# ${tool.name}\n\n${tool.description}\n\n[Visit official website](${tool.link})`,
    };

    const result = await client.create(doc);
    console.log(`✅ Created: ${tool.name} (${result._id})`);
  }

  console.log("🎉 Done!");
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
