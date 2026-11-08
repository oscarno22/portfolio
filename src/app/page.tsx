import MotionRoot from '@/components/MotionRoot'
import ScrollChrome from '@/components/ScrollChrome'
import ChatBot from '@/components/ChatBot'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import FeaturedWork from '@/components/sections/FeaturedWork'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <MotionRoot>
      <ScrollChrome />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <FeaturedWork />
      <Contact />
      <ChatBot />
    </MotionRoot>
  )
}
