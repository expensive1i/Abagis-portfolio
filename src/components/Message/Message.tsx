import React, { useState, useEffect, useRef } from 'react';

const Message: React.FC = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="message" ref={sectionRef} className="py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto relative">
        {/* Single Green Card - Combined Content */}
        <div className={`bg-[#023F33] p-4 md:p-6 relative z-10 mt-8 md:mt-16 border-4 border-white/20 rounded-2xl md:rounded-3xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
          <div className="text-white max-w-2xl text-justify">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            A Message from Lucy James Abagi, CEO of the Public and Private Development Centre (PPDC)
            </h2>
            
            {/* First Part */}
            <div className="space-y-2 md:space-y-3 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 italic" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <p>
                Our mission is to empower citizens through credible information and engagement tools, and our vision is a future where citizens are not just heard, but are central architects of governance.
              </p>
              
              <p>
                This work extends beyond digital platforms and reforms. Whether we are introducing CACM to reduce pretrial detention by at least 50% within the next decade, or advocating for immediate gender equality instead of waiting until 2158, what drives us is the urgency of change.
              </p>
            </div>

            {/* Second Part */}
            <div className="space-y-2 md:space-y-3 text-xs md:text-sm leading-relaxed italic" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <p>
                We envision a system where justice is swift, governance is transparent, and every voice matters. No single organisation can solve all of Nigeria's challenges; true progress is built through collaboration—with youth innovators, legal practitioners, citizens, and government alike.
              </p>
              
              <p>
                I believe that power without accountability becomes self-serving, and information without resonance fails to transform. By amplifying narratives that expose structural gaps, we move from fleeting attention to lasting reform.
              </p>
              
              <p className="font-semibold text-sm md:text-base" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                This is the path I choose to walk—where innovation meets inclusion, and leadership creates space for every voice to shape the future.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section - Overlapping the Green Card - NO ANIMATION */}
        <div className="absolute top-2/5 right-0 transform -translate-y-1/2 z-20 hidden lg:block">
          <div className="relative">
            <img
              src="/images/heroimgnobg.png"
              alt="Lucy James Abagi, CEO"
              className="w-[400px] xl:w-[500px] h-[480px] xl:h-[600px] object-cover object-fit"
            />
            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-4 xl:w-6 h-4 xl:h-6 bg-[#FFE066] rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-3 xl:w-4 h-3 xl:h-4 bg-[#FFE066] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
