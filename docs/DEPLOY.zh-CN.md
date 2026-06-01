# 部署指南

PromptCraft Studio 是静态应用，任何静态托管平台都可以运行。

## 本地演示

```bash
node server.js
```

访问：

```text
http://localhost:4173
```

## Vercel

- Framework Preset: Other
- Build Command: 留空
- Output Directory: `.`

## Netlify

- Build Command: 留空
- Publish Directory: `.`

## Cloudflare Pages

- Framework preset: None
- Build command: 留空
- Build output directory: `.`

## Docker

```bash
docker build -t promptcraft-studio .
docker run --rm -p 4173:4173 promptcraft-studio
```

## 后续生产化建议

- 接入登录和团队空间
- 使用 SQLite 或 Supabase 存储模板
- 增加定期导出备份
- 为公开模板库增加审核流程
