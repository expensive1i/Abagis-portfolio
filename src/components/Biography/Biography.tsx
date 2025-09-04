import React, { useState, useEffect, useRef } from 'react'

const Biography: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-6 bg-white relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            <div className={`inline-flex items-center gap-3 mb-1 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '0.4s' }}>
              <div className={`w-6 h-px bg-[#FFE066] transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.3s' }}></div>
              <span className="text-[#FFE066] font-semibold tracking-widest uppercase text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Biography</span>
              <div className={`w-6 h-px bg-[#FFE066] transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="py-3 lg:py-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative">
              
              {/* Left Column - Text Content */}
              <div className="space-y-4 text-white h-full">
                <div className="space-y-3">
                  <h2 className={`text-2xl lg:text-3xl xl:text-4xl font-medium leading-tight transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: '#FFE066', fontFamily: 'Space Grotesk, sans-serif', transitionDelay: '0.6s' }}>
                    Leadership in Transparency & Civic-Tech Innovation
                    <div className={`w-16 h-1 bg-[#023F33] mt-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.8s' }}></div>
                  </h2>
                  
                  <div className="space-y-3">
                    <p className={`text-base lg:text-lg leading-relaxed text-justify text-white/75 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.0s' }}>
                      Under my leadership, PPDC has pioneered the Budeshi platform, Nigeria's first Open Contracting Data Standard (OCDS) portal. Budeshi revolutionizes procurement transparency publishing over 14,000 government contracts and empowering citizens to monitor public spending across six to seven states, including Kaduna, Ekiti, Anambra, Plateau, Adamawa, and the FCT.
                    </p>
                    
                    <p className={`text-base lg:text-lg leading-relaxed text-justify text-white/75 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.2s' }}>
                      I also launched the $7,500 Community Accountability Grant (July 2025), enabling 36 grassroots organizations to monitor federal procurement in their states. Each group received approximately $200, gaining access to training, data tools, and legal support via Budeshi's upgraded portal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vertical Separator Line */}
              <div className={`hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/30 transform -translate-x-1/2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} style={{ transitionDelay: '1.4s' }}></div>

              {/* Right Column - Access to Justice & Digital Reform */}
              <div className="space-y-4 text-white h-full">
                <div className="space-y-3">
                  <h3 className={`text-xl lg:text-2xl font-medium leading-tight transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: '#FFE066', fontFamily: 'Space Grotesk, sans-serif', transitionDelay: '1.6s' }}>
                    Access to Justice & Digital Reform
                  </h3>
                  
                  <p className={`text-base lg:text-lg leading-relaxed text-justify text-white/75 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.8s' }}>
                    Beyond procurement, I have led efforts to digitize Nigeria's criminal justice system through the Court Administration and Case Management (CACM) initiative. With funding support from the U.S. Department of State, CACM has been deployed in states such as Nasarawa, Kaduna, Plateau, Ebonyi, and Oyo. It has resulted in the archiving of over 2,200 criminal case files, the digital upload of 902 cases, and the installation of virtual hearing facilities, reducing inmate transport delays and improving judicial efficiency and security.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className={`text-xl lg:text-2xl font-medium leading-tight transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: '#FFE066', fontFamily: 'Space Grotesk, sans-serif', transitionDelay: '2.0s' }}>
                    Recognition & Strategic Partnerships
                  </h3>
                  
                  <p className={`text-base lg:text-lg leading-relaxed text-white/75 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '2.2s' }}>
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
