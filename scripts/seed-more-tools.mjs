import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'n77v3b7z',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const newTools = [
  // AI Code Editors
  {
    slug: 'zed-ai',
    name: 'Zed AI',
    tagline: 'Blazing fast code editor with built-in AI collaboration.',
    description: 'Zed is a high-performance code editor written in Rust, with built-in AI pair programming features. It supports real-time collaboration and integrates with multiple LLMs directly in the editor.',
    website: 'https://zed.dev',
    category: 'ai-code-editors',
    logo: 'zed.png',
  },

  // AI Pair Programmers
  {
    slug: 'devin',
    name: 'Devin',
    tagline: 'The first AI software engineer by Cognition.',
    description: 'Devin is an autonomous AI software engineer that can plan, write code, debug, and deploy entire features independently. It handles full-stack tasks from ticket to production.',
    website: 'https://devin.ai',
    category: 'ai-pair-programmers',
    logo: 'devin.png',
  },
  {
    slug: 'amazon-q',
    name: 'Amazon Q Developer',
    tagline: 'AWS AI assistant for coding and cloud operations.',
    description: 'Amazon Q Developer helps developers write code, debug applications, understand AWS services, and optimize cloud infrastructure directly in your IDE or CLI.',
    website: 'https://aws.amazon.com/q/developer/',
    category: 'ai-pair-programmers',
    logo: 'amazon-q.png',
  },
  {
    slug: 'cody',
    name: 'Cody by Sourcegraph',
    tagline: 'AI coding assistant that knows your entire codebase.',
    description: 'Cody uses Sourcegraph code search to understand your entire codebase, providing context-aware code completions, explanations, and refactoring suggestions.',
    website: 'https://sourcegraph.com/cody',
    category: 'ai-pair-programmers',
    logo: 'cody.png',
  },
  {
    slug: 'tabnine',
    name: 'Tabnine',
    tagline: 'Privacy-first AI code completion assistant.',
    description: 'Tabnine provides AI code completions with privacy options - you can run models locally on your machine. It supports all major IDEs and focuses on enterprise security.',
    website: 'https://www.tabnine.com',
    category: 'ai-pair-programmers',
    logo: 'tabnine.png',
  },
  {
    slug: 'continue-dev',
    name: 'Continue.dev',
    tagline: 'Open-source AI code assistant for VS Code and JetBrains.',
    description: 'Continue is an open-source AI coding assistant that you can fully customize. Connect any LLM, customize prompts, and build your own AI workflow in the editor.',
    website: 'https://continue.dev',
    category: 'ai-pair-programmers',
    logo: 'continue.png',
  },

  // LLM APIs
  {
    slug: 'gemini-pro',
    name: 'Gemini 1.5 Pro',
    tagline: 'Google\'s most capable multimodal LLM.',
    description: 'Gemini 1.5 Pro by Google supports a 1M+ token context window, multimodal understanding of text, images, audio, and video. Excellent for long codebase analysis and complex reasoning.',
    website: 'https://ai.google.dev/gemini-api',
    category: 'llm-apis',
    logo: 'gemini.png',
  },
  {
    slug: 'deepseek-v3',
    name: 'DeepSeek V3',
    tagline: 'Open-source LLM with strong coding performance.',
    description: 'DeepSeek V3 is an open-source large language model optimized for coding and reasoning. It offers excellent performance at a fraction of the cost of closed models, popular for local deployment.',
    website: 'https://deepseek.com',
    category: 'llm-apis',
    logo: 'deepseek.png',
  },
  {
    slug: 'llama-3-1',
    name: 'Llama 3.1',
    tagline: 'Meta\'s open-source frontier LLM.',
    description: 'Llama 3.1 is Meta\'s open-source LLM available in 8B, 70B, and 400B parameter sizes. The 400B version rivals GPT-4 on many benchmarks, with 128K context window.',
    website: 'https://llama.meta.com',
    category: 'llm-apis',
    logo: 'llama.png',
  },
  {
    slug: 'mistral-large',
    name: 'Mistral Large',
    tagline: 'European LLM leader with strong coding skills.',
    description: 'Mistral Large is the flagship model from Mistral AI, based in Europe. It excels at multilingual tasks and coding, with strong privacy and data residency options.',
    website: 'https://mistral.ai',
    category: 'llm-apis',
    logo: 'mistral.png',
  },
  {
    slug: 'groq',
    name: 'Groq',
    tagline: 'Blazing fast LLM inference API.',
    description: 'Groq delivers the fastest LLM inference on the market with its custom LPU hardware. Get tokens in milliseconds, perfect for real-time coding assistants and low-latency applications.',
    website: 'https://groq.com',
    category: 'llm-apis',
    logo: 'groq.png',
  },

  // AI App Builders
  {
    slug: 'lovable',
    name: 'Lovable',
    tagline: 'Build and deploy full-stack apps with AI.',
    description: 'Lovable lets you describe an app in plain English and it generates, runs, and deploys a full-stack web application. Iterate in real-time and deploy with one click.',
    website: 'https://lovable.dev',
    category: 'ai-app-builders',
    logo: 'lovable.png',
  },
  {
    slug: 'builder-io',
    name: 'Builder.io',
    tagline: 'Visual development platform with AI.',
    description: 'Builder.io combines a visual headless CMS with AI code generation. Design and edit web pages visually while generating clean React/Vue/Svelte code.',
    website: 'https://www.builder.io',
    category: 'ai-app-builders',
    logo: 'builder.png',
  },
  {
    slug: 'framer-ai',
    name: 'Framer AI',
    tagline: 'AI-powered website builder.',
    description: 'Framer AI generates complete responsive websites from a text prompt. It includes hosting, animations, and SEO tools built-in. Popular for marketing sites and portfolios.',
    website: 'https://www.framer.com',
    category: 'ai-app-builders',
    logo: 'framer.png',
  },
  {
    slug: 'bubble-ai',
    name: 'Bubble AI',
    tagline: 'No-code app builder with AI features.',
    description: 'Bubble is a leading no-code platform that now includes AI features to help you build applications faster. Create complex web apps without writing traditional code.',
    website: 'https://bubble.io',
    category: 'ai-app-builders',
    logo: 'bubble.png',
  },
  {
    slug: 'base44',
    name: 'Base44',
    tagline: 'AI-powered full-stack app builder.',
    description: 'Base44 generates production-ready full-stack applications from prompts. It comes with built-in authentication, database, and API, and exports clean React + Node.js code.',
    website: 'https://base44.ai',
    category: 'ai-app-builders',
    logo: 'base44.png',
  },

  // AI Code Review
  {
    slug: 'coderabbit',
    name: 'CodeRabbit',
    tagline: 'AI code review assistant for pull requests.',
    description: 'CodeRabbit automatically reviews pull requests, suggests improvements, catches bugs, and explains code changes. It integrates with GitHub, GitLab, and Bitbucket.',
    website: 'https://coderabbit.ai',
    category: 'ai-code-review',
    logo: 'coderabbit.png',
  },
  {
    slug: 'sourcery',
    name: 'Sourcery',
    tagline: 'AI Python refactoring tool.',
    description: 'Sourcery helps Python developers write cleaner code by suggesting refactoring patterns in real-time. It learns from your team\'s coding style and custom rules.',
    website: 'https://sourcery.ai',
    category: 'ai-code-review',
    logo: 'sourcery.png',
  },
  {
    slug: 'deepsource',
    name: 'DeepSource',
    tagline: 'Automated code review for healthy codebases.',
    description: 'DeepSource automatically finds and fixes issues in code, security vulnerabilities, and test coverage gaps. It supports Python, JavaScript, Go, and more.',
    website: 'https://deepsource.com',
    category: 'ai-code-review',
    logo: 'deepsource.png',
  },

  // AI Docs
  {
    slug: 'mintlify',
    name: 'Mintlify',
    tagline: 'AI-powered documentation platform.',
    description: 'Mintlify helps you build beautiful developer documentation with AI features like auto-generating docs from code, AI chat support, and search optimization.',
    website: 'https://mintlify.com',
    category: 'ai-docs',
    logo: 'mintlify.png',
  },
  {
    slug: 'swimm',
    name: 'Swimm',
    tagline: 'Code documentation that stays in sync.',
    description: 'Swimm creates living documentation that automatically updates when code changes. It connects docs to actual code paths and helps new developers onboard faster.',
    website: 'https://swimm.io',
    category: 'ai-docs',
    logo: 'swimm.png',
  },

  // AI Testing
  {
    slug: 'codegen',
    name: 'Codegen',
    tagline: 'AI-powered test automation.',
    description: 'Codegen uses AI to automatically generate and maintain end-to-end tests. It understands user flows and adapts tests when your UI changes.',
    website: 'https://codegen.com',
    category: 'ai-testing',
    logo: 'codegen.png',
  },
  {
    slug: 'diffblue',
    name: 'Diffblue Cover',
    tagline: 'Automated Java unit test writer.',
    description: 'Diffblue Cover automatically writes and maintains Java unit tests using AI. It frees developers from writing boilerplate tests while increasing coverage.',
    website: 'https://www.diffblue.com',
    category: 'ai-testing',
    logo: 'diffblue.png',
  },

  // AI Database
  {
    slug: 'chat2db',
    name: 'Chat2DB',
    tagline: 'AI-powered SQL client and database tool.',
    description: 'Chat2DB is an open-source database client that lets you query databases using natural language. It supports MySQL, PostgreSQL, SQLite, and more.',
    website: 'https://chat2db.ai',
    category: 'ai-database',
    logo: 'chat2db.png',
  },
  {
    slug: 'ai2sql',
    name: 'AI2SQL',
    tagline: 'Convert natural language to SQL queries.',
    description: 'AI2SQL translates plain English questions into optimized SQL queries. Perfect for non-technical team members who need to query databases without writing SQL.',
    website: 'https://ai2sql.io',
    category: 'ai-database',
    logo: 'ai2sql.png',
  },

  // AI Git
  {
    slug: 'graphite',
    name: 'Graphite',
    tagline: 'AI-enhanced Git workflow for stacked PRs.',
    description: 'Graphite improves your Git workflow with stacked pull requests, CLI tools, and AI-powered PR summaries. Popular among high-velocity engineering teams.',
    website: 'https://graphite.dev',
    category: 'ai-git',
    logo: 'graphite.png',
  },
];

async function seedMoreTools() {
  console.log(`🚀 Adding ${newTools.length} new tools...`);

  for (const tool of newTools) {
    try {
      const doc = {
        _type: 'tool',
        name: tool.name,
        slug: { _type: 'slug', current: tool.slug },
        tagline: tool.tagline,
        description: tool.description,
        website: tool.website,
        isPublished: true,
      };

      const result = await client.create(doc);
      console.log(`✅ Added: ${tool.name} (${result._id})`);
    } catch (err) {
      console.error(`❌ Failed to add ${tool.name}:`, err.message);
    }
  }

  console.log('🎉 Done!');
}

seedMoreTools();
