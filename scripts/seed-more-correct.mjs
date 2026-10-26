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

const newTools = [
  // AI Pair Programmers
  {
    name: 'Devin',
    slug: 'devin',
    link: 'https://devin.ai',
    description: 'The first AI software engineer by Cognition. Autonomously plans, codes, and deploys full features.',
    featured: false,
  },
  {
    name: 'Amazon Q Developer',
    slug: 'amazon-q',
    link: 'https://aws.amazon.com/q/developer/',
    description: 'AWS AI assistant for coding, debugging, and cloud operations.',
    featured: false,
  },
  {
    name: 'Cody by Sourcegraph',
    slug: 'cody',
    link: 'https://sourcegraph.com/cody',
    description: 'AI coding assistant that understands your entire codebase with code search.',
    featured: false,
  },
  {
    name: 'Tabnine',
    slug: 'tabnine',
    link: 'https://www.tabnine.com',
    description: 'Privacy-first AI code completion assistant, with local deployment options.',
    featured: false,
  },
  {
    name: 'Continue.dev',
    slug: 'continue-dev',
    link: 'https://continue.dev',
    description: 'Open-source customizable AI code assistant for VS Code and JetBrains.',
    featured: false,
  },

  // LLM APIs
  {
    name: 'Gemini 1.5 Pro',
    slug: 'gemini-pro',
    link: 'https://ai.google.dev/gemini-api',
    description: 'Google\'s multimodal LLM with 1M+ token context window.',
    featured: false,
  },
  {
    name: 'DeepSeek V3',
    slug: 'deepseek-v3',
    link: 'https://deepseek.com',
    description: 'Open-source LLM with strong coding performance, cost-effective.',
    featured: false,
  },
  {
    name: 'Llama 3.1',
    slug: 'llama-3-1',
    link: 'https://llama.meta.com',
    description: 'Meta\'s open-source frontier LLM, 400B parameter option available.',
    featured: false,
  },
  {
    name: 'Mistral Large',
    slug: 'mistral-large',
    link: 'https://mistral.ai',
    description: 'European LLM leader with strong coding and multilingual skills.',
    featured: false,
  },
  {
    name: 'Groq',
    slug: 'groq',
    link: 'https://groq.com',
    description: 'Blazing fast LLM inference API with custom LPU hardware.',
    featured: false,
  },

  // AI App Builders
  {
    name: 'Lovable',
    slug: 'lovable',
    link: 'https://lovable.dev',
    description: 'Build and deploy full-stack apps from plain English prompts.',
    featured: false,
  },
  {
    name: 'Framer AI',
    slug: 'framer-ai',
    link: 'https://www.framer.com',
    description: 'AI-powered website builder with hosting and animations built-in.',
    featured: false,
  },
  {
    name: 'Bubble AI',
    slug: 'bubble-ai',
    link: 'https://bubble.io',
    description: 'Leading no-code app builder with AI assistance features.',
    featured: false,
  },
];

const today = new Date().toISOString();

async function seedMore() {
  console.log(`🚀 Adding ${newTools.length} new tools...`);

  for (const tool of newTools) {
    // 先检查是否已存在
    const existing = await client.fetch(`*[_type == "item" && slug.current == $slug][0]`, {
      slug: tool.slug,
    });

    if (existing) {
      console.log(`⏭️  ${tool.name} already exists, skipping`);
      continue;
    }

    const doc = {
      _type: 'item',
      name: tool.name,
      slug: { _type: 'slug', current: tool.slug },
      link: tool.link,
      description: tool.description,
      featured: tool.featured,
      publishDate: today,
      pricePlan: 'free',
      freePlanStatus: 'approved',
      forceHidden: false,
      introduction: `# ${tool.name}\n\n${tool.description}\n\n[Visit official website](${tool.link})`,
    };

    try {
      const result = await client.create(doc);
      console.log(`✅ Created: ${tool.name} (${result._id})`);
    } catch (err) {
      console.error(`❌ Failed: ${tool.name} - ${err.message}`);
    }
  }

  console.log('🎉 Done!');
}

seedMore();
