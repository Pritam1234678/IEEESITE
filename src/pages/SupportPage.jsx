import React from 'react'
import Navbar from '../components/Navbar'
import Support from '../components/Support'
import Footer from '../components/Footer'

const SupportPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Spacer for fixed navbar */}
      <div className='h-16' />
      
      <Support />
      
      <Footer />
    </div>
  )
}

export default SupportPage
