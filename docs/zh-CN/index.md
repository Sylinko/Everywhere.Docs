---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "随时随地，智能相伴"
  text: "Everywhere"
  tagline: 感知, 交互, 灵活
  image:
    src: /Everywhere.webp
    alt: Everywhere
  actions:
    - theme: brand
      text: 🚀 快速开始
      link: /zh-CN/docs/getting-started/introduction
    - theme: alt
      text: 📄 文档
      link: /zh-CN/docs/

features:
  - icon: 🔍
    title: 屏幕内容感知
    details: 智能识别当前界面内容，自动理解应用场景，随时响应操作。
  - icon: 🧰
    title: 多场景
    details: 支持一键提醒、网页摘要、即时翻译、邮件润色等丰富 AI 功能。
  - icon: 🛠️
    title: 可扩展
    details: 基于 .NET 和 Avalonia，支持多种大模型和MCP工具。
  - icon: 🫠
    title: 无缝集成
    details: 原生桌面环境支持，键盘快捷键唤起，无需切换应用即可交互。
---

<style>
:root {
  --vp-home-hero-name-color: var(--vp-home-hero-name-color);
  --vp-home-hero-image-background-image: -webkit-linear-gradient(120deg, #9955E9, #7CBDED);
  --vp-home-hero-image-filter: blur(60px);
}
div.VPHomeHero span.text {
  background: -webkit-linear-gradient(120deg, #9955E9, #7CBDED);
  -webkit-background-clip: text;
  color: transparent;
}
</style>