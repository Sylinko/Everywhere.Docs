import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  description: "随时随地，智能相伴 - Everwhere",
  themeConfig: {
    nav: [
      { text: '主页', link: '/zh-CN/' },
      { text: '文档', link: '/zh-CN/docs/' },
      { text: '下载', link: '/zh-CN/download/' },
    ],

    notFound: {
      title: '页面未找到',
      quote:
        '我们寻遍了 Everywhere，唯独此处是无人踏足的秘境。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    // zh-CN specific sidebar configuration Start
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          "zh-CN": {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
    // zh-CN specific search configuration End

    sidebar: [
      {
        text: '入门',
        items: [
          { text: '介绍', link: '/zh-CN/docs/getting-started/introduction' },
          { text: '安装', link: '/zh-CN/docs/getting-started/installation' },
          { text: '使用', link: '/zh-CN/docs/getting-started/use' },
          { text: '常见问题', link: '/zh-CN/docs/getting-started/faq' },
        ]
      },
      {
        text: '模型服务商',
        collapsed: true,
        items: [
          { text: 'OpenAI', link: '/zh-CN/model-provider/openai' },
          { text: 'Anthropic (Claude)', link: '/zh-CN/model-provider/anthropic' },
          { text: 'Google (Gemini)', link: '/zh-CN/model-provider/google' },
          { text: 'DeepSeek', link: '/zh-CN/model-provider/deepseek' },
          { text: 'Moonshot (Kimi)', link: '/zh-CN/model-provider/moonshot' },
          { text: 'OpenRouter', link: '/zh-CN/model-provider/openrouter' },
          { text: 'SiliconCloud (硅基流动)', link: '/zh-CN/model-provider/siliconcloud' },
          { text: 'xAI (Grok)', link: '/zh-CN/model-provider/xai' },
          { text: 'Ollama', link: '/zh-CN/model-provider/ollama' },
        ]
      },
      {
        text: '聊天插件',
        items: [
          { text: '网络搜索', link: '/zh-CN/plugins/web-search' },
        ]
      },
    ],

    footer: {
      message: '基于 Apache 2.0 许可发布',
      copyright: `版权所有 © ${new Date().getFullYear()} DearVa, AuroraZiling and contributors.`
    },
  }
})