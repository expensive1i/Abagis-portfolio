import React, { useState, useEffect, useRef } from 'react'

const Lifestyle: React.FC = () => {
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
    <section ref={sectionRef} className="py-16 ">
      <div className="container mx-auto px-8 lg:px-12 pattern-bg">
        <div className="max-w-7xl mx-auto pattern-bg" >
          {/* Section Header */}
          <div className={`text-left mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            <div className={`inline-flex items-center gap-3 mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '0.4s' }}>
              <div className={`w-12 h-px bg-[#FFE066] transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.3s' }}></div>
              <span className="text-[#FFE066] font-semibold tracking-widest uppercase text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Lifestyle</span>
              <div className={`w-12 h-px bg-[#FFE066] transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.5s' }}></div>
            </div>
            <h2 className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-[#023F33] mb-6 leading-tight transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s', fontFamily: 'Space Grotesk, sans-serif' }}>
              Lifestyle, Values & Personal Leadership
            </h2>
            <p className={`text-base lg:text-lg text-gray-600 max-w-4xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.0s' }}>
              Lucy James Abagi fuses innovation with empathy. As a fundraiser extraordinaire, she's mobilized over $5 million for impactful programs, unlocking opportunities for up to 4 million rural lives across nine African countries through her bold creativity and execution.
            </p>
          </div>

          {/* Main Content Grid - Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Column - Portrait Image with Text Overlay (Takes 1/3 width) */}
            <div className={`lg:col-span-1 relative overflow-hidden transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.0s' }}>
              {/* Portrait Image */}
              <div 
                className="w-full h-full min-h-[550px]"
                style={{
                  backgroundImage: `url("/images/LucysGallery(21).jpg")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 20%',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Subtle Overlay at Bottom for Text Visibility */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent h-48"></div>
                
                {/* Integrity in Innovation Text */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Integrity in Innovation
                  </h3>
                  <p className="text-sm lg:text-base leading-relaxed text-white/95">
                    For Lucy, innovation must be ethical. She consistently emphasizes transparency as the bedrock of trustworthy governance, ensuring that technological advancements serve citizens equitably.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Four Cards + Beyond the Boardroom (Takes 2/3 width) */}
            <div className="lg:col-span-2 flex flex-col h-full">
              {/* Four Cards in 2x2 Grid */}
              <div className="flex-grow space-y-6">
                {/* Top Row - 2 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card 1: Fundraising & Impact */}
                  <div className={`group transition-all duration-500 transform hover:-translate-y-2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.2s' }}>
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-16 h-16 bg-[#023F33]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#023F33]">
                          <path d="M5.00488 9.00281C5.55717 9.00281 6.00488 9.45052 6.00488 10.0028C7.63965 10.0028 9.14352 10.5632 10.3349 11.5023L12.5049 11.5028C13.8375 11.5028 15.0348 12.0821 15.8588 13.0025L19.0049 13.0028C20.9972 13.0028 22.7173 14.1681 23.521 15.8542C21.1562 18.9748 17.3268 21.0028 13.0049 21.0028C10.2142 21.0028 7.85466 20.3996 5.944 19.3449C5.80557 19.7284 5.43727 20.0028 5.00488 20.0028H2.00488C1.4526 20.0028 1.00488 19.5551 1.00488 19.0028V10.0028C1.00488 9.45052 1.4526 9.00281 2.00488 9.00281H5.00488ZM6.00589 12.0028L6.00488 17.0248L6.05024 17.0573C7.84406 18.3177 10.183 19.0028 13.0049 19.0028C16.0089 19.0028 18.8035 17.8472 20.84 15.8734L20.9729 15.7398L20.8537 15.6394C20.3897 15.2764 19.8205 15.0512 19.2099 15.0097L19.0049 15.0028L16.8934 15.0028C16.9664 15.3244 17.0049 15.6591 17.0049 16.0028V17.0028H8.00488V15.0028L14.7949 15.0018L14.7605 14.9233C14.38 14.1297 13.593 13.5681 12.6693 13.5081L12.5049 13.5028L9.57547 13.5027C8.66823 12.5773 7.40412 12.0031 6.00589 12.0028ZM4.00488 11.0028H3.00488V18.0028H4.00488V11.0028ZM18.0049 5.00281C19.6617 5.00281 21.0049 6.34595 21.0049 8.00281C21.0049 9.65966 19.6617 11.0028 18.0049 11.0028C16.348 11.0028 15.0049 9.65966 15.0049 8.00281C15.0049 6.34595 16.348 5.00281 18.0049 5.00281ZM18.0049 7.00281C17.4526 7.00281 17.0049 7.45052 17.0049 8.00281C17.0049 8.55509 17.4526 9.00281 18.0049 9.00281C18.5572 9.00281 19.0049 8.55509 19.0049 8.00281C19.0049 7.45052 18.5572 7.00281 18.0049 7.00281ZM11.0049 2.00281C12.6617 2.00281 14.0049 3.34595 14.0049 5.00281C14.0049 6.65966 12.6617 8.00281 11.0049 8.00281C9.34803 8.00281 8.00488 6.65966 8.00488 5.00281C8.00488 3.34595 9.34803 2.00281 11.0049 2.00281ZM11.0049 4.00281C10.4526 4.00281 10.0049 4.45052 10.0049 5.00281C10.0049 5.55509 10.4526 6.00281 11.0049 6.00281C11.5572 6.00281 12.0049 5.55509 12.0049 5.00281C12.0049 4.45052 11.5572 4.00281 11.0049 4.00281Z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#023F33] leading-tight mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Fundraising Extraordinaire</h3>
                        <p className="text-gray-700 leading-relaxed text-sm text-justify">
                          Lucy has mobilized over <span className="font-bold text-[#023F33]">$5 million</span> for impactful programs, unlocking opportunities for up to <span className="font-bold text-[#023F33]">4 million rural lives</span> across nine African countries.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Mentorship */}
                  <div className={`group transition-all duration-500 transform hover:-translate-y-2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.4s' }}>
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-16 h-16 bg-[#023F33]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <svg className="w-8 h-8 text-[#023F33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#023F33] leading-tight mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Empowerment Through Mentorship</h3>
                        <p className="text-gray-700 leading-relaxed text-sm text-justify">
                          Known as <span className="font-bold text-[#023F33]">"Lu-Lu Global"</span>, Lucy's entrepreneurial spirit is powered by teamwork and guidance, championing startups and changemakers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Row - 2 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card 3: Leadership Rooted in Purpose */}
                  <div className={`group transition-all duration-500 transform hover:-translate-y-2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.6s' }}>
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-16 h-16 bg-[#023F33]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#023F33]">
                          <path d="M1 22C1 17.5817 4.58172 14 9 14C13.4183 14 17 17.5817 17 22H15C15 18.6863 12.3137 16 9 16C5.68629 16 3 18.6863 3 22H1ZM9 13C5.685 13 3 10.315 3 7.00002C3 3.68502 5.685 1.00002 9 1.00002C12.315 1.00002 15 3.68502 15 7.00002C15 10.315 12.315 13 9 13ZM9 11C11.21 11 13 9.21002 13 7.00002C13 4.79002 11.21 3.00002 9 3.00002C6.79 3.00002 5 4.79002 5 7.00002C5 9.21002 6.79 11 9 11ZM21.5476 0.783569C22.4773 2.65651 23 4.76723 23 7.00002C23 9.23281 22.4773 11.3435 21.5476 13.2165L19.9027 12.0201C20.6071 10.4928 21 8.79231 21 7.00002C21 5.20772 20.6071 3.5072 19.9027 1.9799L21.5476 0.783569ZM18.2463 3.18451C18.732 4.36026 19 5.64884 19 7.00002C19 8.35119 18.732 9.63977 18.2463 10.8155L16.5694 9.59595C16.8485 8.78194 17 7.90867 17 7.00002C17 6.09136 16.8485 5.21809 16.5694 4.40408L18.2463 3.18451Z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#023F33] leading-tight mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Leadership Rooted in Purpose</h3>
                        <p className="text-gray-700 leading-relaxed text-sm text-justify">
                          Believing that <span className="italic font-semibold">"leadership is about raising others up... to lead with purpose and courage,"</span> Lucy leads by example.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Women & Education */}
                  <div className={`group transition-all duration-500 transform hover:-translate-y-2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.8s' }}>
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-16 h-16 bg-[#023F33]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <svg className="w-8 h-8 text-[#023F33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#023F33] leading-tight mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Champion for Women & Education</h3>
                        <p className="text-gray-700 leading-relaxed text-sm text-justify">
                          A steadfast advocate for women's rights and access to education, Lucy founded the <span className="font-bold text-[#023F33]">Amina Foundation</span> to further these causes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Beyond the Boardroom Section - Closer to cards */}
              <div className={`bg-white rounded-3xl p-6 mt-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '2.0s' }}>
                <div className="text-left mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-[#023F33] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Beyond the Boardroom</h3>
                  <p className="text-base text-gray-600 mb-5">
                    When not driving governance innovation, Lucy finds inspiration in diverse interests that enrich her leadership perspective.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Interest 1 */}
                  <div className={`flex items-center gap-3 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '2.2s' }}>
                    <div className="w-6 h-6 bg-[#023F33] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#023F33] mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Reading</h4>
                      <p className="text-sm text-gray-600">Leadership, governance, and African literature</p>
                    </div>
                  </div>

                  {/* Interest 2 */}
                  <div className={`flex items-center gap-3 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '2.4s' }}>
                    <div className="w-6 h-6 bg-[#023F33] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#023F33] mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Travel</h4>
                      <p className="text-sm text-gray-600">Exploring African communities and cultures</p>
                    </div>
                  </div>

                  {/* Interest 3 */}
                  <div className={`flex items-center gap-3 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '2.6s' }}>
                    <div className="w-6 h-6 bg-[#023F33] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#023F33] mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Networking</h4>
                      <p className="text-sm text-gray-600">Building strategic partnerships</p>
                    </div>
                  </div>

                  {/* Interest 4 */}
                  <div className={`flex items-center gap-3 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '2.8s' }}>
                    <div className="w-6 h-6 bg-[#023F33] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#023F33] mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Mentorship</h4>
                      <p className="text-sm text-gray-600">Guiding next generation leaders</p>
                    </div>
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

export default Lifestyle