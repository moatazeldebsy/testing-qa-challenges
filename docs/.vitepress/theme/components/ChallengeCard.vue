<template>
  <div class="challenge-card">
    <h3>{{ challenge.title }}</h3>
    <p>{{ challenge.description }}</p>
    <div class="challenge-meta">
      <ChallengeDifficulty :rating="challenge.difficulty" />
      <TimeEstimate :time="challenge.time" />
    </div>
    <a :href="challenge.link" class="challenge-link">Learn More →</a>
  </div>
</template>

<script setup lang="ts">
import type { Challenge } from '../utils/categories'

defineProps<{
  challenge: Challenge
}>()
</script>

<style scoped>
.challenge-card {
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.challenge-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.challenge-meta {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}

.challenge-link {
  display: inline-block;
  color: var(--vp-c-brand);
  font-weight: 500;
  text-decoration: none;
}

.challenge-link:hover {
  text-decoration: underline;
}
</style>