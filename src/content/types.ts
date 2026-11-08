export type ProjectKind = 'work' | 'personal' | 'research'
export type Status = 'in-development'

export interface ExperienceItemGroup {
  heading?: string
  status?: Status
  /** Span the full width of the workstream grid. */
  span?: 'full'
  bullets: string[]
}

export interface Experience {
  org: string
  title: string
  location?: string
  start: string
  end?: string
  summary?: string
  items: ExperienceItemGroup[]
}

export interface Project {
  slug: string
  title: string
  kind: ProjectKind
  /** Short description shown on every card. */
  blurb: string
  /** Case-study fields (featured work and personal projects). */
  problem?: string
  approach?: string
  result?: string
  stack: string[]
  repoUrl?: string
  status?: Status
  featured: boolean
  image?: string
  /** Organisation the work was done for, shown as the card eyebrow. */
  org?: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Education {
  school: string
  degree: string
  detail?: string
  start: string
  end: string
}

export interface Research {
  title: string
  context: string
  body: string[]
  stack: string[]
}

export interface SectionCopy {
  title: string
  lede?: string
}

export type SectionKey =
  | 'about'
  | 'experience'
  | 'work'
  | 'more'
  | 'skills'
  | 'research'
  | 'contact'

export interface Profile {
  name: string
  /** One-line positioning shown under the name. */
  headline: string
  /** Small label above the name. */
  eyebrow: string
  location: string
  email: string
  linkedin: string
  github: string
  resumeUrl: string
  about: string[]
  /** Short label/value pairs shown beside the About copy. */
  facts: { label: string; value: string }[]
  sections: Record<SectionKey, SectionCopy>
}
