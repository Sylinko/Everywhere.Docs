import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  description: "中文描述",
  themeConfig: {
    nav: [
      { text: '主页', link: '/zh-CN/' },
      { text: '文档', link: '/zh-CN/docs/' }
    ],

    sidebar: [
      {
        text: '入门',
        items: [
          { text: '介绍', link: '/zh-CN/docs/getting-started/introduction' },
          { text: '安装', link: '/zh-CN/docs/getting-started/installation' },
          { text: '启动', link: '/zh-CN/docs/getting-started/launch' },
        ]
      },
    ]
  }
})