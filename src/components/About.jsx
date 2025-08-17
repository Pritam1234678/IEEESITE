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
      title: 'Dragon-themed Coding Arena 🐲',
      description: 'Step into our battle-ready atmosphere with dark green and black aesthetics, where warriors face algorithmic challenges in an epic dragon-inspired environment.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Challenging CP Problems 💻',
      description: 'Conquer intense competitive programming puzzles designed to test your logic, speed, and problem-solving prowess under fierce time pressure.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Battle-Ready Combat ⚡',
      description: 'Engage in coding battles where strategy meets skill. Adapt, overcome, and unleash your full potential in this green and black battleground.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Ultimate Glory for Champions 🏆',
      description: 'Rise to legendary status and claim your place among the elite. Only the sharpest minds survive in Code Combat and earn the ultimate glory.',
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
            About Code Combat 🐲
          </h2>
          <p className="text-emerald-100/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Welcome to Code Combat, a thrilling competitive programming hackathon designed to test your logic, speed, and problem-solving skills. Set in a dark green and black battleground, the event draws inspiration from the might of dragons—symbols of power, wisdom, and fierce challenge.
          </p>
          <p className="text-emerald-100/60 max-w-2xl mx-auto">
            Participants will face intense coding battles, solving algorithmic puzzles under time pressure. Just like warriors in combat, coders must strategize, adapt, and unleash their full potential to claim the top spot.
          </p>
        </motion.div>

        {/* Venue & Time */}
        <motion.div variants={fadeUp} className="glass rounded-xl p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-start space-x-4">
            <div className="bg-emerald-800/20 p-3 rounded-full">
              <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-emerald-100/70">Venue</div>
              <div className="text-lg font-bold text-emerald-300">Campus 25 Block A</div>
              <div className="text-sm text-emerald-100/70">Kiit University</div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-emerald-800/20 p-3 rounded-full">
              <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-emerald-100/70">Date & Time</div>
              <div className="text-lg font-bold text-emerald-300">Sep 21, 2025 · 11:00 AM - 2:00 PM</div>
              <div className="text-sm text-emerald-100/70">Check-in opens at 10:00 AM</div>
            </div>
          </div>
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
            The Dragon's Challenge Awaits ⚔️
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-violet-400">3-4</div>
              <div className="text-emerald-100/70">Hours of Intense Battle</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-pink-400">5-8</div>
              <div className="text-emerald-100/70">Epic Coding Quests</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-orange-400">Multiple</div>
              <div className="text-emerald-100/70">Dragon Difficulty Tiers</div>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-emerald-100/60 italic">
              "Prepare your weapons—because in Code Combat, only the sharpest minds survive." 🐲
            </p>
          </div>
        </motion.div>

        {/* Rules */}
        <motion.div variants={fadeUp} className="glass rounded-xl p-8 space-y-4">
          <h3 className="text-2xl font-bold text-emerald-300">Warriors' Code of Combat 🛡️</h3>
          <ul className="space-y-3 text-emerald-100/70">
            <li className="flex items-start space-x-3">
              <span className="text-emerald-400 mt-1">🐲</span>
              <span>Form your dragon squad: Teams of 2-3 warriors are welcome</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-emerald-400 mt-1">⚔️</span>
              <span>Choose your weapon: Any programming language (C++, Java, Python, etc.)</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-emerald-400 mt-1">📜</span>
              <span>Consult ancient scrolls: Internet access for documentation only</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-emerald-400 mt-1">⚡</span>
              <span>Bring your battle gear: Laptop, charger, and warrior spirit</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-emerald-400 mt-1">🏆</span>
              <span>Conquer the tiers: Problems ranked by dragon difficulty and glory points</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-emerald-400 mt-1">🔥</span>
              <span>Battle until victory: Strategic thinking and adaptation are your allies</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
