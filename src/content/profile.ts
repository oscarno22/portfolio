import type { Profile } from './types'

export const profile: Profile = {
  name: 'Oscar Nolen',
  headline: 'Software Engineer',
  location: 'Charlotte, NC',
  email: 'oscarnolen@gmail.com',
  linkedin: 'https://www.linkedin.com/in/oscar-nolen-846269153',
  github: 'https://github.com/oscarno22',
  resumeUrl: '/docs/resume-oscarnolen.pdf',
  about: [
    "I'm a graduate of Duke University with majors in Computer Science and Math, and I'm now completing a master's in Computer Science at UNC Charlotte. I'm passionate about software development, artificial intelligence, and enriching STEM with underrepresented communities.",
  ],
  sections: {
    about: { title: 'About Me' },
    experience: {
      title: 'Experience',
      lede: 'My professional journey in software engineering and AI development.',
    },
    skills: {
      title: 'Skills & Technologies',
      lede: 'A comprehensive toolkit that enables me to tackle diverse challenges and deliver robust solutions.',
    },
    projects: {
      title: 'Featured Projects',
      lede: 'A selection of my recent work showcasing my expertise in different technologies and problem domains.',
    },
    contact: {
      title: 'Get In Touch',
      lede: "I'm always open to discussing new opportunities and interesting projects.",
    },
  },
}
