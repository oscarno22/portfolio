'use client'

import { motion, useScroll, useSpring, LazyMotion, domAnimation } from 'framer-motion'
import { CodeBracketIcon, CommandLineIcon, WindowIcon, CpuChipIcon } from '@heroicons/react/24/outline'
import ProjectCard from '@/components/ProjectCard'
import { useMemo } from 'react'

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Redux"],
    icon: WindowIcon
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Java", "RESTful APIs", "GraphQL", "SQL"],
    icon: CodeBracketIcon
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Bash"],
    icon: CommandLineIcon
  },
  {
    category: "Other Technologies",
    items: ["Agile/Scrum", "System Design", "Testing", "Performance Optimization", "Security", "Cloud Architecture"],
    icon: CpuChipIcon
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
}

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/projects/ecommerce.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team collaboration features.",
    technologies: ["React", "Firebase", "TypeScript", "Material-UI"],
    imageUrl: "/projects/task-manager.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    title: "AI-Powered Analytics",
    description: "Data analytics platform leveraging machine learning for predictive insights and visualization.",
    technologies: ["Python", "TensorFlow", "React", "AWS"],
    imageUrl: "/projects/analytics.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  }
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Memoize the skills and projects sections to prevent unnecessary re-renders
  const skillsSection = useMemo(() => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform-gpu animate-on-scroll"
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.category}
          variants={itemVariants}
          className="bg-white/95 dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow transform-gpu backdrop-blur-sm border border-gray-100 dark:border-gray-800"
        >
          <div className="flex items-center justify-center mb-4">
            <skill.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="text-xl font-semibold text-black dark:text-white mb-4 text-center">
            {skill.category}
          </h3>
          <ul className="space-y-2">
            {skill.items.map((item) => (
              <li 
                key={item}
                className="text-gray-200 dark:text-gray-200 font-semibold"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  ), [])

  const projectsSection = useMemo(() => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform-gpu animate-on-scroll"
    >
      {projects.map((project) => (
        <motion.div
          key={project.title}
          variants={itemVariants}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </motion.div>
  ), [])

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-600 transform-gpu origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center transform-gpu"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white mb-6">
              Software Engineer
              <span className="block text-primary-700 dark:text-primary-400">Building Digital Solutions</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              I craft elegant, efficient, and user-centric applications using modern technologies.
              Passionate about creating impactful software solutions.
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors transform-gpu"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-slate-800 transition-colors transform-gpu"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16 transform-gpu animate-on-scroll"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              About Me
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              With a passion for creating innovative solutions, I specialize in building scalable web applications
              and solving complex technical challenges. My approach combines clean code practices with modern
              development methodologies to deliver high-quality software solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16 transform-gpu animate-on-scroll"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Skills & Technologies
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              A comprehensive toolkit that enables me to tackle diverse challenges
              and deliver robust solutions.
            </motion.p>
          </motion.div>

          {skillsSection}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16 transform-gpu animate-on-scroll"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              A selection of my recent work showcasing my expertise in different technologies
              and problem domains.
            </motion.p>
          </motion.div>

          {projectsSection}
        </div>
      </section>
    </LazyMotion>
  )
}
