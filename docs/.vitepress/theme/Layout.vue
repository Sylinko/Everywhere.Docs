<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, inBrowser } from 'vitepress'
import { watchEffect } from 'vue'

const { lang } = useData();
watchEffect(() => {
  if (inBrowser) {
    const currentPath = window.location.pathname

    if (!currentPath.startsWith(`/${lang.value}/`)) {
      const targetPath = `/${lang.value}${currentPath}`
      window.location.replace(targetPath)
    }
  }
})
</script>

<template>
  <DefaultTheme.Layout />
</template>