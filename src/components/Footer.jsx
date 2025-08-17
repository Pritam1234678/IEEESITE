import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ieee_ctsoc_kiit?igsh=endzbXJ2a3p0a2dl',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
 
    {
      name: 'Website',
      url: 'https://www.ieee.org/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
    },
 

  ]

  const quickLinks = [
    { name: 'About', href: '/about' },
  
    { name: 'Support', href: '/support' }
  ]

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="glass border-t border-emerald-300/20 bg-gradient-to-b from-black/80 to-emerald-950/70"
    >
      <div className="container-narrow py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="font-extrabold tracking-widest text-emerald-300 text-xl">
              IEEE CTSOc
            </h3>
            <p className="text-emerald-100/70 text-sm leading-relaxed">
              Empowering the next generation of computer scientists through innovative competitions and collaborative learning experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-emerald-100/60 hover:text-emerald-300 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h4 className="font-bold text-emerald-300">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-emerald-100/70 hover:text-emerald-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h4 className="font-bold text-emerald-300">Contact</h4>
            <div className="space-y-2 text-sm text-emerald-100/70">
              <p>Adarsh Kumar</p>
              <p>adarshkumar@ieee.org</p>
              <p>+91 6203713902</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeUp}
          className="border-t border-emerald-300/20 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-emerald-100/60 text-sm">
              © {currentYear} IEEE CtSoc. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-emerald-100/60 hover:text-emerald-300 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-emerald-100/60 hover:text-emerald-300 transition-colors"
              >
                Terms of Service
              </a>
            </div> */}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
