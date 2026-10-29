import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-06-07',
  useCdn: false,
});

async function run() {
  console.log('发布所有博客...');
  const blogs = await client.fetch(`*[_type == "blogPost"]._id`);
  console.log(`找到 ${blogs.length} 篇博客，开始发布...`);
  for (const id of blogs) {
    await client.publish(id);
    console.log(`✅ ${id} 发布成功`);
  }
  console.log('\n🎉 全部博客发布完成！');
}

run();
