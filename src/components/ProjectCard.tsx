'use client'

import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  company: string
  liveUrl?: string
  githubUrl?: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  company,
  liveUrl,
  githubUrl
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform-gpu"
    >
      <div className="relative w-full pt-[56.25%]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover absolute top-0 left-0 transform-gpu"
          loading="lazy"
          quality={85}
        />
      </div>
      <div className="p-6">
        <div className="mb-2">
          <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-1">
            {company}
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors transform-gpu"
            >
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              Live Demo
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors transform-gpu"
            >
              <CodeBracketIcon className="h-5 w-5" />
              View Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
} 