<template>
  <div class="slide-container">
    <iframe
      :src="embedUrl"
      :title="title"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  url: string
  title: string
}>()

const embedUrl = computed(() => {
  if (props.url.includes('docs.google.com')) {
    return props.url.replace('/edit', '/preview')
  }
  if (props.url.includes('slides.com')) {
    return `${props.url}/embed`
  }
  return props.url
})
</script>

<style scoped>
.slide-container {
  position: relative;
  padding-bottom: 62.5%; /* 16:10 aspect ratio */
  height: 0;
  overflow: hidden;
  margin: 1.5rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.slide-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
</style>