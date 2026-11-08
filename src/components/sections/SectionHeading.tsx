'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants, viewportOnce } from '@/lib/motion'

interface SectionHeadingProps {
  index: number
  title: string
  lede?: string
  children?: React.ReactNode
}

export default function SectionHeading({ index, title, lede, children }: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={containerVariants}
      className="mb-12 max-w-3xl"
    >
      <motion.p
        variants={itemVariants}
        aria-hidden="true"
        className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary-700 dark:text-primary-400"
      >
        <span>{String(index).padStart(2, '0')}</span>
        <span className="h-px w-10 bg-primary-300 dark:bg-primary-800" />
      </motion.p>
      <motion.h2
        variants={itemVariants}
        className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      {lede && (
        <motion.p
          variants={itemVariants}
          className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400"
        >
          {lede}
        </motion.p>
      )}
      {children}
    </motion.div>
  )
}
