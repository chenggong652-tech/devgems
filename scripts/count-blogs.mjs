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

async function run() {
  const blogs = await client.fetch(`*[_type == "blogPost"] { title, "slug": slug.current, _createdAt } | order(_createdAt desc)`);
  console.log(`总共有 ${blogs.length} 篇博客：`);
  blogs.forEach((b, i) => console.log(`${i+1}. ${b.title}`));
}

run();
