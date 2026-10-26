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

async function cleanupBadItems() {
  // 找所有 slug 不是对象的 item（slug 是字符串的坏文档）
  const badItems = await client.fetch(`*[_type == "item" && !defined(slug.current)]`);
  console.log(`Found ${badItems.length} bad items to delete`);

  for (const item of badItems) {
    await client.delete(item._id);
    console.log(`🗑️  Deleted: ${item.name}`);
  }

  console.log('\n✅ Cleanup done!');

  // 再统计
  const count = await client.fetch(`count(*[_type == "item" && defined(slug.current) && defined(publishDate)])`);
  console.log(`Good items now: ${count}`);
}

cleanupBadItems().catch(console.error);
