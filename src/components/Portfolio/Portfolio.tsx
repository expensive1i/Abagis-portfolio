import React, { useState } from 'react'
import { portfolioItems, categories } from '../../data/portfolioData';
import type { PortfolioItem } from '../../data/portfolioData';
import PortfolioModal from './PortfolioModal';


const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="portfolio" className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-px bg-[#023F33]"></div>
              <span className="text-[#023F33] font-semibold tracking-widest uppercase text-sm sm:text-base lg:text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Portfolio</span>
              <div className="w-8 sm:w-12 h-px bg-[#023F33]"></div>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#023F33] mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Transformative Projects & Impactful Initiatives
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl">
              A comprehensive showcase of Lucy's groundbreaking work in governance, innovation, and social impact across Africa.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#023F33] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl"
                  onClick={() => openModal(item)}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                        <span className="bg-[#FFE066] text-[#023F33] px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                          {item.year}
                        </span>
                      </div>
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                        <span className="bg-[#023F33] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                          {item.impact}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      <div className="mb-2 sm:mb-3">
                        <span className="text-[#023F33] text-xs sm:text-sm font-medium">{item.category}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#023F33] mb-2 sm:mb-3 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                        {item.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {item.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {item.tags.length > 3 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            +{item.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Item Modal */}
      <PortfolioModal item={selectedItem} onClose={closeModal} />
    </section>
  );
};

export default Portfolio;
