'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  EnvelopeIcon,
  ClipboardDocumentIcon,
  CheckIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'
import { profile } from '@/content'
import { containerVariants, itemVariants, viewportOnce } from '@/lib/motion'
import SectionHeading from './SectionHeading'

const cardClass =
  'group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5 text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:border-primary-700'

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      // Clipboard unavailable (insecure context or permission denied); the mailto link still works.
    }
  }

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index={7}
          title={profile.sections.contact.title}
          lede={profile.sections.contact.lede}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={containerVariants}
          className="grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-[1.6fr_1fr_1fr]"
        >
          <motion.div variants={itemVariants} className={`${cardClass} relative`}>
            <EnvelopeIcon
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400"
            />
            <a
              href={`mailto:${profile.email}`}
              className="min-w-0 flex-1 break-all text-sm font-medium sm:text-base"
            >
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? 'Email copied' : 'Copy email address'}
              className="rounded-md p-1 text-gray-400 transition-colors hover:text-primary-600 dark:hover:text-primary-300"
            >
              {copied ? (
                <CheckIcon aria-hidden="true" className="h-5 w-5 text-emerald-500" />
              ) : (
                <ClipboardDocumentIcon aria-hidden="true" className="h-5 w-5" />
              )}
            </button>
            <span role="status" aria-live="polite" className="sr-only">
              {copied ? 'Email address copied to clipboard' : ''}
            </span>
          </motion.div>

          <motion.a
            variants={itemVariants}
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
          >
            <LinkedInIcon className="h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400" />
            <span className="flex-1 font-medium">LinkedIn</span>
            <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4 text-gray-400" />
          </motion.a>

          <motion.a
            variants={itemVariants}
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
          >
            <GitHubIcon className="h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400" />
            <span className="flex-1 font-medium">GitHub</span>
            <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4 text-gray-400" />
          </motion.a>

          <motion.p
            variants={itemVariants}
            className="flex items-center gap-2 pt-2 font-mono text-sm text-gray-500 dark:text-gray-400 sm:col-span-3"
          >
            <MapPinIcon aria-hidden="true" className="h-4 w-4" />
            {profile.location}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
