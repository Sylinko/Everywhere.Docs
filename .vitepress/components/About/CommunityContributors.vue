<script setup lang="ts">
import { computed } from 'vue'
import { useTranslate } from '../i18n'
import { iconMap } from '../icons'

const t = useTranslate()

const usernames = ['TheNotoBarth', 'jimfengnpu']

const members = computed(() =>
  usernames.map((username) => ({
    name: username,
    avatar: `https://github.com/${username}.png?size=120`,
    link: `https://github.com/${username}`
  }))
)
</script>

<style scoped>
h1 {
  font-size: 28px;
  font-weight: 600;
}
.contributors-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}
.member-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  width: 240px;
}
.avatar {
  width: 64px;
  height: 64px;
  border-radius: 9999px;
  object-fit: cover;
}
.member-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.member-name {
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.member-links {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.member-link {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--vp-c-text-2);
  text-decoration: none;
}
</style>

<template>
  <div class="flex flex-col gap-12 max-w-5xl mx-auto">
    <div class="text-center">
      <h1> {{ t('Community Contributors') }} </h1>
    </div>
    <ul class="contributors-grid">
      <li v-for="member in members" :key="member.name" class="member-card">
        <img :src="member.avatar" :alt="member.name" class="avatar" />
        <div class="member-info">
          <span class="member-name">{{ member.name }}</span>
          <div class="member-links">
            <a
              :href="member.link"
              target="_blank"
              rel="noopener"
              class="member-link"
            >
<span class="vpi-social-github" style="--icon: url('https://api.iconify.design/simple-icons/github.svg');"></span>            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>