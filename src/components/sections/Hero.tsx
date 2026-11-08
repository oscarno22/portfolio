'use client'

import { motion } from 'framer-motion'
import { profile } from '@/content'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-slate-900 dark:via-primary-900/10 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center transform-gpu"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
            {profile.name}
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl block text-primary-700 dark:text-primary-400 font-bold mb-12">
            {profile.headline}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#work"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors transform-gpu"
            >
              See the work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors transform-gpu"
            >
              Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-slate-800 transition-colors transform-gpu"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
