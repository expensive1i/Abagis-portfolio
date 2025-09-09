import React from 'react'
import { useIntersectionObserver } from '../../hooks'

const Biography: React.FC = () => {
  const { isVisible, ref: sectionRef } = useIntersectionObserver(0.2);

  return (
    <section id="biography" ref={sectionRef} className="py-8 sm:py-12 lg:py-16 bg-white relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Background Image - Full Width */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url("/images/LucysGallery(17).jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Three-Color Gradient Overlay - Black top, Green center, Black bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#023F33]/90 to-black/80"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-8 sm:mb-10 lg:mb-12 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            <div className={`inline-flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '0.4s' }}>
              <div className={`w-6 sm:w-8 h-px bg-[#FFE066] transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.3s' }}></div>
              <span className="text-[#FFE066] font-bold tracking-widest uppercase text-sm sm:text-base lg:text-xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Biography</span>
              <div className={`w-6 sm:w-8 h-px bg-[#FFE066] transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.5s' }}></div>
            </div>
            
            {/* Subtitle */}
            <p className={`text-white/80 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.6s', fontFamily: 'Poppins, sans-serif' }}>
              A comprehensive overview of her leadership journey, groundbreaking achievements, and transformative contributions to transparency, civic technology, and justice reform in Nigeria.
            </p>
          </div>

          {/* Content Grid */}
          <div className="py-3 sm:py-4 lg:py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch relative">
              
              {/* Left Column - Text Content */}
              <div className="space-y-4 sm:space-y-6 text-white h-full">
                <div className="space-y-3 sm:space-y-4">
                  {/* Leadership Badge */}
                  <div className={`inline-flex items-center gap-2 bg-[#FFF3CD] text-[#023F33] px-3 py-1 rounded-full text-xs font-semibold transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.5s', fontFamily: 'Space Grotesk, sans-serif' }}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Leadership & Impact
                  </div>
                  
                  <div className="relative">
                    <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold leading-tight transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: '#FFE066', fontFamily: 'Space Grotesk, sans-serif', transitionDelay: '0.6s' }}>
                      Leadership in Transparency & Civic-Tech Innovation
                    </h2>
                    <div className={`w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#FFE066] to-[#FFD700] mt-2 rounded-full transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.8s' }}></div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <p className={`text-sm sm:text-base lg:text-lg leading-relaxed text-justify text-white/75 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.0s' }}>
                      Under my leadership, PPDC has pioneered the Budeshi platform, Nigeria's first Open Contracting Data Standard (OCDS) portal. Budeshi revolutionizes procurement transparency publishing over 14,000 government contracts and empowering citizens to monitor public spending across six to seven states, including Kaduna, Ekiti, Anambra, Plateau, Adamawa, and the FCT.
                    </p>
                    
                    <p className={`text-sm sm:text-base lg:text-lg leading-relaxed text-justify text-white/75 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.2s' }}>
                      I also launched the $7,500 Community Accountability Grant (July 2025), enabling 36 grassroots organizations to monitor federal procurement in their states. Each group received approximately $200, gaining access to training, data tools, and legal support via Budeshi's upgraded portal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vertical Separator Line */}
              <div className={`hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/30 transform -translate-x-1/2 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} style={{ transitionDelay: '1.4s' }}></div>

              {/* Right Column - Access to Justice & Digital Reform */}
              <div className="space-y-4 sm:space-y-6 text-white h-full">
                <div className="space-y-3 sm:space-y-4">
                  {/* Justice & Reform Badge */}
                  <div className={`inline-flex items-center gap-2 bg-[#FFF3CD] text-[#023F33] px-3 py-1 rounded-full text-xs font-semibold transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.5s', fontFamily: 'Space Grotesk, sans-serif' }}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Justice & Reform
                  </div>
                  
                  <div className="relative">
                    <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold leading-tight transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: '#FFE066', fontFamily: 'Space Grotesk, sans-serif', transitionDelay: '1.6s' }}>
                      Access to Justice & Digital Reform
                    </h3>
                    <div className={`w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#FFE066] to-[#FFD700] mt-2 rounded-full transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '1.8s' }}></div>
                  </div>
                  
                  <p className={`text-sm sm:text-base lg:text-lg leading-relaxed text-justify text-white/75 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.8s' }}>
                    Beyond procurement, I have led efforts to digitize Nigeria's criminal justice system through the Court Administration and Case Management (CACM) initiative. With funding support from the U.S. Department of State, CACM has been deployed in states such as Nasarawa, Kaduna, Plateau, Ebonyi, and Oyo. It has resulted in the archiving of over 2,200 criminal case files, the digital upload of 902 cases, and the installation of virtual hearing facilities, reducing inmate transport delays and improving judicial efficiency and security.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {/* Recognition & Partnerships Badge */}
                  <div className={`inline-flex items-center gap-2 bg-[#FFF3CD] text-[#023F33] px-3 py-1 rounded-full text-xs font-semibold transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.9s', fontFamily: 'Space Grotesk, sans-serif' }}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Recognition & Partnerships
                  </div>
                  
                  <div className="relative">
                    <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold leading-tight transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: '#FFE066', fontFamily: 'Space Grotesk, sans-serif', transitionDelay: '2.0s' }}>
                      Recognition & Strategic Partnerships
                    </h3>
                    <div className={`w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#FFE066] to-[#FFD700] mt-2 rounded-full transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '2.2s' }}></div>
                  </div>
                  
                  <p className={`text-sm sm:text-base lg:text-lg leading-relaxed text-justify text-white/75 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '2.2s' }}>
                    In July 2025, I was named Procurement Transparency Advocate of the Year at the 7th African Procurement and Supply Chain Summit for my leadership in open contracting and citizen engagement. The Lawgistics Mentoring Community honoured PPDC with its Most Strategic Impact and Partnership Award, and individually recognized me as the Most Collaborative Leader in NGO for my emphasis on partnership, civic engagement, and technological innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Biography
