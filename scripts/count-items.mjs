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

async function countItems() {
  const count = await client.fetch(`count(*[_type == "item" && defined(slug.current) && defined(publishDate)])`);
  console.log(`Total visible items: ${count}`);

  // 列出所有 slug
  const slugs = await client.fetch(`*[_type == "item" && defined(slug.current) && defined(publishDate)] { name, slug }`);
  slugs.forEach((s, i) => console.log(`${i+1}. ${s.name} (${s.slug.current})`));
}

countItems().catch(console.error);
