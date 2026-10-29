const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// 读取tools.ts
const toolsContent = fs.readFileSync(path.join(__dirname, 'src/lib/tools.ts'), 'utf8');
// 提取所有tool对象的slug和url
const toolRegex = /{ name: "([^"]+)", slug: "([^"]+)", url: "([^"]+)"/g;
let match;
const tools = [];
while ((match = toolRegex.exec(toolsContent)) !== null) {
  tools.push({ name: match[1], slug: match[2], url: match[3] });
}

console.log(`找到${tools.length}个工具，开始下载logo...`);

// 走本地代理
const proxy = {
  host: '127.0.0.1',
  port: 7892
};

let done = 0;
tools.forEach(tool => {
  try {
    const domain = new URL(tool.url).hostname;
    const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    const outPath = path.join(__dirname, 'public/logos', `${tool.slug}.png`);
    
    // 已经存在就跳过
    if (fs.existsSync(outPath)) {
      done++;
      if (done % 20 === 0) console.log(`进度: ${done}/${tools.length}`);
      return;
    }

    const options = new URL(faviconUrl);
    options.agent = new http.Agent({
      host: proxy.host,
      port: proxy.port
    });

    const req = https.get(options, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(outPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          done++;
          if (done % 20 === 0) console.log(`进度: ${done}/${tools.length}`);
        });
      } else {
        console.log(`下载失败: ${tool.name}, 状态码: ${res.statusCode}`);
        done++;
      }
    });
    req.on('error', (e) => {
      console.log(`下载出错: ${tool.name} - ${e.message}`);
      done++;
    });
    req.setTimeout(10000, () => {
      req.destroy();
      done++;
    });
  } catch (e) {
    console.log(`处理${tool.name}出错: ${e.message}`);
    done++;
  }
});

setTimeout(() => {
  console.log(`全部完成！成功下载${done}个logo到public/logos`);
}, 60000);
