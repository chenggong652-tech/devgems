$toolsContent = Get-Content -Raw -LiteralPath "src/lib/tools.ts"
$matches = [regex]::Matches($toolsContent, 'slug: "([^"]+)", url: "([^"]+)"')
$dir = "public/logos"
New-Item -ItemType Directory -Force -Path $dir | Out-Null

$success = 0
$fail = 0
foreach ($m in $matches) {
    $slug = $m.Groups[1].Value
    $url = $m.Groups[2].Value
    $out = "$dir/$slug.png"
    if ((Test-Path $out) -and ((Get-Item $out).Length -gt 1000)) {
        $success++
        continue
    }
    try {
        $domain = ([Uri]$url).Host
        $favUrl = "https://www.google.com/s2/favicons?domain=$domain&sz=128"
        Invoke-WebRequest -Uri $favUrl -OutFile $out -Proxy "http://127.0.0.1:7890" -TimeoutSec 15 -UseBasicParsing
        if ((Get-Item $out).Length -gt 500) {
            $success++
            if ($success % 20 -eq 0) { Write-Host "进度: $success / $($matches.Count)" }
        } else {
            $fail++
        }
    } catch {
        $fail++
        Write-Host "失败: $slug - $($_.Exception.Message)"
    }
}
Write-Host "完成! 成功: $success, 失败: $fail"
