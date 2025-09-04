import React, { useState, useEffect, useRef, useCallback } from 'react'
import Navigation from '../layout/Navigation'

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Slideshow images - add your image paths here
  const images = [
    "/images/LucysGallery(11).jpg",
    "/images/LucysGallery(10).jpg",
   "/images/LucysGallery(18).jpg",
    
    "/images/LucysGallery(17).jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Scroll-triggered animations for left column only
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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleNextImage = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 300);
  }, [images.length]);

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNextImage]);

  const goToImage = (index: number) => {
    if (index !== currentImageIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div ref={heroRef} className="pt-0 pb-16 lg:pb-20 w-full relative overflow-hidden min-h-[90vh]">
      {/* Dark Overlay with smooth blend to right */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#002C23] via-[#002C23]/99 to-[#002C23]/80"></div>
      
      {/* Navigation floating over hero */}
      <Navigation />
      
      {/* Geometric Shapes Background - Static, no scroll animation */}
      <div className="absolute inset-0 z-10">
        {/* White Triangle */}
        <div className="absolute top-8 right-8 w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-white border-r-[20px] border-r-transparent opacity-50 animate-rotate-slow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 lg:px-12 h-full flex items-center pb-8 lg:pb-12 relative z-20">
        <div className="grid grid-cols-1 xl:grid-cols-8 gap-4 xl:gap-6 items-center max-w-7xl mx-auto w-full">
          {/* Left Column - Text Content with Dark Overlay - ANIMATED ON SCROLL */}
          <div className="text-left order-1 xl:order-1 xl:col-span-4 w-full pt-8 lg:pt-12">
            {/* Greeting */}
            <div className={`mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-center gap-3">
                {/* Waving Hand Icon */}
                <div className={`animate-wave transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '0.3s' }}>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.5002 2C12.2241 2 12.0002 2.22386 12.0002 2.5V12H10.0002V4.5C10.0002 4.22386 9.77634 4 9.5002 4C9.22405 4 9.0002 4.22386 9.0002 4.5V14C8.64653 14 7.00024 14 7.00024 14C6.61911 12.3792 5.64236 11.4407 4.5954 11.3216C4.87926 12.0664 5.36117 13.2592 6.16634 15.0995C7.02511 17.0622 7.89128 18.5218 9.00374 19.4986C10.0783 20.442 11.4586 21 13.5002 21C16.5378 21 19.0002 18.5377 19.0002 15.5002V7C19.0002 6.72386 18.7763 6.5 18.5002 6.5C18.2241 6.5 18.0002 6.72386 18.0002 7V12H16.0002V4C16.0002 3.72386 15.7763 3.5 15.5002 3.5C15.2241 3.5 15.0002 3.72386 15.0002 4V12H13.0002V2.5C13.0002 2.22386 12.7763 2 12.5002 2ZM21.0002 15.5002C21.0002 19.6424 17.6423 23 13.5002 23C11.0417 23 9.17214 22.308 7.68416 21.0015C6.23411 19.7283 5.22528 17.9381 4.33405 15.9012C3.40393 13.7753 2.89004 12.4804 2.60991 11.7235C2.25318 10.7597 2.74616 9.41212 4.08583 9.31846C5.24076 9.23771 6.22061 9.61249 7.0002 10.2587V4.5C7.0002 3.11929 8.11949 2 9.5002 2C9.68522 2 9.86554 2.0201 10.0391 2.05823C10.2477 0.888227 11.2702 0 12.5002 0C13.5602 0 14.4661 0.659694 14.8298 1.59091C15.0431 1.53167 15.268 1.5 15.5002 1.5C16.8809 1.5 18.0002 2.61929 18.0002 4V4.55001C18.1618 4.51722 18.329 4.5 18.5002 4.5C19.8809 4.5 21.0002 5.61929 21.0002 7V15.5002Z"/>
                  </svg>
                </div>
                <span className="text-white/90 text-xl font-medium tracking-widest uppercase">Hello I Am</span>
              </div>
            </div>

            {/* Main heading with creative styling */}
            <div className={`mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
              <h1 className="text-3xl lg:text-4xl xl:text-6xl font-black leading-tight">
                <span className={`whitespace-nowrap transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ color: '#FFDE59', transitionDelay: '0.6s', fontFamily: 'Space Grotesk, sans-serif' }}>Lucy James Abagi</span>
                <span className={`block text-2xl lg:text-3xl xl:text-3xl font-light text-white/70 mt-3 tracking-wider whitespace-nowrap transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '0.8s', fontFamily: 'Space Grotesk, sans-serif' }}>
                  Chief Executive Officer
                </span>
              </h1>
            </div>

            {/* Storytelling Headline */}
            <div className={`mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.0s' }}>
              <h2 className="text-2xl lg:text-2xl xl:text-3xl font-medium text-white leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Empowering Citizens, Driving Change, Shaping Africa's Future
              </h2>
            </div>
            
            {/* Storytelling Body Text - Single paragraph for balance */}
            <div className={`mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.2s' }}>
              <p className="text-white/70 text-l leading-relaxed max-w-2xl text-justify">
              Lucy James Abagi is a visionary leader advancing transparency, accountability, and innovation across Africa. As CEO of the Public and Private Development Centre (PPDC), she champions initiatives that amplify citizen voices, strengthen communities, and transform governance into a system where inclusion and justice thrive.
              </p>
            </div>
            
            {/* Call to Action Buttons */}
            <div className={`mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.4s' }}>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className={`bg-white hover:bg-gray-50 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-base hover:shadow-2xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '1.6s' }}>
                   <span style={{ color: '#023F33' }}>Get In Touch</span>
                 </button>
                <a href="#about" className={`border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white/10 text-base transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '1.8s' }}>
                   Explore Her Journey
                 </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image Slideshow - STATIC, NO SCROLL ANIMATION */}
          <div className="relative order-2 xl:order-2 xl:col-span-4 w-full h-full">
            {/* Slideshow Image Container - Extends beyond grid boundaries */}
            <div 
              className="absolute top-0 left-0 w-full h-full"
              style={{ 
                transform: 'translateX(150px)',
                width: '120%',
                height: '140%',
                top: '-20%'
              }}
            >
              {/* Main Slideshow Image */}
              <div 
                className={`w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-500 rounded-t-[12rem] ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ 
                  backgroundImage: `url("${images[currentImageIndex]}")`,
                }}
              />
              
              {/* Gradient Overlay for blending */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#002C23]/30 rounded-t-[12rem]"></div>
              
              {/* Light overlay covering entire image */}
              <div className="absolute inset-0 bg-[#002C23]/40 rounded-t-[12rem]"></div>
            </div>
            
            {/* Professional Slideshow Indicators */}
            <div 
              className="absolute bottom-4 left-1/2 z-30 flex items-center gap-3"
              style={{ transform: 'translateX(-50%)' }}
            >
              {/* Elegant Horizontal Line Indicators */}
              <div className="flex gap-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-8 h-1 rounded-full transition-all duration-500 hover:scale-110 ${
                      index === currentImageIndex 
                        ? 'bg-white shadow-lg shadow-white/50' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Bottom - STATIC, NO SCROLL ANIMATION */}
      <div className="absolute bottom-0 left-0 w-full h-40 z-20">
        <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
          <path 
            d="M0,160 L1200,160 L1200,120 Q1000,20 800,40 Q600,60 400,80 Q200,100 0,40 Z" 
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}

export default Hero