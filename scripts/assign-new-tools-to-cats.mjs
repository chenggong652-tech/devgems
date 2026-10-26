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

// 新加的工具要关联到哪个分类
const newToolCategories = {
  'ai-pair-programmers': ['devin', 'amazon-q', 'cody', 'tabnine', 'continue-dev'],
  'llm-apis': ['gemini-pro', 'deepseek-v3', 'llama-3-1', 'mistral-large', 'groq'],
  'ai-app-builders': ['lovable', 'framer-ai', 'bubble-ai'],
};

async function main() {
  console.log('🏷️  Assigning new tools to categories...');

  for (const [catSlug, toolSlugs] of Object.entries(newToolCategories)) {
    // 找到分类
    const cat = await client.fetch(`*[_type == "category" && slug.current == $slug][0]`, {
      slug: catSlug,
    });

    if (!cat) {
      console.log(`❌ Category not found: ${catSlug}`);
      continue;
    }

    console.log(`\n📁 ${cat.name}:`);

    for (const toolSlug of toolSlugs) {
      // 找到工具
      const item = await client.fetch(`*[_type == "item" && slug.current == $slug][0]`, {
        slug: toolSlug,
      });

      if (!item) {
        console.log(`  ⚠️  Tool not found: ${toolSlug}`);
        continue;
      }

      // 检查是否已经关联过
      const existingCats = (item.categories || []).map(c => c._ref);
      if (existingCats.includes(cat._id)) {
        console.log(`  ⏭️  ${item.name} already in ${cat.name}`);
        continue;
      }

      // 关联分类
      await client
        .patch(item._id)
        .setIfMissing({ categories: [] })
        .append('categories', [{ _type: 'reference', _ref: cat._id }])
        .commit();

      console.log(`  ✅ ${item.name} -> ${cat.name}`);
    }
  }

  console.log('\n🎉 Done!');
}

main().catch(console.error);
