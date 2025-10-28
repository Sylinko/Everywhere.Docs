<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useTranslate } from '../i18n'

const t = useTranslate()

// Detect dark mode by observing <html class="dark">
const isDark = ref(false)
onMounted(() => {
  const root = document.documentElement
  const update = () => (isDark.value = root.classList.contains('dark'))
  update()
  const obs = new MutationObserver(update)
  obs.observe(root, { attributes: true, attributeFilter: ['class'] })
  ;(onBeforeUnmount as any)(() => obs.disconnect())
})

const sponsors = computed(() => [
  {
    title: '302.AI',
    link: 'https://302.ai',
    scale: 1.2,
    autoGray: false,
    iconUrlLight: '/sponsors/302-ai-light.svg',
    iconUrlDark: '/sponsors/302-ai-dark.svg',
  },
  {
    title: 'Certum',
    link: 'https://www.certum.cn',
    scale: 1.7,
    autoGray: true,
    iconUrl: '/sponsors/certum-cn.svg',
  },
])

// Resolve image src depending on autoGray and theme
const getLogoSrc = (s: any) => {
  if (s.autoGray === false && s.iconUrlLight && s.iconUrlDark) {
    return isDark.value ? s.iconUrlDark : s.iconUrlLight
  }
  return s.iconUrl
}
</script>

<template>
  <div class="justify-items-center">
    <h1>{{ t('Sponsors') }}</h1>
    <div class="sponsors-container">
      <a
        v-for="s in sponsors"
        :key="s.title"
        :href="s.link"
        target="_blank"
        rel="noopener noreferrer"
        class="sponsor-link"
        :title="s.title"
      >
        <img
          :src="getLogoSrc(s)"
          :alt="`${s.title} logo`"
          :style="s.scale ? `transform: scale(${s.scale})` : ''"
          class="sponsor-img"
          :class="{ 'auto-gray': s.autoGray !== false }"
          loading="lazy"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
/* Cleaned and unified styles with consistent border hover animations in both modes */

.sponsors-container {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
}

.sponsor-link {
  display: inline-flex;
  align-items: center;
  padding: 24px 36px;
  text-decoration: none;
  border-radius: 10px;
  border: 1px solid transparent;
  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

/* Base backgrounds per theme */
:where(html:not(.dark)) .sponsor-link { background: #fff; }
:where(html.dark) .sponsor-link { background: #1f1f1f; }

/* Enable border hover animation for all cards in both modes */
:where(html:not(.dark)) .sponsor-link:hover {
  background: #fff; /* keep background stable in light mode */
  border-color: var(--vp-c-divider);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
}
:where(html.dark) .sponsor-link:hover {
  background: #1f1f1f; /* keep background stable in dark mode */
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 2px var(--vp-c-brand);
}

/* Image presentation */
.sponsor-img {
  height: 40px;
  width: auto;
  object-fit: contain;
  transition: filter 0.25s ease, transform 0.2s ease;
}

/* Auto-gray image filters by theme */
:where(html:not(.dark)) .sponsor-img.auto-gray { filter: none; }
:where(html.dark) .sponsor-img.auto-gray { filter: grayscale(100%) invert(1); }

h1 { margin-bottom: 12px; }
p {
  margin: 0;
  font-size: 20px;
  color: var(--vp-c-text-2);
}
</style>
