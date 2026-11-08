'use client'

import { motion } from 'framer-motion'
import { profile } from '@/content'
import { itemVariants } from '@/lib/motion'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={profile.sections.about.title}>
          {profile.about.map((paragraph) => (
            <motion.p
              key={paragraph}
              variants={itemVariants}
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {paragraph}
            </motion.p>
          ))}
        </SectionHeading>
      </div>
    </section>
  )
}
