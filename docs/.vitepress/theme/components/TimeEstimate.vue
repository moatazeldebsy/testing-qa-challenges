<template>
  <span class="time-estimate" :title="fullText">
    <svg class="time-icon" viewBox="0 0 24 24" width="16" height="16">
      <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
    </svg>
    {{ fullText }}
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  time: {
    type: String,
    required: true
  }
})

const fullText = computed(() => `Estimated time: ${props.time}`)
</script>

<style scoped>
.time-estimate {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg-soft);
}

.time-icon {
  opacity: 0.7;
}
</style>