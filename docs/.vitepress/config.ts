import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Testing & QA Challenges',
  description: 'Comprehensive guide to enterprise software testing challenges',
  base: '/testing-qa-challenges/',
  outDir: '.vitepress/dist',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ],
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Challenges', link: '/challenges/' },
      { text: 'Career Paths', link: '/career-paths/' },
      { text: 'Resources', link: '/resources/' },
      { text: 'Contributors', link: '/contributors' },
      { text: 'Tech Stack', link: '/tech-stack' },
      { text: 'Consultation', link: '/consultation' },
      { text: 'About', link: '/about' }
    ],
    sidebar: {
      '/challenges/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/challenges/' },
            { text: 'How to Use', link: '/how-to-use' }
          ]
        },
        {
          text: 'Testing Strategy',
          items: [
            { text: 'Production Testing', link: '/challenges/production/monitoring' },
            { text: 'Synthetic Testing', link: '/challenges/synthetic/testing' }
          ]
        },
        {
          text: 'Cloud Testing',
          items: [
            { text: 'Infrastructure Testing', link: '/challenges/cloud/infrastructure-testing' },
            { text: 'Serverless Testing', link: '/challenges/cloud/serverless-testing' },
            { text: 'Multi-Cloud Testing', link: '/challenges/cloud/multi-cloud-testing' }
          ]
        },
        {
          text: 'AI Testing',
          items: [
            { text: 'ML Model Testing', link: '/challenges/ai/ml-model-testing' },
            { text: 'AI Integration Testing', link: '/challenges/ai/integration-testing' },
            { text: 'AI Ethics Testing', link: '/challenges/ai/ethics-testing' }
          ]
        },
        {
          text: 'Security Testing',
          items: [
            { text: 'API Security', link: '/challenges/security/api-security' },
            { text: 'OAuth Testing', link: '/challenges/security/oauth-testing' }
          ]
        },
        {
          text: 'Performance Testing',
          items: [
            { text: 'Load Testing', link: '/challenges/performance/load-testing' },
            { text: 'Real-time Analytics', link: '/challenges/performance/real-time-analytics' }
          ]
        },
        {
          text: 'Mobile Testing',
          items: [
            { text: 'Device Features', link: '/challenges/mobile/device-features' },
            { text: 'Device Fragmentation', link: '/challenges/mobile/device-fragmentation' },
            { text: 'Network Conditions', link: '/challenges/mobile/network-conditions' }
          ]
        },
        {
          text: 'Integration Testing',
          items: [
            { text: 'Database Integration', link: '/challenges/integration/database' },
            { text: 'Microservices', link: '/challenges/integration/microservices' }
          ]
        },
        {
          text: 'Process & Management',
          items: [
            { text: 'Change Management', link: '/challenges/process/change-management' },
            { text: 'Cultural Differences', link: '/challenges/process/cultural-differences' },
            { text: 'Knowledge Sharing', link: '/challenges/process/knowledge-sharing' },
            { text: 'Resource Allocation', link: '/challenges/process/resource-allocation' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/moatazeldebsy/testing-qa-challenges' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024'
    }
  }
})