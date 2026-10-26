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

async function createFourthBlog() {
  console.log('✍️  Creating fourth blog post...');

  const user = await client.fetch(`*[_type == "user"][0]`);

  const doc = {
    _type: 'blogPost',
    title: 'Best AI APIs for Developers in 2026: Complete Comparison',
    slug: { _type: 'slug', current: 'best-ai-apis-for-developers-2026' },
    excerpt:
      'Comparing GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, DeepSeek Coder, and more. Which AI API gives you the best performance and price for coding in 2026?',
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
            text: 'If you are building AI-powered apps, coding tools, or automation workflows in 2026, the LLM API you choose will make or break your product. This guide compares the best AI APIs for developers, covering coding ability, speed, price, and context window size.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '1. GPT-4o: The All-Rounder' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'OpenAIs GPT-4o (omni) is the most well-rounded model in 2026. It has excellent coding ability, supports vision and audio, and is very fast. It is the default choice for most developers because it works well for almost every use case.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '2. Claude 3.5 Sonnet: The Coding Specialist' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Anthropic Claude 3.5 Sonnet is widely considered the best model for coding. It has a very large context window (200K+ tokens), excels at refactoring and understanding large codebases, and is often cheaper than GPT-4o for long tasks.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '3. Gemini 1.5 Pro: The Context King' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Google Gemini 1.5 Pro supports up to 1 million tokens of context. This means you can feed it an entire codebase, hundreds of files, or even long video transcripts and ask questions about all of it at once.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '4. DeepSeek Coder: The Open-Source Contender' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'DeepSeek Coder is an open-source model that rivals GPT-4 on coding benchmarks. It is very cheap to use via API and can even be self-hosted for free if you have the hardware.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'How to Choose the Right AI API' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'For most developers: start with GPT-4o. If you do a lot of coding and refactoring, try Claude 3.5 Sonnet. If you need to process huge amounts of context, go with Gemini 1.5 Pro. If price is your main concern, DeepSeek Coder is a great option.',
          },
        ],
      },
    ],
  };

  const result = await client.create(doc);
  console.log(`✅ 博客创建成功: ${result._id}`);
}

createFourthBlog();
