import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingPage = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [counter, setCounter] = useState(0)
  const [typedText, setTypedText] = useState('')
  const textRef = useRef(null)

  const fullText = "Welcome to IEEE CTSOc Logic League"
  const charMs = 100 // milliseconds per character (slower for smoother typing)

  useEffect(() => {
    // Counter animation from 0 to 100 over 4 seconds
    const counterInterval = setInterval(() => {
      setCounter(prev => {
        if (prev >= 100) {
          clearInterval(counterInterval)
          return 100
        }
        return prev + 1
      })
    }, 40) // 4000ms / 100 = 40ms per increment

    // Auto-typing animation
    let charIndex = 0
    const typingInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setTypedText(fullText.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, charMs)

    // Complete loading after 4 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => {
        onLoadingComplete()
      }, 700) // Longer delay for smoother exit animation
    }, 4000)

    return () => {
      clearInterval(counterInterval)
      clearInterval(typingInterval)
      clearTimeout(loadingTimer)
    }
  }, [onLoadingComplete])

  if (!isLoading && counter >= 100) {
    return null
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-emerald-950 to-black"
        >
          <div className="text-center space-y-8 px-4">
            {/* Main Title with Typing Animation */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.0, ease: "easeOut" }}
              className="space-y-4"
            >
              <h1 
                ref={textRef}
                className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-center"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]">
                  {typedText}
                </span>
                <span className="typing-caret text-emerald-400">|</span>
              </h1>
            </motion.div>

            {/* Counter */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="space-y-4"
            >
              <div className="relative">
                <motion.div
                  className="text-6xl md:text-8xl font-bold text-emerald-300 drop-shadow-[0_0_30px_rgba(52,211,153,0.7)]"
                  animate={{ 
                    textShadow: [
                      '0 0 30px rgba(52,211,153,0.7)',
                      '0 0 40px rgba(52,211,153,0.9)',
                      '0 0 30px rgba(52,211,153,0.7)'
                    ]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: "easeInOut"
                  }}
                >
                  {counter}%
                </motion.div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-64 md:w-80 mx-auto">
                <div className="h-2 bg-emerald-950/50 rounded-full overflow-hidden border border-emerald-400/30">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${counter}%` }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                </div>
              </div>
              
              <p className="text-emerald-100/70 text-lg font-medium">
                Loading Competition Platform...
              </p>
            </motion.div>

            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [0, -50, -100],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingPage
