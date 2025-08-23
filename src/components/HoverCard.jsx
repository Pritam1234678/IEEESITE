import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const HoverCard = () => {
  const [isHovered, setIsHovered] = useState(false)
  const secondImageRef = useRef(null)
  const timelineRef = useRef(null)

  // Theme change effect
  const handleMouseEnter = () => {
    setIsHovered(true)
    document.body.className = 'theme-red'
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    document.body.className = ''
    if (timelineRef.current && secondImageRef.current) {
      gsap.to(secondImageRef.current, {
        scale: 0,
        opacity: 0,
        rotation: 45,
        duration: 0.6,
        ease: "power2.inOut"
      })
    }
  }

  useEffect(() => {
    // Initialize GSAP timeline
    timelineRef.current = gsap.timeline({ paused: true })

    if (secondImageRef.current) {
      // Set initial state - hidden and scaled down from center
      gsap.set(secondImageRef.current, {
        scale: 0,
        opacity: 0,
        rotation: 45,
        transformOrigin: 'center center',
        zIndex: 10
      })

      // Create smooth reveal animation over 3 seconds
      timelineRef.current
        .to(secondImageRef.current, {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.5,
          ease: 'elastic.out(1, 0.8)'
        })
        .to(
          secondImageRef.current,
          {
            scale: 1.05,
            duration: 0.8,
            ease: 'power2.inOut',
            yoyo: true,
            repeat: -1
          },
          '-=0.5'
        )
        .to(
          secondImageRef.current,
          {
            rotation: 2,
            duration: 1.2,
            ease: 'power2.inOut',
            yoyo: true,
            repeat: -1
          },
          '-=1.5'
        )
    }
  }, [])

  useEffect(() => {
    if (timelineRef.current) {
      if (isHovered) {
        timelineRef.current.restart()
      } else {
        timelineRef.current.pause(0)
      }
    }
  }, [isHovered])

  return (
    <div className='flex justify-center items-center p-4'>
      {/* Single Container with overlapping images */}
      <motion.div
        className='relative w-80 h-96 rounded-2xl overflow-hidden cursor-pointer shadow-2xl'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.05,
          rotateY: 5
        }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
          type: 'spring',
          stiffness: 100
        }}
        style={{ perspective: '1000px' }}
      >
        {/* First Image - Background Layer */}
        <motion.div
          className='absolute inset-0 w-full h-full'
          animate={{
            scale: isHovered ? 1.1 : 1,
            filter: isHovered
              ? 'brightness(0.7) blur(2px)'
              : 'brightness(1) blur(0px)'
          }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <img
            src='/p1.jpg'
            alt='Background Image'
            className='w-full h-full object-cover'
            loading='eager'
          />
        </motion.div>

        {/* Background overlay when hovering */}
        <motion.div
          className='absolute inset-0 bg-black/30'
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Second Image - Overlay Layer (appears from center) */}
        <div
          ref={secondImageRef}
          className='absolute inset-4 rounded-xl overflow-hidden shadow-xl'
          style={{ zIndex: 10 }}
        >
          <img
            src='/p2.jpg'   //changed
            alt='Overlay Image'
            className='w-full h-full object-cover'
            loading='eager'
          />

          {/* Glowing border for second image */}
          <motion.div
            className='absolute inset-0 rounded-xl border-2'
            animate={{
              borderColor: isHovered
                ? [
                    'rgba(255, 107, 107, 0.8)',
                    'rgba(238, 90, 36, 0.8)',
                    'rgba(255, 107, 107, 0.8)'
                  ]
                : 'transparent',
              boxShadow: isHovered
                ? '0 0 30px rgba(255, 107, 107, 0.6), inset 0 0 20px rgba(238, 90, 36, 0.3)'
                : 'none'
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: 'easeInOut'
            }}
          />
        </div>

  

        {/* Ripple effect from center */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute inset-0 rounded-2xl border-2 border-orange-400/30'
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: [0, 1.5, 2.5],
                  opacity: [0.8, 0.4, 0]
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: 'easeOut'
                }}
                style={{ transformOrigin: 'center center' }}
              />
            ))}
          </>
        )}

        {/* Main container border */}
        <motion.div
          className='absolute inset-0 rounded-2xl border-2'
          animate={{
            borderColor: isHovered
              ? [
                  'rgba(147, 51, 234, 0.8)',
                  'rgba(59, 130, 246, 0.8)',
                  'rgba(147, 51, 234, 0.8)'
                ]
              : 'rgba(255, 255, 255, 0.2)',
            boxShadow: isHovered
              ? '0 0 40px rgba(147, 51, 234, 0.6)'
              : '0 0 10px rgba(255, 255, 255, 0.1)'
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: 'easeInOut'
          }}
        />

        {/* Text overlay */}
        <motion.div
          className='absolute bottom-4 left-4 right-4 z-30 bg-black/40 backdrop-blur-sm rounded-lg p-3'
          animate={{
            opacity: isHovered ? 1 : 0.9,
            y: isHovered ? 0 : 6
          }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <h3 className='text-emerald-400 text-lg md:text-xl font-extrabold mb-1 text-left drop-shadow-lg'>
            {isHovered ? 'Venue Details' : 'Tap to reveal'}
          </h3>

          <div className='text-sm leading-relaxed text-left break-words'>
            {isHovered ? (
              <div className='space-y-1'>
                <div className='text-emerald-200 font-semibold'>
                  <span className='text-emerald-400'>📍</span>
                  <span className='ml-2 text-white'>Campus 25</span>
                  
                </div>

                <div className='text-yellow-300 font-medium'>
                  <span className='font-semibold'>Date:</span>
                  <span className='ml-2 text-white'>21 September</span>
                </div>

                <div className='text-pink-300 font-medium'>
                  <span className='font-semibold'>Time:</span>
                  <span className='ml-2 text-white'>11:00 AM </span>
                </div>
              </div>
            ) : (
              <div className='text-white/90'>
                 Venue and Time.
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HoverCard
