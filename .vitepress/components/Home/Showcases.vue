<script setup lang="ts">
import { computed } from 'vue'
import { useTranslate, getCurrentLang } from '../i18n'

type Showcase = {
  title: string
  description: string
  accent: string
  image: string
  badge?: {
    text: string
    tone?: 'warning' | 'info' | 'success'
  }
}

const props = defineProps<{ lang?: string }>()
const t = useTranslate(props.lang)

const showcases = computed<Showcase[]>(() => [
  {
    title: t('Instant In-Page Summaries'),
    description: t('Grasp key points, terms, and insights on any page without switching context.'),
    accent: 'linear-gradient(135deg, rgba(245, 209, 13, 0.65), rgba(233, 85, 163, 0.45))',
    image: 'content-summary.webp',
  },
  {
    title: t('Real-Time Market Insights on Charts'),
    description: t('Pull earnings, news, and core metrics directly onto stock charts for faster, more informed decisions.'),
    accent: 'linear-gradient(135deg, rgba(124, 189, 237, 0.65), rgba(90, 133, 255, 0.45))',
    image: 'data-analysis.webp',
    badge: {
      text: t('This does not constitute investment advice'),
      tone: 'warning',
    },
  },
  {
    title: t('Natural Language System Commands'),
    description: t('Invoke your system\'s shell, see live output, and handle permission elevations. Manage services, free up ports, clear caches, and run scripts—all with natural language.'),
    accent: 'linear-gradient(135deg, rgba(136, 255, 210, 0.7), rgba(48, 212, 168, 0.4))',
    image: 'terminal-calling.webp',
  },
  {
    title: t('Instant Error Diagnosis'),
    description: t('Capture context from error, identify the cause, and get suggested commands and solutions to resolve it.'),
    accent: 'linear-gradient(135deg, rgba(255, 157, 114, 0.7), rgba(255, 96, 120, 0.45))',
    image: 'error-analysis.webp',
  },
])
</script>

<template>
  <section class="home-showcases">
    <div class="home-showcases__header">
      <p class="home-showcases__eyebrow">{{ t('In the wild') }}</p>
      <h1>{{ t('AI Without Boundaries') }}</h1>
      <p class="home-showcases__subtitle">
        {{
          t(
            'Liberating AI from browser and standalone apps, making it a ubiquitous, native capability of your operating system.'
          )
        }}
      </p>
    </div>

    <div class="home-showcases__list">
      <!-- render each lane + a divider after it (except the last) -->
      <template v-for="(item, index) in showcases" :key="`lane-group-${index}`">
        <article
          class="showcase-lane"
          :class="{ 'showcase-lane--reverse': index % 2 === 1 }"
          :style="{ '--accent': item.accent }"
        >
          <!-- Text (left on odd cards, right on even cards) -->
          <div class="showcase-lane__body">
            <p class="showcase-lane__eyebrow">{{ t('Scenario') }} {{ index + 1 }}</p>
            <h3 class="showcase-lane__title">{{ item.title }}</h3>
            <p class="showcase-lane__desc">{{ item.description }}</p>
            <!-- optional badge under description -->
            <div v-if="item.badge" class="showcase-lane__badge">
              <span :class="['badge', item.badge.tone ? `badge--${item.badge.tone}` : 'badge--warning']">
                {{ item.badge.text }}
              </span>
            </div>
          </div>

          <!-- Image (right on odd cards, left on even cards) -->
          <div class="showcase-lane__media">
            <div class="showcase-lane__frame">
              <img :src="`/showcases/${getCurrentLang()}/${item.image}`" alt="" />
            </div>
          </div>
        </article>

        <div
          v-if="index < showcases.length - 1"
          class="home-showcases__divider"
          aria-hidden="true"
        ></div>
      </template>
    </div>
  </section>
</template>

<style scoped>
/* Container */
.home-showcases {
  position: relative;
  overflow: hidden;
  --divider-color: rgba(120, 120, 160, 0.12);
  --image-border: rgba(0, 0, 0, 0.08);
}
:where(html.dark) .home-showcases {
  --divider-color: rgba(255, 255, 255, 0.08);
  --image-border: rgba(255, 255, 255, 0.18);
}

/* Header */
.home-showcases__header {
  max-width: 640px;
  text-align: center;
  margin: 0 auto clamp(2rem, 3vw, 3.5rem);
}
.home-showcases__eyebrow {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 600;
  color: var(--vp-c-brand);
  margin-bottom: 0.5rem;
}
.home-showcases__subtitle {
  margin: 0;
  margin-top: 1rem;
  color: var(--vp-c-text-2);
  font-size: 1.05rem;
  line-height: 1.6;
}

/* List + divider */
.home-showcases__list {
  display: flex;
  flex-direction: column;
  gap: clamp(1.25rem, 2.5vw, 2rem);
}
.home-showcases__divider {
  height: 1px;
  width: min(70%, 1100px);
  margin: 0 auto;
  background: linear-gradient(
    to right,
    transparent,
    var(--divider-color) 16%,
    var(--divider-color) 84%,
    transparent
  );
  pointer-events: none;
}

/* Lanes: 2-col grid on desktop, alternating sides */
.showcase-lane {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: center;
  gap: clamp(1rem, 2vw, 1.5rem);
  padding: clamp(1.25rem, 2.5vw, 2rem);
  border-radius: 20px;
  background: transparent;
}
.showcase-lane--reverse {
  grid-template-columns: 1.2fr 1fr;
}
:where(html.dark) .home-showcases {
  --divider-color: rgba(255, 255, 255, 0.08);
}

/* Default (odd: text left, image right) */
.showcase-lane__body { grid-column: 1; grid-row: 1; }
.showcase-lane__media { grid-column: 2; grid-row: 1; }

/* Even: reverse columns (stay on the same row) */
.showcase-lane--reverse .showcase-lane__body { grid-column: 2; text-align: right; align-items: flex-end; /* grid-row: 1 inherited */ }
.showcase-lane--reverse .showcase-lane__media { grid-column: 1; /* grid-row: 1 inherited */ }

/* Body */
.showcase-lane__body {
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
}
.showcase-lane__eyebrow {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: color-mix(in srgb, var(--accent) 55%, var(--vp-c-text-2));
  font-weight: 600;
}
.showcase-lane__title {
  margin: 0;
  font-size: clamp(1.4rem, 2.3vw, 1.8rem);
}
.showcase-lane__desc {
  color: var(--vp-c-text-2);
  font-size: 1rem;
  line-height: 1.5;
}

/* shared badge styles */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.55rem;
  border-radius: 10px;
  font-size: 0.78rem;
  line-height: 1;
  border: 1px solid transparent;
  user-select: none;
  white-space: nowrap;
}

/* warning (yellow) */
.badge--warning {
  color: #5b3d00;
  background: rgba(255, 204, 0, 0.38);
  border-color: rgba(255, 204, 0, 0.48);
}
:where(html.dark) .badge--warning {
  color: #ffd88a;
  background: rgba(255, 204, 0, 0.12);
  border-color: rgba(255, 204, 0, 0.32);
}

/* optional: info (blue) and success (green) for future use */
.badge--info {
  color: #0b3a6f;
  background: rgba(80, 160, 255, 0.36);
  border-color: rgba(80, 160, 255, 0.42);
}
:where(html.dark) .badge--info {
  color: #9cc7ff;
  background: rgba(80, 160, 255, 0.12);
  border-color: rgba(80, 160, 255, 0.3);
}
.badge--success {
  color: #0f5132;
  background: rgba(60, 200, 140, 0.36);
  border-color: rgba(60, 200, 140, 0.42);
}
:where(html.dark) .badge--success {
  color: #b8f5d6;
  background: rgba(60, 200, 140, 0.12);
  border-color: rgba(60, 200, 140, 0.3);
}

/* Media */
.showcase-lane__media {
  display: flex;
  justify-content: center;
}
.showcase-lane__frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  background: color-mix(in srgb, var(--accent) 18%, rgba(255, 255, 255, 0.65));
  transition: transform 0.25s ease;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);
  border: 2px solid var(--image-border);
}
:where(html.dark) .showcase-lane__frame {
  background: color-mix(in srgb, var(--accent) 18%, rgba(97, 97, 102, 0.75));
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
}
.showcase-lane:hover .showcase-lane__frame {
  transform: translateY(-3px);
}
.showcase-lane__frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Mobile: stack in single column */
@media (max-width: 960px) {
  .showcase-lane {
    grid-template-columns: 1fr;
  }
  .showcase-lane__body,
  .showcase-lane__media,
  .showcase-lane--reverse .showcase-lane__body,
  .showcase-lane--reverse .showcase-lane__media {
    grid-column: 1;
    grid-row: auto; /* reset row to stack vertically */
    text-align: left;
    align-items: flex-start;
  }
}
</style>