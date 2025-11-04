<script setup lang="ts">
import { computed } from 'vue'
import { useTranslate } from '../i18n'

const t = useTranslate()

const groups = computed(() => [
  {
    iconUrl: 'https://api.iconify.design/simple-icons/qq.svg',
    link: 'https://qm.qq.com/cgi-bin/qm/qr?k=wp9aDBBnLc7pYATqT99tB-N2ZP2ETmJC&jump_from=webapi&authKey=97qUJfsQoI70dUNcgBZ0C3HCZeiEn8inLT7pzg8x+KinbQwfIrHFu3dB2+aHMbRD',
    title: 'QQ',
    inversedIconColor: true
  },
  {
    iconUrl: 'https://api.iconify.design/simple-icons/discord.svg',
    link: 'https://discord.gg/5fyg6nE3yn',
    title: 'Discord',
    inversedIconColor: true
  }
])
</script>

<template>
  <div class="flex flex-col items-center">
    <h1> {{ t('Join Our Community') }} </h1>
    <div class="groups-container">
      <a
        v-for="group in groups"
        :key="group.title"
        :href="group.link"
        target="_blank"
        rel="noopener noreferrer"
        class="group-card"
      >
        <img
          :src="group.iconUrl"
          :alt="`${group.title} logo`"
          class="group-icon"
          :class="{ 'inversed-icon': group.inversedIconColor }"
        />
        <span class="group-title">{{ group.title }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.groups-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
}

.group-card {
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

.group-card:hover {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-soft-up);
}

:where(html.dark) .inversed-icon {
  filter: invert(1);
}

.group-icon {
  width: 22px;
  height: 22px;
  margin-right: 12px;
}

.group-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

h1 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 14px;
}
</style>
