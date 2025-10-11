---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Every moment, \nEvery place. Your AI:"
  text: "Everywhere"
  tagline: Context-aware, Interactive, Swift
  image:
    src: /Everywhere.webp
    alt: Everywhere
  actions:
    - theme: brand
      text: 🚀Get Started
      link: /en-US/docs/getting-started/introduction
    - theme: alt
      text: 📥 Download
      link: /en-US/download/
    - theme: alt
      text: 📄Docs
      link: /en-US/docs/

features:
  - icon: 🔍
    title: Context-Aware
    details: Intelligently recognizes current screen content, understands app scenarios, and responds instantly.
  - icon: 🧰
    title: Multi-Scenario
    details: Supports one-click reminders, web summarization, instant translation, and email polishing with rich AI features.
  - icon: 🛠️
    title: Extensible
    details: Built with .NET and Avalonia, supports multiple models and MCP tools.
  - icon: 🫠
    title: Seamless
    details: Works natively with your desktop environment—invoke via keyboard shortcuts and interact without switching apps.
---

<style>
:root {
  --vp-home-hero-name-color: var(--vp-home-hero-name-color);
  --vp-home-hero-image-background-image: -webkit-linear-gradient(60deg, #F5D10D 5%, #E955A3 35%, #7CBDED 75%);
  --vp-home-hero-image-filter: blur(60px);
}
div.VPHomeHero span.text {
  background: -webkit-linear-gradient(120deg, #F5D10D 5%, #E955A3 35%, #7CBDED 75%);
  -webkit-background-clip: text;
  color: transparent;
}
</style>

<div class="mt-12 mb-24 space-y-20">
  <HomeSupportedModels/>
  <HomeDevelopers/>
</div>

<script lang="ts" setup>
  import HomeSupportedModels from "/.vitepress/components/Home/HomeSupportedModels.vue";
  import HomeDevelopers from "/.vitepress/components/Home/HomeDevelopers.vue";
</script>