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

const today = new Date().toISOString();

async function createSecondBlog() {
  console.log('✍️  Creating second blog post...');

  // 先找到作者
  const user = await client.fetch(`*[_type == "user"][0]`);

  const doc = {
    _type: 'blogPost',
    title: 'Cursor vs GitHub Copilot: Which AI Coding Assistant Is Better in 2026?',
    slug: { _type: 'slug', current: 'cursor-vs-github-copilot-2026' },
    excerpt:
      'Cursor vs GitHub Copilot: we compare pricing, features, AI models, performance, and use cases to help you pick the right AI coding assistant in 2026.',
    featured: true,
    publishDate: today,
    author: { _type: 'reference', _ref: user._id },
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Two AI coding tools dominate the market in 2026: Cursor and GitHub Copilot. Both help you write code faster, but they take very different approaches. In this comparison guide, we break down pricing, features, supported models, performance, and who should choose which tool.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Quick Overview' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Cursor is an AI-first code editor built as a fork of VS Code, priced at $20/month for Pro. GitHub Copilot is an AI assistant plugin that works inside your existing editor (VS Code, JetBrains, Neovim), priced at $10/month for individuals.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Pricing Comparison' }],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Cursor Pricing' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Cursor has a free tier with limited requests, and Pro costs $20/month. You get unlimited premium model usage (Claude 3.5 Sonnet, GPT-4o) plus 2000 fast requests per month. Teams cost $40/user/month.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'GitHub Copilot Pricing' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'GitHub Copilot Individual costs $10/month or $100/year. The Business plan costs $19/user/month and includes business-grade data protection. Students and popular open-source maintainers get it for free.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Features Comparison' }],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Cursor Advantages' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        style: 'normal',
        level: 1,
        children: [{ _type: 'span', text: 'Built from the ground up for AI — not a plugin bolted onto an existing editor' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        style: 'normal',
        level: 1,
        children: [{ _type: 'span', text: 'Composer feature: AI can edit multiple files across your entire codebase at once' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        style: 'normal',
        level: 1,
        children: [{ _type: 'span', text: 'Tab completion is more intelligent and context-aware than Copilot' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        style: 'normal',
        level: 1,
        children: [{ _type: 'span', text: 'You can use any LLM you want: Claude, GPT, Gemini, or even local models' }],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'GitHub Copilot Advantages' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        style: 'normal',
        level: 1,
        children: [{ _type: 'span', text: 'Works in every editor you already use — no need to switch from VS Code' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        style: 'normal',
        level: 1,
        children: [{ _type: 'span', text: 'Deeper GitHub integration: PR summaries, code review, Copilot Chat in your repo' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        style: 'normal',
        level: 1,
        children: [{ _type: 'span', text: 'Cheaper: $10/month vs $20/month' }],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        style: 'normal',
        level: 1,
        children: [{ _type: 'span', text: 'Free for students and verified open-source maintainers' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Which Should You Choose?' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Choose Cursor if you spend most of your day writing code and want the most powerful AI coding experience available. It is worth the extra $10/month if it saves you even one hour a week. Choose GitHub Copilot if you already love VS Code, want something cheaper, or need tight GitHub integration for pull requests and code review.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Many developers actually use both: Copilot for inline suggestions and GitHub workflows, plus Cursor for heavier multi-file refactoring tasks. Try both free tiers first and see which feels better for your workflow.',
          },
        ],
      },
    ],
  };

  const result = await client.create(doc);
  console.log(`✅ Created: ${doc.title} (${result._id})`);
}

createSecondBlog().catch(console.error);
