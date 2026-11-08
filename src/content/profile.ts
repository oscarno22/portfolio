import type { Profile } from './types'

export const profile: Profile = {
  name: 'Oscar Nolen',
  headline: 'Software engineer building production data pipelines and AI agents in fintech.',
  eyebrow: 'Ally Financial · Charlotte, NC',
  location: 'Charlotte, NC',
  email: 'oscarnolen@gmail.com',
  linkedin: 'https://www.linkedin.com/in/oscar-nolen-846269153',
  github: 'https://github.com/oscarno22',
  resumeUrl: '/docs/resume-oscarnolen.pdf',
  about: [
    "I'm a software engineer at Ally Financial, where I've worked in agentic AI since January 2025. I'm the lead engineer and production owner of the Decedent servicing platform, I built the MCP Gateway for our business-facing agent platform, and I lead an event-driven fraud recommendation engine that is still in development.",
    "The problems I like most are the ones where correctness has to hold across systems: a claim that has to stay current against Salesforce, an order book that has to match the exchange, a release that has to clear UAT and monitoring before it reaches customers. I'm happiest when something I built is running in production and I can watch it work.",
    'I studied Computer Science and Mathematics at Duke and finished an MS in Computer Science at UNC Charlotte in December 2025, with research on memorization in variational autoencoders. I worked service jobs through school, and I care about enriching STEM in underrepresented communities.',
  ],
  sections: {
    about: { title: 'About' },
    experience: {
      title: 'Experience',
      lede: 'Production ownership at a bank, after three summers at AWS.',
    },
    work: {
      title: 'Featured work',
      lede: 'Case studies from Ally, plus two personal projects. Work projects are described, not linked.',
    },
    more: {
      title: 'More projects',
      lede: 'Smaller builds, each one something I wanted to understand by writing it myself.',
    },
    skills: { title: 'Skills' },
    research: { title: 'Research' },
    contact: {
      title: 'Contact',
      lede: "I'm open to fintech platform and infrastructure roles. Email is the fastest way to reach me.",
    },
  },
}
