<template>
  <div class="logo-container">
    <img 
      src="/logo.svg" 
      alt="Testing & QA Challenges Logo" 
      class="site-logo"
    />
    <span class="logo-text">Testing & QA Challenges</span>
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.site-logo {
  height: 40px;
  width: auto;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
</style>