import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const client = createClient({
  projectId: 'n77v3b7z',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const allDrafts = await client.fetch(`*[_type == "item" && !defined(name)]{_id}`)
console.log('空草稿数量:', allDrafts.length, allDrafts.slice(0,10))
