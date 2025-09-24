import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: "Everywhere",

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'google-site-verification', content: '_vNAIrbnMzmzFhIUC2dWVCycGikEcoRlWOcVESkdb5o' }],
  ],
  
  sitemap: {
    hostname: 'https://everywhere.nekora.dev'
  },
  lastUpdated: true,

  themeConfig: {
    logo: { src: '/favicon.ico', width: 24, height: 24 },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DearVa/Everywhere' },
      { icon: 'discord', link: 'https://discord.gg/5fyg6nE3yn' },
      { icon: 'qq', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=wp9aDBBnLc7pYATqT99tB-N2ZP2ETmJC&jump_from=webapi&authKey=97qUJfsQoI70dUNcgBZ0C3HCZeiEn8inLT7pzg8x+KinbQwfIrHFu3dB2+aHMbRD' }
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