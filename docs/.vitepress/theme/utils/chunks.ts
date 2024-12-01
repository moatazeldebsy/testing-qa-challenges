import type { OutputOptions } from 'rollup'

export const manualChunks: OutputOptions['manualChunks'] = {
  'core-vendor': ['vue', 'vitepress'],
  'ui-components': [
    '@fortawesome/vue-fontawesome',
    '@fortawesome/fontawesome-svg-core'
  ],
  'icons': [
    '@fortawesome/free-brands-svg-icons',
    '@fortawesome/free-solid-svg-icons'
  ],
  'diagrams': ['mermaid'],
  'markdown': ['markdown-it', 'markdown-it-container']
}

export const chunkGroups = {
  components: {
    prefix: 'comp',
    chunks: [
      'challenges',
      'media',
      'common'
    ]
  },
  utils: {
    prefix: 'util',
    chunks: [
      'mermaid',
      'components',
      'categories'
    ]
  }
}