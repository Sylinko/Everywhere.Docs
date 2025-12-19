import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import "./tailwind.css";
import { NolebaseInlineLinkPreviewPlugin } from '@nolebase/vitepress-plugin-inline-link-preview/client'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: any }) { 
    app.use(NolebaseInlineLinkPreviewPlugin) 
  },
  Layout
}