'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants, viewportOnce } from '@/lib/motion'

interface SectionHeadingProps {
  title: string
  lede?: string
  className?: string
  children?: React.ReactNode
}

export default function SectionHeading({ title, lede, className, children }: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={containerVariants}
      className={`text-center mb-16 transform-gpu animate-on-scroll ${className ?? ''}`}
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
      >
        {title}
      </motion.h2>
      {lede && (
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
        >
          {lede}
        </motion.p>
      )}
      {children}
    </motion.div>
  )
}
