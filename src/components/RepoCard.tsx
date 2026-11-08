import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import type { Project } from '@/content/types'
import StackChips from './StackChips'

export default function RepoCard({ project }: { project: Project }) {
  const { title, blurb, stack, repoUrl } = project
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-primary-700">
      <h3 className="font-mono text-base font-semibold text-gray-900 dark:text-white">
        {repoUrl ? (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:hover:text-primary-300 dark:focus-visible:ring-offset-slate-900"
          >
            {title}
            <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4 text-gray-400" />
            <span className="sr-only"> (opens GitHub in a new tab)</span>
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        {blurb}
      </p>
      <div className="mt-5">
        <StackChips items={stack} />
      </div>
    </article>
  )
}
