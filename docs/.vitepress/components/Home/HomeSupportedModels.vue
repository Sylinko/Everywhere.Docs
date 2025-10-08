<script setup lang="ts">
import { computed } from 'vue'
import { useTranslate } from '../i18n'

const t = useTranslate()

const models = computed(() => [
  {
    iconUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/openai.svg',
    link: 'https://openai.com/',
    title: 'OpenAI',
    inversedIconColor: true
  },
  {
    iconUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/anthropic.svg',
    link: 'https://claude.ai/',
    title: 'Anthropic (Claude)',
    inversedIconColor: true
  },
  {
    iconUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/google-color.svg',
    link: 'https://gemini.google.com/',
    title: 'Google (Gemini)'
  },
  {
    iconUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/deepseek-color.svg',
    link: 'https://www.deepseek.com/',
    title: 'DeepSeek'
  },
  {
    iconUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/moonshot.svg',
    link: 'https://www.kimi.com/',
    title: 'Moonshot (Kimi)',
    inversedIconColor: true
  },
  {
    iconUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/siliconcloud-color.svg',
    link: 'https://www.siliconflow.cn/',
    title: 'SiliconCloud'
  },
  {
    iconUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/1.69.1/files/icons/xai.svg',
    link: 'https://x.ai/',
    title: 'xAI (Grok)',
    inversedIconColor: true
  },
  {
    iconUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/ollama.svg',
    link: 'https://ollama.com/',
    title: 'Ollama',
    inversedIconColor: true
  },
])
</script>

<template>
  <div class="justify-items-center">
    <h1> {{ t('Supported Models') }} </h1>
    <p>Powered By</p>
    <div class="supported-models-container">
      <a
        v-for="model in models"
        :key="model.title"
        :href="model.link"
        target="_blank"
        rel="noopener noreferrer"
        class="model-card"
      >
        <img
          :src="model.iconUrl"
          :alt="`${model.title} logo`"
          class="model-icon"
          :class="{ 'inversed-icon': model.inversedIconColor }"
        />
        <span class="model-title">{{ model.title }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.supported-models-container {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
}

.model-card {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  transition:
    border-color 0.25s,
    background-color 0.25s;
  text-decoration: none;
}

.model-card:hover {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-soft-up);
}

:where(html.dark) .inversed-icon {
  filter: invert(1);
}

.model-icon {
  width: 24px;
  height: 24px;
  margin-right: 12px;
}

.model-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

h1 {
  margin-bottom: 12px;
}

p {
  margin: 0;
  font-size: 20px;
  color: var(--vp-c-text-2);
}
</style>