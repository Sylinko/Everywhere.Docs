<template>
  <div class="flex items-center justify-center">
    <img :src="src" :alt="alt" :width="width" />
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: '100%',
  },
});
</script>