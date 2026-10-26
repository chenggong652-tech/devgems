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

async function addAuthor() {
  // 找到所有用户
  const users = await client.fetch(`*[_type == "user"]{_id, name, email}`);
  console.log('Users:', users);

  if (users.length === 0) {
    console.log('No users found!');
    return;
  }

  const authorId = users[0]._id;
  console.log('Using author:', users[0].name, authorId);

  // 更新文章
  const post = await client.fetch(`*[_type == "blogPost" && slug.current == "best-ai-coding-tools-2026"][0]`);
  await client.patch(post._id).set({
    author: { _type: 'reference', _ref: authorId }
  }).commit();

  console.log('✅ Author added!');
}

addAuthor().catch(console.error);
