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

async function publishDrafts() {
  // 找所有草稿类型的 item
  const drafts = await client.fetch(`*[_type match "drafts.item"]`);
  console.log(`Found ${drafts.length} draft items`);

  for (const draft of drafts) {
    console.log(`Publishing: ${draft.name} (${draft.slug?.current})`);
    // 草稿的 _id 是 drafts.xxx，发布的时候要去掉 drafts. 前缀
    const publishedId = draft._id.replace('drafts.', '');
    await client.createOrReplace({
      ...draft,
      _id: publishedId,
      _type: 'item',
    });
    console.log(`✅ Published ${draft.name}`);
  }

  // 再统计
  const count = await client.fetch(`count(*[_type == "item" && defined(slug.current) && defined(publishDate)])`);
  console.log(`\nTotal items now: ${count}`);
}

publishDrafts().catch(console.error);
