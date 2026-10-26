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
    name: 'Emacs AI',
    slug: { _type: 'slug', current: 'emacs-ai' },
    description: 'Extensible text editor with AI plugins for power users.',
    link: 'https://www.gnu.org/software/emacs/',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Emacs is the extensible, self-documenting text editor that power users have loved for decades. With AI plugins like Copilot.el, you get modern AI coding assistance.',
  },
  {
    name: 'Nova Editor',
    slug: { _type: 'slug', current: 'nova-editor' },
    description: 'Beautiful native code editor for macOS with AI support.',
    link: 'https://nova.app',
    pricePlan: 'paid',
    freePlanStatus: false,
    publishDate: today,
    forceHidden: false,
    introduction: 'Nova is a fast, native code editor for macOS from Panic. It has built-in AI features and is very polished.',
  },
  {
    name: 'Pulsar',
    slug: { _type: 'slug', current: 'pulsar-editor' },
    description: 'Community-led fork of the Atom editor with AI plugins.',
    link: 'https://pulsar-edit.dev',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Pulsar is the community-maintained fork of GitHub Atom. It is lightweight and has support for AI coding plugins.',
  },

  // AI Pair Programmers (加 5 个)
  {
    name: 'Supermaven',
    slug: { _type: 'slug', current: 'supermaven' },
    description: 'Blazing fast AI code completion with long context.',
    link: 'https://supermaven.com',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Supermaven is an AI autocomplete plugin that is known for its incredible speed and long context window. It supports many editors.',
  },
  {
    name: 'CodeGen',
    slug: { _type: 'slug', current: 'codegen' },
    description: 'AI code generator that creates production-ready functions.',
    link: 'https://codegen.com',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'CodeGen is an AI coding assistant that focuses on generating production-ready code snippets and functions.',
  },
  {
    name: 'MutableAI',
    slug: { _type: 'slug', current: 'mutable-ai' },
    description: 'AI that writes production code from natural language specs.',
    link: 'https://mutable.ai',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'MutableAI lets you write specs in plain English and then generates the implementation code. It is designed for production teams.',
  },
  {
    name: 'Tabnine Chat',
    slug: { _type: 'slug', current: 'tabnine-chat' },
    description: 'Privacy-first AI chat assistant inside your editor.',
    link: 'https://www.tabnine.com/chat',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Tabnine Chat is a privacy-focused AI chat assistant that runs locally or in your VPC. It never trains on your code.',
  },
  {
    name: 'Codeium Chat',
    slug: { _type: 'slug', current: 'codeium-chat' },
    description: 'Free AI chat assistant for code in any editor.',
    link: 'https://codeium.com/chat',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Codeium Chat is a free AI chat assistant that can explain code, refactor functions, and write tests right inside your editor.',
  },

  // LLM APIs (加 5 个)
  {
    name: 'GPT-3.5 Turbo',
    slug: { _type: 'slug', current: 'gpt-35-turbo' },
    description: 'OpenAI cheap and fast model, great for simple coding tasks.',
    link: 'https://openai.com',
    pricePlan: 'paid',
    freePlanStatus: false,
    publishDate: today,
    forceHidden: false,
    introduction: 'GPT-3.5 Turbo is OpenAIs cheapest and fastest model. It is great for simple coding tasks, scripts, and prototyping.',
  },
  {
    name: 'Claude 3 Haiku',
    slug: { _type: 'slug', current: 'claude-3-haiku' },
    description: 'Anthropics fastest and cheapest model.',
    link: 'https://www.anthropic.com/claude',
    pricePlan: 'paid',
    freePlanStatus: false,
    publishDate: today,
    forceHidden: false,
    introduction: 'Claude 3 Haiku is Anthropics smallest, fastest, and cheapest model. It is perfect for high-volume tasks where speed matters.',
  },
  {
    name: 'Gemini 1.5 Nano',
    slug: { _type: 'slug', current: 'gemini-1-5-nano' },
    description: 'Googles tiny on-device AI model.',
    link: 'https://deepmind.google/technologies/gemini/',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Gemini 1.5 Nano is Googles smallest model designed to run on phones and edge devices.',
  },
  {
    name: 'Mistral 7B',
    slug: { _type: 'slug', current: 'mistral-7b' },
    description: 'Open-source 7B model that punches above its weight.',
    link: 'https://mistral.ai',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Mistral 7B was the breakthrough open-source model that proved small models could be very capable. It is easy to self-host.',
  },
  {
    name: 'Phi 3',
    slug: { _type: 'slug', current: 'phi-3' },
    description: 'Microsoft small language model that rivals bigger models.',
    link: 'https://azure.microsoft.com/en-us/products/phi/',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Phi 3 is Microsofts series of small, efficient language models that can run on laptops and phones.',
  },

  // AI App Builders (加 4 个)
  {
    name: 'Bolt AI',
    slug: { _type: 'slug', current: 'bolt-ai' },
    description: 'Build and deploy apps with prompts in seconds.',
    link: 'https://bolt.new',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Bolt AI lets you describe an app in plain English and get a working full-stack app in seconds.',
  },
  {
    name: 'Lovable',
    slug: { _type: 'slug', current: 'lovable' },
    description: 'AI website builder that turns prompts into production apps.',
    link: 'https://lovable.dev',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Lovable is a popular AI app builder that lets you build and deploy web apps from prompts. It is great for MVPs.',
  },
  {
    name: 'Websim AI',
    slug: { _type: 'slug', current: 'websim-ai' },
    description: 'Generate interactive websites from text prompts.',
    link: 'https://websim.ai',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Websim AI generates interactive websites and games from text prompts. It is very popular on social media.',
  },
  {
    name: 'Durable AI',
    slug: { _type: 'slug', current: 'durable-ai' },
    description: 'AI website builder for small businesses.',
    link: 'https://durable.co',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Durable AI builds complete small business websites in 30 seconds, including hosting and AI chatbot.',
  },
];

async function run() {
  console.log(`准备灌入 ${newTools.length} 个工具，冲100！`);
  let success = 0;
  let fail = 0;

  for (const tool of newTools) {
    try {
      const doc = {
        _type: 'item',
        name: tool.name,
        slug: tool.slug,
        description: tool.description,
        link: tool.link,
        pricePlan: tool.pricePlan,
        freePlanStatus: tool.freePlanStatus,
        publishDate: tool.publishDate,
        forceHidden: tool.forceHidden,
        introduction: tool.introduction,
      };
      const result = await client.create(doc);
      console.log(`✅ ${tool.name} -> ${result._id}`);
      success++;
    } catch (e) {
      console.error(`❌ ${tool.name} 失败:`, e.message);
      fail++;
    }
  }

  console.log(`\n🚀 冲百完成！成功 ${success} 个，失败 ${fail} 个`);
}

run();
