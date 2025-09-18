import React, { useState } from 'react'
import { useIntersectionObserver } from '../../hooks'

const Mentorship: React.FC = () => {
  const { isVisible, ref: sectionRef } = useIntersectionObserver(0.2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    mentorshipType: '',
    goals: '',
    preferredTime: '',
    experience: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        organization: '', 
        mentorshipType: '', 
        goals: '', 
        preferredTime: '', 
        experience: '' 
      })
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 2000)
  }

  return (
    <section id="mentorship" ref={sectionRef} className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-left mb-8 sm:mb-10 lg:mb-12 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
            <div className={`inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '0.2s' }}>
              <div className={`w-8 sm:w-12 h-px bg-[#023F33] transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.15s' }}></div>
              <span className="text-[#023F33] font-semibold tracking-widest uppercase text-xs sm:text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Mentorship</span>
              <div className={`w-8 sm:w-12 h-px bg-[#023F33] transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.25s' }}></div>
            </div>
            <h2 className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#023F33] mb-4 sm:mb-6 leading-tight transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s', fontFamily: 'Space Grotesk, sans-serif' }}>
              Book a Mentorship 
            </h2>
            <p className={`text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.5s' }}>
              Get personalized guidance from Lucy James Abagi on leadership, governance, civic technology, and social impact. Whether you're an emerging leader, entrepreneur, or changemaker, Lucy's mentorship can help accelerate your journey toward creating meaningful change.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left Column - Mentorship Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Mentorship Badge */}
              
              {/* Mentorship Areas */}
              <div className={`bg-gray-50 rounded-2xl p-8 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.7s' }}>
                <h3 className="text-lg font-bold text-[#023F33] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Mentorship Areas
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-[#FFDE59] rounded-full flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-[#023F33]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">Leadership Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-[#FFDE59] rounded-full flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-[#023F33]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">Governance & Transparency</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-[#FFDE59] rounded-full flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-[#023F33]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">Civic Technology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-[#FFDE59] rounded-full flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-[#023F33]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">Social Impact Strategy</span>
                  </div>
                </div>
              </div>

              {/* Session Details */}
              <div className={`bg-gray-50 rounded-2xl p-8 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
                <h3 className="text-lg font-bold text-[#023F33] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Session Details
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#FFE066] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#023F33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-[#023F33]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>60-90 minutes</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#FFE066] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#023F33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-[#023F33]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Virtual or in-person</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#FFE066] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#023F33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-[#023F33]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>48-hour response</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-2">
              <div className={`bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.9s' }}>
                <h3 className="text-xl sm:text-2xl font-bold text-[#023F33] mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Book Your Session
                </h3>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 border-2 border-gray-300 bg-transparent rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-all duration-300"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
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
                        className="w-full px-4 py-3 border-2 border-gray-300 bg-transparent rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-all duration-300"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#023F33] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Mentorship Focus Area *
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, mentorshipType: 'leadership' }))}
                        className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-medium rounded-full border transition-all duration-300 whitespace-nowrap ${
                          formData.mentorshipType === 'leadership'
                            ? 'bg-[#FFDE59] border-[#FFDE59] text-[#023F33]'
                            : 'bg-transparent border-gray-300 text-gray-700 hover:border-[#FFDE59] hover:text-[#023F33]'
                        }`}
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        Leadership
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, mentorshipType: 'governance' }))}
                        className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-medium rounded-full border transition-all duration-300 whitespace-nowrap ${
                          formData.mentorshipType === 'governance'
                            ? 'bg-[#FFDE59] border-[#FFDE59] text-[#023F33]'
                            : 'bg-transparent border-gray-300 text-gray-700 hover:border-[#FFDE59] hover:text-[#023F33]'
                        }`}
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        Governance
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, mentorshipType: 'civic-tech' }))}
                        className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-medium rounded-full border transition-all duration-300 whitespace-nowrap ${
                          formData.mentorshipType === 'civic-tech'
                            ? 'bg-[#FFDE59] border-[#FFDE59] text-[#023F33]'
                            : 'bg-transparent border-gray-300 text-gray-700 hover:border-[#FFDE59] hover:text-[#023F33]'
                        }`}
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        Civic Tech
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, mentorshipType: 'social-impact' }))}
                        className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-medium rounded-full border transition-all duration-300 whitespace-nowrap ${
                          formData.mentorshipType === 'social-impact'
                            ? 'bg-[#FFDE59] border-[#FFDE59] text-[#023F33]'
                            : 'bg-transparent border-gray-300 text-gray-700 hover:border-[#FFDE59] hover:text-[#023F33]'
                        }`}
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        Social Impact
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, mentorshipType: 'fundraising' }))}
                        className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-medium rounded-full border transition-all duration-300 whitespace-nowrap ${
                          formData.mentorshipType === 'fundraising'
                            ? 'bg-[#FFDE59] border-[#FFDE59] text-[#023F33]'
                            : 'bg-transparent border-gray-300 text-gray-700 hover:border-[#FFDE59] hover:text-[#023F33]'
                        }`}
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        Fundraising
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, mentorshipType: 'womens-leadership' }))}
                        className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-medium rounded-full border transition-all duration-300 whitespace-nowrap ${
                          formData.mentorshipType === 'womens-leadership'
                            ? 'bg-[#FFDE59] border-[#FFDE59] text-[#023F33]'
                            : 'bg-transparent border-gray-300 text-gray-700 hover:border-[#FFDE59] hover:text-[#023F33]'
                        }`}
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        Women's Leadership
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, mentorshipType: 'other' }))}
                        className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-medium rounded-full border transition-all duration-300 whitespace-nowrap ${
                          formData.mentorshipType === 'other'
                            ? 'bg-[#FFDE59] border-[#FFDE59] text-[#023F33]'
                            : 'bg-transparent border-gray-300 text-gray-700 hover:border-[#FFDE59] hover:text-[#023F33]'
                        }`}
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        Other
                      </button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-semibold text-[#023F33] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Your Goals *
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-300 bg-transparent rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-all duration-300 resize-vertical"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      placeholder="What do you hope to achieve through mentorship?"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#023F33] hover:bg-[#023F33]/90 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Request Mentorship Session'
                    )}
                  </button>
                </form>
                ) : (
                  <div className="py-6 sm:py-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFDE59] rounded-full flex items-center justify-center mb-3 sm:mb-4">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#023F33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#023F33] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Mentorship Request Submitted!
                    </h3>
                    <p className="text-[#023F33]/80 text-sm sm:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Thank you for your interest in mentorship. Lucy will review your request and get back to you within 48 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mentorship
