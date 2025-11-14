// .vitepress/config/index.mts
import { defineConfig as defineConfig4 } from "file:///C:/CodeSpace/Sylinko/Everywhere.Docs/node_modules/.pnpm/vitepress@1.6.4_@algolia+cl_3ae19b7de3a2d637083892e1e3d47143/node_modules/vitepress/dist/node/index.js";

// .vitepress/config/shared.mts
import { defineConfig } from "file:///C:/CodeSpace/Sylinko/Everywhere.Docs/node_modules/.pnpm/vitepress@1.6.4_@algolia+cl_3ae19b7de3a2d637083892e1e3d47143/node_modules/vitepress/dist/node/index.js";
var shared = defineConfig({
  title: "Everywhere",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],
  sitemap: {
    hostname: "https://everywhere.sylinko.com"
  },
  lastUpdated: true,
  themeConfig: {
    logo: { src: "/favicon.ico", width: 24, height: 24 },
    socialLinks: [
      { icon: "github", link: "https://github.com/DearVa/Everywhere" },
      { icon: "discord", link: "https://discord.gg/5fyg6nE3yn" },
      { icon: "qq", link: "https://qm.qq.com/cgi-bin/qm/qr?k=wp9aDBBnLc7pYATqT99tB-N2ZP2ETmJC&jump_from=webapi&authKey=97qUJfsQoI70dUNcgBZ0C3HCZeiEn8inLT7pzg8x+KinbQwfIrHFu3dB2+aHMbRD" }
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "\u641C\u7D22\u6587\u6863",
                buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
              },
              modal: {
                noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
                resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                footer: {
                  selectText: "\u9009\u62E9",
                  navigateText: "\u5207\u6362"
                }
              }
            }
          }
        }
      }
    }
  }
});

// .vitepress/config/en.mts
import { defineConfig as defineConfig2 } from "file:///C:/CodeSpace/Sylinko/Everywhere.Docs/node_modules/.pnpm/vitepress@1.6.4_@algolia+cl_3ae19b7de3a2d637083892e1e3d47143/node_modules/vitepress/dist/node/index.js";
var en = defineConfig2({
  description: "Every moment, Every place. Your AI: Everywhere",
  themeConfig: {
    nav: [
      { text: "Home", link: "/en-US/" },
      { text: "Docs", link: "/en-US/docs/" },
      { text: "Download", link: "/en-US/download/" },
      { text: "About", link: "/en-US/about/" }
    ],
    notFound: {
      title: "Not Found",
      quote: "We searched Everywhere, but this place remains untouched.",
      linkLabel: "Go to Home",
      linkText: "Take me home"
    },
    sidebar: [
      {
        text: "Get Started",
        items: [
          { text: "Introduction", link: "/en-US/docs/getting-started/introduction" },
          { text: "Installation", link: "/en-US/docs/getting-started/installation" },
          { text: "Use", link: "/en-US/docs/getting-started/use" },
          { text: "FAQ", link: "/en-US/docs/getting-started/faq" }
        ]
      },
      {
        text: "Model Providers",
        items: [
          { text: "OpenAI", link: "/en-US/model-provider/openai" },
          { text: "Anthropic (Claude)", link: "/en-US/model-provider/anthropic" },
          { text: "Google (Gemini)", link: "/en-US/model-provider/google" },
          { text: "DeepSeek", link: "/en-US/model-provider/deepseek" },
          { text: "Moonshot (Kimi)", link: "/en-US/model-provider/moonshot" },
          { text: "OpenRouter", link: "/en-US/model-provider/openrouter" },
          { text: "SiliconCloud (SiliconFlow)", link: "/en-US/model-provider/siliconcloud" },
          { text: "Ollama", link: "/en-US/model-provider/ollama" },
          { text: "Known Issues", link: "/en-US/model-provider/known-issues" }
        ]
      },
      {
        text: "Plugins",
        items: [
          { text: "Web Search", link: "/en-US/plugins/web-search" }
        ]
      }
    ],
    footer: {
      message: "Released under the Apache 2.0 License.",
      copyright: `Copyright \xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} DearVa, AuroraZiling and contributors. All rights reserved.`
    }
  }
});

// .vitepress/config/zh.mts
import { defineConfig as defineConfig3 } from "file:///C:/CodeSpace/Sylinko/Everywhere.Docs/node_modules/.pnpm/vitepress@1.6.4_@algolia+cl_3ae19b7de3a2d637083892e1e3d47143/node_modules/vitepress/dist/node/index.js";
var zh = defineConfig3({
  description: "\u968F\u65F6\u968F\u5730\uFF0C\u667A\u80FD\u76F8\u4F34 - Everywhere",
  themeConfig: {
    nav: [
      { text: "\u4E3B\u9875", link: "/zh-CN/" },
      { text: "\u6587\u6863", link: "/zh-CN/docs/" },
      { text: "\u4E0B\u8F7D", link: "/zh-CN/download/" },
      { text: "\u5173\u4E8E", link: "/zh-CN/about/" }
    ],
    notFound: {
      title: "\u9875\u9762\u672A\u627E\u5230",
      quote: "\u6211\u4EEC\u5BFB\u904D\u4E86 Everywhere\uFF0C\u552F\u72EC\u6B64\u5904\u662F\u65E0\u4EBA\u8E0F\u8DB3\u7684\u79D8\u5883\u3002",
      linkLabel: "\u524D\u5F80\u9996\u9875",
      linkText: "\u5E26\u6211\u56DE\u9996\u9875"
    },
    // zh-CN specific sidebar configuration Start
    docFooter: {
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875"
    },
    outline: {
      label: "\u9875\u9762\u5BFC\u822A"
    },
    lastUpdated: {
      text: "\u6700\u540E\u66F4\u65B0\u4E8E"
    },
    search: {
      provider: "local",
      options: {
        locales: {
          "zh-CN": {
            translations: {
              button: {
                buttonText: "\u641C\u7D22\u6587\u6863",
                buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
              },
              modal: {
                noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
                resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                footer: {
                  selectText: "\u9009\u62E9",
                  navigateText: "\u5207\u6362"
                }
              }
            }
          }
        }
      }
    },
    langMenuLabel: "\u591A\u8BED\u8A00",
    returnToTopLabel: "\u56DE\u5230\u9876\u90E8",
    sidebarMenuLabel: "\u83DC\u5355",
    darkModeSwitchLabel: "\u4E3B\u9898",
    lightModeSwitchTitle: "\u5207\u6362\u5230\u6D45\u8272\u6A21\u5F0F",
    darkModeSwitchTitle: "\u5207\u6362\u5230\u6DF1\u8272\u6A21\u5F0F",
    skipToContentLabel: "\u8DF3\u8F6C\u5230\u5185\u5BB9",
    // zh-CN specific search configuration End
    sidebar: [
      {
        text: "\u5165\u95E8",
        items: [
          { text: "\u4ECB\u7ECD", link: "/zh-CN/docs/getting-started/introduction" },
          { text: "\u5B89\u88C5", link: "/zh-CN/docs/getting-started/installation" },
          { text: "\u4F7F\u7528", link: "/zh-CN/docs/getting-started/use" },
          { text: "\u5E38\u89C1\u95EE\u9898", link: "/zh-CN/docs/getting-started/faq" }
        ]
      },
      {
        text: "\u6A21\u578B\u63D0\u4F9B\u5546",
        items: [
          { text: "OpenAI", link: "/zh-CN/model-provider/openai" },
          { text: "Anthropic (Claude)", link: "/zh-CN/model-provider/anthropic" },
          { text: "Google (Gemini)", link: "/zh-CN/model-provider/google" },
          { text: "DeepSeek", link: "/zh-CN/model-provider/deepseek" },
          { text: "Moonshot (Kimi)", link: "/zh-CN/model-provider/moonshot" },
          { text: "OpenRouter", link: "/zh-CN/model-provider/openrouter" },
          { text: "SiliconCloud (\u7845\u57FA\u6D41\u52A8)", link: "/zh-CN/model-provider/siliconcloud" },
          { text: "Ollama", link: "/zh-CN/model-provider/ollama" },
          { text: "\u5DF2\u77E5\u95EE\u9898", link: "/zh-CN/model-provider/known-issues" }
        ]
      },
      {
        text: "\u804A\u5929\u63D2\u4EF6",
        items: [
          { text: "\u7F51\u7EDC\u641C\u7D22", link: "/zh-CN/plugins/web-search" }
        ]
      }
    ],
    footer: {
      message: "\u57FA\u4E8E Apache 2.0 \u8BB8\u53EF\u53D1\u5E03",
      copyright: `\u7248\u6743\u6240\u6709 \xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} DearVa, AuroraZiling and contributors.`
    }
  }
});

// .vitepress/config/index.mts
import tailwindcss from "file:///C:/CodeSpace/Sylinko/Everywhere.Docs/node_modules/.pnpm/@tailwindcss+vite@4.1.16_vi_e16ae2ac4b3bca9ed450e124cc309d29/node_modules/@tailwindcss/vite/dist/index.mjs";
var config_default = defineConfig4({
  ...shared,
  locales: {
    "en-US": {
      lang: "en-US",
      label: "English",
      title: "Everywhere",
      dir: "en-US",
      ...en
    },
    "zh-CN": {
      lang: "zh-CN",
      label: "\u7B80\u4F53\u4E2D\u6587",
      title: "Everywhere",
      dir: "zh-CN",
      ...zh
    }
  },
  vite: {
    optimizeDeps: {
      exclude: [
        "vitepress"
      ]
    },
    plugins: [tailwindcss()]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcvaW5kZXgubXRzIiwgIi52aXRlcHJlc3MvY29uZmlnL3NoYXJlZC5tdHMiLCAiLnZpdGVwcmVzcy9jb25maWcvZW4ubXRzIiwgIi52aXRlcHJlc3MvY29uZmlnL3poLm10cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXENvZGVTcGFjZVxcXFxTeWxpbmtvXFxcXEV2ZXJ5d2hlcmUuRG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcQ29kZVNwYWNlXFxcXFN5bGlua29cXFxcRXZlcnl3aGVyZS5Eb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXGluZGV4Lm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovQ29kZVNwYWNlL1N5bGlua28vRXZlcnl3aGVyZS5Eb2NzLy52aXRlcHJlc3MvY29uZmlnL2luZGV4Lm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcclxuaW1wb3J0IHsgc2hhcmVkIH0gZnJvbSAnLi9zaGFyZWQubXRzJ1xyXG5pbXBvcnQgeyBlbiB9IGZyb20gJy4vZW4ubXRzJ1xyXG5pbXBvcnQgeyB6aCB9IGZyb20gJy4vemgubXRzJ1xyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcIkB0YWlsd2luZGNzcy92aXRlXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgLi4uc2hhcmVkLFxyXG4gIGxvY2FsZXM6IHtcclxuICAgICdlbi1VUyc6IHtcclxuICAgICAgbGFuZzogJ2VuLVVTJyxcclxuICAgICAgbGFiZWw6ICdFbmdsaXNoJyxcclxuICAgICAgdGl0bGU6ICdFdmVyeXdoZXJlJyxcclxuICAgICAgZGlyOiAnZW4tVVMnLFxyXG4gICAgICAuLi5lblxyXG4gICAgfSxcclxuICAgICd6aC1DTic6IHtcclxuICAgICAgbGFuZzogJ3poLUNOJyxcclxuICAgICAgbGFiZWw6ICdcdTdCODBcdTRGNTNcdTRFMkRcdTY1ODcnLFxyXG4gICAgICB0aXRsZTogJ0V2ZXJ5d2hlcmUnLFxyXG4gICAgICBkaXI6ICd6aC1DTicsXHJcbiAgICAgIC4uLnpoXHJcbiAgICB9XHJcbiAgfSxcclxuICB2aXRlOiB7XHJcbiAgICBvcHRpbWl6ZURlcHM6IHtcclxuICAgICAgZXhjbHVkZTogWyBcclxuICAgICAgICAndml0ZXByZXNzJywgXHJcbiAgICAgIF0sIFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFt0YWlsd2luZGNzcygpXSxcclxuICB9LFxyXG59KVxyXG5cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxDb2RlU3BhY2VcXFxcU3lsaW5rb1xcXFxFdmVyeXdoZXJlLkRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXENvZGVTcGFjZVxcXFxTeWxpbmtvXFxcXEV2ZXJ5d2hlcmUuRG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxzaGFyZWQubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Db2RlU3BhY2UvU3lsaW5rby9FdmVyeXdoZXJlLkRvY3MvLnZpdGVwcmVzcy9jb25maWcvc2hhcmVkLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcclxuXHJcbmV4cG9ydCBjb25zdCBzaGFyZWQgPSBkZWZpbmVDb25maWcoe1xyXG4gIHRpdGxlOiBcIkV2ZXJ5d2hlcmVcIixcclxuXHJcbiAgaGVhZDogW1xyXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9mYXZpY29uLmljbycgfV0sXHJcbiAgXSxcclxuXHJcbiAgc2l0ZW1hcDoge1xyXG4gICAgaG9zdG5hbWU6ICdodHRwczovL2V2ZXJ5d2hlcmUuc3lsaW5rby5jb20nXHJcbiAgfSxcclxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcclxuXHJcbiAgdGhlbWVDb25maWc6IHtcclxuICAgIGxvZ286IHsgc3JjOiAnL2Zhdmljb24uaWNvJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDI0IH0sXHJcbiAgICBzb2NpYWxMaW5rczogW1xyXG4gICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0RlYXJWYS9FdmVyeXdoZXJlJyB9LFxyXG4gICAgICB7IGljb246ICdkaXNjb3JkJywgbGluazogJ2h0dHBzOi8vZGlzY29yZC5nZy81ZnlnNm5FM3luJyB9LFxyXG4gICAgICB7IGljb246ICdxcScsIGxpbms6ICdodHRwczovL3FtLnFxLmNvbS9jZ2ktYmluL3FtL3FyP2s9d3A5YURCQm5MYzdwWUFUcVQ5OXRCLU4yWlAyRVRtSkMmanVtcF9mcm9tPXdlYmFwaSZhdXRoS2V5PTk3cVVKZnNRb0k3MGRVTmNnQlowQzNIQ1plaUVuOGluTFQ3cHpnOHgrS2luYlF3ZklySEZ1M2RCMithSE1iUkQnIH1cclxuICAgIF0sXHJcbiAgICBzZWFyY2g6IHsgICBcclxuICAgICAgcHJvdmlkZXI6ICdsb2NhbCcsXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBsb2NhbGVzOiB7XHJcbiAgICAgICAgICB6aDoge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbnM6IHtcclxuICAgICAgICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6ICdcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjMnLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uQXJpYUxhYmVsOiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgbW9kYWw6IHtcclxuICAgICAgICAgICAgICAgIG5vUmVzdWx0c1RleHQ6ICdcdTY1RTBcdTZDRDVcdTYyN0VcdTUyMzBcdTc2RjhcdTUxNzNcdTdFRDNcdTY3OUMnLFxyXG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b25UaXRsZTogJ1x1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNicsXHJcbiAgICAgICAgICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0VGV4dDogJ1x1OTAwOVx1NjJFOScsXHJcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVGV4dDogJ1x1NTIwN1x1NjM2MidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxDb2RlU3BhY2VcXFxcU3lsaW5rb1xcXFxFdmVyeXdoZXJlLkRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXENvZGVTcGFjZVxcXFxTeWxpbmtvXFxcXEV2ZXJ5d2hlcmUuRG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxlbi5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L0NvZGVTcGFjZS9TeWxpbmtvL0V2ZXJ5d2hlcmUuRG9jcy8udml0ZXByZXNzL2NvbmZpZy9lbi5tdHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXHJcblxyXG5leHBvcnQgY29uc3QgZW4gPSBkZWZpbmVDb25maWcoe1xyXG4gIGRlc2NyaXB0aW9uOiBcIkV2ZXJ5IG1vbWVudCwgRXZlcnkgcGxhY2UuIFlvdXIgQUk6IEV2ZXJ5d2hlcmVcIixcclxuICB0aGVtZUNvbmZpZzoge1xyXG4gICAgbmF2OiBbXHJcbiAgICAgIHsgdGV4dDogJ0hvbWUnLCBsaW5rOiAnL2VuLVVTLycgfSxcclxuICAgICAgeyB0ZXh0OiAnRG9jcycsIGxpbms6ICcvZW4tVVMvZG9jcy8nIH0sXHJcbiAgICAgIHsgdGV4dDogJ0Rvd25sb2FkJywgbGluazogJy9lbi1VUy9kb3dubG9hZC8nIH0sXHJcbiAgICAgIHsgdGV4dDogJ0Fib3V0JywgbGluazogJy9lbi1VUy9hYm91dC8nIH0sXHJcbiAgICBdLFxyXG5cclxuICAgIG5vdEZvdW5kOiB7XHJcbiAgICAgIHRpdGxlOiAnTm90IEZvdW5kJyxcclxuICAgICAgcXVvdGU6XHJcbiAgICAgICAgJ1dlIHNlYXJjaGVkIEV2ZXJ5d2hlcmUsIGJ1dCB0aGlzIHBsYWNlIHJlbWFpbnMgdW50b3VjaGVkLicsXHJcbiAgICAgIGxpbmtMYWJlbDogJ0dvIHRvIEhvbWUnLFxyXG4gICAgICBsaW5rVGV4dDogJ1Rha2UgbWUgaG9tZSdcclxuICAgIH0sXHJcblxyXG4gICAgc2lkZWJhcjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ0dldCBTdGFydGVkJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiAnSW50cm9kdWN0aW9uJywgbGluazogJy9lbi1VUy9kb2NzL2dldHRpbmctc3RhcnRlZC9pbnRyb2R1Y3Rpb24nIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdJbnN0YWxsYXRpb24nLCBsaW5rOiAnL2VuLVVTL2RvY3MvZ2V0dGluZy1zdGFydGVkL2luc3RhbGxhdGlvbicgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1VzZScsIGxpbms6ICcvZW4tVVMvZG9jcy9nZXR0aW5nLXN0YXJ0ZWQvdXNlJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnRkFRJywgbGluazogJy9lbi1VUy9kb2NzL2dldHRpbmctc3RhcnRlZC9mYXEnIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ01vZGVsIFByb3ZpZGVycycsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogJ09wZW5BSScsIGxpbms6ICcvZW4tVVMvbW9kZWwtcHJvdmlkZXIvb3BlbmFpJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnQW50aHJvcGljIChDbGF1ZGUpJywgbGluazogJy9lbi1VUy9tb2RlbC1wcm92aWRlci9hbnRocm9waWMnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdHb29nbGUgKEdlbWluaSknLCBsaW5rOiAnL2VuLVVTL21vZGVsLXByb3ZpZGVyL2dvb2dsZScgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ0RlZXBTZWVrJywgbGluazogJy9lbi1VUy9tb2RlbC1wcm92aWRlci9kZWVwc2VlaycgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ01vb25zaG90IChLaW1pKScsIGxpbms6ICcvZW4tVVMvbW9kZWwtcHJvdmlkZXIvbW9vbnNob3QnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdPcGVuUm91dGVyJywgbGluazogJy9lbi1VUy9tb2RlbC1wcm92aWRlci9vcGVucm91dGVyJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnU2lsaWNvbkNsb3VkIChTaWxpY29uRmxvdyknLCBsaW5rOiAnL2VuLVVTL21vZGVsLXByb3ZpZGVyL3NpbGljb25jbG91ZCcgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ09sbGFtYScsIGxpbms6ICcvZW4tVVMvbW9kZWwtcHJvdmlkZXIvb2xsYW1hJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnS25vd24gSXNzdWVzJywgbGluazogJy9lbi1VUy9tb2RlbC1wcm92aWRlci9rbm93bi1pc3N1ZXMnIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1BsdWdpbnMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6ICdXZWIgU2VhcmNoJywgbGluazogJy9lbi1VUy9wbHVnaW5zL3dlYi1zZWFyY2gnIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgbWVzc2FnZTogJ1JlbGVhc2VkIHVuZGVyIHRoZSBBcGFjaGUgMi4wIExpY2Vuc2UuJyxcclxuICAgICAgY29weXJpZ2h0OiBgQ29weXJpZ2h0IFx1MDBBOSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gRGVhclZhLCBBdXJvcmFaaWxpbmcgYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5gXHJcbiAgICB9LFxyXG4gIH1cclxufSkiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXENvZGVTcGFjZVxcXFxTeWxpbmtvXFxcXEV2ZXJ5d2hlcmUuRG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcQ29kZVNwYWNlXFxcXFN5bGlua29cXFxcRXZlcnl3aGVyZS5Eb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXHpoLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovQ29kZVNwYWNlL1N5bGlua28vRXZlcnl3aGVyZS5Eb2NzLy52aXRlcHJlc3MvY29uZmlnL3poLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcclxuXHJcbmV4cG9ydCBjb25zdCB6aCA9IGRlZmluZUNvbmZpZyh7XHJcbiAgZGVzY3JpcHRpb246IFwiXHU5NjhGXHU2NUY2XHU5NjhGXHU1NzMwXHVGRjBDXHU2NjdBXHU4MEZEXHU3NkY4XHU0RjM0IC0gRXZlcnl3aGVyZVwiLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICBuYXY6IFtcclxuICAgICAgeyB0ZXh0OiAnXHU0RTNCXHU5ODc1JywgbGluazogJy96aC1DTi8nIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NjU4N1x1Njg2MycsIGxpbms6ICcvemgtQ04vZG9jcy8nIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NEUwQlx1OEY3RCcsIGxpbms6ICcvemgtQ04vZG93bmxvYWQvJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTUxNzNcdTRFOEUnLCBsaW5rOiAnL3poLUNOL2Fib3V0LycgfSxcclxuICAgIF0sXHJcblxyXG4gICAgbm90Rm91bmQ6IHtcclxuICAgICAgdGl0bGU6ICdcdTk4NzVcdTk3NjJcdTY3MkFcdTYyN0VcdTUyMzAnLFxyXG4gICAgICBxdW90ZTpcclxuICAgICAgICAnXHU2MjExXHU0RUVDXHU1QkZCXHU5MDREXHU0RTg2IEV2ZXJ5d2hlcmVcdUZGMENcdTU1MkZcdTcyRUNcdTZCNjRcdTU5MDRcdTY2MkZcdTY1RTBcdTRFQkFcdThFMEZcdThEQjNcdTc2ODRcdTc5RDhcdTU4ODNcdTMwMDInLFxyXG4gICAgICBsaW5rTGFiZWw6ICdcdTUyNERcdTVGODBcdTk5OTZcdTk4NzUnLFxyXG4gICAgICBsaW5rVGV4dDogJ1x1NUUyNlx1NjIxMVx1NTZERVx1OTk5Nlx1OTg3NSdcclxuICAgIH0sXHJcblxyXG4gICAgLy8gemgtQ04gc3BlY2lmaWMgc2lkZWJhciBjb25maWd1cmF0aW9uIFN0YXJ0XHJcbiAgICBkb2NGb290ZXI6IHtcclxuICAgICAgcHJldjogJ1x1NEUwQVx1NEUwMFx1OTg3NScsXHJcbiAgICAgIG5leHQ6ICdcdTRFMEJcdTRFMDBcdTk4NzUnXHJcbiAgICB9LFxyXG5cclxuICAgIG91dGxpbmU6IHtcclxuICAgICAgbGFiZWw6ICdcdTk4NzVcdTk3NjJcdTVCRkNcdTgyMkEnXHJcbiAgICB9LFxyXG5cclxuICAgIGxhc3RVcGRhdGVkOiB7XHJcbiAgICAgIHRleHQ6ICdcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjBcdTRFOEUnXHJcbiAgICB9LFxyXG5cclxuICAgIHNlYXJjaDoge1xyXG4gICAgICBwcm92aWRlcjogJ2xvY2FsJyxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGxvY2FsZXM6IHtcclxuICAgICAgICAgIFwiemgtQ05cIjoge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbnM6IHtcclxuICAgICAgICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6ICdcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjMnLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uQXJpYUxhYmVsOiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgbW9kYWw6IHtcclxuICAgICAgICAgICAgICAgIG5vUmVzdWx0c1RleHQ6ICdcdTY1RTBcdTZDRDVcdTYyN0VcdTUyMzBcdTc2RjhcdTUxNzNcdTdFRDNcdTY3OUMnLFxyXG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b25UaXRsZTogJ1x1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNicsXHJcbiAgICAgICAgICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0VGV4dDogJ1x1OTAwOVx1NjJFOScsXHJcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVGV4dDogJ1x1NTIwN1x1NjM2MidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbGFuZ01lbnVMYWJlbDogJ1x1NTkxQVx1OEJFRFx1OEEwMCcsXHJcbiAgICByZXR1cm5Ub1RvcExhYmVsOiAnXHU1NkRFXHU1MjMwXHU5ODc2XHU5MEU4JyxcclxuICAgIHNpZGViYXJNZW51TGFiZWw6ICdcdTgzRENcdTUzNTUnLFxyXG4gICAgZGFya01vZGVTd2l0Y2hMYWJlbDogJ1x1NEUzQlx1OTg5OCcsXHJcbiAgICBsaWdodE1vZGVTd2l0Y2hUaXRsZTogJ1x1NTIwN1x1NjM2Mlx1NTIzMFx1NkQ0NVx1ODI3Mlx1NkEyMVx1NUYwRicsXHJcbiAgICBkYXJrTW9kZVN3aXRjaFRpdGxlOiAnXHU1MjA3XHU2MzYyXHU1MjMwXHU2REYxXHU4MjcyXHU2QTIxXHU1RjBGJyxcclxuICAgIHNraXBUb0NvbnRlbnRMYWJlbDogJ1x1OERGM1x1OEY2Q1x1NTIzMFx1NTE4NVx1NUJCOScsXHJcbiAgICAvLyB6aC1DTiBzcGVjaWZpYyBzZWFyY2ggY29uZmlndXJhdGlvbiBFbmRcclxuXHJcbiAgICBzaWRlYmFyOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU1MTY1XHU5NUU4JyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU0RUNCXHU3RUNEJywgbGluazogJy96aC1DTi9kb2NzL2dldHRpbmctc3RhcnRlZC9pbnRyb2R1Y3Rpb24nIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTVCODlcdTg4QzUnLCBsaW5rOiAnL3poLUNOL2RvY3MvZ2V0dGluZy1zdGFydGVkL2luc3RhbGxhdGlvbicgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NEY3Rlx1NzUyOCcsIGxpbms6ICcvemgtQ04vZG9jcy9nZXR0aW5nLXN0YXJ0ZWQvdXNlJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1RTM4XHU4OUMxXHU5NUVFXHU5ODk4JywgbGluazogJy96aC1DTi9kb2NzL2dldHRpbmctc3RhcnRlZC9mYXEnIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1NkEyMVx1NTc4Qlx1NjNEMFx1NEY5Qlx1NTU0NicsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogJ09wZW5BSScsIGxpbms6ICcvemgtQ04vbW9kZWwtcHJvdmlkZXIvb3BlbmFpJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnQW50aHJvcGljIChDbGF1ZGUpJywgbGluazogJy96aC1DTi9tb2RlbC1wcm92aWRlci9hbnRocm9waWMnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdHb29nbGUgKEdlbWluaSknLCBsaW5rOiAnL3poLUNOL21vZGVsLXByb3ZpZGVyL2dvb2dsZScgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ0RlZXBTZWVrJywgbGluazogJy96aC1DTi9tb2RlbC1wcm92aWRlci9kZWVwc2VlaycgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ01vb25zaG90IChLaW1pKScsIGxpbms6ICcvemgtQ04vbW9kZWwtcHJvdmlkZXIvbW9vbnNob3QnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdPcGVuUm91dGVyJywgbGluazogJy96aC1DTi9tb2RlbC1wcm92aWRlci9vcGVucm91dGVyJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnU2lsaWNvbkNsb3VkIChcdTc4NDVcdTU3RkFcdTZENDFcdTUyQTgpJywgbGluazogJy96aC1DTi9tb2RlbC1wcm92aWRlci9zaWxpY29uY2xvdWQnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdPbGxhbWEnLCBsaW5rOiAnL3poLUNOL21vZGVsLXByb3ZpZGVyL29sbGFtYScgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NURGMlx1NzdFNVx1OTVFRVx1OTg5OCcsIGxpbms6ICcvemgtQ04vbW9kZWwtcHJvdmlkZXIva25vd24taXNzdWVzJyB9LFxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdcdTgwNEFcdTU5MjlcdTYzRDJcdTRFRjYnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTdGNTFcdTdFRENcdTY0MUNcdTdEMjInLCBsaW5rOiAnL3poLUNOL3BsdWdpbnMvd2ViLXNlYXJjaCcgfSxcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG5cclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBtZXNzYWdlOiAnXHU1N0ZBXHU0RThFIEFwYWNoZSAyLjAgXHU4QkI4XHU1M0VGXHU1M0QxXHU1RTAzJyxcclxuICAgICAgY29weXJpZ2h0OiBgXHU3MjQ4XHU2NzQzXHU2MjQwXHU2NzA5IFx1MDBBOSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gRGVhclZhLCBBdXJvcmFaaWxpbmcgYW5kIGNvbnRyaWJ1dG9ycy5gXHJcbiAgICB9LFxyXG4gIH1cclxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQXNWLFNBQVMsZ0JBQUFBLHFCQUFvQjs7O0FDQTNCLFNBQVMsb0JBQW9CO0FBRTlXLElBQU0sU0FBUyxhQUFhO0FBQUEsRUFDakMsT0FBTztBQUFBLEVBRVAsTUFBTTtBQUFBLElBQ0osQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sZUFBZSxDQUFDO0FBQUEsRUFDaEQ7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLFVBQVU7QUFBQSxFQUNaO0FBQUEsRUFDQSxhQUFhO0FBQUEsRUFFYixhQUFhO0FBQUEsSUFDWCxNQUFNLEVBQUUsS0FBSyxnQkFBZ0IsT0FBTyxJQUFJLFFBQVEsR0FBRztBQUFBLElBQ25ELGFBQWE7QUFBQSxNQUNYLEVBQUUsTUFBTSxVQUFVLE1BQU0sdUNBQXVDO0FBQUEsTUFDL0QsRUFBRSxNQUFNLFdBQVcsTUFBTSxnQ0FBZ0M7QUFBQSxNQUN6RCxFQUFFLE1BQU0sTUFBTSxNQUFNLCtKQUErSjtBQUFBLElBQ3JMO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUEsVUFDUCxJQUFJO0FBQUEsWUFDRixjQUFjO0FBQUEsY0FDWixRQUFRO0FBQUEsZ0JBQ04sWUFBWTtBQUFBLGdC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
