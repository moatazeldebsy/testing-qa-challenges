<template>
  <div class="challenge-list">
    <section v-for="category in categories" :key="category.title" class="challenge-category">
      <h2 class="category-title">
        <span class="category-emoji">{{ category.emoji }}</span>
        {{ category.title }}
      </h2>
      <div class="challenge-grid">
        <ChallengeCard 
          v-for="challenge in category.challenges" 
          :key="challenge.title"
          :challenge="challenge"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { categories } from '../../utils/categories'
import ChallengeCard from './ChallengeCard.vue'
</script>

<style scoped>
.challenge-list {
  display: grid;
  gap: 3rem;
  padding: 2rem 0;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.5rem;
}

.category-emoji {
  font-size: 2rem;
}

.challenge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 640px) {
  .challenge-grid {
    grid-template-columns: 1fr;
  }
}
</style>