import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      className='fixed top-0 inset-x-0 z-50 glass'
    >
      <div className='container-narrow h-16 flex items-center justify-between'>
        <div className='font-extrabold tracking-widest text-emerald-300'>
        IEEE | KIIT
        </div>
        <div className='flex items-center gap-6 text-sm'>
          <Link to='/' className='hover:text-emerald-300 transition-colors'>
            Home
          </Link>
          <Link
            to='/about'
            className='hover:text-emerald-300 transition-colors'
          >
            About
          </Link>
          <Link
            to='/support'
            className='hover:text-emerald-300 transition-colors'
          >
            Support
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
