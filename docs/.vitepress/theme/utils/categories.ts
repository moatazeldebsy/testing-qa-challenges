import { Category, Challenge } from '../types/challenges';

export const categories: Category[] = [
  {
    title: 'Testing Strategy',
    emoji: '🎯',
    challenges: [
      {
        title: 'Production Testing',
        description: 'Implement comprehensive production monitoring',
        difficulty: 4,
        time: '2-3 days',
        link: '/challenges/production/monitoring'
      },
      {
        title: 'Synthetic Testing',
        description: 'Automate and monitor user journeys',
        difficulty: 3,
        time: '2-3 days',
        link: '/challenges/synthetic/testing'
      }
    ]
  },
  {
    title: 'Cloud Testing',
    emoji: '☁️',
    challenges: [
      {
        title: 'Infrastructure Testing',
        description: 'Test cloud infrastructure deployments',
        difficulty: 4,
        time: '3-4 days',
        link: '/challenges/cloud/infrastructure-testing'
      },
      {
        title: 'Serverless Testing',
        description: 'Test serverless applications and functions',
        difficulty: 4,
        time: '2-3 days',
        link: '/challenges/cloud/serverless-testing'
      },
      {
        title: 'Multi-Cloud Testing',
        description: 'Test applications across cloud providers',
        difficulty: 5,
        time: '4-5 days',
        link: '/challenges/cloud/multi-cloud-testing'
      }
    ]
  },
  {
    title: 'AI Testing',
    emoji: '🤖',
    challenges: [
      {
        title: 'ML Model Testing',
        description: 'Test machine learning model accuracy and reliability',
        difficulty: 5,
        time: '4-5 days',
        link: '/challenges/ai/ml-model-testing'
      },
      {
        title: 'AI Integration Testing',
        description: 'Test AI system integrations and workflows',
        difficulty: 4,
        time: '3-4 days',
        link: '/challenges/ai/integration-testing'
      },
      {
        title: 'AI Ethics Testing',
        description: 'Test AI systems for bias and fairness',
        difficulty: 5,
        time: '3-4 days',
        link: '/challenges/ai/ethics-testing'
      }
    ]
  },
  {
    title: 'Security Testing',
    emoji: '🔒',
    challenges: [
      {
        title: 'API Security',
        description: 'Implement comprehensive API security testing',
        difficulty: 4,
        time: '2-3 days',
        link: '/challenges/security/api-security'
      },
      {
        title: 'OAuth Testing',
        description: 'Test OAuth implementation and flows',
        difficulty: 4,
        time: '2-3 days',
        link: '/challenges/security/oauth-testing'
      }
    ]
  },
  {
    title: 'Performance Testing',
    emoji: '⚡',
    challenges: [
      {
        title: 'Load Testing',
        description: 'Test system performance under load',
        difficulty: 4,
        time: '2-3 days',
        link: '/challenges/performance/load-testing'
      },
      {
        title: 'Real-time Analytics',
        description: 'Test real-time data processing and analytics',
        difficulty: 4,
        time: '2-3 days',
        link: '/challenges/performance/real-time-analytics'
      }
    ]
  }
];