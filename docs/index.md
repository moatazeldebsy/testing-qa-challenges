---
layout: home
hero:
  name: "Testing & QA Challenges at Scale"
  text: "Real-world testing challenges and solutions"
  tagline: A comprehensive guide for software testing professionals
  actions:
    - theme: brand
      text: Get Started 🏁
      link: /introduction
    - theme: alt
      text: View Challenges 📚
      link: /challenges/
features:
  - title: Real-world Scenarios 🌍
    details: Learn from actual enterprise testing challenges and their solutions
  - title: Comprehensive Solutions 💡
    details: Multiple approaches with detailed pros and cons analysis
  - title: Interactive Learning 🎓
    details: Code snippets, diagrams, and practical examples
  - title: Community Driven 👥
    details: Contribute your own challenges and solutions
---

<style>
:root {
  --vp-home-hero-image-background-image: linear-gradient(
    -45deg,
    var(--vp-c-brand) 30%,
    var(--vp-c-brand-light)
  );
  --vp-home-hero-image-filter: blur(72px);
}

.VPHero .image-bg {
  opacity: 0.8;
  transition: opacity 1s ease;
}

.VPHero .image-container {
  transform: scale(1);
  transition: transform 1s ease;
}

.VPHero:hover .image-bg {
  opacity: 1;
}

.VPHero:hover .image-container {
  transform: scale(1.05);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(40px);
  }
}
</style>