// scripts/upload-local-icons.mjs - 从本地 public/logos 上传 logo 到 Sanity
import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import { join } from "path";

dotenv.config({ path: ".env" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const slugs = [
  "cursor",
  "github-copilot",
  "windsurf",
  "claude-3-5-sonnet",
  "gpt-4o",
  "v0-vercel",
  "bolt-new",
  "replit-agent",
  "cline",
  "augment-code",
];

async function main() {
  console.log("🚀 Uploading local icons...");
  for (const slug of slugs) {
    // 查 item
    const item = await client.fetch(
      `*[_type == "item" && slug.current == $slug][0]`,
      { slug }
    );
    if (!item) {
      console.log(`⚠️  Not found: ${slug}`);
      continue;
    }

    // 读本地文件
    const filePath = join(process.cwd(), "public", "logos", `${slug}.png`);
    const buffer = readFileSync(filePath);
    console.log(`📤 ${item.name}: uploading ${buffer.length} bytes...`);

    // 上传到 Sanity
    const asset = await client.assets.upload("image", buffer, {
      filename: `${slug}-logo.png`,
    });

    // 更新 item
    await client
      .patch(item._id)
      .set({
        icon: {
          _type: "image",
          asset: { _type: "reference", _ref: asset._id },
          alt: `${item.name} logo`,
        },
      })
      .commit();

    console.log(`✅ ${item.name}: icon updated`);
  }
  console.log("🎉 Done!");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
