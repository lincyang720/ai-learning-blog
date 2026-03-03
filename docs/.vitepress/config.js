import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ai-learning-blog/',
  title: 'AI 学习笔记',
  description: 'Linc 的 AI 技术学习与实践',
  srcExclude: ['**/README.md'],
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about/' }
    ],

    sidebar: {
      '/posts/': [
        {
          text: 'AI 基础',
          items: [
            { text: '开始学习', link: '/posts/getting-started' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/linc' }
    ],

    footer: {
      message: 'AI 学习之路',
      copyright: 'Copyright © 2026 Linc'
    }
  }
})
