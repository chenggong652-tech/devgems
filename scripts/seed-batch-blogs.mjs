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

async function createBlogs() {
  console.log('✍️  批量创建6篇博客...');
  const user = await client.fetch(`*[_type == "user"][0]`);

  const blogs = [
    {
      title: 'Best Free AI Coding Tools in 2026 (No Credit Card Required)',
      slug: { _type: 'slug', current: 'best-free-ai-coding-tools-2026' },
      excerpt: 'You don\'t need to pay $20/month to start coding with AI. These are the best free AI coding tools in 2026.',
      body: [
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'AI coding tools used to be expensive, but not anymore. In 2026, there are dozens of excellent free AI coding tools that give you most of the benefits of paid plans.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '1. Codeium' }] },
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Codeium is 100% free for individual use. It supports 70+ languages and 40+ editors, making it the best free alternative to GitHub Copilot.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '2. GitHub Copilot Free' }] },
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'GitHub Copilot now has a free tier that gives you 2000 completions per month and 50 chat messages. Perfect for students and hobbyists.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '3. Aider (with free models)' }] },
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Aider is free open-source software, and you can connect it to free models like Gemini 1.5 Flash to get AI pair programming for $0.' }] },
      ],
    },
    {
      title: 'Should You Use AI to Write Code? The Honest Truth in 2026',
      slug: { _type: 'slug', current: 'should-you-use-ai-to-write-code-2026' },
      excerpt: 'Is AI coding ethical? Will it make you a worse developer? Here\'s the honest truth from experienced engineers.',
      body: [
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'There\'s a big debate in the developer community: should you use AI to write code? Some purists say it makes you a worse engineer, while others say it\'s the biggest productivity boost ever. Here\'s the honest truth.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'AI Doesn\'t Replace Thinking' }] },
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'The worst thing you can do is accept AI output without reading it. You still need to understand the code, review it, and know why it works. AI is a tool, not a replacement for engineering judgment.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'The Best Way to Use AI' }] },
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Use AI for boilerplate, tests, and boilerplate code - the stuff you already know how to write but takes time. Keep AI away from core architecture and tricky business logic.' }] },
      ],
    },
    {
      title: 'How to Learn Programming with AI in 2026 (Fastest Way)',
      slug: { _type: 'slug', current: 'how-to-learn-programming-with-ai-2026' },
      excerpt: 'Learning to code in 2026 is nothing like it was 10 years ago. Here\'s how to use AI to learn programming 10x faster.',
      body: [
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'When I started learning to code, I had to Google every error message and read 10 Stack Overflow answers. In 2026, you can learn programming 10x faster by using AI as a personal tutor.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Ask AI to Explain Like You\'re 5' }] },
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'When you get stuck, don\'t just give up. Paste the error message into ChatGPT and say "explain this like I\'m 5". It will break down complex concepts in plain language.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Build Real Projects, Not Tutorial Hell' }] },
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Use AI to help you build real projects from day one. Tutorial hell is real - the fastest way to learn is by building things, and AI is your safety net when you get stuck.' }] },
      ],
    },
    {
      title: 'Best AI Tools for Frontend Developers in 2026',
      slug: { _type: 'slug', current: 'best-ai-tools-for-frontend-developers-2026' },
      excerpt: 'Frontend developers are the biggest winners from the AI boom. These are the best AI tools for frontend engineers in 2026.',
      body: [
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Frontend development is the area where AI has had the biggest impact. From generating UI components to debugging CSS, these tools will make you a 10x frontend dev.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '1. v0 by Vercel' }] },
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'v0 generates production-ready React and Tailwind components from prompts. You can describe a button, a card, or an entire landing page and it gives you the code.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '2. Shadcn UI + Cursor' }] },
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Shadcn UI gives you beautiful components, and Cursor lets you modify them with natural language. This combo has replaced Figma for many developers.' }] },
      ],
    },
    {
      title: 'Best AI Tools for Backend Developers in 2026',
      slug: { _type: 'slug', current: 'best-ai-tools-for-backend-developers-2026' },
      excerpt: 'Backend development benefits just as much from AI as frontend. Here are the best AI tools for backend engineers in 2026.',
      body: [
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'People think AI is only for frontend, but backend developers are saving just as much time. From writing SQL to debugging deployment issues, AI is a superpower for backend engineers.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '1. Claude Code' }] },
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Claude Code is amazing for backend work. It can read through your entire codebase, debug API endpoints, and even write database migrations.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '2. GitHub Copilot for SQL' }] },
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Writing complex SQL queries by hand is tedious. Copilot can generate SQL from plain English descriptions, and it works with PostgreSQL, MySQL, and SQLite.' }] },
      ],
    },
    {
      title: 'AI Coding vs Human Coding: What Does the Future Look Like?',
      slug: { _type: 'slug', current: 'ai-coding-vs-human-coding-future' },
      excerpt: 'Will AI replace programmers? What will software development look like in 2030? Here\'s our prediction.',
      body: [
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Every week there\'s a new article saying "AI will replace all programmers by 2027". The reality is more nuanced. Here\'s what the future of coding actually looks like.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'AI Replaces Boring Code, Not Thinking' }] },
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'AI will write all the boilerplate, CRUD endpoints, and test cases. The developers who survive will be the ones who can design good systems, understand requirements, and review AI output critically.' }] },
        { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'The Role of the Developer Changes' }] },
        { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'In the future, the best developers won\'t be the ones who type the fastest. They\'ll be the ones who can break down problems well, write good prompts, and know how to validate AI-generated code.' }] },
      ],
    },
  ];

  for (const blog of blogs) {
    const doc = {
      _type: 'blogPost',
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      featured: true,
      publishDate: today,
      author: { _type: 'reference', _ref: user._id },
      body: blog.body,
    };
    const result = await client.create(doc);
    console.log(`✅ ${blog.title} -> ${result._id}`);
  }

  console.log(`\n🎉 6篇博客全部创建完成！现在总共有10篇博客了！`);
}

createBlogs();
