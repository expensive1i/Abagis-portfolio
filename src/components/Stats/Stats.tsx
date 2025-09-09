import React from 'react'
import { useIntersectionObserver } from '../../hooks'

const Stats: React.FC = () => {
  const { isVisible, ref: sectionRef } = useIntersectionObserver(0.1)

  return (
    <section id="about" ref={sectionRef} className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 bg-white pattern-bg" style={{ fontFamily: '"Clash Display", sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            
            {/* Left Column - Mission Statement */}
            <div className="space-y-4 sm:space-y-6 text-left">
              {/* Leadership Badge */}
              <div className={`inline-flex items-center gap-2 bg-[#FFE066] text-[#023F33] px-3 py-1 rounded-full text-xs font-semibold transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s', fontFamily: 'Space Grotesk, sans-serif' }}>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Leadership & Impact
              </div>
              
              <h2 className={`text-2xl lg:text-3xl xl:text-4xl font-bold text-[#023F33] leading-tight transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s', fontFamily: 'Space Grotesk, sans-serif' }}>
                From Amplifying Grassroots Voices to Influencing Global Governance
                <div className={`w-12 sm:w-16 h-1 bg-[#FFB800] mt-3 sm:mt-4 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '0.6s' }}></div>
              </h2>
              <p className={`text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed text-justify transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
                I believe overlooked communities hold the keys to sustainable progress. Through open data, innovative technologies, access to justice, and citizen led reforms, I amplify local voices, equip changemakers, and ensure governance is not just for the people but by the people.
              </p>
            </div>

            {/* Right Column - Statistics */}
            <div className="space-y-4 sm:space-y-6 lg:pl-6 relative">
              {/* Vertical Divider - Hidden on mobile */}
              <div className={`hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gray-300 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} style={{ transitionDelay: '0.8s' }}></div>
              
              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-8 lg:ml-auto lg:max-w-lg w-full">
                {/* Left Column - 3 Stats */}
                <div className="space-y-4 sm:space-y-6">
                  <div className={`text-center lg:text-right space-y-1 sm:space-y-2 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.0s' }}>
                    <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>15+</div>
                    <div className="text-[#023F33] font-semibold text-xs sm:text-sm lg:text-base">Years Impact</div>
                  </div>
                  <div className={`text-center lg:text-right space-y-1 sm:space-y-2 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.2s' }}>
                    <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>14K+</div>
                    <div className="text-[#023F33] font-semibold text-xs sm:text-sm lg:text-base">Records Published</div>
                  </div>
                  <div className={`text-center lg:text-right space-y-1 sm:space-y-2 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.4s' }}>
                    <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>6+</div>
                    <div className="text-[#023F33] font-semibold text-xs sm:text-sm lg:text-base">States Reached</div>
                  </div>
                </div>
                
                {/* Right Column - 3 Stats */}
                <div className="space-y-4 sm:space-y-6">
                  <div className={`text-center lg:text-right space-y-1 sm:space-y-2 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.6s' }}>
                    <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>36</div>
                    <div className="text-[#023F33] font-semibold text-xs sm:text-sm lg:text-base">Organizations Funded</div>
                  </div>
                  <div className={`text-center lg:text-right space-y-1 sm:space-y-2 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.8s' }}>
                    <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>10K+</div>
                    <div className="text-[#023F33] font-semibold text-xs sm:text-sm lg:text-base">Landlords Supported</div>
                  </div>
                  <div className={`text-center lg:text-right space-y-1 sm:space-y-2 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '2.0s' }}>
                    <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>9</div>
                    <div className="text-[#023F33] font-semibold text-xs sm:text-sm lg:text-base">Countries Impacted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
