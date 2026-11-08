'use client'

import { motion } from 'framer-motion'
import { experience, profile } from '@/content'
import { containerVariants, itemVariants, viewportOnce } from '@/lib/motion'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title={profile.sections.experience.title}
          lede={profile.sections.experience.lede}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          {experience.map((role, index) => {
            const isLast = index === experience.length - 1
            return (
              <motion.div
                key={`${role.org}-${role.start}`}
                variants={itemVariants}
                className={`relative pl-8 border-l-2 border-primary-200 dark:border-primary-800 ${
                  isLast ? '' : 'pb-12'
                }`}
              >
                <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-0" />
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-xl font-semibold text-black dark:text-white">{role.title}</h3>
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {role.org}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {role.start} - {role.end ?? 'Present'}
                </p>
                {role.items.map((group, groupIndex) => (
                  <div key={group.heading ?? groupIndex}>
                    {group.heading && (
                      <h4 className="font-medium text-gray-900 dark:text-white mt-3 mb-1">
                        {group.heading}
                      </h4>
                    )}
                    {group.bullets.map((bullet) => (
                      <p key={bullet} className="text-gray-800 dark:text-gray-200">
                        {bullet}
                      </p>
                    ))}
                  </div>
                ))}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
