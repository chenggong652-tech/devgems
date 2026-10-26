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
    name: 'VS Code',
    slug: { _type: 'slug', current: 'vs-code' },
    description: 'The most popular code editor in the world, with rich AI extensions support.',
    link: 'https://code.visualstudio.com',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Visual Studio Code is Microsofts free, open-source code editor. It supports thousands of extensions including GitHub Copilot, Codeium, and Continue, making it the most customizable AI coding environment.',
  },
  {
    name: 'JetBrains AI',
    slug: { _type: 'slug', current: 'jetbrains-ai' },
    description: 'Built-in AI assistant for all JetBrains IDEs (IntelliJ, PyCharm, WebStorm).',
    link: 'https://www.jetbrains.com/ai/',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'JetBrains AI is natively integrated into all JetBrains IDEs, providing code completion, chat, and commit message generation without needing third-party plugins.',
  },
  {
    name: 'Eclipse AI',
    slug: { _type: 'slug', current: 'eclipse-ai' },
    description: 'Eclipse IDE with AI coding plugins for Java and enterprise development.',
    link: 'https://www.eclipse.org',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Eclipse is a popular open-source IDE especially for Java and enterprise development. It supports AI plugins like Eclipse Code Recommenders and GitHub Copilot.',
  },

  // AI Pair Programmers (加 6 个)
  {
    name: 'Tabnine',
    slug: { _type: 'slug', current: 'tabnine' },
    description: 'AI code completion that prioritizes privacy and code privacy.',
    link: 'https://www.tabnine.com',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Tabnine is an AI coding assistant focused on privacy. It offers enterprise-grade code completion with options to run models locally, so your code never leaves your machine.',
  },
  {
    name: 'Amazon CodeWhisperer',
    slug: { _type: 'slug', current: 'amazon-codewhisperer' },
    description: 'Free AI coding assistant from Amazon, optimized for AWS development.',
    link: 'https://aws.amazon.com/codewhisperer/',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Amazon CodeWhisperer is a free AI coding assistant that generates code suggestions in real time. It is especially useful for AWS development and includes built-in security scanning.',
  },
  {
    name: 'Cody by Sourcegraph',
    slug: { _type: 'slug', current: 'cody-sourcegraph' },
    description: 'AI coding assistant that knows your entire codebase.',
    link: 'https://sourcegraph.com/cody',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Cody by Sourcegraph uses codebase context to provide more accurate answers and code suggestions. It can search across your entire repository to explain code and find bugs.',
  },
  {
    name: 'Continue',
    slug: { _type: 'slug', current: 'continue-dev' },
    description: 'Open-source AI coding assistant you can fully customize.',
    link: 'https://www.continue.dev',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Continue is an open-source AI coding assistant for VS Code and JetBrains. You can connect it to any LLM (local or cloud) and fully customize its behavior to match your workflow.',
  },
  {
    name: 'Warp Terminal AI',
    slug: { _type: 'slug', current: 'warp-terminal-ai' },
    description: 'Modern terminal with built-in AI command generation and debugging.',
    link: 'https://www.warp.dev',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Warp is a reimagined terminal built for developers. Its AI features can generate commands from natural language, explain errors, and suggest fixes.',
  },
  {
    name: 'GitLab Duo',
    slug: { _type: 'slug', current: 'gitlab-duo' },
    description: 'AI-powered GitLab assistant for code review and CI/CD.',
    link: 'https://about.gitlab.com/gitlab-duo/',
    pricePlan: 'paid',
    freePlanStatus: false,
    publishDate: today,
    forceHidden: false,
    introduction: 'GitLab Duo is GitLabs built-in AI assistant. It helps with code suggestions, code review summaries, and even generates CI/CD pipeline configurations.',
  },

  // LLM APIs (加 6 个)
  {
    name: 'GPT-4o',
    slug: { _type: 'slug', current: 'gpt-4o' },
    description: 'OpenAIs flagship multimodal model, excellent for coding and reasoning.',
    link: 'https://openai.com/gpt-4o',
    pricePlan: 'paid',
    freePlanStatus: false,
    publishDate: today,
    forceHidden: false,
    introduction: 'GPT-4o (omni) is OpenAIs most advanced multimodal model. It is very fast and capable of understanding images, audio, and text, making it great for complex coding tasks.',
  },
  {
    name: 'Claude 3.5 Sonnet',
    slug: { _type: 'slug', current: 'claude-3-5-sonnet' },
    description: 'Anthropics best balance of speed, cost, and coding intelligence.',
    link: 'https://www.anthropic.com/claude',
    pricePlan: 'paid',
    freePlanStatus: false,
    publishDate: today,
    forceHidden: false,
    introduction: 'Claude 3.5 Sonnet is widely regarded as one of the best coding models. It has a very large context window and excels at code refactoring and long-context understanding.',
  },
  {
    name: 'Gemini 1.5 Pro',
    slug: { _type: 'slug', current: 'gemini-1-5-pro' },
    description: 'Googles multimodal model with a 1M token context window.',
    link: 'https://deepmind.google/technologies/gemini/',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Gemini 1.5 Pro from Google DeepMind supports up to 1 million tokens of context, which means you can feed it an entire codebase and ask questions about it.',
  },
  {
    name: 'DeepSeek Coder',
    slug: { _type: 'slug', current: 'deepseek-coder' },
    description: 'Open-source code model that rivals GPT-4 on coding benchmarks.',
    link: 'https://www.deepseek.com',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'DeepSeek Coder is an open-source code model that achieves near GPT-4 level performance on coding benchmarks. It can be self-hosted for free.',
  },
  {
    name: 'StarCoder2',
    slug: { _type: 'slug', current: 'starcoder2' },
    description: 'Open-source code model from Hugging Face and ServiceNow.',
    link: 'https://huggingface.co/bigcode/starcoder2-15b',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'StarCoder2 is an open-source code model trained on 61 programming languages. It is a great option for developers who want to run a coding LLM locally.',
  },
  {
    name: 'CodeLlama',
    slug: { _type: 'slug', current: 'codellama' },
    description: 'Metas open-source code model based on Llama 2.',
    link: 'https://ai.meta.com/blog/codellama/',
    pricePlan: 'free',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'CodeLlama is Metas open-source large language model fine-tuned for coding. It supports infilling and can be run locally on consumer GPUs.',
  },

  // AI App Builders (加 5 个)
  {
    name: 'Bolt.new',
    slug: { _type: 'slug', current: 'bolt-new' },
    description: 'Build and deploy full-stack web apps directly in your browser with AI.',
    link: 'https://bolt.new',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Bolt.new lets you describe an app in plain English and it generates, runs, and deploys the full-stack code in the browser. Perfect for prototyping ideas quickly.',
  },
  {
    name: 'v0 by Vercel',
    slug: { _type: 'slug', current: 'v0-vercel' },
    description: 'Vercels AI UI generator that creates React components from prompts.',
    link: 'https://v0.dev',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'v0 by Vercel generates production-ready React and Tailwind CSS components from natural language prompts. It is very popular among frontend developers for speeding up UI work.',
  },
  {
    name: 'Framer AI',
    slug: { _type: 'slug', current: 'framer-ai' },
    description: 'AI-powered website builder for creating polished landing pages.',
    link: 'https://www.framer.com/ai-website-builder/',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Framer AI is a no-code website builder that can generate entire landing pages from a text prompt. It is popular for startups and marketers who need a polished site quickly.',
  },
  {
    name: 'Webflow AI',
    slug: { _type: 'slug', current: 'webflow-ai' },
    description: 'AI features built into the popular Webflow visual development platform.',
    link: 'https://webflow.com',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Webflow is a visual development platform that lets you build responsive websites without writing code. Its AI features help generate copy and speed up design tasks.',
  },
  {
    name: 'Bubble AI',
    slug: { _type: 'slug', current: 'bubble-ai' },
    description: 'AI-powered no-code platform for building web applications.',
    link: 'https://bubble.io',
    pricePlan: 'freemium',
    freePlanStatus: true,
    publishDate: today,
    forceHidden: false,
    introduction: 'Bubble is one of the oldest and most powerful no-code platforms. With its new AI features, you can build complex web applications by describing what you want.',
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
        // 分类后面手动在Studio里加，或者我们直接写category reference
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
