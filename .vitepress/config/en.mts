import { defineConfig } from 'vitepress'

export const en = defineConfig({
  description: "Every moment, Every place. Your AI: Everywhere",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en-US/' },
      { text: 'Docs', link: '/en-US/docs/' },
      { text: 'Download', link: '/en-US/download/' },
      { text: 'About', link: '/en-US/about/' },
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
          { text: 'AI Assistant', link: '/en-US/docs/getting-started/ai-assistant' },
          { text: 'Shortcuts', link: '/en-US/docs/getting-started/shortcuts' },
          { text: 'FAQ', link: '/en-US/docs/getting-started/faq' },
        ]
      },
      {
        text: 'Model Providers',
        items: [
          { text: 'Overview', link: '/en-US/model-provider/' },
          { text: 'OpenAI', link: '/en-US/model-provider/openai' },
          { text: 'Anthropic (Claude)', link: '/en-US/model-provider/anthropic' },
          { text: 'Google (Gemini)', link: '/en-US/model-provider/google' },
          { text: 'DeepSeek', link: '/en-US/model-provider/deepseek' },
          { text: 'Moonshot (Kimi)', link: '/en-US/model-provider/moonshot' },
          { text: 'OpenRouter', link: '/en-US/model-provider/openrouter' },
          { text: 'SiliconCloud (SiliconFlow)', link: '/en-US/model-provider/siliconcloud' },
          { text: 'Ollama', link: '/en-US/model-provider/ollama' },
        ]
      },
      {
        text: 'Plugins',
        items: [
          { text: 'Overview', link: '/en-US/chat-plugins/index' },
          { text: 'Visual Tree', link: '/en-US/chat-plugins/visual-tree' },
          { text: 'Web Browser', link: '/en-US/chat-plugins/web-browser' },
        ]
      },
    ],
  }
})