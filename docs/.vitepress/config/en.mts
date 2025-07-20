import { defineConfig } from 'vitepress'

export const en = defineConfig({
  description: "Seamless AI Assistant that brings your Favorite LLM in Every app, Every time, Every where.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en-US/' },
      { text: 'Docs', link: '/en-US/docs/' }
    ],

    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: 'Introduction', link: '/en-US/docs/getting-started/introduction' },
          { text: 'Installation', link: '/en-US/docs/getting-started/installation' },
          { text: 'Launch', link: '/en-US/docs/getting-started/launch' },
        ]
      },
    ]
  }
})