<script setup lang="ts">
import { computed } from 'vue'
import { useTranslate, getCurrentLang } from '../i18n'

const t = useTranslate()

const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    icon: 'https://api.iconify.design/simple-icons/bilibili.svg',
    link: 'https://space.bilibili.com/12879829',
    ariaLabel: 'Bilibili',
    inversedIconColor: true
  },
  {
    icon: 'https://api.iconify.design/simple-icons/youtube.svg',
    link: 'https://www.youtube.com/@everywhere_official',
    ariaLabel: 'YouTube',
    inversedIconColor: true
  },
  {
    icon: 'https://api.iconify.design/simple-icons/xiaohongshu.svg',
    link: 'https://www.xiaohongshu.com/user/profile/60261d54000000000101f684',
    ariaLabel: 'Xiaohongshu',
    inversedIconColor: true
  }
]

const communityLinks = [
  {
    icon: 'https://api.iconify.design/simple-icons/discord.svg',
    link: 'https://discord.gg/5fyg6nE3yn',
    ariaLabel: 'Discord',
    inversedIconColor: true
  },
  {
    icon: 'https://api.iconify.design/simple-icons/qq.svg',
    link: 'https://qm.qq.com/cgi-bin/qm/qr?k=wp9aDBBnLc7pYATqT99tB-N2ZP2ETmJC&jump_from=webapi&authKey=97qUJfsQoI70dUNcgBZ0C3HCZeiEn8inLT7pzg8x+KinbQwfIrHFu3dB2+aHMbRD',
    ariaLabel: 'QQ',
    inversedIconColor: true
  }
]

const links = computed(() => {
  return [
    {
      text: t('Sponsor Us'),
      items: [
        { text: '爱发电', link: `https://afdian.tv/a/DearVa` },
        { text: 'Buy Me A Coffee', link: `https://buymeacoffee.com/artemisli` },
      ]
    },
    {
      text: t('Legal & Policies'),
      items: [
        { text: t('Privacy Policy'), link: `/${getCurrentLang()}/policies/privacy` },
        { text: t('Terms of Service'), link: `/${getCurrentLang()}/policies/terms-of-service` },
        { text: t('Contributor License Agreement'), link: `/${getCurrentLang()}/policies/cla` },
      ]
    },
    {
      text: t('About Sylinko'),
      items: [
        { text: t('Official Website'), link: 'https://sylinko.com' },
        { text: t('Contact Us'), link: 'mailto:contact@sylinko.com' },
      ]
    }
  ]
})
</script>

<template>
  <footer class="VPFooter">
    <div class="container">
      <div class="columns">
        <div class="column social-column">
          <h4 class="title">{{ t('Join Our Community') }}</h4>
          <div class="social-links">
            <a 
              v-for="social in communityLinks" 
              :key="social.link" 
              :href="social.link" 
              class="social-link" 
              target="_blank" 
              rel="noopener noreferrer"
              :class="{ 'inversed-icon': social.inversedIconColor }"
              :aria-label="social.ariaLabel"
            >
              <img :src="social.icon" class="icon" :alt="social.ariaLabel" />
            </a>
          </div>

          <h4 class="title" style="margin-top: 24px">{{ t('Follow Us') }}</h4>
          <div class="social-links">
            <a 
              v-for="social in socialLinks" 
              :key="social.link" 
              :href="social.link" 
              class="social-link" 
              target="_blank" 
              rel="noopener noreferrer"
              :class="{ 'inversed-icon': social.inversedIconColor }"
              :aria-label="social.ariaLabel"
            >
              <img :src="social.icon" class="icon" :alt="social.ariaLabel" />
            </a>
          </div>
        </div>

        <div v-for="(group, index) in links" :key="index" class="column">
          <h4 class="title">{{ group.text }}</h4>
          <ul class="items">
            <li v-for="(item, i) in group.items" :key="i" class="item">
              <a 
                :href="item.link" 
                class="link"
                :target="item.link.startsWith('http') ? '_blank' : undefined"
                :rel="item.link.startsWith('http') ? 'noopener noreferrer' : undefined"
              >
                {{ item.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="bottom">
        <p class="message">
          Released under the <a href="https://github.com/DearVa/Everywhere/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">Business Source License 1.1</a>.
        </p>
        <p class="copyright">
          Copyright © {{ currentYear }} Sylinko Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.VPFooter {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
}

:where(html.dark) .inversed-icon {
  filter: invert(1);
}

.VPFooter.has-sidebar {
  display: none;
}

@media (min-width: 768px) {
  .VPFooter {
    padding: 32px;
  }
}

.container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  text-align: center;
}

.columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-bottom: 24px;
  padding: 0px 64px;
}

@media (min-width: 768px) {
  .columns {
    justify-content: space-around;
    text-align: left;
  }
}

.title {
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
}

.items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.social-links {
  display: flex;
  gap: 16px;
  justify-content: center;
}

@media (min-width: 768px) {
  .social-links {
    justify-content: flex-start;
  }
}

.social-link {
  color: var(--vp-c-text-2);
  transition: color 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.social-link:hover {
  color: var(--vp-c-brand);
}

.icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.item {
  margin-top: 6px;
  object-fit: contain
}

.link {
  color: var(--vp-c-text-2);
  font-size: 14px;
  transition: color 0.25s;
}

.link:hover {
  color: var(--vp-c-brand);
}

.bottom {
  padding-top: 24px;
}

.message, .copyright {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.message a {
  color: var(--vp-c-text-1);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.25s;
}

.message a:hover {
  color: var(--vp-c-brand);
}
</style>
