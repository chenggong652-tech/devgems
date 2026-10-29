import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { execSync } from 'child_process';
import fs from 'fs';
import os from 'os';

dotenv.config({ path: '.env' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function run() {
  console.log('查询所有没有icon的工具...');
  const items = await client.fetch(`*[_type == "item" && !defined(icon)] { _id, name, link, "slug": slug.current }`);
  console.log(`找到 ${items.length} 个没有图标的工具，开始批量补图标...\n`);

  let success = 0;
  let fail = 0;

  for (const item of items) {
    if (!item.link) {
      console.log(`⚠️  ${item.name} 没有link，跳过`);
      fail++;
      continue;
    }
    try {
      const url = new URL(item.link);
      const domain = url.hostname;
      console.log(`处理 ${item.name} -> ${domain}`);

      const tmpFile = os.tmpdir() + `/favicon-${item.slug}.png`;
      const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

      // 用curl下载，走代理
      execSync(`curl.exe -L -s -o "${tmpFile}" "${faviconUrl}"`, {
        env: { ...process.env, HTTPS_PROXY: 'http://127.0.0.1:7892' }
      });

      if (!fs.existsSync(tmpFile) || fs.statSync(tmpFile).size < 100) {
        throw new Error('favicon文件太小，下载失败');
      }

      const imageBuffer = fs.readFileSync(tmpFile);

      // 上传到Sanity
      const asset = await client.assets.upload('image', imageBuffer, {
        filename: `${item.slug}-icon.png`,
      });
      console.log(`  ✅ 上传成功: ${asset._id}`);

      // 更新item的icon字段
      await client.patch(item._id).set({
        icon: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: asset._id,
          },
          alt: `${item.name} logo`,
        },
      }).commit();
      console.log(`  ✅ 关联成功\n`);
      success++;

      // 删除临时文件
      fs.unlinkSync(tmpFile);
    } catch (e) {
      console.error(`  ❌ 失败: ${e.message}\n`);
      fail++;
    }
  }

  console.log(`\n🎉 完成！成功 ${success} 个，失败 ${fail} 个`);
}

run();
