---
sidebar: false
prev: false
next: false
layout: page
---

<script setup>
import CoreDevelopers from '../../.vitepress/components/About/CoreDevelopers.vue'
import Groups from '../../.vitepress/components/About/Groups.vue'

import { useTranslate } from '../../.vitepress/components/i18n.ts'
const t = useTranslate()
</script>

<style scoped>
.about-page {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: var(--vp-c-bg);
}

.about-container {
  max-width: 100%;
  width: 100%;
  text-align: center;
  padding: 0 2rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 48px;
  color: var(--vp-c-text-1);
}
</style>

<div class="about-page">
    <div class="about-container">
        <h1 class="title">{{ t('About Everywhere') }}</h1>
        <CoreDevelopers class="mt-20" />
        <Groups class="mt-16" />
    </div>
</div>
