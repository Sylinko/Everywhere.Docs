import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: "Everywhere",

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    logo: { src: '/favicon.ico', width: 24, height: 24 },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DearVa/Everywhere' }
    ],
    search: {   
      provider: 'local',
      options: {
        locales: {
          zh: {
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
    }
  }
})