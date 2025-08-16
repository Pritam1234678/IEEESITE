import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import Landing from './pages/Landing'

import AboutPage from './pages/AboutPage'
import SupportPage from './pages/SupportPage'
import LoadingPage from './components/LoadingPage'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  // Lenis smooth scrolling init (runs once)
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.15,
      wheelMultiplier: 1.5,
    })

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      // Lenis has no explicit destroy, but we can stop events
      lenis.stop()
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingPage onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App