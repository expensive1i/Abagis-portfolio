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
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200 bg-white/90 rounded-full p-2 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="w-full h-64 lg:h-full object-cover"
            />
            {/* Category Badge */}
            <div className="absolute top-4 left-4 bg-[#023F33] text-white px-3 py-1 rounded-full text-sm font-semibold">
              {item.category}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 lg:p-8 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#023F33] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">{item.year}</span>
                  <span className="bg-[#FFE066] text-[#023F33] px-3 py-1 rounded-full font-semibold">
                    {item.impact}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                {item.description}
              </p>

              {/* Tags */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#023F33] mb-3 uppercase tracking-wider">
                  Key Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex gap-4">
              <a
                href={item.link}
                className="flex-1 bg-[#023F33] text-white py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:bg-[#023F33]/90 hover:scale-105"
              >
                Learn More
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-50"
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
