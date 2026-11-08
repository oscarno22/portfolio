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
import { profile, skills } from '@/content'
import { containerVariants, skillCardVariants, viewportOnce } from '@/lib/motion'
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={profile.sections.skills.title} lede={profile.sections.skills.lede} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform-gpu animate-on-scroll"
        >
          {skills.map((group) => {
            const Icon = iconFor[group.category] ?? CodeBracketIcon
            return (
              <motion.div
                key={group.category}
                variants={skillCardVariants}
                whileHover="hover"
                className="bg-white/95 dark:bg-slate-900 rounded-xl p-6 shadow-lg transition-all duration-300 transform-gpu backdrop-blur-sm border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4 text-center">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-gray-700 dark:text-gray-300 font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
