'use client'

import { motion } from 'framer-motion'
import { AcademicCapIcon } from '@heroicons/react/24/outline'
import StackChips from '@/components/StackChips'
import { education, profile, research } from '@/content'
import { containerVariants, itemVariants, viewportOnce } from '@/lib/motion'
import SectionHeading from './SectionHeading'

export default function Research() {
  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={profile.sections.research.title} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={containerVariants}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]"
        >
          <motion.article
            variants={itemVariants}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-primary-700 dark:text-primary-400">
              {research.context}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {research.title}
            </h3>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {research.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-5">
              <StackChips items={research.stack} />
            </div>
          </motion.article>

          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            {education.map((school) => (
              <div
                key={school.school}
                className="flex gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <AcademicCapIcon
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{school.school}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{school.degree}</p>
                  {school.detail && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">{school.detail}</p>
                  )}
                  <p className="mt-1 font-mono text-xs text-gray-500 dark:text-gray-400">
                    {school.start} – {school.end}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
