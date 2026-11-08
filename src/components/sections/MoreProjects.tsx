'use client'

import { motion } from 'framer-motion'
import RepoCard from '@/components/RepoCard'
import { moreProjects, profile } from '@/content'
import { containerVariants, itemVariants, viewportOnce } from '@/lib/motion'
import SectionHeading from './SectionHeading'

export default function MoreProjects() {
  return (
    <section id="more-work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={profile.sections.more.title} lede={profile.sections.more.lede} />

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
