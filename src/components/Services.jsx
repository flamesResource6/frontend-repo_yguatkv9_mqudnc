import React from 'react'
import { Camera, Sparkles, Heart, Crown } from 'lucide-react'

const services = [
  { icon: Sparkles, title: 'Free Style', desc: 'Creative portraits and lifestyle shoots with a cinematic feel.' },
  { icon: Heart, title: 'Pre-Wedding Shoot', desc: 'Romantic storytelling before the big day, crafted to perfection.' },
  { icon: Camera, title: 'Candid Photography', desc: 'Natural, in-the-moment captures with authentic emotions.' },
  { icon: Crown, title: 'Wedding Photography', desc: 'Grand coverage with premium edits and timeless frames.' },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">Available Services</h2>
        <p className="mt-3 text-gray-600 text-center">Choose a style that fits your story.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition bg-white">
              <s.icon className="w-10 h-10 text-gray-900" />
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services