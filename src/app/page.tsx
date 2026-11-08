import MotionRoot from '@/components/MotionRoot'
import ScrollChrome from '@/components/ScrollChrome'
import ChatBot from '@/components/ChatBot'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import FeaturedWork from '@/components/sections/FeaturedWork'
import MoreProjects from '@/components/sections/MoreProjects'
import Skills from '@/components/sections/Skills'
import Research from '@/components/sections/Research'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <MotionRoot>
      <ScrollChrome />
      <Hero />
      <About />
      <Experience />
      <FeaturedWork />
      <MoreProjects />
      <Skills />
      <Research />
      <Contact />
      <ChatBot />
    </MotionRoot>
  )
}
