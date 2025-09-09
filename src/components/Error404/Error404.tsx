import React from 'react'
import { useIntersectionObserver } from '../../hooks'

const Error404: React.FC = () => {
  const { isVisible, ref: sectionRef } = useIntersectionObserver(0.3);

  return (
    <section ref={sectionRef} className="h-screen flex items-center justify-center pattern-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Decorative geometric shapes */}
        <div className="absolute top-16 left-16 w-20 h-20 bg-[#FFE066]/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-12 w-16 h-16 bg-[#023F33]/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-[#FFE066]/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* 404 Number */}
          <div className={`mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '0.2s' }}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none" style={{ 
              color: '#023F33',
              fontFamily: 'Space Grotesk, sans-serif',
              textShadow: '0 0 30px rgba(2, 63, 51, 0.3)'
            }}>
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className={`mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3" style={{ 
              color: '#023F33',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              Oops! Page Not Found
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              The page you're looking for seems to have wandered off into the digital wilderness.
            </p>
          </div>

          {/* Decorative Line */}
          <div className={`w-20 h-1 bg-gradient-to-r from-[#FFE066] to-[#FFD700] mx-auto mb-6 rounded-full transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.6s' }}></div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
            <button 
              onClick={() => window.history.back()}
              className="bg-[#023F33] hover:bg-[#035a4a] text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Go Back
            </button>
            <a 
              href="/"
              className="border-2 border-[#023F33] hover:border-[#035a4a] text-[#023F33] hover:text-[#035a4a] font-semibold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-[#023F33]/5 text-sm"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Return Home
            </a>
          </div>

          {/* Additional Help Text */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.0s' }}>
            <p className="text-xs sm:text-sm text-gray-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Need help? Contact us at{' '}
              <a href="mailto:info@ppdc.org" className="text-[#023F33] hover:text-[#035a4a] font-medium transition-colors duration-200">
                info@ppdc.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Error404
