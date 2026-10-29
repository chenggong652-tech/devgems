import re

with open('src/lib/tools.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if 'url: "' in line and 'logo: "/logos/' in line:
        # 提取url
        url_match = re.search(r'url: "([^"]+)"', line)
        if url_match:
            url = url_match.group(1)
            from urllib.parse import urlparse
            domain = urlparse(url).hostname
            # 替换logo行
            line = re.sub(r'logo: "/logos/[^"]+"', f'logo: "https://icons.duckduckgo.com/ip3/{domain}.ico"', line)
    new_lines.append(line)

with open('src/lib/tools.ts', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("替换完成")
