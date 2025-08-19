import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HoverCard from '../components/HoverCard'
import HoverCard2 from '../components/HoverCard2'
import HoverCard3 from '../components/HoverCard3'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const Landing = () => {
  const heroRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const leftListRef = useRef(null)
  const rightListRef = useRef(null)

  useEffect(() => {
    // GSAP fade-in
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { filter: 'blur(6px)', opacity: 0 },
        { filter: 'blur(0px)', opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
    }

    // Typing effect
    const line1 = 'IEEE CTSoc presents'
    const line2 = 'CODE COMBAT'
    const charMs = 70
    const pauseMs = 250
    const start = performance.now() + 200 // initial delay

    if (line1Ref.current) line1Ref.current.textContent = ''
    if (line2Ref.current) line2Ref.current.textContent = ''

    let rafId
    const tick = now => {
      if (!line1Ref.current || !line2Ref.current) return
      const t = Math.max(0, now - start)
      const line1End = line1.length * charMs

      if (t < line1End) {
        const n1 = Math.floor(t / charMs)
        line1Ref.current.textContent = line1.slice(0, n1)
        line2Ref.current.textContent = ''
      } else if (t < line1End + pauseMs) {
        line1Ref.current.textContent = line1
        line2Ref.current.textContent = ''
      } else {
        line1Ref.current.textContent = line1
        const rem = t - (line1End + pauseMs)
        const n2 = Math.min(line2.length, Math.floor(rem / charMs))
        line2Ref.current.textContent = line2.slice(0, n2)
        if (n2 >= line2.length) return // done
      }
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      {/* Spacer for fixed navbar */}
      <div className='h-16' />

      {/* Hero */}
      <section className='container-narrow py-4 md:py-6 text-center'>
        <motion.h1
          ref={heroRef}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-wide'
        >
          <span
            ref={line1Ref}
            className='bg-gradient-to-r from-sky-400 to-white text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]'
          ></span>
          <br />
          <span
            ref={line2Ref}
            className='bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-green-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]'
          ></span>
          <span className='typing-caret'>|</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.4 }}
          className='mt-6 text-emerald-100/80 max-w-2xl mx-auto text-center leading-relaxed'
        >
          Enter the arena of algorithms where logic meets battle. <br />This
          <span className='text-green-400 font-bold text-xl'> CP Hackathon</span> challenges
          you to code, conquer, and claim victory. Your code is your weapon. <span className='text-red-500 font-bold '> Are
          you ready for combat?</span>
        </motion.p>
      </section>

      {/* Hover Cards Section */}
      <section id='cards' className='container-wide py-2'>
        {/* <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className='text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent'
        >
          Interactive Card Gallery
        </motion.h2> */}
        
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-items-center'>
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='w-full max-w-md'
          >
            <div className='transform scale-90 origin-center'>
              <HoverCard />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='w-full max-w-md'
          >
            <div className='transform scale-90 origin-center'>
              <HoverCard2 />
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='w-full max-w-md lg:col-span-1 md:col-span-2 lg:col-start-auto md:col-start-1'
          >
            <div className='transform scale-90 origin-center'>
              <HoverCard3 />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Register Now Section */}
      <section className='container-narrow py-12'>
        <div className='flex justify-center'>
          {/* <motion.a
            href='https://script.google.com/macros/s/AKfycbyFcJRLA_8Sim6-JRhtrYhIE-8kvE2eO4NANe7ieyaP9RVGtRQn8GgBVK4-EjVCwRpE/exec'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 24px rgba(34,197,94,0.6)' // lime glow
            }}
            whileTap={{ scale: 0.97 }}
            className='inline-block text-center text-lg md:text-xl font-bold px-8 py-4 rounded-full
                 bg-gradient-to-r from-teal-400 to-lime-400 text-white
                 shadow-[0_0_16px_rgba(34,197,94,0.45)]
                 transition-all duration-300
                 hover:from-lime-400 hover:to-teal-400'
          >
            Register Now
          </motion.a> */}
               <motion.p
          
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 24px rgba(34,197,94,0.6)' // lime glow
            }}
            whileTap={{ scale: 0.97 }}
            className='inline-block text-center text-lg md:text-xl font-bold px-8 py-4 rounded-full
                 bg-gradient-to-r from-teal-400 to-lime-400 text-white
                 shadow-[0_0_16px_rgba(34,197,94,0.45)]
                 transition-all duration-300
                 hover:from-lime-400 hover:to-teal-400'
          >
            Registration opening soon!
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Landing
