// scripts/update-intros.mjs - 批量更新每个工具的详细介绍
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

const intros = {
  "cursor": `# Cursor — AI-First Code Editor

Cursor is an AI-first code editor built on top of VS Code, designed from the ground up for programming with AI. It forked VS Code and deeply integrated AI capabilities directly into the editing experience.

## Why Developers Love Cursor

- **Tab completion**: AI predicts your next lines and completes them instantly
- **Cmd+K**: Select any code, ask Cursor to refactor, explain, or fix it
- **Chat**: Ask questions about your entire codebase without leaving the editor
- **Composer**: Edit multiple files at once with AI assistance

## Best For

- Developers who want AI deeply integrated into their workflow
- Teams migrating from VS Code who don't want to lose their extensions
- Anyone who wants to write code 10x faster

## Pricing

- Free tier available
- Pro: $20/month for unlimited advanced requests

[Visit Cursor](https://cursor.sh)`,

  "github-copilot": `# GitHub Copilot — AI Pair Programmer

GitHub Copilot is the original AI pair programmer, developed by GitHub in partnership with OpenAI. It integrates directly into your IDE and suggests code completions in real-time as you type.

## Key Features

- **Inline suggestions**: Get whole-line or function suggestions as you type
- **Copilot Chat**: Ask questions, debug, and refactor right in your editor
- **Multi-editor support**: Works in VS Code, JetBrains, Neovim, Visual Studio
- **Public code filtering**: Chooses suggestions that match public code patterns

## Best For

- Teams already using GitHub for version control
- Developers who want battle-tested AI assistance
- Enterprise environments needing compliance and security

## Pricing

- Free for individuals (limited)
- Pro: $10/month
- Business: $19/user/month

[Visit GitHub Copilot](https://github.com/features/copilot)`,

  "windsurf": `# Windsurf — The $10 AI Editor

Windsurf (formerly Codeium) is an AI-first code editor built for speed. It's known for its "Cascade" feature, an agentic AI that can plan and execute multi-file edits on its own.

## Key Features

- **Cascade**: An agentic AI that understands your whole codebase and makes multi-file changes
- **Fast completions**: One of the fastest AI code completion engines available
- **Free tier**: Generous free tier for individual developers
- **Privacy-first**: Optional local models for sensitive codebases

## Best For

- Developers on a budget who want a full AI editor experience
- Teams wanting agentic coding without the $20/month price tag
- Anyone who loves the VS Code workflow

## Pricing

- Free tier: 50 credits/day
- Pro: $15/month (often on sale for $10/month)

[Visit Windsurf](https://windsurf.com)`,

  "claude-3-5-sonnet": `# Claude 3.5 Sonnet — Anthropic's Flagship LLM

Claude 3.5 Sonnet is Anthropic's most capable model, excelling at reasoning, coding, and agentic tasks. It's widely considered one of the best LLMs for software engineering.

## Why Developers Use Claude 3.5 Sonnet

- **Strong reasoning**: Excels at complex debugging, architecture design, and algorithm problems
- **Long context window**: Handles up to 200K tokens — entire codebases in one prompt
- **Great at code generation**: Produces clean, well-documented code
- **Safe and reliable**: Low hallucination rate compared to other models

## Best For

- Complex debugging and code review
- Architecture design and system planning
- Writing long, well-structured code
- Agentic workflows (Claude is the model of choice for many coding agents)

## Pricing

- API: $3 / million input tokens, $15 / million output tokens
- Claude.ai free tier available

[Visit Claude](https://www.anthropic.com/claude)`,

  "gpt-4o": `# GPT-4o — OpenAI's Multimodal Model

GPT-4o (GPT-4 Omni) is OpenAI's most advanced multimodal model, capable of processing text, images, and audio. It's fast, cheap, and great for general coding tasks.

## Why Developers Use GPT-4o

- **Multimodal**: Upload screenshots, diagrams, or UI mockups and get code
- **Fast responses**: One of the fastest frontier models
- **Great ecosystem**: Massive plugin and integration ecosystem
- **Good at general coding**: Solid all-around coding ability

## Best For

- Quick code snippets and prototypes
- Debugging when you can show the error in a screenshot
- General-purpose coding assistant
- Apps that need fast, cheap API calls

## Pricing

- API: $2.50 / million input tokens, $10 / million output tokens
- ChatGPT Plus: $20/month includes GPT-4o

[Visit OpenAI](https://openai.com/index/gpt-4o/)`,

  "v0-vercel": `# v0 by Vercel — AI UI Generator

v0 is Vercel's AI-powered front-end generator. Describe what you want in plain English, and v0 generates clean React + Tailwind UI components you can copy and paste into your app.

## Key Features

- **Prompt to UI**: Describe a component, get clean React + Tailwind code
- **Iterate visually**: Refine the design with follow-up prompts
- **Shadcn/ui based**: Output uses Shadcn/ui components — production-ready
- **One-click deploy**: Deploy straight to Vercel

## Best For

- Developers who hate writing CSS
- Designers who want to prototype fast
- Anyone building a SaaS dashboard or landing page

## Pricing

- Free tier: 50 generations/month
- Pro: $20/month

[Visit v0](https://v0.dev)`,

  "bolt-new": `# Bolt.new — AI Full-Stack App Builder

Bolt.new is an AI-powered full-stack web app builder that runs entirely in your browser. Prompt an idea, and Bolt builds, runs, and deploys a complete web app for you.

## Key Features

- **Full-stack in browser**: Frontend + backend + database, all in one prompt
- **Real-time preview**: See your app run as the AI builds it
- **One-click deploy**: Ship straight to production
- **Edit with AI**: Iterate on your app with follow-up prompts

## Best For

- Indie hackers who want to launch fast
- Non-developers with app ideas
- Prototyping ideas in minutes

## Pricing

- Free tier available
- Pro: $20/month

[Visit Bolt.new](https://bolt.new)`,

  "replit-agent": `# Replit Agent — AI Developer in Your Browser

Replit Agent is an AI programmer that lives in Replit's browser-based IDE. Describe your app idea, and Agent builds it, fixes bugs, and even deploys it for you.

## Key Features

- **Full app from prompt**: Idea → working app in minutes
- **Browser-based**: No local setup needed
- **Built-in deployment**: Deploy straight to the web
- **Iterate conversationally**: Keep refining your app with chat

## Best For

- Beginners who want to build apps without local setup
- Quickly prototyping ideas
- Education and learning

## Pricing

- Free tier available
- Core: $25/month

[Visit Replit](https://replit.com)`,

  "cline": `# Cline — Autonomous Coding Agent for VS Code

Cline (formerly Claude Dev) is an autonomous coding agent that runs as a VS Code extension. It can plan, write code, run commands, browse the web, and debug — all autonomously.

## Key Features

- **Autonomous execution**: Plans tasks, writes code, runs terminal commands
- **Full codebase access**: Reads and writes files across your project
- **Browser automation**: Can open and interact with web pages
- **Uses your API key**: Bring your own Claude/OpenAI/Gemini key

## Best For

- Power users who want AI to do heavy lifting
- Complex refactoring and multi-file changes
- Developers who prefer their own API keys over subscriptions

## Pricing

- Free (open source)
- Bring your own LLM API key

[Visit Cline](https://cline.bot)`,

  "augment-code": `# Augment Code — Enterprise AI Coding Assistant

Augment Code is an enterprise-grade AI coding assistant designed for large codebases. It understands your entire repository and provides deep, context-aware suggestions.

## Key Features

- **Repo-wide context**: Understands your entire codebase, not just open files
- **Enterprise security**: On-prem options, SOC 2 compliance
- **Custom models**: Fine-tuned on your codebase
- **Works with your stack**: Supports all major languages and frameworks

## Best For

- Enterprise teams with large codebases
- Organizations needing security and compliance
- Developers working across multiple repositories

## Pricing

- Contact sales for enterprise pricing
- Free trial available

[Visit Augment Code](https://www.augmentcode.com)`,
};

async function main() {
  console.log("🚀 Updating introductions...");
  for (const [slug, intro] of Object.entries(intros)) {
    const item = await client.fetch(
      `*[_type == "item" && slug.current == $slug][0]`,
      { slug }
    );
    if (!item) {
      console.log(`⚠️  Not found: ${slug}`);
      continue;
    }
    await client.patch(item._id).set({ introduction: intro }).commit();
    console.log(`✅ Updated: ${item.name}`);
  }
  console.log("🎉 Done!");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
