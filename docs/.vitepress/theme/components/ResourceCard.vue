<template>
  <div class="resource-card">
    <div class="resource-header">
      <div class="resource-icon" v-if="icon">
        <img :src="icon" :alt="`${title} icon`" />
      </div>
      <h3 class="resource-title">{{ title }}</h3>
    </div>
    <p class="resource-description">{{ description }}</p>
    <div class="resource-tags" v-if="tags && tags.length">
      <span v-for="tag in tags" :key="tag" class="resource-tag">{{ tag }}</span>
    </div>
    <a :href="link" target="_blank" rel="noopener" class="resource-link">
      Learn More
      <svg class="icon" viewBox="0 0 24 24" width="16" height="16">
        <path fill="currentColor" d="M14 5c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1s-1-.4-1-1V8.4l-7.3 7.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L11.6 7H5c-.6 0-1-.4-1-1s.4-1 1-1h9z"/>
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  link: string
  icon?: string
  tags?: string[]
}>()
</script>

<style scoped>
.resource-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.resource-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.resource-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.resource-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
  border-radius: 8px;
  padding: 0.5rem;
}

.resource-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.resource-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.resource-description {
  margin: 0 0 1rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  flex-grow: 1;
}

.resource-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.resource-tag {
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
}

.resource-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
  margin-top: auto;
}

.resource-link:hover {
  text-decoration: underline;
}

.icon {
  transition: transform 0.2s ease;
}

.resource-link:hover .icon {
  transform: translateX(2px);
}
</style>