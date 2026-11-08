'use client'

import { motion } from 'framer-motion'
import { profile } from '@/content'
import { containerVariants, itemVariants, viewportOnce } from '@/lib/motion'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="bg-gray-50 px-4 py-24 dark:bg-slate-800/50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index={1} title={profile.sections.about.title} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={containerVariants}
          className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16"
        >
          <div className="max-w-prose space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {profile.about.map((paragraph) => (
              <motion.p key={paragraph} variants={itemVariants}>
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.dl
            variants={itemVariants}
            className="h-fit divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white px-6 shadow-sm dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900"
          >
            {profile.facts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-[6rem_1fr] gap-4 py-4">
                <dt className="font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {fact.label}
                </dt>
                <dd className="text-sm text-gray-900 dark:text-gray-100">{fact.value}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  )
}
