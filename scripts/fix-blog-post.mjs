import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function fixBlogPost() {
  // 找到那篇文章
  const post = await client.fetch(`*[_type == "blogPost" && slug.current == "best-ai-coding-tools-2026"][0]`);
  if (!post) {
    console.log('Post not found!');
    return;
  }

  console.log('Fixing post:', post.title);

  // 正确的正文格式
  const newBody = [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Artificial intelligence has fundamentally changed how developers write code. What started as simple autocomplete has evolved into full AI agents that can plan, write, debug, and deploy entire features on their own. In this guide, we break down the best AI coding tools in 2026, organized by category, so you can pick the right ones for your workflow.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [{ _type: 'span', text: 'AI Code Editors' }],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'AI-first code editors are built from the ground up to work with AI as a core part of the experience, not an afterthought plugin.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [{ _type: 'span', text: '1. Cursor' }],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Cursor is the most popular AI code editor, built as a fork of VS Code. It integrates Claude and GPT directly into the editor, supporting features like tab completion, inline edits, chat, and codebase-wide refactoring.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [{ _type: 'span', text: '2. Windsurf (Codeium)' }],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Windsurf from Codeium offers a full-agentic coding experience, letting AI plan and execute multi-step changes across your entire codebase. It is priced at $10/month, making it a popular budget alternative to Cursor.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [{ _type: 'span', text: 'AI Pair Programmers' }],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'AI pair programmers live inside your existing editor (VS Code, JetBrains) and help you write code faster, explain unfamiliar code, and catch bugs before they reach production.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [{ _type: 'span', text: '3. GitHub Copilot' }],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'GitHub Copilot is the most widely adopted AI coding assistant, with deep integration into GitHub and VS Code. It supports chat, inline suggestions, and pull request summaries.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [{ _type: 'span', text: '4. Devin by Cognition' }],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Devin is widely considered the first "AI software engineer" — it can take a ticket, plan the implementation, write code, run tests, and open a pull request all on its own. It represents the cutting edge of autonomous coding agents.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [{ _type: 'span', text: 'Top LLM APIs for Coding' }],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'If you are building your own AI coding tool or need programmatic access to models, these are the best LLM APIs for coding tasks:',
        },
      ],
    },
    {
      _type: 'block',
      listItem: 'bullet',
      style: 'normal',
      level: 1,
      children: [{ _type: 'span', text: 'Claude 3.5 Sonnet (Anthropic) — best overall for coding and reasoning' }],
    },
    {
      _type: 'block',
      listItem: 'bullet',
      style: 'normal',
      level: 1,
      children: [{ _type: 'span', text: 'GPT-4o (OpenAI) — most capable multimodal model' }],
    },
    {
      _type: 'block',
      listItem: 'bullet',
      style: 'normal',
      level: 1,
      children: [{ _type: 'span', text: 'Gemini 1.5 Pro (Google) — 1M+ token context window' }],
    },
    {
      _type: 'block',
      listItem: 'bullet',
      style: 'normal',
      level: 1,
      children: [{ _type: 'span', text: 'DeepSeek V3 — best open-source option for coding' }],
    },
    {
      _type: 'block',
      listItem: 'bullet',
      style: 'normal',
      level: 1,
      children: [{ _type: 'span', text: 'Groq — fastest inference, perfect for low-latency assistants' }],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [{ _type: 'span', text: 'AI App Builders' }],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Want to build an entire app just by describing it in plain English? These AI app builders turn prompts into production-ready full-stack applications:',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [{ _type: 'span', text: '5. v0 by Vercel' }],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'v0 generates clean React + Tailwind UI components from prompts, with one-click deploy to Vercel. It is the best tool for rapidly prototyping frontend designs.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [{ _type: 'span', text: '6. Bolt.new' }],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Bolt.new runs full-stack apps directly in your browser. Describe an app, and it writes frontend, backend, and database code — all you do is preview and iterate.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [{ _type: 'span', text: 'How to Choose the Right AI Coding Tool' }],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Start with your workflow: if you spend most of your time editing code, try Cursor or Windsurf. If you need deep integration with GitHub, Copilot is hard to beat. If you are building a SaaS product from scratch, v0 or Bolt.new will save you weeks of work. The best approach is to pick one primary tool and master it, rather than switching between ten different tools every day.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Explore our full directory of AI coding tools to find the perfect gem for your next project.',
        },
      ],
    },
  ];

  // 更新文章
  await client.patch(post._id).set({ body: newBody }).commit();
  console.log('✅ Fixed!');
}

fixBlogPost().catch(console.error);
