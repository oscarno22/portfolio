import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import type { Project } from '@/content/types'
import { KindBadge, StatusBadge } from './Badge'
import StackChips from './StackChips'

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[5.5rem_1fr] gap-3 sm:grid-cols-[6rem_1fr]">
      <dt className="pt-0.5 font-mono text-[11px] font-medium uppercase tracking-wider text-primary-700 dark:text-primary-400">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{children}</dd>
    </div>
  )
}

export default function CaseStudyCard({ project }: { project: Project }) {
  const { title, blurb, problem, approach, result, stack, repoUrl, status, kind, org } = project
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-7">
      <header className="mb-4">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <KindBadge kind={kind} />
          <StatusBadge status={status} />
          {org && <span className="font-mono text-xs text-gray-500 dark:text-gray-400">{org}</span>}
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-gray-700 dark:text-gray-300">{blurb}</p>
      </header>

      {(problem || approach || result) && (
        <dl className="mb-5 space-y-3 border-t border-gray-100 pt-5 dark:border-slate-800">
          {problem && <Row label="Problem">{problem}</Row>}
          {approach && <Row label="Approach">{approach}</Row>}
          {result && <Row label="Result">{result}</Row>}
        </dl>
      )}

      <footer className="mt-auto flex flex-col gap-4">
        <StackChips items={stack} />
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1.5 rounded-md text-sm font-medium text-primary-700 hover:text-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:text-primary-400 dark:hover:text-primary-300 dark:focus-visible:ring-offset-slate-900"
          >
            View on GitHub
            <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4" />
          </a>
        )}
      </footer>
    </article>
  )
}
