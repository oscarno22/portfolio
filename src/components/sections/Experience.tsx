'use client'

import { motion } from 'framer-motion'
import { StatusBadge } from '@/components/Badge'
import { experience, profile } from '@/content'
import type { ExperienceItemGroup } from '@/content/types'
import { containerVariants, itemVariants, viewportOnce } from '@/lib/motion'
import SectionHeading from './SectionHeading'

function Bullets({ bullets, className }: { bullets: string[]; className?: string }) {
  return (
    <ul className={`list-disc space-y-2 pl-5 marker:text-primary-400 ${className ?? ''}`}>
      {bullets.map((bullet) => (
        <li key={bullet} className="leading-relaxed">
          {bullet}
        </li>
      ))}
    </ul>
  )
}

function Workstream({ group }: { group: ExperienceItemGroup }) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 ${
        group.span === 'full' ? 'md:col-span-2' : ''
      }`}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <h4 className="font-semibold text-gray-900 dark:text-white">{group.heading}</h4>
        <StatusBadge status={group.status} />
      </div>
      <Bullets bullets={group.bullets} className="text-sm text-gray-700 dark:text-gray-300" />
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index={2}
          title={profile.sections.experience.title}
          lede={profile.sections.experience.lede}
        />

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={containerVariants}
          className="relative ml-2 max-w-5xl border-l border-gray-200 dark:border-slate-700 sm:ml-3"
        >
          {experience.map((role, index) => {
            const hasWorkstreams = role.items.some((group) => group.heading)
            return (
              <motion.li
                key={`${role.org}-${role.start}`}
                variants={itemVariants}
                className={`relative pl-8 sm:pl-10 ${index === experience.length - 1 ? '' : 'pb-14'}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-primary-600 dark:border-slate-900"
                />
                <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {role.title}
                    </h3>
                    <p className="mt-0.5 font-medium text-primary-700 dark:text-primary-400">
                      {role.org}
                      {role.location && (
                        <span className="font-normal text-gray-500 dark:text-gray-400">
                          {' '}
                          · {role.location}
                        </span>
                      )}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                    {role.start} – {role.end ?? 'Present'}
                  </p>
                </header>

                {role.summary && (
                  <p className="mt-4 max-w-prose leading-relaxed text-gray-700 dark:text-gray-300">
                    {role.summary}
                  </p>
                )}

                {hasWorkstreams ? (
                  <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {role.items.map((group) => (
                      <Workstream key={group.heading} group={group} />
                    ))}
                  </div>
                ) : (
                  role.items.map((group, groupIndex) => (
                    <Bullets
                      key={groupIndex}
                      bullets={group.bullets}
                      className="mt-4 max-w-prose text-gray-700 dark:text-gray-300"
                    />
                  ))
                )}
              </motion.li>
            )
          })}
        </motion.ol>
      </div>
    </section>
  )
}
