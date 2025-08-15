import React from 'react'
import { motion } from 'framer-motion'

const Support = () => {
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

  const supportOptions = [
    {
      title: 'Technical Support',
      description: 'Need help with platform access, submission issues, or technical difficulties during the competition?',
      contact: 'tech.support@ieee-ctsoc.org',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Registration Help',
      description: 'Having trouble with registration, team formation, or need to update your information?',
      contact: 'registration@ieee-ctsoc.org',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      title: 'General Inquiries',
      description: 'Questions about rules, prizes, event schedule, or anything else about Logic League?',
      contact: 'info@ieee-ctsoc.org',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const faqItems = [
    {
      question: 'What programming languages are supported?',
      answer: 'We support all major programming languages including C++, Java, Python, JavaScript, C#, and more. Choose the language you\'re most comfortable with.'
    },
    {
      question: 'Can I participate as an individual?',
      answer: 'While teams of 2-3 members are encouraged for collaboration and learning, individual participation is also welcome.'
    },
    {
      question: 'What should I bring to the competition?',
      answer: 'Bring your laptop, charger, and any preferred peripherals (mouse, keyboard). We\'ll provide WiFi, power outlets, and refreshments.'
    },
    {
      question: 'Is there a registration fee?',
      answer: 'No, Logic League is completely free to participate! This is our way of giving back to the programming community.'
    },
    {
      question: 'What if I\'m a beginner?',
      answer: 'Everyone is welcome! We have problems of varying difficulty levels, and it\'s a great learning experience regardless of your skill level.'
    }
  ]

  return (
    <section id="support" className="container-narrow py-16">
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
            Need Support?
          </h2>
          <p className="text-emerald-100/70 max-w-3xl mx-auto text-lg leading-relaxed">
            We're here to help! Whether you have technical issues, registration questions, 
            or just want to know more about the competition, reach out to us.
          </p>
        </motion.div>

        {/* Support Options */}
        <div className="grid md:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              variants={fadeUp}
              className="glass rounded-xl p-6 space-y-4 text-center"
            >
              <div className="text-emerald-400 flex justify-center">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-emerald-300">
                {option.title}
              </h3>
              <p className="text-emerald-100/70 text-sm leading-relaxed">
                {option.description}
              </p>
              <a
                href={`mailto:${option.contact}`}
                className="inline-block text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                {option.contact}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div variants={fadeUp} className="glass rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-emerald-300">Get in Touch</h3>
              <div className="space-y-3 text-emerald-100/70">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Tech Hall, Block A, IEEE CTSOc</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>ieee.ctsoc@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-emerald-300">Office Hours</h3>
              <div className="space-y-2 text-emerald-100/70">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
                <div className="mt-4 text-sm text-emerald-400">
                  *During competition day, support is available 24/7
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div variants={fadeUp} className="space-y-6">
          <h3 className="text-2xl font-bold text-emerald-300 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="glass rounded-lg p-6"
              >
                <h4 className="text-lg font-semibold text-emerald-300 mb-2">
                  {faq.question}
                </h4>
                <p className="text-emerald-100/70 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div variants={fadeUp} className="text-center">
          <div className="glass rounded-xl p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20">
            <h3 className="text-xl font-bold text-red-400 mb-2">Emergency Contact</h3>
            <p className="text-emerald-100/70 mb-3">
              For urgent issues during the competition day
            </p>
            <a
              href="tel:+15551234567"
              className="text-red-400 hover:text-red-300 font-bold text-lg transition-colors"
            >
              +1 (555) 123-4567
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Support
