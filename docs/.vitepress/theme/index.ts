import DefaultTheme from 'vitepress/theme'
import './styles/custom.css'
import './styles/mermaid.css'
import { h, onMounted, watch } from 'vue'
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
      if (typeof window !== 'undefined') {
        initMermaid()
        renderMermaidDiagrams()
      }
    })

    watch(
      () => route.path,
      async () => {
        if (typeof window !== 'undefined') {
          await Promise.resolve()
          renderMermaidDiagrams()
        }
      }
    )

    if (typeof window !== 'undefined') {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.target instanceof HTMLElement && 
              mutation.type === 'attributes' && 
              mutation.attributeName === 'class') {
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

        return () => observer.disconnect()
      })
    }
  }
}