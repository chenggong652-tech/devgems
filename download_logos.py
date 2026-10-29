import os
import re
import requests
from urllib.parse import urlparse

# 读取tools.ts
with open('src/lib/tools.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 提取所有工具
tools = []
pattern = re.compile(r'{ name: "([^"]+)", slug: "([^"]+)", url: "([^"]+)".*?logo: "([^"]+)"', re.DOTALL)
for m in pattern.finditer(content):
    name, slug, url, logo = m.groups()
    tools.append((slug, url))

print(f"共{len(tools)}个工具")

proxies = {
    'http': 'http://127.0.0.1:7892',
    'https': 'http://127.0.0.1:7892',
}

os.makedirs('public/logos', exist_ok=True)
success = 0
fail = 0

for slug, url in tools:
    out_path = f'public/logos/{slug}.png'
    if os.path.exists(out_path) and os.path.getsize(out_path) > 1000:
        success +=1
        continue
    try:
        domain = urlparse(url).hostname
        fav_url = f'https://www.google.com/s2/favicons?domain={domain}&sz=128'
        r = requests.get(fav_url, proxies=proxies, timeout=15)
        if r.status_code == 200 and len(r.content) > 500:
            with open(out_path, 'wb') as f:
                f.write(r.content)
            success +=1
            if success % 20 ==0:
                print(f"进度: {success}/{len(tools)}")
        else:
            fail +=1
            print(f"失败: {slug}, size={len(r.content)}")
    except Exception as e:
        fail +=1
        print(f"错误: {slug} - {e}")

print(f"完成! 成功{success}, 失败{fail}")
