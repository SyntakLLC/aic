'use client'

import { useState } from 'react'
import { contactInfo } from '@/config/contact'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto URL with form data
    const subject = `Message from ${formData.name}`
    const body = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`

    const mailtoUrl = `mailto:${contactInfo.form.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  return (
    <div className="min-h-screen bg-white dark:bg-darkGreen">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-900 to-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              {/* Address */}
              <div>
                <h2 className="text-xl font-semibold text-emerald-900 dark:text-white mb-4">
                  Location
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {contactInfo.address.street}<br />
                  {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
                </p>
              </div>

              {/* Contact Details */}
              <div>
                <h2 className="text-xl font-semibold text-emerald-900 dark:text-white mb-4">
                  Contact Details
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong className="text-emerald-900 dark:text-emerald-300">Phone: </strong>
                    <a href={contactInfo.phone.href} className="hover:text-emerald-600 dark:hover:text-emerald-400">
                      {contactInfo.phone.display} or {contactInfo.phone.alt}
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong className="text-emerald-900 dark:text-emerald-300">Email: </strong>
                    <a href={contactInfo.email.href} className="hover:text-emerald-600 dark:hover:text-emerald-400">
                      {contactInfo.email.display}
                    </a>
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h2 className="text-xl font-semibold text-emerald-900 dark:text-white mb-4">
                  Follow Us
                </h2>
                <div className="flex space-x-4">
                  <a 
                    href={contactInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href={contactInfo.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-xl font-semibold text-emerald-900 dark:text-white mb-4">
                  Directions
                </h2>
                <div className="aspect-video rounded-lg overflow-hidden border border-emerald-100 dark:border-emerald-900/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.6893371653307!2d-71.13893372346847!3d42.64748897116831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3026a8bdd3b99%3A0x40f0b15400c78c0!2s204%20Andover%20St%2C%20Andover%2C%20MA%2001810!5e0!3m2!1sen!2sus!4v1706940358641!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="border border-emerald-100 dark:border-emerald-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-emerald-900 dark:text-white mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-emerald-100 dark:border-emerald-900/30 rounded-lg bg-white dark:bg-darkGreen text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-emerald-100 dark:border-emerald-900/30 rounded-lg bg-white dark:bg-darkGreen text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-emerald-100 dark:border-emerald-900/30 rounded-lg bg-white dark:bg-darkGreen text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
                >
                  Send Message
                </button>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
                  This will open your default email client with the message pre-filled
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 