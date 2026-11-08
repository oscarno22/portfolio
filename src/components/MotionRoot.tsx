'use client'

import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'

/** Loads the animation feature bundle once and honours prefers-reduced-motion. */
export default function MotionRoot({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </MotionConfig>
  )
}
