import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'mandalpritam765@gmail.com'
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      console.log('Email sent successfully:', result)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
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
      title: 'Registration Help',
      description: 'Having trouble with registration, team formation, or need to update your information?',
      contact: 'kshitij12@ieee.org',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      title: 'General Inquiries',
      description: 'Questions about rules, prizes, event schedule, or anything else about Logic League?',
      contact: 'sanidhya_2710@ieee.org',
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
      question: 'Is it a Solo or a Team event?',
      answer: 'It is a Solo event.'
    },
    {
      question: 'What should I bring to the competition?',
      answer: 'Bring your laptop, charger, and any preferred peripherals (mouse, keyboard). We\'ll provide WiFi and power outlets.'
    },
    {
      question: 'Is there a registration fee?',
      answer: 'No, Code Combat is completely free to participate! This is our way of giving back to the programming community.'
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

        {/* Contact Form */}
        <motion.div variants={fadeUp} className="glass rounded-xl p-8">
          <h3 className="text-2xl font-bold text-emerald-300 mb-6 text-center">
            Send us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-emerald-300 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/20 border border-emerald-500/30 rounded-lg text-emerald-100 placeholder-emerald-300/50 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-emerald-300 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/20 border border-emerald-500/30 rounded-lg text-emerald-100 placeholder-emerald-300/50 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Phone Number Field */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-emerald-300 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black/20 border border-emerald-500/30 rounded-lg text-emerald-100 placeholder-emerald-300/50 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                placeholder="Enter your phone number (optional)"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-emerald-300 font-medium">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-black/20 border border-emerald-500/30 rounded-lg text-emerald-100 placeholder-emerald-300/50 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all resize-vertical"
                placeholder="Type your message here..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center space-y-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-400 text-center"
                >
                  ✅ Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center"
                >
                  ❌ Failed to send message. Please try again or contact us directly.
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>

        {/* Support Options */}
        <div className="grid md:grid-cols-2 gap-8">
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
        {/* <motion.div variants={fadeUp} className="glass rounded-xl p-8">
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
        </motion.div> */}

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
        {/* <motion.div variants={fadeUp} className="text-center">
          <div className="glass rounded-xl p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20">
            <h3 className="text-xl font-bold text-red-400 mb-2">Emergency Contact</h3>
            <p className="text-emerald-100/70 mb-3">
              For urgent issues during the competition day
            </p>
            <a
              href="tel:+917992218342"
              className="text-red-400 hover:text-red-300 font-bold text-lg transition-colors"
            >
              +91 7992218342
            </a>
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  )
}

export default Support
