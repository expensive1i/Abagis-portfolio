import React from 'react'
import { Link } from 'react-router-dom'
import { useIntersectionObserver } from '../../hooks'

const QuickAction: React.FC = () => {
  const { isVisible, ref: sectionRef } = useIntersectionObserver<HTMLElement>(0.2);

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 lg:py-16">
      <div>
        <div className={`bg-gray-100 rounded-lg sm:rounded-xl p-6 sm:p-8 lg:p-12 text-center transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }} >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 leading-tight text-[#023F33]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Ready to Make a Difference?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#023F33] mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
            Join me in empowering communities and transforming governance through innovation and transparency.
          </p>
          <Link 
            to="/contact" 
            className="inline-block border-2 border-[#023F33] text-[#023F33] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:bg-[#023F33] hover:text-white transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
          >
            Connect with me now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default QuickAction
