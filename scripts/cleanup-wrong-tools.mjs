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

async function cleanup() {
  // 找到所有 _type == "tool" 的错误文档
  const wrongDocs = await client.fetch(`*[_type == "tool"]{_id, name}`);
  console.log(`Found ${wrongDocs.length} wrong docs to delete:`);
  wrongDocs.forEach(d => console.log(`  - ${d.name} (${d._id})`));

  // 逐个删除
  for (const doc of wrongDocs) {
    await client.delete(doc._id);
    console.log(`🗑️  Deleted: ${doc.name}`);
  }

  console.log('✅ Cleanup done!');
}

cleanup().catch(e => console.error(e));
