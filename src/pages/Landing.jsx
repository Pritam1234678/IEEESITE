import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
    const line1 = 'IEEE CTSOc presents'
    const line2 = 'LOGIC LEAGUE'
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Spacer for fixed navbar */}
      <div className='h-16' />

      {/* Hero */}
      <section className='container-narrow py-20 md:py-28 text-center'>
        <motion.h1
          ref={heroRef}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-wide'
        >
          <span
            ref={line1Ref}
            className='text-violet-400 drop-shadow-[0_0_12px_rgba(167,139,250,0.5)]'
          ></span>

          <br />
          <span
            ref={line2Ref}
            className='bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-400 drop-shadow-[0_0_20px_rgba(251,113,133,0.5)]'
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
          A thrilling coding competition that pushes your skills to the limit
          and fuels your creativity. Face real-world challenges, learn from
          peers, and showcase your talent to the world.
        </motion.p>
      </section>

      {/* Event Details */}
      <section id='about' className='container-narrow'>
        <div className='flex flex-col space-y-6'>
          {/* First Part: Event Details and Prizes */}
          <div className='grid md:grid-cols-2 gap-8 md:gap-12 items-start'>
            {/* Left column */}
            <motion.ul
              ref={leftListRef}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className='space-y-3 text-lg'
            >
              {[
                'Date: 12th September 2025',
                'Venue: Tech Hall, Block A',
                'Time: 10:00 AM'
              ].map(text => (
                <motion.li
                  key={text}
                  variants={{
                    hidden: { opacity: 0, x: -24 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  className='glass rounded-lg px-4 py-3'
                >
                  {text}
                </motion.li>
              ))}
            </motion.ul>

            {/* Right column */}
            <motion.div
              ref={rightListRef}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className='glass rounded-xl p-5'
            >
              <h3 className='text-2xl font-bold text-emerald-300'>Prize Pool</h3>
              <ul className='mt-4 space-y-2'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-300 font-semibold'>
                    1st Prize:
                  </span>{' '}
                  Keyboard + Mouse
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-300 font-semibold'>
                    2nd Prize:
                  </span>{' '}
                  Mouse
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-300 font-semibold'>
                    3rd Prize:
                  </span>{' '}
                  Screen Guard
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Second Part: Register Now Button */}
          <div className='flex justify-center mb-6'>
            {(() => {
              const MotionLink = motion(Link)
              return (
                <MotionLink
                  to='/register'
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
                </MotionLink>
              )
            })()}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Landing
