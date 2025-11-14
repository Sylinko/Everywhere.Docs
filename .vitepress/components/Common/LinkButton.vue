<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'LinkButton' })

type Target = '_self' | '_blank' | '_parent' | '_top'

const props = withDefaults(defineProps<{
  href: string
  label?: string
  icon?: any // string | Component
  target?: Target
  rel?: string
}>(), {
  target: '_self',
  variant: 'default',
})

const computedRel = computed(() => {
  if (props.rel) return props.rel
  return props.target === '_blank' ? 'noopener noreferrer' : undefined
})

const isComponentIcon = computed(() => {
  const t = typeof props.icon
  return t === 'object' || t === 'function'
})

const hasOnlyIcon = computed(() => !props.label)
const ariaLabel = computed(() => props.label || undefined)
</script>

<template>
  <a class="link-button" :href="props.href"
    :target="props.target" :rel="computedRel" :aria-label="ariaLabel" role="button">
    <span v-if="$slots.icon || icon" class="icon" aria-hidden="true">
      <slot name="icon">
        <component v-if="isComponentIcon" :is="icon" />
        <span v-else>{{ icon }}</span>
      </slot>
    </span>
    <span v-if="$slots.default || label" class="label">
     {{ label }}
    </span>
  </a>
</template>

<style scoped>
.label {
  font-size: 16px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.link-button {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  user-select: none;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  transition:
    border-color 0.25s,
    background-color 0.25s;
  text-decoration: none;
}

.link-button:hover {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-soft-up);
}

:where(html.dark) .inversed-icon {
  filter: invert(1);
}

p {
  margin: 0;
  font-size: 20px;
}
</style>