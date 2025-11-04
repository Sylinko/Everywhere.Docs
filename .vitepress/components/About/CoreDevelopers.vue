<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { computed } from 'vue'
import { useTranslate } from '../i18n'
import { iconMap } from '../icons'

const t = useTranslate()

const members = computed(() => [
  {
    avatar: 'https://github.com/DearVa.png',
    name: 'Dear.Va',
    title: t('Lead Developer'),
    links: [
      { icon: 'github', link: 'https://github.com/DearVa' },
      {
        icon: { svg: iconMap.bilibili },
        link: 'https://space.bilibili.com/12879829',
      },
    ],
  },
  {
    avatar: 'https://github.com/AuroraZiling.png',
    name: 'Artemis Li',
    title: t('Product Operations'),
    links: [
      { icon: 'github', link: 'https://github.com/AuroraZiling' },
      {
        icon: { svg: iconMap.bilibili },
        link: 'https://space.bilibili.com/222204281',
      },  
    ],
  },
  {
    avatar: 'https://github.com/feast107.png',
    name: 'Feast',
    title: t('Full Stack Developer'),
    links: [
      { icon: 'github', link: 'https://github.com/feast107' },
      {
        icon: { svg: iconMap.bilibili },
        link: 'https://space.bilibili.com/12637648',
      },
    ],
  },
])
</script>

<style scoped>
h1 {
  font-size: 28px;
  font-weight: 600;
}
/* p {
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  color: var(--vp-c-text-2);
} */
</style>

<template>
  <div class="flex flex-col gap-12 max-w-5xl mx-auto">
    <div class="text-center">
      <h1> {{ t('Core Members') }} </h1>
    </div>
    <VPTeamMembers size="small" :members="members" />
  </div>
</template>