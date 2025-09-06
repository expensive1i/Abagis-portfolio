import React from 'react';
import type { PortfolioItem } from '../../data/portfolioData';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden w-full mx-2 sm:mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200 bg-white/90 rounded-full p-1 sm:p-2 z-10"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 sm:h-64 lg:h-full object-cover"
            />
            {/* Category Badge */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-[#023F33] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
              {item.category}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#023F33] mb-2 sm:mb-3 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {item.title}
                </h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                  <span className="bg-gray-100 px-2 sm:px-3 py-1 rounded-full">{item.year}</span>
                  <span className="bg-[#FFE066] text-[#023F33] px-2 sm:px-3 py-1 rounded-full font-semibold">
                    {item.impact}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-justify text-sm sm:text-base">
                {item.description}
              </p>

              {/* Tags */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-semibold text-[#023F33] mb-2 sm:mb-3 uppercase tracking-wider">
                  Key Areas
                </h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <a
                href={item.link}
                className="flex-1 bg-[#023F33] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:bg-[#023F33]/90 hover:scale-105 text-sm sm:text-base"
              >
                Learn More
              </a>
              <button
                onClick={onClose}
                className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-50 text-sm sm:text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
