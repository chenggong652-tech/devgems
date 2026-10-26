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

const newTools = [
  // AI Code Editors (加 3 个)
  {
    name: 'Zed AI',
    slug: 'zed-ai',
    description: 'Zed is a blazing-fast code editor built in Rust, with native AI assistant integration.',
    link: 'https://zed.dev',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Zed is a high-performance code editor built from scratch in Rust, designed for speed and low latency. It includes built-in AI assistant support, letting you use Claude, GPT-4, and other models directly inside the editor without installing plugins.',
  },
  {
    name: 'Neovim AI',
    slug: 'neovim-ai',
    description: 'Neovim with AI plugins like Copilot.vim gives Vim users modern AI coding assistance.',
    link: 'https://neovim.io',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Neovim is the hyperextensible, Vim-based editor that power users swear by. With AI plugins like GitHub Copilot.vim and Codeium, you get all the AI coding assistance of modern editors while keeping the modal editing workflow.',
  },
  {
    name: 'Sublime Text AI',
    slug: 'sublime-text-ai',
    description: 'Sublime Text, the legendary lightweight editor, now supports AI autocomplete features.',
    link: 'https://www.sublimetext.com',
    pricePlan: 'paid',
    freePlanStatus: false,
    publishDate: today,
    forceHidden: false,
    introduction: 'Sublime Text has been a favorite among developers for over a decade thanks to its speed, stability, and minimal UI. The latest versions include built-in AI features for generating and refactoring code.',
  },

  // AI Pair Programmers (加 5 个)
  {
    name: 'Replit AI',
    slug: 'replit-ai',
    description: 'Replit AI lets you code, build, and deploy apps directly in your browser with AI assistance.',
    link: 'https://replit.com',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Replit is a browser-based IDE that lets you code in over 50 programming languages without setting up a local environment. Its built-in AI assistant can generate code, debug errors, and even design full applications.',
  },
  {
    name: 'Codeium',
    slug: 'codeium',
    description: 'Codeium is a free AI coding assistant with support for 70+ languages and 40+ editors.',
    link: 'https://codeium.com',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Codeium offers a free AI autocomplete plugin that supports 70+ programming languages and works in 40+ editors including VS Code, JetBrains, Vim, and Emacs.',
  },
  {
    name: 'Aider',
    slug: 'aider',
    description: 'Aider is a terminal-based AI pair programmer that works with Git and your local codebase.',
    link: 'https://aider.chat',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Aider is a command-line AI coding assistant that works directly with your local Git repository. You tell it what changes you want in plain English, and it edits your files, runs tests, and commits the changes automatically.',
  },
  {
    name: 'Pear AI',
    slug: 'pear-ai',
    description: 'Pear AI is a free, open-source AI pair programmer extension for VS Code and JetBrains.',
    link: 'https://trypear.ai',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Pear AI is a completely free, open-source AI coding assistant that works in VS Code and JetBrains IDEs. It supports multiple AI models and features like chat, inline editing, and codebase understanding.',
  },
  {
    name: 'CodeGPT',
    slug: 'codegpt',
    description: 'CodeGPT is a VS Code extension that brings ChatGPT, Claude, and other LLMs directly into your editor.',
    link: 'https://codegpt.co',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'CodeGPT is a popular VS Code extension that lets you use GPT-4, Claude, Gemini, and other LLMs directly inside your editor. You bring your own API key, so you only pay for what you use.',
  },

  // LLM APIs (加 6 个)
  {
    name: 'Qwen 2.5 Coder',
    slug: 'qwen-2-5-coder',
    description: 'Qwen 2.5 Coder is Alibaba\'s open-source code LLM that rivals GPT-4 on coding benchmarks.',
    link: 'https://qwenlm.github.io',
    pricePlan: 'open-source',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Qwen 2.5 Coder is Alibaba\'s open-source large language model built specifically for coding tasks. Available in sizes from 7B to 72B parameters, it achieves near GPT-4 level performance on coding benchmarks.',
  },
  {
    name: 'StarCoder 2',
    slug: 'starcoder-2',
    description: 'StarCoder 2 is a fully open-source code LLM trained on 61 programming languages.',
    link: 'https://huggingface.co/bigcode/starcoder2-15b',
    pricePlan: 'open-source',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'StarCoder 2 is a collaboration between Hugging Face and various industry partners to create a fully open-source code LLM. Trained on permissively licensed code from 61 programming languages.',
  },
  {
    name: 'CodeLlama',
    slug: 'codellama',
    description: 'CodeLlama is Meta\'s open-source code LLM based on Llama, optimized for coding tasks.',
    link: 'https://ai.meta.com/blog/codellama',
    pricePlan: 'open-source',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'CodeLlama is Meta\'s open-source large language model fine-tuned specifically for coding tasks. Based on the popular Llama architecture, it supports infilling and instruction following.',
  },
  {
    name: 'Phi 3',
    slug: 'phi-3',
    description: 'Phi 3 is Microsoft\'s small but mighty LLM that punches above its weight on coding tasks.',
    link: 'https://azure.microsoft.com/en-us/products/phi',
    pricePlan: 'open-source',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Phi 3 is Microsoft\'s family of small, lightweight LLMs that achieve surprising performance for their size. The 3.8B parameter model can run on a laptop or even a phone.',
  },
  {
    name: 'Mistral Codestral',
    slug: 'mistral-codestral',
    description: 'Codestral is Mistral AI\'s code-specific LLM that matches GPT-4 on coding benchmarks.',
    link: 'https://mistral.ai',
    pricePlan: 'paid',
    freePlanStatus: false,
    publishDate: today,
    forceHidden: false,
    introduction: 'Codestral is Mistral AI\'s code-specific large language model, optimized for filling in code, explaining snippets, and generating entire functions. It supports 80+ programming languages.',
  },
  {
    name: 'Cohere Command R+',
    slug: 'cohere-command-r-plus',
    description: 'Cohere Command R+ is an enterprise-grade LLM optimized for RAG and coding.',
    link: 'https://cohere.com',
    pricePlan: 'paid',
    freePlanStatus: false,
    publishDate: today,
    forceHidden: false,
    introduction: 'Cohere\'s Command R+ is an enterprise-focused LLM designed for production use cases. It excels at retrieval-augmented generation and has a 128K context window.',
  },

  // AI App Builders (加 6 个)
  {
    name: 'Webflow AI',
    slug: 'webflow-ai',
    description: 'Webflow AI lets you generate entire websites from prompts, then visually design and customize them.',
    link: 'https://webflow.com',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Webflow has been the leading no-code website builder for years, and now its AI features let you generate an entire website from a simple text prompt.',
  },
  {
    name: 'Wix ADI',
    slug: 'wix-adi',
    description: 'Wix ADI builds a complete personalized website with AI in minutes.',
    link: 'https://www.wix.com',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Wix ADI (Artificial Design Intelligence) asks you a few questions about your business, then generates a complete, personalized website with text, images, and layout.',
  },
  {
    name: 'Durable',
    slug: 'durable',
    description: 'Durable AI generates a complete business website with hosting and analytics in 30 seconds.',
    link: 'https://durable.co',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Durable is an AI website builder specifically for small businesses. Answer a few questions about your business, and Durable generates a complete website in just 30 seconds.',
  },
  {
    name: 'Quest AI',
    slug: 'quest-ai',
    description: 'Quest AI turns Figma designs into clean React/React Native code with one click.',
    link: 'https://www.quest.ai',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Quest AI solves the classic design-to-development handoff problem: import your Figma design, and Quest generates production-ready React or React Native code.',
  },
  {
    name: 'Bubble AI',
    slug: 'bubble-ai',
    description: 'Bubble AI lets you build full web applications without code using AI assistance.',
    link: 'https://bubble.io',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Bubble is the leading no-code platform for building full web applications. Its new AI features let you describe your app and have Bubble generate the workflows and UI for you.',
  },
  {
    name: 'Framer AI',
    slug: 'framer-ai-new',
    description: 'Framer AI lets you generate and publish marketing sites directly in the browser.',
    link: 'https://www.framer.com',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Framer is a powerful website builder focused on marketing sites and landing pages. Its AI features let you generate a complete landing page from a prompt, then customize it visually.',
  },
];

async function seedNewTools() {
  console.log(`🚀 Adding ${newTools.length} new tools...\n`);
  let success = 0;
  let failed = 0;

  for (const tool of newTools) {
    try {
      await client.create({
        _type: 'item',
        ...tool,
      });
      console.log(`✅ ${tool.name}`);
      success++;
    } catch (e) {
      console.log(`❌ ${tool.name}: ${e.message.slice(0, 100)}`);
      failed++;
    }
  }

  console.log(`\n🎉 Done! Success: ${success}, Failed: ${failed}`);
}

seedNewTools().catch(console.error);
