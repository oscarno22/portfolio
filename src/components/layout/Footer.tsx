import { profile } from '@/content'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-4 py-8 pr-20 dark:border-slate-800 sm:px-6 sm:pr-20 lg:px-8 lg:pr-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 font-mono text-xs text-gray-500 dark:text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          Built with Next.js and Tailwind.{' '}
          <a
            href={`${profile.github}/portfolio`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-300 underline-offset-4 hover:text-primary-700 dark:decoration-slate-600 dark:hover:text-primary-300"
          >
            Source on GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}
