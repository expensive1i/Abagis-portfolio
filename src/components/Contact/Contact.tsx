import React, { useState, useEffect } from 'react'
import { useIntersectionObserver } from '../../hooks'
import Navigation from '../layout/Navigation'
import Footer from '../layout/Footer/Footer'
import { SEO } from '../common'

const Contact: React.FC = () => {
  const { isVisible, ref: sectionRef } = useIntersectionObserver<HTMLElement>(0.2)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pattern-bg">
      <SEO 
        title="Contact Lucy James Abagi"
        description="Get in touch with Lucy James Abagi for collaborations, speaking engagements, or to discuss social impact and justice reform initiatives. Ready to connect and make a difference together."
        keywords="contact Lucy James Abagi, social impact collaboration, justice reform consultation, advocacy partnership, speaking engagement, social justice consultation"
        url="/contact"
        type="website"
      />
      <Navigation />
      
      <main ref={sectionRef}>
        {/* Hero Banner */}
        <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("/images/LucysGallery(29).jpg")` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16 w-full">
              <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
                <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                  <span className="bg-[#FFE066] text-[#023F33] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Get In Touch
                  </span>
                  <span className="text-white/80 text-xs sm:text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Let's Connect
                  </span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Contact Me
                </h1>
                
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-white/80 text-base sm:text-lg">
                  <span style={{ fontFamily: 'Poppins, sans-serif' }}>Ready to collaborate or have questions?</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className={`bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#023F33] mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Send a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-[#023F33] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-[#FFE066] focus:border-transparent transition-all duration-300"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#023F33] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-[#FFE066] focus:border-transparent transition-all duration-300"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-[#023F33] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFE066] focus:border-transparent transition-all duration-300"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#023F33] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFE066] focus:border-transparent transition-all duration-300 resize-vertical"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        placeholder="Tell me about your project or question..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#023F33] hover:bg-[#035a4a] disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                    
                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                        <p className="text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          ✅ Message sent successfully! I'll get back to you soon.
                        </p>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        <p className="text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          ❌ Something went wrong. Please try again or contact me directly.
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              </div>

              {/* Contact Information Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  {/* Contact Info */}
                  <div className={`bg-gray-50 rounded-2xl p-6 shadow-sm transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
                    <h3 className="text-xl font-bold text-[#023F33] mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Contact Information
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#FFE066] rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#023F33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#023F33] mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Email
                          </h4>
                          <a href="mailto:lucy@example.com" className="text-gray-600 hover:text-[#023F33] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            lucy@example.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#FFE066] rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#023F33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#023F33] mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Location
                          </h4>
                          <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Abuja, Nigeria
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#FFE066] rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#023F33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#023F33] mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Response Time
                          </h4>
                          <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Within 24 hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className={`bg-gray-50 rounded-2xl p-6 shadow-sm transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
                    <h3 className="text-lg font-bold text-[#023F33] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Connect With Me
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <a href="https://x.com/lucydavis2012" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-gray-100 hover:bg-[#FFE066] rounded-lg transition-all duration-300 group">
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-[#023F33]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                        <span className="text-xs font-medium text-gray-600 group-hover:text-[#023F33]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Twitter
                        </span>
                      </a>
                      
                      <a href="https://www.linkedin.com/in/lucy-abagi-a94a98128/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-gray-100 hover:bg-[#FFE066] rounded-lg transition-all duration-300 group">
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-[#023F33]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.856-3.047-1.856 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span className="text-xs font-medium text-gray-600 group-hover:text-[#023F33]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          LinkedIn
                        </span>
                      </a>
                      
                      <a href="https://www.instagram.com/lucyjamesabagi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-gray-100 hover:bg-[#FFE066] rounded-lg transition-all duration-300 group">
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-[#023F33]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span className="text-xs font-medium text-gray-600 group-hover:text-[#023F33]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          Instagram
                        </span>
                      </a>
                      
                      <a href="https://www.youtube.com/@lucy-jamesabagi?si=t6YAPovg1NWV5oON&themeRefresh=1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-gray-100 hover:bg-[#FFE066] rounded-lg transition-all duration-300 group">
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-[#023F33]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        <span className="text-xs font-medium text-gray-600 group-hover:text-[#023F33]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          YouTube
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default Contact
