<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-logo">
        <SiteLogo />
      </div>
      <div class="social-links">
        <h3>Connect With Us</h3>
        <div class="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener" class="social-icon">
            <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener" class="social-icon">
            <font-awesome-icon :icon="['fab', 'x-twitter']" size="lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener" class="social-icon">
            <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="social-icon">
            <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener" class="social-icon">
            <font-awesome-icon :icon="['fab', 'youtube']" size="lg" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faFacebook, 
  faXTwitter, 
  faInstagram, 
  faLinkedin, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons'
import SiteLogo from './SiteLogo.vue'

library.add(faFacebook, faXTwitter, faInstagram, faLinkedin, faYoutube)
</script>

<style scoped>
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.social-links h3 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: var(--neutral-100);
}

.social-icons {
  display: flex;
  gap: 1.5rem;
}
</style>