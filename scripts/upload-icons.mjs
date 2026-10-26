// scripts/upload-icons.mjs - 批量下载工具 logo 并上传到 Sanity
import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import https from "https";
import { Buffer } from "buffer";

dotenv.config({ path: ".env" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// 每个工具对应的官网域名（用来抓 logo）
const tools = [
  { slug: "cursor", domain: "cursor.sh" },
  { slug: "github-copilot", domain: "github.com" },
  { slug: "windsurf", domain: "windsurf.com" },
  { slug: "claude-3-5-sonnet", domain: "anthropic.com" },
  { slug: "gpt-4o", domain: "openai.com" },
  { slug: "v0-vercel", domain: "v0.dev" },
  { slug: "bolt-new", domain: "bolt.new" },
  { slug: "replit-agent", domain: "replit.com" },
  { slug: "cline", domain: "cline.bot" },
  { slug: "augment-code", domain: "augmentcode.com" },
];

function downloadLogo(domain) {
  return new Promise(async (resolve, reject) => {
    try {
      const url = `https://www.google.com/s2/favicons?domain=${domain}&sz=256`;
      const res = await fetch(url);
      if (!res.ok) {
        reject(new Error(`HTTP ${res.status} for ${domain}`));
        return;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      resolve(buf);
    } catch (e) {
      reject(e);
    }
  });
}

async function uploadIcon(itemSlug, domain) {
  // 查 item
  const item = await client.fetch(
    `*[_type == "item" && slug.current == $slug][0]`,
    { slug: itemSlug }
  );
  if (!item) {
    console.log(`⚠️  Item not found: ${itemSlug}`);
    return;
  }

  // 下载 logo
  console.log(`📥 Downloading logo for ${domain}...`);
  const buffer = await downloadLogo(domain);

  // 上传到 Sanity
  console.log(`📤 Uploading to Sanity...`);
  const asset = await client.assets.upload("image", buffer, {
    filename: `${itemSlug}-logo.png`,
  });

  // 更新 item 的 icon 字段
  await client
    .patch(item._id)
    .set({
      icon: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
        alt: `${item.name} logo`,
      },
    })
    .commit();

  console.log(`✅ ${item.name}: icon updated`);
}

async function main() {
  console.log("🚀 Starting icon upload...");
  for (const t of tools) {
    try {
      await uploadIcon(t.slug, t.domain);
    } catch (err) {
      console.error(`❌ Failed for ${t.slug}:`, err.message);
    }
  }
  console.log("🎉 Done!");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
