import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg">Capture stories that last forever</h1>
            <p className="mt-4 text-white/90 text-lg">Photography, videography, and reels — crafted with a modern, minimalist touch.</p>
            <a href="#book" className="inline-block mt-8 bg-white/90 hover:bg-white text-gray-900 font-semibold py-3 px-6 rounded-full transition">Book a shoot</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    </section>
  )
}

export default Hero