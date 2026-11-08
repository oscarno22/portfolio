'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

/** Fixed scroll-progress bar plus the back-to-top button. */
export default function ScrollChrome() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary-600 transform-gpu origin-left z-50"
        style={{ scaleX }}
      />

      <motion.button
        type="button"
        aria-label="Back to top"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-40 rounded-full border border-primary-700/30 bg-primary-600 p-3 text-white shadow-lg ${
          showBackToTop ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <ArrowUpIcon aria-hidden="true" className="h-5 w-5" />
      </motion.button>
    </>
  )
}
