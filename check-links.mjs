import { tools } from "./src/lib/tools";

async function checkLinks() {
  const broken: string[] = [];
  for (const tool of tools) {
    try {
      const res = await fetch(tool.url, { method: "HEAD", redirect: "follow", signal: AbortSignal.timeout(5000) });
      if (!res.ok && res.status >= 400) {
        broken.push(`${tool.name}: ${tool.url} (status ${res.status})`);
      }
    } catch (e) {
      broken.push(`${tool.name}: ${tool.url} (error: ${(e as Error).message})`);
    }
  }
  console.log("检查完成，共检查", tools.length, "个工具");
  console.log("死链接数量:", broken.length);
  broken.forEach(b => console.log(" -", b));
}

checkLinks();
