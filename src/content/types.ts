export type ProjectKind = 'work' | 'personal' | 'research'

export interface ExperienceItemGroup {
  heading?: string
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
  /** Case-study fields (work projects and featured personal projects). */
  problem?: string
  approach?: string
  result?: string
  stack: string[]
  repoUrl?: string
  status?: 'in-development'
  featured: boolean
  image?: string
  /** Organisation the work was done for, shown as the card eyebrow. */
  org?: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface SectionCopy {
  title: string
  lede?: string
}

export interface Profile {
  name: string
  headline: string
  location: string
  email: string
  linkedin: string
  github: string
  resumeUrl: string
  about: string[]
  sections: Record<'about' | 'experience' | 'skills' | 'projects' | 'contact', SectionCopy>
}
