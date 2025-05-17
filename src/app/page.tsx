'use client'

import { motion, useScroll, useSpring, LazyMotion, domAnimation } from 'framer-motion'
import { CodeBracketIcon, CommandLineIcon, WindowIcon, CpuChipIcon } from '@heroicons/react/24/outline'
import ProjectCard from '@/components/ProjectCard'
import { useMemo, useState, useEffect } from 'react'
import ChatBot from '@/components/ChatBot'

const skills = [
  {
    category: "Languages & Core",
    items: ["Java", "Python", "Kotlin", "JavaScript", "C/C++", "SQL", "TypeScript"],
    icon: CodeBracketIcon
  },
  {
    category: "Cloud & DevOps",
    items: ["Lambda", "DynamoDB", "CloudFormation", "S3", "ECS", "Linux"],
    icon: CommandLineIcon
  },
  {
    category: "AI & Data",
    items: ["LangGraph", "PyTorch", "NumPy", "Pandas", "Machine Learning", "Data Analysis"],
    icon: CpuChipIcon
  },
  {
    category: "Web & Frameworks",
    items: ["React", "Spring", "Node.js", "REST APIs", "NoSQL", "Full Stack Development"],
    icon: WindowIcon
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

const skillCardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

const projectCardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

const projects = [
  {
    title: "Notification Events Tracker Service",
    description: "Designed and implemented an asynchronous central logging service for AWS User Notifications to identify missing notifications and related complications in data-plane.",
    technologies: ["Kotlin", "AWS Lambda", "DynamoDB", "React", "AWS CDK"],
    imageUrl: "/projects/aws-notifications.png",
    company: "Amazon Web Services"
  },
  {
    title: "Flow Templates",
    description: "Developed a resource system for Amazon Connect that enables replication of customer-service workflows across multiple accounts, with CRUD APIs and validation logic.",
    technologies: ["Java", "AWS", "JUnit", "REST APIs", "JSON"],
    imageUrl: "/projects/connect-workflows.jpg",
    company: "Amazon Web Services"
  },
  {
    title: "Generative AI Agents",
    description: "Building powerful AI agents to drive automation at Ally Financial, leveraging modern frameworks and large language models.",
    technologies: ["LangGraph", "Python", "OpenAI", "AI/ML", "Model Context Protocol"],
    imageUrl: "/projects/ai-agents.png",
    company: "Ally Financial"
  }
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          variants={skillCardVariants}
          whileHover="hover"
          className="bg-white/95 dark:bg-slate-900 rounded-xl p-6 shadow-lg transition-all duration-300 transform-gpu backdrop-blur-sm border border-gray-100 dark:border-gray-800"
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
                className="text-gray-700 dark:text-gray-300 font-medium"
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
          variants={projectCardVariants}
          whileHover="hover"
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
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-slate-900 dark:via-primary-900/10 dark:to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center transform-gpu"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
              Oscar Nolen
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl block text-primary-700 dark:text-primary-400 font-bold mb-12">
              Software Engineer
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
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
                href="/docs/resume-oscarnolen.pdf"
            target="_blank"
            rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors transform-gpu"
              >
                Download Resume
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
              I'm a graduate of Duke University with majors in Computer Science and Math, and I'm 
              now completing a master's in Computer Science at UNC Charlotte. I'm passionate about 
              software development, artificial intelligence, and enriching STEM with underrepresented communities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Experience
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              My professional journey in software engineering and AI development.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-3xl mx-auto"
          >
            {/* Ally Financial */}
            <motion.div 
              variants={itemVariants}
              className="relative pl-8 pb-12 border-l-2 border-primary-200 dark:border-primary-800"
            >
              <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-0" />
              <div className="mb-1 flex items-center gap-2">
                <h3 className="text-xl font-semibold text-black dark:text-white">AI Engineer</h3>
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">Ally Financial</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Jan 2025 - Present</p>
              <p className="text-gray-800 dark:text-gray-200">
                Building powerful agents to drive automation using modern frameworks such as LangGraph, 
                Model Context Protocol, and OpenAI Agent SDK.
              </p>
            </motion.div>

            {/* Publix */}
            <motion.div 
              variants={itemVariants}
              className="relative pl-8 pb-12 border-l-2 border-primary-200 dark:border-primary-800"
            >
              <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-0" />
              <div className="mb-1 flex items-center gap-2">
                <h3 className="text-xl font-semibold text-black dark:text-white">Grocery Clerk</h3>
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">Publix Super Markets</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Sep 2024 - Dec 2024</p>
              <p className="text-gray-800 dark:text-gray-200">
                Managed inventory across multiple departments including dry grocery, frozen, and dairy sections. 
                Coordinated product displays, handled truck deliveries, and maintained efficient backstock organization.
              </p>
            </motion.div>

            {/* AWS SDE Intern 2024 */}
            <motion.div 
              variants={itemVariants}
              className="relative pl-8 pb-12 border-l-2 border-primary-200 dark:border-primary-800"
            >
              <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-0" />
              <div className="mb-1 flex items-center gap-2">
                <h3 className="text-xl font-semibold text-black dark:text-white">Software Dev Engineer Intern</h3>
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">Amazon Web Services</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">May 2024 - Aug 2024</p>
              <p className="text-gray-800 dark:text-gray-200">
                Contributed to AWS User Notifications by designing and implementing an asynchronous central 
                logging service. Built infrastructure with AWS CDK and developed APIs in Kotlin for seamless 
                notification trace retrieval.
              </p>
            </motion.div>

            {/* AWS SDE Intern 2023 */}
            <motion.div 
              variants={itemVariants}
              className="relative pl-8 pb-12 border-l-2 border-primary-200 dark:border-primary-800"
            >
              <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-0" />
              <div className="mb-1 flex items-center gap-2">
                <h3 className="text-xl font-semibold text-black dark:text-white">Software Dev Engineer Intern</h3>
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">Amazon Web Services</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">May 2023 - Aug 2023</p>
              <p className="text-gray-800 dark:text-gray-200">
                Developed a resource system for Amazon Connect that enables replication of customer service 
                workflows across multiple accounts. Built CRUD APIs in Java and implemented validation logic 
                for JSON workflow representations.
              </p>
            </motion.div>

            {/* AWS Propel Intern */}
            <motion.div 
              variants={itemVariants}
              className="relative pl-8 pb-12 border-l-2 border-primary-200 dark:border-primary-800"
            >
              <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-0" />
              <div className="mb-1 flex items-center gap-2">
                <h3 className="text-xl font-semibold text-black dark:text-white">Amazon Propel Intern</h3>
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">Amazon Web Services</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">May 2022 - Aug 2022</p>
              <p className="text-gray-800 dark:text-gray-200">
                Worked on compatibility improvements in Babelfish for Aurora PostgreSQL, identifying and implementing 
                missing catalog objects for common SQL client usage patterns.
              </p>
            </motion.div>

            {/* Mooyah Management */}
            <motion.div 
              variants={itemVariants}
              className="relative pl-8 pb-12 border-l-2 border-primary-200 dark:border-primary-800"
            >
              <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-0" />
              <div className="mb-1 flex items-center gap-2">
                <h3 className="text-xl font-semibold text-black dark:text-white">Line Cook & Shift Lead</h3>
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">Mooyah Burgers</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Oct 2019 - July 2021</p>
              <p className="text-gray-800 dark:text-gray-200">
                Led shift operations and supervised team members while maintaining high food quality standards. 
                Managed inventory control and preparation of ingredients, implemented food safety protocols, 
                and resolved customer service issues.
              </p>
            </motion.div>

            {/* Cinemark */}
            <motion.div 
              variants={itemVariants}
              className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"
            >
              <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-0" />
              <div className="mb-1 flex items-center gap-2">
                <h3 className="text-xl font-semibold text-black dark:text-white">Cashier</h3>
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">Cinemark</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Nov 2017 - Jun 2019</p>
              <p className="text-gray-800 dark:text-gray-200">
                Managed box office operations and ticket sales while ensuring excellent customer service. 
                Maintained theater cleanliness and assisted with concession delivery to enhance the movie-going experience.
              </p>
            </motion.div>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Get In Touch
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            >
              I'm always open to discussing new opportunities and interesting projects.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="flex flex-col items-center gap-6 max-w-md mx-auto"
            >
              <motion.a
                variants={itemVariants}
                href="mailto:oscarnolen@gmail.com"
                className="group relative flex items-center gap-3 text-lg text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors w-full bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                oscarnolen@gmail.com
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText('oscarnolen@gmail.com');
                  }}
                  className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </motion.button>
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="https://www.linkedin.com/in/oscar-nolen-846269153"
          target="_blank"
          rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors w-full bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn Profile
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="https://github.com/oscarno22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors w-full bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Profile
              </motion.a>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300 w-full bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Charlotte, NC
              </motion.div>
            </motion.div>
          </motion.div>
    </div>
      </section>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 bg-primary-600 text-white p-3 rounded-full shadow-lg z-50 ${
          showBackToTop ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      {/* Add ChatBot */}
      <ChatBot />
    </LazyMotion>
  )
}
