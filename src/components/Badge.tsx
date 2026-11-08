import type { ProjectKind, Status } from '@/content/types'

type Tone = 'neutral' | 'primary' | 'amber'

const tones: Record<Tone, string> = {
  neutral:
    'bg-gray-100 text-gray-700 ring-gray-200 dark:bg-slate-800 dark:text-gray-300 dark:ring-slate-700',
  primary:
    'bg-primary-50 text-primary-700 ring-primary-200 dark:bg-primary-950/60 dark:text-primary-300 dark:ring-primary-800/60',
  amber:
    'bg-amber-50 text-amber-800 ring-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:ring-amber-800/60',
}

export function Badge({ tone = 'neutral', children }: { tone?: Tone; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider ring-1 ring-inset ${tones[tone]}`}
    >
      {children}
    </span>
  )
}

export function KindBadge({ kind }: { kind: ProjectKind }) {
  const label = kind === 'work' ? 'Work' : kind === 'research' ? 'Research' : 'Personal'
  return <Badge tone={kind === 'work' ? 'primary' : 'neutral'}>{label}</Badge>
}

export function StatusBadge({ status }: { status?: Status }) {
  if (!status) return null
  return (
    <Badge tone="amber">
      <span aria-hidden="true" className="mr-1.5 h-1.5 w-1.5 rounded-full bg-amber-500" />
      In development
    </Badge>
  )
}
