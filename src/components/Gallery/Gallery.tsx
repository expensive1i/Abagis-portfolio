import React, { useState, useEffect, useRef } from 'react'
import { galleryImages } from '../../data/galleryData'

const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{src: string, description: string, category: string} | null>(null);

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


  const openModal = (image: {src: string, description: string, category: string}) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };



  return (
    <section id="gallery" ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-left mb-16 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
            <div className={`inline-flex items-center gap-3 mb-6 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '0.2s' }}>
              <div className={`w-12 h-px bg-[#023F33] transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.15s' }}></div>
              <span className="text-[#023F33] font-semibold tracking-widest uppercase text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Gallery</span>
              <div className={`w-12 h-px bg-[#023F33] transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.25s' }}></div>
            </div>
            <h2 className={`text-2xl lg:text-3xl xl:text-4xl font-bold text-[#023F33] mb-6 leading-tight transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s', fontFamily: 'Space Grotesk, sans-serif' }}>
              A Gallery of Professional Photos of Lucy James Abagi
            </h2>
            <p className={`text-base lg:text-lg text-gray-600 max-w-3xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.5s' }}>
              Capturing the essence of leadership, innovation, and purpose through professional photography that reflects Lucy's commitment to excellence and her impactful journey.
            </p>
          </div>

          {/* Top Gallery Section - 2 Columns */}
          <div className={`mb-16 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
            <div className="grid grid-cols-2 gap-8">
              {/* Left Column - Single Large Image */}
              <div 
                className="group cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl"
                onClick={() => openModal({src: galleryImages[0].src, description: galleryImages[0].description, category: galleryImages[0].category})}
              >
                <div className="relative overflow-hidden bg-white rounded-lg shadow-lg">
                  <img
                    src={galleryImages[0].src}
                    alt={galleryImages[0].alt}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-white">
                      <p className="text-sm font-medium">{galleryImages[0].category}</p>
                      <p className="text-sm opacity-90">Click to enlarge</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - 3 Rows with 2 Images Each */}
              <div className="grid grid-rows-3 gap-4">
                {/* Top Row - 2 Images */}
                <div className="grid grid-cols-2 gap-4">
                  {galleryImages.slice(1, 3).map((image, index) => (
                        <div
                          key={image.id}
                          className={`group cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: `${0.8 + (index * 0.1)}s` }}
                          onClick={() => openModal({src: image.src, description: image.description, category: image.category})}
                        >
                          <div className="relative overflow-hidden bg-white rounded-lg shadow-lg">
                            <img
                              src={image.src}
                              alt={image.alt}
                          className="w-full h-28 object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <div className="text-white">
                                <p className="text-xs font-medium">{image.category}</p>
                                <p className="text-xs opacity-90">Click to enlarge</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                {/* Middle Row - 2 Images */}
                <div className="grid grid-cols-2 gap-4">
                  {galleryImages.slice(3, 5).map((image, index) => (
                    <div
                      key={image.id}
                      className={`group cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: `${1.0 + (index * 0.1)}s` }}
                      onClick={() => openModal({src: image.src, description: image.description, category: image.category})}
                    >
                      <div className="relative overflow-hidden bg-white rounded-lg shadow-lg">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-28 object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <div className="text-white">
                            <p className="text-xs font-medium">{image.category}</p>
                            <p className="text-xs opacity-90">Click to enlarge</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Row - 2 Images */}
                <div className="grid grid-cols-2 gap-4">
                  {galleryImages.slice(5, 7).map((image, index) => (
                        <div
                          key={image.id}
                          className={`group cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: `${1.2 + (index * 0.1)}s` }}
                          onClick={() => openModal({src: image.src, description: image.description, category: image.category})}
                        >
                          <div className="relative overflow-hidden bg-white rounded-lg shadow-lg">
                            <img
                              src={image.src}
                              alt={image.alt}
                          className="w-full h-28 object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <div className="text-white">
                                <p className="text-xs font-medium">{image.category}</p>
                                <p className="text-xs opacity-90">Click to enlarge</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

          {/* Instruction Text */}
          <div className={`text-center mb-8 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.65s' }}>
            <p className="text-sm text-gray-500 italic">
              Click any image above or below to view details and information
            </p>
          </div>

          {/* Gallery Slider */}
          <div className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.7s' }}>
            <div className="relative">
              {/* Scrollable Container with Overlay Arrows */}
              <div className="relative">
                <div className="overflow-x-auto scrollbar-hide gallery-scroll-container">
                  <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                    {galleryImages.map((image, index) => (
                      <div
                        key={image.id}
                        className={`group cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl flex-shrink-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ 
                          transitionDelay: `${1.4 + (index * 0.1)}s`,
                          width: '300px'
                        }}
                        onClick={() => openModal({src: image.src, description: image.description, category: image.category})}
                      >
                        <div className="relative overflow-hidden bg-white rounded-lg shadow-lg h-full">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className={`w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110`}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <div className="text-white">
                              <p className="text-xs font-medium">{image.category}</p>
                              <p className="text-xs opacity-90">Click to enlarge</p>
                            </div>
                          </div>
                          {/* See More text for the last image */}
                          {index === galleryImages.length - 1 && (
                            <div className="absolute top-4 right-4 bg-[#FFE066] text-[#023F33] px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                              See More
                            </div>
                          )}
                        </div>
                      </div>
              ))}
            </div>
          </div>

                {/* Left Arrow - Overlay on Images */}
                <button
                  onClick={() => {
                    const scrollContainer = document.querySelector('.gallery-scroll-container');
                    if (scrollContainer) {
                      scrollContainer.scrollBy({ left: -900, behavior: 'smooth' });
                    }
                  }}
                  className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#023F33] hover:bg-[#023F33]/90 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl z-20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Right Arrow - Overlay on Images */}
                <button
                  onClick={() => {
                    const scrollContainer = document.querySelector('.gallery-scroll-container');
                    if (scrollContainer) {
                      scrollContainer.scrollBy({ left: 900, behavior: 'smooth' });
                    }
                  }}
                  className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#023F33] hover:bg-[#023F33]/90 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl z-20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
              </div>
              
              {/* Scroll Indicators */}
              <div className="flex justify-center mt-12 space-x-2">
                <div className="text-sm text-gray-500">
                  ← Use arrows above or scroll to navigate →
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <div className="relative">
              <img
                src={selectedImage.src}
                alt="Enlarged view"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 rounded-b-lg">
                <div className="text-white">
                  <div className="text-sm font-semibold text-[#FFE066] mb-2 uppercase tracking-wider">
                    {selectedImage.category}
                  </div>
                  <p className="text-base leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
