import type { SkillGroup } from './types'

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'Kotlin', 'Rust', 'C', 'C++'],
  },
  {
    category: 'Backend and data',
    items: [
      'FastAPI',
      'Kafka',
      'Redis',
      'PostgreSQL (Aurora RDS)',
      'DynamoDB',
      'SQLite',
      'REST APIs',
      'Event and batch processing',
    ],
  },
  {
    category: 'Cloud and DevOps',
    items: [
      'AWS ECS',
      'ECR',
      'Lambda',
      'S3',
      'API Gateway',
      'SNS',
      'CloudWatch',
      'Secrets Manager',
      'Textract',
      'Terraform',
      'CloudFormation',
      'CDK',
      'Docker',
      'GitLab CI/CD',
      'GitHub Actions',
      'Dynatrace',
      'Apigee',
      'Kong',
    ],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Node.js', 'Vite'],
  },
  {
    category: 'Agentic AI',
    items: [
      'LangGraph',
      'AWS AgentCore',
      'Model Context Protocol (MCP)',
      'OpenAI Agents SDK',
      'Anthropic API',
      'Agentic coding (Claude Code)',
      'LLM benchmarking',
    ],
  },
  {
    category: 'Machine learning',
    items: ['PyTorch', 'NumPy', 'Pandas', 'scikit-learn'],
  },
]
