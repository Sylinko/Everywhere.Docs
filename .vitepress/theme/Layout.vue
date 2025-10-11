<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, inBrowser } from 'vitepress'
import { watchEffect, ref } from 'vue'

const { lang } = useData();
const isRedirecting = ref(false);

const detectBrowserLanguage = (): string => {
  const browserLang = navigator.language || navigator.languages?.[0] || 'en-US';
  const supportedLanguages = ['zh-CN', 'en-US'];
  
  if (supportedLanguages.includes(browserLang)) {
    return browserLang;
  }
  
  const langPrefix = browserLang.split('-')[0];
  const matchedLang = supportedLanguages.find(lang => 
    lang.split('-')[0] === langPrefix
  );
  
  return matchedLang || 'en-US';
}

watchEffect(() => {
  if (inBrowser) {
    const currentPath = window.location.pathname
    const pathLangMatch = currentPath.match(/^\/(zh-CN|en-US)\//)
    
    if (!pathLangMatch) {
      isRedirecting.value = true;
      const detectedLang = detectBrowserLanguage();
      const targetPath = `/${detectedLang}${currentPath}`
      window.location.replace(targetPath)
      return;
    }
    
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