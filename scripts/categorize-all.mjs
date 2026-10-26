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

// 分类ID
const CATEGORIES = {
  editors: 'mG7vmCjaB1vEw3gqUQCcFf',
  pair: 'mG7vmCjaB1vEw3gqUQCcS3',
  llm: 'YEARsfayN2fPM1bkBBDxCR',
  builders: 'mG7vmCjaB1vEw3gqUQCcct',
};

// 每个分类对应的工具slug列表
const toolsByCategory = {
  [CATEGORIES.editors]: [
    'zed-ai', 'neovim-ai', 'sublime-text-ai',
    'vs-code', 'jetbrains-ai', 'eclipse-ai',
    'cursor-web', 'codesandbox', 'stackblitz',
    'emacs-ai', 'nova-editor', 'pulsar-editor',
  ],
  [CATEGORIES.pair]: [
    'replit-ai', 'codeium', 'aider',
    'tabnine', 'amazon-codewhisperer', 'cody-sourcegraph', 'continue-dev', 'warp-terminal-ai', 'gitlab-duo',
    'amazon-q-developer', 'gitmate', 'coderabbit', 'ellipsis', 'sweep-ai', 'mentat-ai',
    'supermaven', 'codegen', 'mutable-ai', 'tabnine-chat', 'codeium-chat',
  ],
  [CATEGORIES.llm]: [
    'gpt-4o', 'claude-3-5-sonnet', 'gemini-1-5-pro', 'deepseek-coder', 'starcoder2', 'codellama',
    'gpt-4-turbo', 'claude-3-opus', 'gemini-1-5-flash', 'mistral-large', 'llama-3-code', 'grok-code',
    'gpt-35-turbo', 'claude-3-haiku', 'gemini-1-5-nano', 'mistral-7b', 'phi-3',
  ],
  [CATEGORIES.builders]: [
    'bolt-new', 'v0-vercel', 'framer-ai', 'webflow-ai', 'bubble-ai',
    'aceternity-ui', 'shadcn-ui', 'cursor-builder', 'make-ai', 'zapier-ai',
    'bolt-ai', 'lovable', 'websim-ai', 'durable-ai',
  ],
};

async function run() {
  console.log('开始批量分类...');
  let success = 0;
  let fail = 0;

  for (const [categoryId, slugs] of Object.entries(toolsByCategory)) {
    console.log(`\n处理分类 ${categoryId}，共 ${slugs.length} 个工具...`);
    for (const slug of slugs) {
      try {
        // 查找这个工具
        const tool = await client.fetch(`*[_type == "item" && slug.current == $slug][0]`, { slug });
        if (!tool) {
          console.log(`⚠️  ${slug} 没找到`);
          continue;
        }
        // 更新它的category
        await client.patch(tool._id).set({ category: { _type: 'reference', _ref: categoryId } }).commit();
        console.log(`✅ ${slug} -> 分类成功`);
        success++;
      } catch (e) {
        console.error(`❌ ${slug} 失败:`, e.message);
        fail++;
      }
    }
  }

  console.log(`\n🎉 分类完成！成功 ${success} 个，失败 ${fail} 个`);
}

run();
