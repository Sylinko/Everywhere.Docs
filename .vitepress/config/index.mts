import { defineConfig } from 'vitepress'
import { shared } from './shared.mts'
import { en } from './en.mts'
import { zh } from './zh.mts'
import tailwindcss from "@tailwindcss/vite"
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  locales: {
    'en-US': {
      lang: 'en-US',
      label: 'English',
      title: 'Everywhere',
      dir: 'en-US',
      ...en
    },
    'zh-CN': {
      lang: 'zh-CN',
      label: '简体中文',
      title: 'Everywhere',
      dir: 'zh-CN',
      ...zh
    }
  },
  vite: {
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
        '@nolebase/vitepress-plugin-inline-link-preview/client', 
        'vitepress', 
        '@nolebase/ui', 
      ], 
    },
    ssr: { 
      noExternal: [ 
        // If there are other packages that need to be processed by Vite, you can add them here.
        '@nolebase/vitepress-plugin-inline-link-preview', 
        '@nolebase/vitepress-plugin-highlight-targeted-heading', 
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
        '@nolebase/ui', 
      ], 
    }, 
    plugins: [tailwindcss()],
  },
  markdown: {
    config: (md) => {
      md.use(BiDirectionalLinks()) 
      md.use(InlineLinkPreviewElementTransform) 
    },
  },
})

