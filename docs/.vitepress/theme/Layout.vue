<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, inBrowser } from 'vitepress'
import { watchEffect, ref } from 'vue'

const { lang } = useData();
const isRedirecting = ref(false);

watchEffect(() => {
  if (inBrowser) {
    const currentPath = window.location.pathname

    if (!currentPath.startsWith(`/${lang.value}/`)) {
      isRedirecting.value = true;
      const targetPath = `/${lang.value}${currentPath}`
      window.location.replace(targetPath)
    }
  }
})
</script>

<template>
  <div v-if="isRedirecting" class="redirect-notice">
    Redirecting...
  </div>
  <DefaultTheme.Layout v-else>
    <template #nav-bar-content-after>
      <NolebaseEnhancedReadabilitiesMenu />
    </template>
    <template #nav-screen-content-after>
      <NolebaseEnhancedReadabilitiesScreenMenu />
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
.redirect-notice {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg);
}
</style>