'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { profile } from '@/content'

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Work', id: 'work' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
]

const linkBase =
  'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary-700 dark:hover:text-primary-300'

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  // Shadow/border once the page scrolls under the header.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Mobile menu: lock scroll, close on Escape, manage focus.
  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const themeToggle = (
    <button
      type="button"
      aria-label="Toggle color theme"
      className="rounded-lg border border-gray-200 bg-white p-2 text-gray-700 transition-colors hover:border-primary-300 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-300 dark:hover:border-primary-700"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <SunIcon aria-hidden="true" className="hidden h-5 w-5 dark:block" />
      <MoonIcon aria-hidden="true" className="block h-5 w-5 dark:hidden" />
    </button>
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b backdrop-blur transition-colors ${
        scrolled || open
          ? 'border-gray-200 bg-white/85 dark:border-slate-800 dark:bg-slate-900/85'
          : 'border-transparent bg-white/0 dark:bg-slate-900/0'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="rounded-md font-semibold tracking-tight text-gray-900 dark:text-white"
            onClick={() => setOpen(false)}
          >
            {profile.name}
            <span className="ml-2 hidden font-mono text-xs font-normal text-primary-700 dark:text-primary-400 sm:inline">
              / software engineer
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`${linkBase} ${
                      isActive
                        ? 'text-primary-700 dark:text-primary-300'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            {themeToggle}
            <button
              ref={toggleRef}
              type="button"
              className="rounded-lg border border-gray-200 bg-white p-2 text-gray-700 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-300 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <XMarkIcon aria-hidden="true" className="h-5 w-5" />
              ) : (
                <Bars3Icon aria-hidden="true" className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          hidden={!open}
          className="border-t border-gray-200 pb-4 pt-2 dark:border-slate-800 md:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? 'location' : undefined}
                  className={`block rounded-md px-3 py-3 text-base font-medium ${
                    active === item.id
                      ? 'text-primary-700 dark:text-primary-300'
                      : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="mt-2 px-3">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary-600 px-4 py-3 text-base font-medium text-white hover:bg-primary-700"
              >
                Resume (PDF)
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
