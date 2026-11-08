'use client'

import { motion } from 'framer-motion'
import RepoCard from '@/components/RepoCard'
import { moreProjects, profile } from '@/content'
import { containerVariants, itemVariants, viewportOnce } from '@/lib/motion'
import SectionHeading from './SectionHeading'

export default function MoreProjects() {
  return (
    <section id="more-work" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index={4}
          title={profile.sections.more.title}
          lede={profile.sections.more.lede}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {moreProjects.map((project) => (
            <motion.div key={project.slug} variants={itemVariants} className="h-full">
              <RepoCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
