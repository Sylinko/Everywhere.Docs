import { defineConfig } from 'vitepress'

export const en = defineConfig({
  description: "Every moment, Every place. Your AI: Everywhere",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en-US/' },
      { text: 'Docs', link: '/en-US/docs/' }
    ],

    notFound: {
      title: 'Not Found',
      quote:
        'We searched Everywhere, but this place remains untouched.',
      linkLabel: 'Go to Home',
      linkText: 'Take me home'
    },

    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: 'Introduction', link: '/en-US/docs/getting-started/introduction' },
          { text: 'Installation', link: '/en-US/docs/getting-started/installation' },
          { text: 'Use', link: '/en-US/docs/getting-started/use' },
        ]
      },
      {
        text: 'Model Providers',
        collapsed: true,
        items: [
          { text: 'OpenAI', link: '/en-US/model-provider/openai' },
          { text: 'Anthropic (Claude)', link: '/en-US/model-provider/anthropic' },
          { text: 'Google (Gemini)', link: '/en-US/model-provider/google' },
          { text: 'DeepSeek', link: '/en-US/model-provider/deepseek' },
          { text: 'Moonshot (Kimi)', link: '/en-US/model-provider/moonshot' },
          { text: 'OpenRouter', link: '/en-US/model-provider/openrouter' },
          { text: 'SiliconCloud (SiliconFlow)', link: '/en-US/model-provider/siliconcloud' },
          // { text: 'Ollama', link: '/en-US/model-provider/ollama' },
        ]
      },
      {
        text: 'Plugins',
        collapsed: true,
        items: [
          { text: 'Web Search', link: '/en-US/plugins/web-search' },
        ]
      },
    ],

    footer: {
      message: 'Released under the Apache 2.0 License.',
      copyright: `Copyright © ${new Date().getFullYear()} DearVa, AuroraZiling and contributors. All rights reserved.`
    },
  }
})