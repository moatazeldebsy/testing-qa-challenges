<template>
  <div class="challenge-grid">
    <div v-for="category in categories" :key="category.title" class="challenge-category">
      <h2 class="category-title">
        <span class="category-emoji">{{ category.emoji }}</span>
        {{ category.title }}
      </h2>
      <div class="challenge-cards">
        <ChallengeCard 
          v-for="challenge in category.challenges" 
          :key="challenge.title"
          :challenge="challenge"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { categories } from '../utils/categories'
import ChallengeCard from './ChallengeCard.vue'
</script>

<style scoped>
.challenge-grid {
  display: grid;
  gap: 2rem;
  padding: 2rem 0;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.category-emoji {
  font-size: 1.75rem;
}

.challenge-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
</style>