'use client'

import { motion } from 'framer-motion'
import CaseStudyCard from '@/components/CaseStudyCard'
import { featuredProjects, profile } from '@/content'
import { containerVariants, itemVariants, viewportOnce } from '@/lib/motion'
import SectionHeading from './SectionHeading'

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-gray-50 px-4 py-24 dark:bg-slate-800/50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index={3}
          title={profile.sections.work.title}
          lede={profile.sections.work.lede}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.slug} variants={itemVariants} className="h-full">
              <CaseStudyCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
