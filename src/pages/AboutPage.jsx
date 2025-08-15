import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Spacer for fixed navbar */}
      <div className='h-16' />
      
      <About />
      
      <Footer />
    </div>
  )
}

export default AboutPage
