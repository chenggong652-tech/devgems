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
    name: 'Cursor Web',
    slug: { _type: 'slug', current: 'cursor-web' },
    description: 'Cloud version of Cursor, code from any browser.',
    link: 'https://cursor.com',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Cursor Web lets you code in the cloud without installing anything. Your projects are always synced, and you can switch between local and cloud editing seamlessly.',
  },
  {
    name: 'CodeSandbox',
    slug: { _type: 'slug', current: 'codesandbox' },
    description: 'Online IDE for rapid frontend prototyping with AI features.',
    link: 'https://codesandbox.io',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'CodeSandbox is a browser-based IDE built for frontend developers. It supports React, Vue, and many frameworks, and has built-in AI features for generating components.',
  },
  {
    name: 'StackBlitz',
    slug: { _type: 'slug', current: 'stackblitz' },
    description: 'Instant online dev environment powered by WebContainers.',
    link: 'https://stackblitz.com',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'StackBlitz runs Node.js directly in your browser using WebContainers. It starts up instantly and is perfect for quick demos and prototypes.',
  },

  // AI Pair Programmers (加 6 个)
  {
    name: 'Amazon Q Developer',
    slug: { _type: 'slug', current: 'amazon-q-developer' },
    description: 'Formerly CodeWhisperer, rebranded as Amazon Q for devs.',
    link: 'https://aws.amazon.com/q/developer/',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Amazon Q Developer is the rebranded version of CodeWhisperer. It goes beyond code completion to help with AWS debugging, infrastructure as code, and best practices.',
  },
  {
    name: 'GitMate',
    slug: { _type: 'slug', current: 'gitmate' },
    description: 'AI assistant for pull request reviews and git workflows.',
    link: 'https://gitmate.com',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'GitMate is an AI bot that reviews your pull requests automatically, points out bugs and style issues, and even suggests improvements.',
  },
  {
    name: 'CodeRabbit',
    slug: { _type: 'slug', current: 'coderabbit' },
    description: 'AI-powered code review assistant for GitHub and GitLab.',
    link: 'https://coderabbit.ai',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'CodeRabbit is an AI code review bot that leaves line-by-line comments on your PRs. It catches bugs early and saves senior developers time.',
  },
  {
    name: 'Ellipsis',
    slug: { _type: 'slug', current: 'ellipsis' },
    description: 'AI that fixes issues and implements features in your repo.',
    link: 'https://ellipsis.dev',
    pricePlan: 'paid',
    freePlanStatus: false,
    publishDate: today,
    forceHidden: false,
    introduction: 'Ellipsis is an AI dev team member. You can assign it GitHub issues and it will open pull requests with working code.',
  },
  {
    name: 'Sweep AI',
    slug: { _type: 'slug', current: 'sweep-ai' },
    description: 'AI junior developer that turns GitHub issues into PRs.',
    link: 'https://sweep.dev',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Sweep is an AI junior dev that reads your GitHub issues, explores your codebase, and opens pull requests implementing the feature.',
  },
  {
    name: 'Mentat',
    slug: { _type: 'slug', current: 'mentat-ai' },
    description: 'Open-source AI coding assistant for your terminal.',
    link: 'https://mentat.ai',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Mentat is an open-source terminal-based AI coding assistant similar to Aider. It works with Git and supports any OpenAI-compatible model.',
  },

  // LLM APIs (加 6 个)
  {
    name: 'GPT-4 Turbo',
    slug: { _type: 'slug', current: 'gpt-4-turbo' },
    description: 'Older but still powerful OpenAI model, cheaper than GPT-4o.',
    link: 'https://openai.com',
    pricePlan: 'paid',
    freePlanStatus: false,
    publishDate: today,
    forceHidden: false,
    introduction: 'GPT-4 Turbo was OpenAIs flagship before GPT-4o. It is cheaper and still very capable for most coding tasks, making it a cost-effective choice.',
  },
  {
    name: 'Claude 3 Opus',
    slug: { _type: 'slug', current: 'claude-3-opus' },
    description: 'Anthropics most powerful model, best for complex reasoning.',
    link: 'https://www.anthropic.com/claude',
    pricePlan: 'paid',
    freePlanStatus: false,
    publishDate: today,
    forceHidden: false,
    introduction: 'Claude 3 Opus is Anthropics largest and most capable model. It excels at the hardest reasoning and coding tasks, but it is also the most expensive.',
  },
  {
    name: 'Gemini 1.5 Flash',
    slug: { _type: 'slug', current: 'gemini-1-5-flash' },
    description: 'Googles fast and cheap multimodal model.',
    link: 'https://deepmind.google/technologies/gemini/',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Gemini 1.5 Flash is Googles lightweight, fast, and cheap model. It is perfect for high-volume coding tasks where speed and cost matter more than peak quality.',
  },
  {
    name: 'Mistral Large',
    slug: { _type: 'slug', current: 'mistral-large' },
    description: 'Flagship model from French AI company Mistral AI.',
    link: 'https://mistral.ai',
    pricePlan: 'paid',
    freePlanStatus: false,
    publishDate: today,
    forceHidden: false,
    introduction: 'Mistral Large is the flagship model from European AI startup Mistral. It is fast, supports many languages, and has strong coding abilities.',
  },
  {
    name: 'Llama 3 Code',
    slug: { _type: 'slug', current: 'llama-3-code' },
    description: 'Metas latest open-source code model.',
    link: 'https://ai.meta.com/blog/llama-3/',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Llama 3 Code is Metas latest open-source coding model. It can be self-hosted and rivals closed models on many benchmarks.',
  },
  {
    name: 'Grok Code',
    slug: { _type: 'slug', current: 'grok-code' },
    description: 'X.AIs coding model with real-time knowledge.',
    link: 'https://x.ai',
    pricePlan: 'paid',
    freePlanStatus: false,
    publishDate: today,
    forceHidden: false,
    introduction: 'Grok Code is X.AIs coding model, known for its real-time access to the latest information from X (Twitter).',
  },

  // AI App Builders (加 5 个)
  {
    name: 'Aceternity UI',
    slug: { _type: 'slug', current: 'aceternity-ui' },
    description: 'Copy-paste animated React components powered by AI.',
    link: 'https://ui.aceternity.com',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Aceternity UI provides beautiful animated React components that you can copy and paste into your project. It is very popular for building modern landing pages fast.',
  },
  {
    name: 'Shadcn UI',
    slug: { _type: 'slug', current: 'shadcn-ui' },
    description: 'The most popular UI component library for modern React apps.',
    link: 'https://ui.shadcn.com',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Shadcn UI is not a traditional component library - it gives you the source code to copy and customize. It has become the default for modern Next.js apps.',
  },
  {
    name: 'Cursor Builder',
    slug: { _type: 'slug', current: 'cursor-builder' },
    description: 'Build and deploy full-stack apps directly from Cursor.',
    link: 'https://cursor.com',
    pricePlan: 'paid',
    freePlanStatus: false,
    publishDate: today,
    forceHidden: false,
    introduction: 'Cursor Builder lets you deploy your app directly from the editor without setting up hosting. It handles build, deploy, and custom domains.',
  },
  {
    name: 'Make AI',
    slug: { _type: 'slug', current: 'make-ai' },
    description: 'No-code automation platform with AI agents built in.',
    link: 'https://www.make.com/en/ai',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Make is a popular no-code automation platform. Its AI features let you build workflows with AI agents that can reason and take actions.',
  },
  {
    name: 'Zapier AI',
    slug: { _type: 'slug', current: 'zapier-ai' },
    description: 'AI automation that connects 8000+ apps.',
    link: 'https://zapier.com/ai',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Zapier is the most popular automation platform. Its AI features let you describe what you want to automate in plain English and it builds the workflow for you.',
  },
];

async function run() {
  console.log(`准备灌入 ${newTools.length} 个工具...`);
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

  console.log(`\n完成！成功 ${success} 个，失败 ${fail} 个`);
}

run();
