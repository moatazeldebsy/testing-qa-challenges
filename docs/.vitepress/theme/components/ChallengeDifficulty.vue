<template>
  <span class="difficulty-badge" :class="difficultyClass">
    Difficulty: {{ rating }}/5
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  rating: {
    type: Number,
    required: true,
    validator: (value) => value >= 1 && value <= 5
  }
})

const difficultyClass = computed(() => {
  const classes = {
    1: 'bg-green-100 text-green-800',
    2: 'bg-blue-100 text-blue-800',
    3: 'bg-yellow-100 text-yellow-800',
    4: 'bg-orange-100 text-orange-800',
    5: 'bg-red-100 text-red-800'
  }
  return classes[props.rating]
})
</script>