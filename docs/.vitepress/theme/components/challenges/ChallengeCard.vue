<template>
  <router-link :to="challenge.link" class="challenge-card">
    <h3 class="challenge-title">{{ challenge.title }}</h3>
    <p class="challenge-description">{{ challenge.description }}</p>
    <div class="challenge-meta">
      <div class="difficulty" :class="difficultyClass">
        <span class="difficulty-icon">{{ difficultyIcon }}</span>
        Level {{ challenge.difficulty }}
      </div>
      <div class="time-estimate">
        <svg class="time-icon" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
        </svg>
        {{ challenge.time }}
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Challenge } from '../../utils/categories'

const props = defineProps<{
  challenge: Challenge
}>()

const difficultyClass = computed(() => {
  const classes = {
    1: 'difficulty-easy',
    2: 'difficulty-medium',
    3: 'difficulty-intermediate',
    4: 'difficulty-hard',
    5: 'difficulty-expert'
  }
  return classes[props.challenge.difficulty as keyof typeof classes]
})

const difficultyIcon = computed(() => {
  const icons = {
    1: '🟢',
    2: '🔵',
    3: '🟡',
    4: '🟠',
    5: '🔴'
  }
  return icons[props.challenge.difficulty as keyof typeof icons]
})
</script>

<style scoped>
.challenge-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.2s ease;
  text-decoration: none;
  color: inherit;
}

.challenge-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
}

.challenge-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
  color: var(--vp-c-text-1);
}

.challenge-description {
  color: var(--vp-c-text-2);
  margin: 0 0 1.5rem;
  flex-grow: 1;
  line-height: 1.6;
}

.challenge-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.difficulty {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.difficulty-icon {
  font-size: 1.1em;
}

.difficulty-easy { background: rgba(74, 222, 128, 0.1); color: rgb(22, 101, 52); }
.difficulty-medium { background: rgba(96, 165, 250, 0.1); color: rgb(30, 64, 175); }
.difficulty-intermediate { background: rgba(250, 204, 21, 0.1); color: rgb(133, 77, 14); }
.difficulty-hard { background: rgba(251, 146, 60, 0.1); color: rgb(154, 52, 18); }
.difficulty-expert { background: rgba(248, 113, 113, 0.1); color: rgb(153, 27, 27); }

.time-estimate {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
}

.time-icon {
  opacity: 0.7;
}
</style>