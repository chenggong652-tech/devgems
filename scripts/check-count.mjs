import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: 'n77v3b7z',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const total = await client.fetch(`count(*[_type == "item"])`)
console.log('当前总工具数:', total);

const categories = await client.fetch(`
  "ai-code-editors": count(*[_type == "item" && references("mG7vmCjaB1vEw3gqUQCcFf")]),
  "ai-pair-programmers": count(*[_type == "item" && references("mG7vmCjaB1vEw3gqUQCcS3")]),
  "llm-apis": count(*[_type == "item" && references("YEARsfayN2fPM1bkBBDxCR")]),
  "ai-app-builders": count(*[_type == "item" && references("mG7vmCjaB1vEw3gqUQCcct")])
`);
console.log('各分类数量:', categories);
