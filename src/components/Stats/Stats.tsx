import React, { useState, useEffect, useRef } from 'react'

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="pt-24 pb-12 bg-white pattern-bg" style={{ fontFamily: '"Clash Display", sans-serif' }}>
      <div className="container mx-auto px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Mission Statement */}
            <div className="space-y-6 text-left">
              <h2 className={`text-2xl lg:text-3xl xl:text-4xl font-bold text-[#023F33] leading-tight transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s', fontFamily: 'Space Grotesk, sans-serif' }}>
                From Amplifying Grassroots<br />
                Voices to Influencing Global<br />
                Governance
                <div className={`w-16 h-1 bg-[#FFB800] mt-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '0.6s' }}></div>
              </h2>
              <p className={`text-lg lg:text-xl text-gray-700 leading-relaxed text-justify transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
                I believe overlooked communities hold the keys to sustainable progress. Through open data, innovative technologies, access to justice, and citizen led reforms, I amplify local voices, equip changemakers, and ensure governance is not just for the people but by the people.
              </p>
            </div>

            {/* Right Column - Statistics */}
            <div className="space-y-6 lg:pl-6 relative text-right">
              {/* Vertical Divider - Hidden on mobile */}
              <div className={`hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gray-300 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} style={{ transitionDelay: '0.8s' }}></div>
              
              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-4 lg:gap-8 lg:ml-auto lg:max-w-lg w-full">
                {/* Left Column - 3 Stats */}
                <div className="space-y-6">
                  <div className={`text-center lg:text-right space-y-2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.0s' }}>
                    <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>15+</div>
                    <div className="text-[#023F33] font-semibold text-xs lg:text-sm xl:text-base">Years Impact</div>
                  </div>
                  <div className={`text-center lg:text-right space-y-2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.2s' }}>
                    <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>14K+</div>
                    <div className="text-[#023F33] font-semibold text-xs lg:text-sm xl:text-base">Records Published</div>
                  </div>
                  <div className={`text-center lg:text-right space-y-2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.4s' }}>
                    <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>6+</div>
                    <div className="text-[#023F33] font-semibold text-xs lg:text-sm xl:text-base">States Reached</div>
                  </div>
                </div>
                
                {/* Right Column - 3 Stats */}
                <div className="space-y-6">
                  <div className={`text-center lg:text-right space-y-2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.6s' }}>
                    <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>36</div>
                    <div className="text-[#023F33] font-semibold text-xs lg:text-sm xl:text-base">Organizations Funded</div>
                  </div>
                  <div className={`text-center lg:text-right space-y-2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.8s' }}>
                    <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>10K+</div>
                    <div className="text-[#023F33] font-semibold text-xs lg:text-sm xl:text-base">Landlords Supported</div>
                  </div>
                  <div className={`text-center lg:text-right space-y-2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '2.0s' }}>
                    <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>9</div>
                    <div className="text-[#023F33] font-semibold text-xs lg:text-sm xl:text-base">Countries Impacted</div>
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
