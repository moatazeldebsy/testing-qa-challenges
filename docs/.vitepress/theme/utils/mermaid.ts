import mermaid from 'mermaid'

export function initMermaid() {
  mermaid.initialize({
    startOnLoad: true,
    theme: document.querySelector('html')?.classList.contains('dark') ? 'dark' : 'default',
    securityLevel: 'loose',
    themeVariables: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '14px'
    }
  })
}

export function renderMermaidDiagrams() {
  const elements = document.getElementsByClassName('mermaid')
  Array.from(elements).forEach((element) => {
    const content = element.textContent || ''
    if (content.trim()) {
      try {
        mermaid.render(`mermaid-${Date.now()}`, content).then(({ svg }) => {
          element.innerHTML = svg
        })
      } catch (error) {
        console.error('Failed to render Mermaid diagram:', error)
        element.innerHTML = `<pre class="error">Failed to render diagram</pre>`
      }
    }
  })
}