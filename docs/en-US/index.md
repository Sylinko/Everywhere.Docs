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
      text: 📄Docs
      link: /en-US/docs/

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
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