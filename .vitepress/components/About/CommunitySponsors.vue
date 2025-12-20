<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTranslate } from '../i18n'

const t = useTranslate()

interface Sponsor {
  url: string
  name: string
  avatar: string
  source?: 'afdian' | 'manual'
}

interface SponsorResponse {
  total_count: number
  data: {
    afdian: Sponsor[]
    manual: Sponsor[]
  }
}

const sponsors = ref<Sponsor[]>([])
const loading = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    const response = await fetch('https://sponsor-api.sylinko.com/')
    if (!response.ok) throw new Error('Failed to fetch')
    const data: SponsorResponse = await response.json()
    
    const afdianSponsors = (data.data.afdian || []).map(s => ({ ...s, source: 'afdian' as const }))
    const manualSponsors = (data.data.manual || []).map(s => ({ ...s, source: 'manual' as const }))
    
    sponsors.value = [...manualSponsors, ...afdianSponsors]
  } catch (e) {
    console.error(e)
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
h1 {
  font-size: 28px;
  font-weight: 600;
}
.sponsors-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}
.sponsor-card {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  text-decoration: none;
  transition: border-color 0.25s, transform 0.2s;
}
.sponsor-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-1px);
}
.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}
.sponsor-info {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  overflow: hidden;
}
.sponsor-name {
  font-weight: 500;
  font-size: 0.85rem;
  color: var(--vp-c-text-1);
  white-space: nowrap;
}
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  padding: 1px 4px;
  border-radius: 3px;
  line-height: 1;
  font-weight: 500;
  flex-shrink: 0;
}
.badge-afdian {
  background-color: rgba(255, 77, 121, 0.1);
  color: #ff4d79;
  border: 1px solid rgba(255, 77, 121, 0.2);
}
</style>

<template>
  <div class="flex flex-col gap-12 max-w-5xl mx-auto">
    <div class="text-center">
      <h1> {{ t('Community Sponsors') }} </h1>
    </div>
    
    <div v-if="loading" class="text-center" style="color: var(--vp-c-text-2);">
      Loading...
    </div>
    
    <div v-else-if="error" class="text-center" style="color: var(--vp-c-danger);">
      Failed to load sponsors.
    </div>

    <div v-else class="sponsors-grid">
      <a 
        v-for="sponsor in sponsors" 
        :key="sponsor.url" 
        :href="sponsor.url"
        target="_blank"
        rel="noopener"
        class="sponsor-card"
      >
        <img :src="sponsor.avatar" :alt="sponsor.name" class="avatar" loading="lazy" />
        <div class="sponsor-info">
          <span class="sponsor-name" :title="sponsor.name">{{ sponsor.name }}</span>
          <span v-if="sponsor.source === 'afdian'" class="badge badge-afdian">爱发电</span>
        </div>
      </a>
    </div>
  </div>
</template>
