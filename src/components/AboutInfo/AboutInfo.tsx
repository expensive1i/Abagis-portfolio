import React, { useState, useEffect, useRef } from 'react'

const AboutInfo: React.FC = () => {
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
    <section id="about" ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
            <div className={`inline-flex items-center gap-3 mb-6 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '0.2s' }}>
              <div className={`w-12 h-px bg-gradient-to-r from-transparent via-[#023F33] to-transparent transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.15s' }}></div>
              <span className="text-[#023F33] font-semibold tracking-widest uppercase text-sm">About</span>
              <div className={`w-12 h-px bg-gradient-to-r from-transparent via-[#023F33] to-transparent transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.25s' }}></div>
            </div>
            <h2 className={`text-2xl lg:text-3xl xl:text-4xl font-bold text-[#023F33] mb-6 leading-tight transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s', fontFamily: 'Space Grotesk, sans-serif' }}>
              A Visionary Leader in Governance, Innovation & Civic Empowerment
            </h2>
          </div>

          {/* Main Content - Autobiography Text */}
          <div className="max-w-7xl mx-auto">
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p className={`text-lg lg:text-xl leading-relaxed text-justify transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
                I was appointed Chief Executive Officer of the Public and Private Development Centre (PPDC) in August 2024, succeeding Jubril Shittu. I brought extensive experience in public policy, programme management, fundraising, and innovation to the role.
              </p>
              
              <p className={`text-lg lg:text-xl leading-relaxed text-justify transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.5s' }}>
                Before ascending to the CEO position, I served as Director of Partnerships and Innovation at PPDC, where I led the innovation hub, technology teams, and business development strategy solidifying the organization's national and continental impact.
              </p>
              
              <p className={`text-lg lg:text-xl leading-relaxed text-justify transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
                Prior to my tenure at PPDC, I was Director of Programs at Connected Development (CODE), where I spearheaded the renowned "Follow the Money" campaign. This initiative secured funding for social impact programs across nine African countries, benefiting approximately four million rural lives. My work was backed by leading global foundations such as OSIWA, Conrad N. Hilton Foundation, MacArthur Foundation, Ford Foundation, USAID, and others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutInfo
