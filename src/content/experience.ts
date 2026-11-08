import type { Experience } from './types'

export const experience: Experience[] = [
  {
    org: 'Ally Financial',
    title: 'Software Engineer – Agentic AI',
    location: 'Charlotte, NC',
    start: 'Jan 2025',
    end: 'Present',
    summary:
      'Lead engineer and production owner across three workstreams: a servicing platform for an operations team, the gateway for our business-facing agent platform, and an event-driven fraud engine.',
    items: [
      {
        heading: 'Decedent Servicing Platform',
        bullets: [
          'When customers pass away, Ally turns off their online services, applies business restrictions, and updates their profile. I am the lead engineer and primary production owner of the "Decedent" platform (FastAPI, Next.js) that streamlines this work for an operations team, projected to save ~$1M a year.',
          'Built daily claim ingestion from Salesforce, plus a one-time 24-month backfill (~20K claims, ~1K new each month). The scheduler on FastAPI keeps every claim current with tiered refreshes based on claim status.',
          "The business wanted claims to load quickly, so the platform's dashboard uses indexing, server-side pagination, async batch processing on ECS, and Redis for caching and streaming updates to the UI in real time.",
          'Extended the platform with a LangGraph agent server (self-hosted RDS) that executes the servicing operations on each claim, using Textract for document analysis.',
        ],
      },
      {
        heading: 'Agent platform',
        bullets: [
          "Built the MCP Gateway for our business-facing agent platform: one central registry that resolves many MCP servers under a single host. Security is critical at a bank, so it supports dynamic Okta OAuth for integration with Ally's authentication standard.",
          'The platform runs Conversational and Deep agents (LangGraph deepagents or AWS AgentCore), each in a fresh ECS task per session, with a skills registry and usage analytics.',
        ],
      },
      {
        heading: 'Fraud recommendation engine',
        status: 'in-development',
        bullets: [
          'Lead engineer for an event-driven fraud engine. It consumes fraud alerts from Kafka, orchestrates retrieval and caching of source data, computes features over that data, triggers a Deep run on the agent platform to reason over them, then polls for the result and publishes a recommendation back to Kafka.',
        ],
      },
      {
        heading: 'Across projects',
        span: 'full',
        bullets: [
          'I own production releases end to end: Terraform, GitLab CI/CD, dependency and vulnerability fixes, load testing, APIs (Apigee and Kong), UAT, Dynatrace and CloudWatch monitoring, and the GenAI model approval process and documentation.',
          'I work with other teams and business lines to keep tabs on products and translate business needs into technical designs.',
        ],
      },
    ],
  },
  {
    org: 'Amazon Web Services',
    title: 'Software Dev Engineer Intern',
    location: 'Seattle, WA',
    start: 'May 2024',
    end: 'Aug 2024',
    items: [
      {
        bullets: [
          'Contributed to AWS User Notifications (a notifications system) by designing an asynchronous central logging service that traces each notification through the data plane, so missing notifications and related issues can be identified.',
          'Built it with Lambda and DynamoDB, Kotlin APIs for retrieving notification traces, CDK infrastructure, CloudWatch monitoring, and a React frontend.',
        ],
      },
    ],
  },
  {
    org: 'Amazon Web Services',
    title: 'Software Dev Engineer Intern',
    location: 'Seattle, WA',
    start: 'May 2023',
    end: 'Aug 2023',
    items: [
      {
        bullets: [
          'Contributed to Amazon Connect, an omnichannel cloud contact center, by building a reusable skeleton resource for replicating customer service workflows across accounts.',
          'Developed it in the existing control plane service with Java CRUD APIs and validation for its JSON representation, tested with JUnit and integration tests.',
        ],
      },
    ],
  },
  {
    org: 'Amazon Web Services',
    title: 'Amazon Technology Intern',
    location: 'Matthews, NC',
    start: 'May 2022',
    end: 'Aug 2022',
    items: [
      {
        bullets: [
          'Worked on Babelfish for Aurora PostgreSQL, which lets Aurora understand commands written for Microsoft SQL Server. Identified catalog objects missing for Visual Studio, SSMS, and other SQL clients, and helped replace them through design reviews and code changes.',
        ],
      },
    ],
  },
]
