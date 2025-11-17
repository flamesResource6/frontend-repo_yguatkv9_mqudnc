import React, { useState } from 'react'

const options = [
  'free style',
  'pre-wedding shoot',
  'candid photography',
  'wedding photography',
]

const BookingForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: options[0],
    date: '',
    message: '',
    loading: false,
    success: null,
    error: null,
  })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setForm((f) => ({ ...f, loading: true, success: null, error: null }))
    try {
      const res = await fetch(`${backend}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          date: form.date,
          message: form.message || undefined,
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.detail || 'Failed to submit')
      setForm({
        name: '', email: '', phone: '', service: options[0], date: '', message: '',
        loading: false, success: 'Your order has been placed! We will contact you shortly.', error: null
      })
    } catch (err) {
      setForm((f) => ({ ...f, loading: false, error: err.message }))
    }
  }

  return (
    <section id="book" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900">Book your shoot</h2>
          <p className="text-gray-600 mt-2">Fill out the form and we’ll get back to you within 24 hours.</p>
          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Full name" className="w-full border rounded-lg p-3" />
            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email" className="w-full border rounded-lg p-3" />
            <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone" className="w-full border rounded-lg p-3" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select name="service" value={form.service} onChange={handleChange} className="w-full border rounded-lg p-3">
                {options.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
              <input name="date" type="date" value={form.date} onChange={handleChange} required className="w-full border rounded-lg p-3" />
            </div>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your vision (optional)" rows={4} className="w-full border rounded-lg p-3" />
            <button disabled={form.loading} className="mt-2 bg-gray-900 text-white rounded-lg py-3 px-6 hover:bg-black transition disabled:opacity-50">
              {form.loading ? 'Submitting...' : 'Place Order'}
            </button>
            {form.success && <p className="text-green-600 mt-2">{form.success}</p>}
            {form.error && <p className="text-red-600 mt-2">{form.error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default BookingForm
