import React from 'react'

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-xl tracking-wide">LensCraft</a>
        <nav className="hidden sm:flex items-center gap-6 text-white/90">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#book" className="hover:text-white">Book</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar