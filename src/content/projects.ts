import type { Project } from './types'

const gh = (repo: string) => `https://github.com/oscarno22/${repo}`

export const projects: Project[] = [
  // ---- Work (Ally Financial). Case studies only, no code links. ----
  {
    slug: 'decedent-platform',
    title: 'Decedent Servicing Platform',
    kind: 'work',
    org: 'Ally Financial',
    featured: true,
    blurb:
      'A FastAPI and Next.js platform that streamlines decedent servicing for an operations team. Projected to save ~$1M a year.',
    problem:
      'When customers pass away, Ally turns off their online services, applies business restrictions, and updates their profile. An operations team handles this for every claim, and the claims have to stay current as their status changes.',
    approach:
      'I lead the platform and own it in production. Claims come in daily from Salesforce, plus a one-time 24-month backfill (~20K claims, ~1K new each month), and a scheduler on FastAPI keeps every claim current with tiered refreshes based on claim status. The business wanted claims to load quickly, so the dashboard uses indexing, server-side pagination, async batch processing on ECS, and Redis for caching and streaming updates to the UI in real time. A LangGraph agent server on self-hosted RDS executes the servicing operations on each claim, using Textract for document analysis.',
    result: 'Projected to save ~$1M a year for the operations team.',
    stack: ['FastAPI', 'Next.js', 'Salesforce', 'ECS', 'Redis', 'RDS', 'LangGraph', 'Textract'],
  },
  {
    slug: 'mcp-gateway',
    title: 'MCP Gateway',
    kind: 'work',
    org: 'Ally Financial',
    featured: true,
    blurb:
      "One central registry that resolves many MCP servers under a single host, for Ally's business-facing agent platform.",
    problem:
      "The agent platform needed its agents to reach many MCP servers. Security is critical at a bank, so access had to follow Ally's authentication standard rather than each server handling auth on its own.",
    approach:
      'I built the gateway as a central registry that resolves many MCP servers under a single host, with dynamic Okta OAuth for integration with the authentication standard. The platform around it runs Conversational and Deep agents (LangGraph deepagents or AWS AgentCore), each in a fresh ECS task per session, with a skills registry and usage analytics.',
    stack: ['Model Context Protocol', 'Okta OAuth', 'ECS', 'LangGraph', 'AWS AgentCore'],
  },
  {
    slug: 'fraud-engine',
    title: 'Fraud recommendation engine',
    kind: 'work',
    org: 'Ally Financial',
    featured: true,
    status: 'in-development',
    blurb:
      'An event-driven engine that turns fraud alerts from Kafka into agent-reasoned recommendations.',
    problem:
      'Fraud alerts arrive on Kafka as a stream. Each one needs its source data retrieved, features computed over it, and a recommendation reasoned out before anything can be published back.',
    approach:
      "I'm the lead engineer. The engine consumes alerts from Kafka, orchestrates retrieval and caching of source data, computes features over that data, triggers a Deep run on the agent platform to reason over them, then polls for the result and publishes a recommendation back to Kafka.",
    stack: ['Kafka', 'Event processing', 'Deep agents', 'Feature computation'],
  },

  // ---- Personal, featured ----
  {
    slug: 'market-aggregator',
    title: 'Market Data Aggregator',
    kind: 'personal',
    featured: true,
    repoUrl: gh('market-aggregator'),
    blurb:
      'A Rust pipeline that ingests, normalizes, and fans out order books from three crypto exchanges, built around data integrity.',
    problem:
      'An order book with one missed message is silently wrong, and silently wrong is worse than obviously down. A process that crashes gets noticed; one that serves confident prices from a book that quietly lost a message does not.',
    approach:
      'The pipeline ingests, normalizes, and fans out order books from three exchanges, detecting gaps with sequence numbers and verifying book state with CRC32 checksums. On top of that: sharding with a merging gateway, Prometheus metrics, a live SSE dashboard, and replay of recorded live sessions.',
    result:
      'The repo ships real recordings of all three venues that replay through the same pipeline with the network unplugged, so the whole system can be exercised offline.',
    stack: ['Rust', 'tokio', 'axum', 'Prometheus', 'SSE'],
  },
  {
    slug: 'tax-line-ai',
    title: 'Tax Line AI',
    kind: 'personal',
    featured: true,
    repoUrl: gh('tax-line-ai'),
    blurb:
      'Upload an invoice and an agent works out what each line item is and assigns its tax category.',
    problem:
      'Each line on an invoice needs a tax category, and a pipeline that reads documents has to fail in a way the caller can act on when an item cannot be placed.',
    approach:
      'An event-driven orchestration of Lambdas: API Gateway issues presigned S3 uploads, and each upload triggers a three-stage OpenAI Agents SDK agent (extract, classify, critic) backed by DynamoDB. Infrastructure is in CloudFormation, deployed through GitHub Actions with keyless OIDC.',
    result:
      'Each stage reports complete, partial, or failed, with status polling and an SNS email when processing finishes.',
    stack: [
      'Python',
      'Lambda',
      'API Gateway',
      'S3',
      'DynamoDB',
      'SNS',
      'OpenAI Agents SDK',
      'CloudFormation',
      'GitHub Actions',
    ],
  },

  // ---- Personal, secondary grid. Blurbs come from each repo's README. ----
  {
    slug: 'email-agent',
    title: 'email-agent',
    kind: 'personal',
    featured: false,
    repoUrl: gh('email-agent'),
    blurb:
      'A LangGraph agent that triages incoming Gmail: it classifies each message (newsletter, receipt, calendar invite, personal, work, junk) and decides on a label, archive, or draft action. Actions are gated behind an explicit trust phase, from shadow logging up to draft replies, with stats in SQLite and a live dashboard over SSE.',
    stack: ['LangGraph', 'FastAPI', 'Anthropic API', 'Gmail API', 'SQLite'],
  },
  {
    slug: 'schwarzschild-raytracer',
    title: 'Schwarzschild raytracer',
    kind: 'personal',
    featured: false,
    repoUrl: gh('schwarzschild-raytracer'),
    blurb:
      'A CPU-parallel raytracer in Rust that renders a Schwarzschild black hole by numerically integrating null geodesics through curved spacetime with RK4. It reproduces the shadow, the warped accretion disk, Doppler beaming, and lensed background stars.',
    stack: ['Rust', 'RK4 integration', 'General relativity'],
  },
  {
    slug: 'rust-zip',
    title: 'rust_zip',
    kind: 'personal',
    featured: false,
    repoUrl: gh('rust-zip'),
    blurb:
      'A from-scratch implementation of DEFLATE and the ZIP file format in Rust, with no compression libraries: LZ77 sliding-window matching, canonical Huffman coding, and a ZIP writer whose output any standard tool can extract.',
    stack: ['Rust', 'DEFLATE', 'LZ77', 'Huffman coding'],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const moreProjects = projects.filter((p) => !p.featured)
