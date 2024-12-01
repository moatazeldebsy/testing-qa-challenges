<template>
  <div class="video-container">
    <iframe
      :src="embedUrl"
      :title="title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
  if (props.url.includes('youtube.com')) {
    const videoId = props.url.split('v=')[1]
    return `https://www.youtube.com/embed/${videoId}`
  }
  if (props.url.includes('vimeo.com')) {
    const videoId = props.url.split('vimeo.com/')[1]
    return `https://player.vimeo.com/video/${videoId}`
  }
  return props.url
})
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  margin: 1.5rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
</style>