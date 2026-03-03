# AI 学习博客

基于 VitePress 构建的 AI 技术学习博客。

## 快速开始

### 安装依赖
```bash
npm install
```

### 本地开发
```bash
npm run docs:dev
```

访问 http://localhost:5173 查看博客

### 构建生产版本
```bash
npm run docs:build
```

### 预览生产版本
```bash
npm run docs:preview
```

## 目录结构

```
ai-learning-blog/
├── docs/
│   ├── .vitepress/
│   │   └── config.js      # VitePress 配置
│   ├── posts/             # 文章目录
│   │   ├── index.md       # 文章列表
│   │   └── getting-started.md
│   ├── about/             # 关于页面
│   │   └── index.md
│   └── index.md           # 首页
├── package.json
└── README.md
```

## 写作指南

### 创建新文章

在 `docs/posts/` 目录下创建新的 Markdown 文件:

```markdown
---
title: 文章标题
date: 2026-03-03
author: Linc
tags:
  - AI
  - 标签
---

# 文章标题

文章内容...
```

### 更新侧边栏

编辑 `docs/.vitepress/config.js` 中的 `sidebar` 配置,添加新文章链接。

## 部署

### GitHub Pages

1. 在 GitHub 创建仓库
2. 推送代码到仓库
3. 在仓库设置中启用 GitHub Pages
4. 选择 `gh-pages` 分支作为源

### 自动部署

可以使用 GitHub Actions 自动构建和部署:

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run docs:build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [Vue 3](https://vuejs.org/) - 前端框架
- [Markdown](https://www.markdownguide.org/) - 内容格式

## License

MIT
