import { defineConfig } from 'vitepress'
import { shared } from './shared.mts'
import { en } from './en.mts'
import { zh } from './zh.mts'
import tailwindcss from "@tailwindcss/vite";

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
        'vitepress', 
      ], 
    },
    plugins: [tailwindcss()],
  },
})

