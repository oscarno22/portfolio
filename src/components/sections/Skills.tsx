'use client'

import { motion } from 'framer-motion'
import {
  CodeBracketIcon,
  CircleStackIcon,
  CloudIcon,
  WindowIcon,
  CpuChipIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'
import StackChips from '@/components/StackChips'
import { profile, skills } from '@/content'
import { containerVariants, itemVariants, viewportOnce } from '@/lib/motion'
import SectionHeading from './SectionHeading'

const iconFor: Record<string, typeof CodeBracketIcon> = {
  Languages: CodeBracketIcon,
  'Backend and data': CircleStackIcon,
  'Cloud and DevOps': CloudIcon,
  Frontend: WindowIcon,
  'Agentic AI': CpuChipIcon,
  'Machine learning': BeakerIcon,
}

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index={5} title={profile.sections.skills.title} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={containerVariants}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((group) => {
            const Icon = iconFor[group.category] ?? CodeBracketIcon
            return (
              <motion.div
                key={group.category}
                variants={itemVariants}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary-700 dark:bg-primary-950/60 dark:text-primary-300">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{group.category}</h3>
                </div>
                <StackChips items={group.items} label={group.category} size="md" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
