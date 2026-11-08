'use client'

import { motion } from 'framer-motion'
import { ArrowDownIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { profile } from '@/content'
import { containerVariants, itemVariants } from '@/lib/motion'

const themes = [
  'Data integrity across systems',
  'Event and batch processing',
  'Agents in production',
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden"
    >
      <div aria-hidden="true" className="bg-dot-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-primary-400/20 blur-3xl dark:bg-primary-500/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 -left-24 h-[28rem] w-[28rem] rounded-full bg-primary-200/40 blur-3xl dark:bg-primary-900/30"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
      >
        <motion.p
          variants={itemVariants}
          className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary-700 dark:text-primary-400 sm:text-sm"
        >
          {profile.eyebrow}
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="mt-5 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-xl leading-snug text-gray-700 dark:text-gray-300 sm:text-2xl"
        >
          {profile.headline}
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-primary-700"
          >
            See the work
            <ArrowDownIcon aria-hidden="true" className="h-4 w-4" />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white/70 px-6 py-3 font-medium text-gray-900 backdrop-blur transition-colors hover:border-primary-400 hover:text-primary-700 dark:border-slate-600 dark:bg-slate-900/60 dark:text-white dark:hover:border-primary-500 dark:hover:text-primary-300"
          >
            Resume
            <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg px-6 py-3 font-medium text-gray-700 transition-colors hover:text-primary-700 dark:text-gray-300 dark:hover:text-primary-300"
          >
            Contact
          </a>
        </motion.div>

        <motion.ul
          variants={itemVariants}
          aria-label="Themes"
          className="mt-16 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-gray-500 dark:text-gray-400 sm:text-sm"
        >
          {themes.map((theme) => (
            <li key={theme} className="flex items-center gap-2">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              {theme}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  )
}
