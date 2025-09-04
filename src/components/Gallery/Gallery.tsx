import React, { useState, useEffect, useRef } from 'react'

const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const galleryImages = [
    {
      id: 1,
      src: "/images/LucysGallery(30).jpg",
      alt: "Lucy James Abagi - Professional Portrait 1",
      category: "Portrait",
      height: "h-64" // 256px
    },
    {
      id: 2,
      src: "/images/LucysGallery(57).jpg",
      alt: "Lucy James Abagi - Professional Portrait 2",
      category: "Portrait",
      height: "h-72" // 288px
    },
    {
      id: 3,
      src: "/images/LucysGallery(35).jpg",
      alt: "Lucy James Abagi - Professional Portrait 3",
      category: "Portrait",
      height: "h-80" // 320px
    },
    {
      id: 4,
      src: "/images/LucysGallery(36).jpg",
      alt: "Lucy James Abagi - Professional Portrait 4",
      category: "Portrait",
      height: "h-64" // 256px
    },
    {
      id: 5,
      src: "/images/LucysGallery(37).jpg",
      alt: "Lucy James Abagi - Professional Portrait 5",
      category: "Portrait",
      height: "h-72" // 288px
    },
    {
      id: 6,
      src: "/images/LucysGallery(38).jpg",
      alt: "Lucy James Abagi - Professional Portrait 6",
      category: "Portrait",
      height: "h-80" // 320px
    },
    {
      id: 7,
      src: "/images/LucysGallery(29).jpg",
      alt: "Lucy James Abagi - Professional Portrait 7",
      category: "Portrait",
      height: "h-64" // 256px
    },
    {
      id: 8,
      src: "/images/LucysGallery(8).jpg",
      alt: "Lucy James Abagi - Professional Portrait 8",
      category: "Portrait",
      height: "h-72" // 288px
    },
    {
      id: 9,
      src: "/images/LucysGallery(9).jpg",
      alt: "Lucy James Abagi - Professional Portrait 9",
      category: "Portrait",
      height: "h-80" // 320px
    },
    {
      id: 10,
      src: "/images/LucysGallery(10).jpg",
      alt: "Lucy James Abagi - Professional Portrait 10",
      category: "Portrait",
      height: "h-64" // 256px
    },
    {
      id: 11,
      src: "/images/LucysGallery(11).jpg",
      alt: "Lucy James Abagi - Professional Portrait 11",
      category: "Portrait",
      height: "h-72" // 288px
    },
    {
      id: 12,
      src: "/images/LucysGallery(12).jpg",
      alt: "Lucy James Abagi - Professional Portrait 12",
      category: "Portrait",
      height: "h-80" // 320px
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };



  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            <div className={`inline-flex items-center gap-3 mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '0.4s' }}>
              <div className={`w-12 h-px bg-[#023F33] transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.3s' }}></div>
              <span className="text-[#023F33] font-semibold tracking-widest uppercase text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Gallery</span>
              <div className={`w-12 h-px bg-[#023F33] transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.5s' }}></div>
            </div>
            <h2 className={`text-2xl lg:text-3xl xl:text-4xl font-bold text-[#023F33] mb-6 leading-tight transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s', fontFamily: 'Space Grotesk, sans-serif' }}>
              A Gallery of Professional Photos of Lucy James Abagi
            </h2>
            <p className={`text-base lg:text-lg text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.0s' }}>
              Capturing the essence of leadership, innovation, and purpose through professional photography that reflects Lucy's commitment to excellence and her impactful journey.
            </p>
          </div>

          {/* Top Gallery Section - 2 Columns */}
          <div className={`mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.1s' }}>
            <div className="grid grid-cols-2 gap-8">
              {/* Left Column - Single Large Image */}
              <div className="group cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl">
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
                      style={{ transitionDelay: `${1.3 + (index * 0.1)}s` }}
                          onClick={() => openModal(image.src)}
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
                      style={{ transitionDelay: `${1.5 + (index * 0.1)}s` }}
                      onClick={() => openModal(image.src)}
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
                      style={{ transitionDelay: `${1.7 + (index * 0.1)}s` }}
                          onClick={() => openModal(image.src)}
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

          {/* Gallery Slider */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.2s' }}>
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
                        onClick={() => openModal(image.src)}
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
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#023F33] hover:bg-[#023F33]/90 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl z-20"
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
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#023F33] hover:bg-[#023F33]/90 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl z-20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
              </div>
              
              {/* Scroll Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
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
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
