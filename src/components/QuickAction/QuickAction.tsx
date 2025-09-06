import React, { useState, useEffect, useRef } from 'react'

const QuickAction: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section ref={sectionRef} className="py-16">
      <div>
        <div className={`bg-gray-100 rounded-xl p-12 text-center  text-white transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }} >
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 leading-tight text-[#023F33]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Ready to Make a Difference?
          </h2>
          <p className="text-lg  text-[#023F33] mb-8 leading-relaxed max-w-3xl mx-auto">
            Join me in empowering communities and transforming governance through innovation and transparency.
          </p>
          <button className="border-2 border-[#023F33] text-[#023F33] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#023F33] hover:text-white transition-all duration-300 hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default QuickAction
