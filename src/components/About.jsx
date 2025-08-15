import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 }
    }
  }

  const features = [
    {
      title: 'Competitive Programming',
      description: 'Challenge yourself with algorithmic problems that test your problem-solving skills and coding efficiency.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Real-time Judging',
      description: 'Get instant feedback on your solutions with our automated judging system that evaluates correctness and performance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Team Collaboration',
      description: 'Work together with your teammates to solve complex problems and learn from each other\'s approaches.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Learning Experience',
      description: 'Enhance your coding skills, learn new algorithms, and discover efficient programming techniques.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ]

  return (
    <section id="about" className="container-narrow py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="space-y-12"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-300">
            About Logic League
          </h2>
          <p className="text-emerald-100/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Logic League is IEEE Computer Society's flagship programming competition designed to 
            challenge and inspire the next generation of software developers and problem solvers.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="glass rounded-xl p-6 space-y-4"
            >
              <div className="flex items-center space-x-4">
                <div className="text-emerald-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-emerald-300">
                  {feature.title}
                </h3>
              </div>
              <p className="text-emerald-100/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Competition Details */}
        <motion.div variants={fadeUp} className="glass rounded-xl p-8 space-y-6">
          <h3 className="text-2xl font-bold text-emerald-300 text-center">
            What to Expect
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-violet-400">3-4</div>
              <div className="text-emerald-100/70">Hours of Competition</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-pink-400">5-8</div>
              <div className="text-emerald-100/70">Programming Problems</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-orange-400">Multiple</div>
              <div className="text-emerald-100/70">Difficulty Levels</div>
            </div>
          </div>
        </motion.div>

        {/* Rules */}
        <motion.div variants={fadeUp} className="glass rounded-xl p-8 space-y-4">
          <h3 className="text-2xl font-bold text-emerald-300">Competition Rules</h3>
          <ul className="space-y-3 text-emerald-100/70">
            <li className="flex items-start space-x-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>Teams of 2-3 members are allowed</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>You can use any programming language (C++, Java, Python, etc.)</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>Internet access is allowed for documentation only</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>Bring your own laptop and charger</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>Problems will be ranked by difficulty and scoring</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
