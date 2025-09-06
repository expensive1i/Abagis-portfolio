import React, { useState, useEffect, useRef } from 'react'

const Newsletter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden">

      <div className="relative z-10">
        <div className="text-left">
          {/* Single Column Layout */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            <div className={`inline-flex items-center gap-3 mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '0.4s' }}>
              <div className={`w-8 h-px bg-[#023F33] transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.3s' }}></div>
              <span className="text-[#023F33] font-semibold tracking-widest uppercase text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Stay Connected</span>
              <div className={`w-8 h-px bg-[#023F33] transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.5s' }}></div>
            </div>
            
            <div className="max-w-xl text-justify">
              <h2 className={`text-2xl lg:text-3xl xl:text-4xl font-bold text-[#023F33] mb-6 leading-tight transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s', fontFamily: 'Space Grotesk, sans-serif' }}>
                Join Our Newsletter
              </h2>
              
              <p className={`text-[#023F33]/80 text-base lg:text-lg leading-relaxed mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.8s', fontFamily: 'Poppins, sans-serif' }}>
                Get the latest updates on transparency initiatives, civic technology innovations,<br />
                and governance reforms across Africa. Be part of the change.
              </p>

              {/* Form Section */}
              <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.0s' }}>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-4 rounded-full bg-white border border-[#023F33]/20 text-[#023F33] placeholder-[#023F33]/60 focus:outline-none focus:ring-1 focus:ring-[#023F33] focus:border-[#023F33] transition-all duration-300 shadow-lg"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      required
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting || !email}
                      className={`w-48 px-6 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                        isSubmitting 
                          ? 'bg-[#023F33]/20 text-[#023F33] cursor-not-allowed' 
                          : 'bg-[#FFE066] text-[#023F33] hover:bg-[#FFD700] hover:shadow-lg'
                      }`}
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-[#023F33] border-t-transparent rounded-full animate-spin"></div>
                          <span>Subscribing...</span>
                        </div>
                      ) : (
                        'Subscribe Now'
                      )}
                    </button>
                  </div>
                  
                  <p className="text-[#023F33]/60 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              ) : (
                <div className="py-8">
                  <div className="w-16 h-16 bg-[#FFE066] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#023F33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#023F33] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Thank You for Subscribing!
                  </h3>
                  <p className="text-[#023F33]/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    You'll receive our latest updates and insights on governance and transparency.
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

export default Newsletter
