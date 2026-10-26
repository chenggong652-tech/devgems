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

async function checkAllItems() {
  const all = await client.fetch(`*[_type == "item"]`);
  console.log(`All items (any state): ${all.length}`);
  all.forEach((i, idx) => console.log(`${idx+1}. ${i.name} (${i.slug?.current || 'no slug'})`));
}

checkAllItems().catch(console.error);
