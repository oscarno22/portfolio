import type { Project } from './types'

export const projects: Project[] = [
  {
    slug: 'notification-events-tracker',
    title: 'Notification Events Tracker Service',
    kind: 'work',
    org: 'Amazon Web Services',
    blurb:
      'Designed and implemented an asynchronous central logging service for AWS User Notifications to identify missing notifications and related complications in data-plane.',
    stack: ['Kotlin', 'AWS Lambda', 'DynamoDB', 'React', 'AWS CDK'],
    image: '/projects/aws-notifications.png',
    featured: true,
  },
  {
    slug: 'flow-templates',
    title: 'Flow Templates',
    kind: 'work',
    org: 'Amazon Web Services',
    blurb:
      'Developed a resource system for Amazon Connect that enables replication of customer-service workflows across multiple accounts, with CRUD APIs and validation logic.',
    stack: ['Java', 'AWS', 'JUnit', 'REST APIs', 'JSON'],
    image: '/projects/connect-workflows.jpg',
    featured: true,
  },
  {
    slug: 'generative-ai-agents',
    title: 'Generative AI Agents',
    kind: 'work',
    org: 'Ally Financial',
    blurb:
      'Building powerful AI agents to drive automation at Ally Financial, leveraging modern frameworks and large language models.',
    stack: ['LangGraph', 'Python', 'OpenAI', 'AI/ML', 'Model Context Protocol'],
    image: '/projects/ai-agents.png',
    featured: true,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
