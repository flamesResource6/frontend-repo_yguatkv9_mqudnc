import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import BookingForm from './components/BookingForm'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <BookingForm />
      <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} LensCraft Studio · All rights reserved.</footer>
    </div>
  )
}

export default App
