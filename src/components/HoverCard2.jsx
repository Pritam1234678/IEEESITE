import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const HoverCard2 = () => {
  const [isHovered, setIsHovered] = useState(false)
  const secondImageRef = useRef(null)
  const timelineRef = useRef(null)

  // Theme change effect
  const handleMouseEnter = () => {
    setIsHovered(true)
    document.body.className = 'theme-golden-blue'
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    document.body.className = ''
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
        transformOrigin: "center center",
        zIndex: 10
      })
      
      // Create smooth reveal animation over 3 seconds
      timelineRef.current
        .to(secondImageRef.current, {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.8)"
        })
        .to(secondImageRef.current, {
          scale: 1.05,
          duration: 0.8,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        }, "-=0.5")
        .to(secondImageRef.current, {
          rotation: 2,
          duration: 1.2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        }, "-=1.5")
    }
  }, [])

  useEffect(() => {
    if (timelineRef.current) {
      if (isHovered) {
        timelineRef.current.play()
      } else {
        timelineRef.current.reverse()
      }
    }
  }, [isHovered])

  return (
    <div className="flex justify-center items-center p-4">
      
      {/* Single Container with overlapping images */}
      <motion.div
        className="relative w-80 h-96 rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
        }}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          type: "spring",
          stiffness: 100
        }}
        style={{ perspective: "1000px" }}
      >
        
        {/* First Image - Background Layer (p3.jpg) */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{
            scale: isHovered ? 1.1 : 1,
            filter: isHovered ? "brightness(0.7) blur(2px)" : "brightness(1) blur(0px)"
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img
            src="/p3.jpg"
            alt="Background Image"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Background overlay when hovering */}
        <motion.div
          className="absolute inset-0 bg-black/30"
          animate={{ 
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Second Image - Overlay Layer (p4.jpg) appears from center */}
        <div
          ref={secondImageRef}
          className="absolute inset-4 rounded-xl overflow-hidden shadow-xl"
          style={{ zIndex: 10 }}
        >
          <img
            src="/p4.jpg"
            alt="Overlay Image"
            className="w-full h-full object-cover"
          />
          
          {/* Glowing border for second image */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2"
            animate={{
              borderColor: isHovered 
                ? ["rgba(34, 197, 94, 0.8)", "rgba(16, 185, 129, 0.8)", "rgba(34, 197, 94, 0.8)"]
                : "transparent",
              boxShadow: isHovered
                ? "0 0 30px rgba(34, 197, 94, 0.6), inset 0 0 20px rgba(16, 185, 129, 0.3)"
                : "none"
            }}
            transition={{ 
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Particle effects around the container */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-green-400 rounded-full"
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  x: 160, // Start from center
                  y: 192
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  x: 160 + (Math.cos(i * 24 * Math.PI / 180) * 150),
                  y: 192 + (Math.sin(i * 24 * Math.PI / 180) * 150),
                  rotate: 360
                }}
                transition={{ 
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}

        {/* Ripple effect from center */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-2xl border-2 border-green-400/30"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ 
                  scale: [0, 1.5, 2.5],
                  opacity: [0.8, 0.4, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                style={{ transformOrigin: "center center" }}
              />
            ))}
          </>
        )}

        {/* Main container border */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2"
          animate={{
            borderColor: isHovered 
              ? ["rgba(34, 197, 94, 0.8)", "rgba(16, 185, 129, 0.8)", "rgba(34, 197, 94, 0.8)"]
              : "rgba(255, 255, 255, 0.2)",
            boxShadow: isHovered
              ? "0 0 40px rgba(34, 197, 94, 0.6)"
              : "0 0 10px rgba(255, 255, 255, 0.1)"
          }}
          transition={{ 
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
        />

        {/* Text overlay */}
        <motion.div
          className="absolute bottom-6 left-6 right-6 z-20"
          animate={{ 
            opacity: isHovered ? 1 : 0.8,
            y: isHovered ? 0 : 10
          }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-white text-xl font-bold mb-2 drop-shadow-lg">
            {isHovered ? "Card 2 - Image Revealed!" : "Hover Card 2"}
          </h3>
          <p className="text-white/90 text-sm drop-shadow-md">
            Green theme with p3 & p4 images ✨
          </p>
        </motion.div>

      </motion.div>
      
    </div>
  )
}

export default HoverCard2
