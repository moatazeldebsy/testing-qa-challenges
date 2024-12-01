import DefaultTheme from 'vitepress/theme'
import './styles/custom.css'
import { h, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import { initMermaid, renderMermaidDiagrams } from './utils/mermaid'
import { registerComponents } from './utils/components'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    registerComponents(app)
  },
  setup() {
    const route = useRoute()

    onMounted(() => {
      initMermaid()
      renderMermaidDiagrams()
    })

    watch(
      () => route.path,
      async () => {
        await nextTick()
        renderMermaidDiagrams()
      }
    )

    // Handle dark/light mode changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.target.classList.contains('dark')) {
          initMermaid()
          renderMermaidDiagrams()
        }
      })
    })

    onMounted(() => {
      const html = document.querySelector('html')
      if (html) {
        observer.observe(html, { attributes: true, attributeFilter: ['class'] })
      }
    })
  }
}