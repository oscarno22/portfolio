'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import { featuredProjects, profile } from '@/content'
import { containerVariants, projectCardVariants, viewportOnce } from '@/lib/motion'
import SectionHeading from './SectionHeading'

export default function FeaturedWork() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={profile.sections.work.title} lede={profile.sections.work.lede} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform-gpu animate-on-scroll"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.slug} variants={projectCardVariants} whileHover="hover">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
